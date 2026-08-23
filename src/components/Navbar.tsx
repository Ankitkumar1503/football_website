import React, { useState } from 'react';
import { TOUCHES_LOGO_HEADER } from '../assets/images';
import { useStats } from '../context/StatsContext';
import { generateLoginTokenApi } from '../services/api';
import { UserQRCodeSection } from './UserQRCodeSection';

interface NavbarProps {
  onOpenModal?: (foot?: 'left' | 'right') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const { registeredUser, userToken, openLoginModal, logoutUser } = useStats();
  const [showQrDropdown, setShowQrDropdown] = useState(false);

  const userName = registeredUser?.name || registeredUser?.firstName || 'Player';
  const isPaid = registeredUser?.paymentStatus === 'paid';

  const handleOpenNewTab = async () => {
    try {
      const res = await generateLoginTokenApi(userToken);
      if (res.url) {
        window.open(res.url, '_blank');
      }
    } catch (err) {
      console.error(err);
      alert('Unable to generate phone link. Please try logging in again.');
    }
  };

  return (
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 5%', background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="nav-left" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img src={TOUCHES_LOGO_HEADER} alt="TOUCHES" className="nav-touches-text" />
        <div className="nav-divider"></div>
        <span className="nav-brand">Footballer Athletics</span>
      </div>

      <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {registeredUser ? (
          <>
            {/* User Greeting (Plain, unbordered text) */}
            <span style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ opacity: 0.6 }}>👤</span> Welcome, <strong style={{ color: '#FFFFFF', fontWeight: 700 }}>{userName}</strong>
            </span>

            {/* Single "Open on Phone" Button with QR Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                type="button"
                onClick={() => setShowQrDropdown(!showQrDropdown)}
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 16px',
                  borderRadius: '6px',
                  background: '#E84D1A',
                  color: '#FFFFFF',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '13px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(232, 77, 26, 0.35)',
                  transition: 'all 0.2s'
                }}
              >
                📱 Open on Phone {showQrDropdown ? '▲' : '▼'}
              </button>

              {showQrDropdown && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 10px)',
                    right: 0,
                    width: '290px',
                    background: '#121214',
                    border: '1px solid rgba(232, 77, 26, 0.4)',
                    borderRadius: '16px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.9), 0 0 30px rgba(232, 77, 26, 0.2)',
                    padding: '18px',
                    zIndex: 1000,
                    boxSizing: 'border-box'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', color: '#E84D1A', letterSpacing: '0.08em' }}>
                      PHONE SYNC &amp; QR CODE
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowQrDropdown(false)}
                      style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', fontSize: '14px' }}
                    >
                      ✕
                    </button>
                  </div>

                  <UserQRCodeSection compact />

                  <button
                    type="button"
                    onClick={() => {
                      setShowQrDropdown(false);
                      handleOpenNewTab();
                    }}
                    style={{
                      marginTop: '12px',
                      width: '100%',
                      padding: '10px',
                      borderRadius: '8px',
                      border: 'none',
                      background: '#E84D1A',
                      color: '#FFFFFF',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: '14px',
                      fontWeight: 800,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(232, 77, 26, 0.35)'
                    }}
                  >
                    Open Link in New Tab ↗
                  </button>
                </div>
              )}
            </div>

            {/* Unpaid Users still get the $22 Download button if not paid */}
            {!isPaid && (
              <a
                href="#download"
                className="btn btn-primary"
                onClick={(e) => {
                  if (onOpenModal) {
                    e.preventDefault();
                    onOpenModal();
                  }
                }}
              >
                Download — $22
              </a>
            )}

            {/* Subtle Admin & Logout Links */}
            <a
              href="/admin/dashboard"
              style={{
                fontSize: '12px',
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
            >
              Admin 📊
            </a>

            <button
              type="button"
              onClick={logoutUser}
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: '12px',
                color: 'rgba(255,255,255,0.45)',
                cursor: 'pointer',
                padding: '4px 6px',
                transition: 'color 0.2s'
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <a href="#registry" className="btn btn-ghost" style={{ fontSize: '12px', padding: '8px 14px' }}>
              Join Registry
            </a>

            <button
              type="button"
              onClick={openLoginModal}
              className="btn btn-ghost"
              style={{
                fontSize: '12px',
                padding: '8px 14px',
                borderColor: '#E84D1A',
                color: '#E84D1A',
                cursor: 'pointer',
                fontWeight: 700
              }}
            >
              Login
            </button>

            <a
              href="#download"
              className="btn btn-primary"
              onClick={(e) => {
                if (onOpenModal) {
                  e.preventDefault();
                  onOpenModal();
                }
              }}
            >
              Download — $22
            </a>

            <a
              href="/admin/dashboard"
              style={{
                fontSize: '12px',
                color: 'rgba(255,255,255,0.4)',
                textDecoration: 'none'
              }}
            >
              Admin 📊
            </a>
          </>
        )}
      </div>
    </nav>
  );
};
