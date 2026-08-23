import axios from 'axios';
import type { AppStats, PlayerRegistration, AdminUsersResponse, AuthResponse } from '../types';

const rawBaseUrl = import.meta.env.VITE_API_BASE_URL || '/api';
const API_BASE_URL = (rawBaseUrl.endsWith('/api') || rawBaseUrl.endsWith('/api/'))
  ? rawBaseUrl.replace(/\/+$/, '')
  : (rawBaseUrl.startsWith('/') ? rawBaseUrl.replace(/\/+$/, '') : `${rawBaseUrl.replace(/\/+$/, '')}/api`);

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchStats = async (): Promise<AppStats> => {
  const response = await apiClient.get<{ success: boolean; data: AppStats }>('/stats');
  return response.data.data;
};

export const createRegistration = async (player: PlayerRegistration): Promise<PlayerRegistration> => {
  const response = await apiClient.post<{ success: boolean; data: PlayerRegistration }>('/registrations', player);
  return response.data.data;
};

export const userLoginApi = async (credentials: { email: string; password?: string }): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>('/auth/login', credentials);
  return response.data;
};

export const fetchAdminUsers = async (page = 1, limit = 10): Promise<AdminUsersResponse> => {
  const response = await apiClient.get<{ success: boolean; data: AdminUsersResponse }>(`/admin/users?page=${page}&limit=${limit}`);
  return response.data.data;
};

export const adminLoginApi = async (credentials: { username?: string; password?: string }): Promise<{ success: boolean; message?: string }> => {
  const response = await apiClient.post<{ success: boolean; message?: string }>('/admin/login', credentials);
  return response.data;
};

export const createCheckoutSession = async (userToken?: string | null): Promise<{ success: boolean; url: string; sessionId: string }> => {
  const headers = userToken ? { Authorization: `Bearer ${userToken}` } : {};
  const response = await apiClient.post<{ success: boolean; url: string; sessionId: string }>('/payment/create-checkout-session', {}, { headers });
  return response.data;
};

export const verifyPaymentSession = async (sessionId: string, userToken?: string | null): Promise<{ success: boolean; paid: boolean; amount: number; paymentStatus?: string; paymentDate?: string; user?: any }> => {
  const headers = userToken ? { Authorization: `Bearer ${userToken}` } : {};
  const response = await apiClient.get<{ success: boolean; paid: boolean; amount: number; paymentStatus?: string; paymentDate?: string; user?: any }>(`/payment/verify-session?session_id=${sessionId}`, { headers });
  return response.data;
};

export const generateLoginTokenApi = async (userToken?: string | null): Promise<{ success: boolean; token: string; url: string }> => {
  const headers = userToken ? { Authorization: `Bearer ${userToken}` } : {};
  const response = await apiClient.post<{ success: boolean; token: string; url: string }>('/auth/generate-login-token', {}, { headers });
  return response.data;
};

export const verifyLoginTokenApi = async (loginToken: string): Promise<AuthResponse> => {
  const response = await apiClient.get<AuthResponse>(`/auth/verify-login-token?token=${loginToken}`);
  return response.data;
};

export default apiClient;
