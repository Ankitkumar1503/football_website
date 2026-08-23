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
import { InstallAppBanner } from './components/InstallAppBanner';
import { useStats } from './context/StatsContext';

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
      <div style={{ maxWidth: '1200px', margin: '80px auto 0 auto', padding: '0 20px' }}>
        <InstallAppBanner />
      </div>
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
