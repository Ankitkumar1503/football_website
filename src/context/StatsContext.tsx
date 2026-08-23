import React, { createContext, useContext, useState, useEffect } from 'react';
import type { AppStats, FootType, PlayerRegistration, UserAuthData } from '../types';
import { useStatsQuery, useRegisterMutation } from '../hooks/useStatsQuery';
import { verifyLoginTokenApi } from '../services/api';

export interface RegisteredUser extends PlayerRegistration {
  id?: number | string;
  registeredAt?: string;
}

interface StatsContextType {
  stats: AppStats;
  isLoading: boolean;
  isError: boolean;
  registerPlayer: (player: PlayerRegistration) => Promise<boolean>;
  registeredUser: RegisteredUser | null;
  userToken: string | null;
  loginUser: (token: string, userData: UserAuthData) => void;
  logoutUser: () => void;
  clearRegistration: () => void;
  isSubmitting: boolean;
  isModalOpen: boolean;
  modalFoot: FootType;
  openModal: (foot: FootType) => void;
  closeModal: () => void;
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  markUserAsPaid: () => void;
}

const StatsContext = createContext<StatsContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'touches_registered_user';
const TOKEN_KEY = 'touches_user_token';

export const StatsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data: statsData, isLoading, isError } = useStatsQuery();
  const registerMutation = useRegisterMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFoot, setModalFoot] = useState<FootType>('left');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [userToken, setUserToken] = useState<string | null>(() => {
    try {
      return localStorage.getItem(TOKEN_KEY);
    } catch {
      return null;
    }
  });

  const [registeredUser, setRegisteredUser] = useState<RegisteredUser | null>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('login_token');
    if (token) {
      verifyLoginTokenApi(token)
        .then((res) => {
          if (res.success && res.token && res.user) {
            loginUser(res.token, res.user);
          }
        })
        .catch((err) => {
          console.warn('Login token check notice:', err);
        })
        .finally(() => {
          const cleanUrl = window.location.pathname + window.location.hash;
          window.history.replaceState({}, document.title, cleanUrl || '/');
        });
    }
  }, []);

  const openModal = (foot: FootType) => {
    setModalFoot(foot);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const loginUser = (token: string, userData: UserAuthData) => {
    try {
      localStorage.setItem(TOKEN_KEY, token);
      const userToSave: RegisteredUser = {
        id: userData.id,
        name: userData.name,
        firstName: userData.firstName || userData.name?.split(' ')[0],
        lastName: userData.lastName,
        email: userData.email,
        footPreference: userData.footPreference || 'left',
        country: userData.country || 'Canada',
        paymentStatus: userData.paymentStatus || 'unpaid',
        registeredAt: new Date().toISOString(),
      };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userToSave));
      setUserToken(token);
      setRegisteredUser(userToSave);
    } catch (e) {
      console.error('Error saving login state:', e);
    }
  };

  const logoutUser = () => {
    try {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch (e) {
      console.error('Error clearing login state:', e);
    }
    setUserToken(null);
    setRegisteredUser(null);
  };

  const clearRegistration = () => {
    logoutUser();
  };

  const markUserAsPaid = () => {
    setRegisteredUser((prev) => {
      if (!prev) return prev;
      const updated: RegisteredUser = { ...prev, paymentStatus: 'paid' };
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {
        console.error('Error saving updated paymentStatus:', e);
      }
      return updated;
    });
  };

  const registerPlayer = async (player: PlayerRegistration): Promise<boolean> => {
    let tokenFromRes: string | null = null;
    let userFromRes: any = null;

    try {
      const res: any = await registerMutation.mutateAsync(player);
      if (res && res.token) {
        tokenFromRes = res.token;
      }
      if (res && res.user) {
        userFromRes = res.user;
      }
    } catch (err) {
      console.warn('API Error, using fallback state update:', err);
    }

    const userToSave: RegisteredUser = {
      ...player,
      id: userFromRes?.id || player.email,
      name: player.name || (player.firstName ? `${player.firstName} ${player.lastName || ''}`.trim() : 'Player'),
      paymentStatus: player.paymentStatus || 'unpaid',
      registeredAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userToSave));
      if (tokenFromRes) {
        localStorage.setItem(TOKEN_KEY, tokenFromRes);
        setUserToken(tokenFromRes);
      }
    } catch (e) {
      console.error(e);
    }
    setRegisteredUser(userToSave);
    return true;
  };

  const stats: AppStats = statsData || {
    total: 3000,
    left: 1200,
    right: 1800,
    downloads: 3100,
    countries: 142,
  };

  return (
    <StatsContext.Provider
      value={{
        stats,
        isLoading,
        isError,
        registerPlayer,
        registeredUser,
        userToken,
        loginUser,
        logoutUser,
        clearRegistration,
        markUserAsPaid,
        isSubmitting: registerMutation.isPending,
        isModalOpen,
        modalFoot,
        openModal,
        closeModal,
        isLoginModalOpen,
        openLoginModal,
        closeLoginModal,
      }}
    >
      {children}
    </StatsContext.Provider>
  );
};

export const useStats = () => {
  const context = useContext(StatsContext);
  if (!context) {
    throw new Error('useStats must be used within a StatsProvider');
  }
  return context;
};
