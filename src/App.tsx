import React, { useState, useEffect } from 'react';
import { StatsProvider } from './context/StatsContext';
import { Navbar } from './components/Navbar';
import { LiveTracker } from './components/LiveTracker';
import { HeroSection } from './components/HeroSection';
import { StatsBand } from './components/StatsBand';
import { RegistrySection } from './components/RegistrySection';
import { FeaturesSection } from './components/FeaturesSection';
import { ScreensSection } from './components/ScreensSection';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { LoginModal } from './components/LoginModal';
import { AdminDashboard } from './pages/AdminDashboard';
import { PaymentSuccessPage } from './pages/PaymentSuccessPage';
import { PaymentCancelledPage } from './pages/PaymentCancelledPage';
import { useStats } from './context/StatsContext';
import { API_BASE_URL } from './services/api';

const MainAppContent: React.FC = () => {
  const { isLoginModalOpen, closeLoginModal } = useStats();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFoot, setSelectedFoot] = useState<'left' | 'right'>('left');

  const handleOpenModal = (foot?: 'left' | 'right') => {
    if (foot) setSelectedFoot(foot);
    setModalOpen(true);
  };

  return (
    <>
      <Navbar onOpenModal={handleOpenModal} />
      <LiveTracker />
      <HeroSection onOpenModal={handleOpenModal} />
      <StatsBand />
      <RegistrySection />
      <FeaturesSection />
      <ScreensSection />
      <PricingSection />
      <Footer />
      <RegistrationModal 
        isOpen={modalOpen} 
        foot={selectedFoot} 
        onClose={() => setModalOpen(false)} 
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
      />
    </>
  );
};

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <StatsProvider>
      <div style={{ background: '#FFD700', color: '#000', padding: '6px 12px', fontSize: '12px', fontWeight: 800, textAlign: 'center', position: 'sticky', top: 0, zIndex: 99999, borderBottom: '1px solid #000' }}>
        🔗 DEBUG API BASE URL: <code style={{ background: '#000', color: '#00FF66', padding: '2px 6px', borderRadius: '4px' }}>{API_BASE_URL}</code> | VITE_ENV: <code style={{ background: '#000', color: '#FF9900', padding: '2px 6px', borderRadius: '4px' }}>{import.meta.env.VITE_API_BASE_URL || 'NOT_SET'}</code>
      </div>
      {currentPath.startsWith('/admin') && <AdminDashboard />}
      {currentPath.startsWith('/payment-success') && <PaymentSuccessPage />}
      {currentPath.startsWith('/payment-cancelled') && <PaymentCancelledPage />}
      {!currentPath.startsWith('/admin') &&
       !currentPath.startsWith('/payment-success') &&
       !currentPath.startsWith('/payment-cancelled') && (
        <MainAppContent />
      )}
    </StatsProvider>
  );
};

export default App;
