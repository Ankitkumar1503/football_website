import React from 'react';
import { motion } from 'framer-motion';
import { TOUCHES_LOGO_HEADER } from '../assets/images';

export const PaymentCancelledPage: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0A0A0A',
      color: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      boxSizing: 'border-box',
      fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          width: '100%',
          maxWidth: '460px',
          background: '#121214',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 30px rgba(239, 68, 68, 0.15)',
          padding: '44px 36px',
          textAlign: 'center'
        }}
      >
        <img src={TOUCHES_LOGO_HEADER} alt="TOUCHES" style={{ height: '24px', marginBottom: '28px', display: 'inline-block' }} />

        <div style={{
          width: '68px',
          height: '68px',
          borderRadius: '50%',
          background: 'rgba(239, 68, 68, 0.15)',
          border: '2px solid #EF4444',
          color: '#EF4444',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px',
          fontWeight: 800,
          margin: '0 auto 20px',
          boxShadow: '0 0 25px rgba(239, 68, 68, 0.3)'
        }}>
          ✕
        </div>

        <h1 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 'clamp(28px, 4vw, 36px)',
          fontWeight: 900,
          lineHeight: 1,
          textTransform: 'uppercase',
          letterSpacing: '-0.01em',
          color: '#FFFFFF',
          margin: '0 0 12px'
        }}>
          Payment Cancelled
        </h1>

        <p style={{
          fontSize: '15px',
          color: 'rgba(255, 255, 255, 0.75)',
          lineHeight: 1.6,
          marginBottom: '28px'
        }}>
          Your checkout session was cancelled. No charges were made to your card. You can try again whenever you're ready.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <a
            href="/#download"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '14px',
              borderRadius: '8px',
              background: '#E84D1A',
              color: '#FFFFFF',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '16px',
              fontWeight: 800,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(232, 77, 26, 0.35)',
              boxSizing: 'border-box'
            }}
          >
            Try Again — $22.00 →
          </a>

          <a
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              background: 'transparent',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '13px',
              fontWeight: 500,
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.15)',
              boxSizing: 'border-box'
            }}
          >
            Return to Homepage
          </a>
        </div>
      </motion.div>
    </div>
  );
};
