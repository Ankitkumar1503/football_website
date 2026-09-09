import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { createCheckoutSession } from '../services/api';
import { useStats } from '../context/StatsContext';

export const PricingSection: React.FC = () => {
  const { registeredUser, userToken, openLoginModal } = useStats();
  const [loading, setLoading] = useState(false);

  const isPaid = registeredUser?.paymentStatus === 'paid';

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!userToken) {
      openLoginModal();
      return;
    }

    setLoading(true);
    try {
      const res = await createCheckoutSession(userToken);
      if (res.url) {
        window.location.href = res.url;
      } else {
        alert('Could not start checkout session. Please try again.');
      }
    } catch (err: any) {
      console.error(err);
      if (err.response?.status === 401) {
        openLoginModal();
      } else {
        alert('Unable to connect to Stripe Checkout. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pricing" id="download">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">Get The App</p>
        <h2 className="section-title">{isPaid ? 'Your TOUCHES License' : 'Download TOUCHES'}</h2>
        <p style={{ fontSize: '15px', fontWeight: 300, color: 'rgba(255,255,255,0.5)', margin: '0 auto', maxWidth: '400px' }}>
          {isPaid ? 'Lifetime access active. No subscription — ever.' : 'One price. Full access. No subscription — ever.'}
        </p>
      </motion.div>

      <motion.div
        className="pricing-wrap"
        initial={{ opacity: 0, y: 35, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <span className="price-badge" style={{ background: isPaid ? '#10B981' : 'var(--orange)' }}>
          {isPaid ? '✓ Lifetime Access Unlocked' : 'Full Access · All Features'}
        </span>
        <div className="price-amount"><span className="price-currency">$</span>22</div>
        <p className="price-period">One-time purchase · Direct download · iOS &amp; Android</p>
        <ul className="price-list">
          <li>Touch Counter — 15+ real-time action types</li>
          <li>Player Stats &amp; Full Profile Registration</li>
          <li>Comprehensive Player Evaluation (30+ metrics)</li>
          <li>Player Reflection journaling</li>
          <li>Starting Lineup builder — full pitch view</li>
          <li>Team Roster manager — 20 players</li>
          <li>Note to Coach direct messaging</li>
          <li>PDF export &amp; share on every screen</li>
          <li>Left &amp; Right Footer worldwide registry</li>
        </ul>
        <div className="dl-row">
          {isPaid ? (
            <motion.a
              id="download-apk-btn"
              href="/app/app-release.apk"
              download="touches.apk"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="btn-download-main"
              style={{
                fontSize: '15px',
                cursor: 'pointer',
                border: 'none',
                width: '100%',
                background: '#10B981',
                color: '#000000',
                boxShadow: '0 4px 24px rgba(16, 185, 129, 0.4)',
                textDecoration: 'none',
                boxSizing: 'border-box'
              }}
            >
              <span style={{ fontSize: '22px' }}>📥</span>
              <div className="dl-btn-text" style={{ textAlign: 'center' }}>
                <span className="dl-btn-sub" style={{ color: 'rgba(0,0,0,0.7)' }}>PURCHASED · LIFETIME ACCESS ACTIVE ✓</span>
                <span className="dl-btn-main" style={{ color: '#000000' }}>DOWNLOAD APK</span>
              </div>
            </motion.a>
          ) : (
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              onClick={handleDownload}
              disabled={loading}
              className="btn-download-main"
              style={{ fontSize: '15px', cursor: 'pointer', border: 'none', width: '100%', opacity: loading ? 0.7 : 1 }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <div className="dl-btn-text">
                <span className="dl-btn-sub">{loading ? 'Redirecting...' : 'Direct download · No app store needed'}</span>
                <span className="dl-btn-main">{loading ? 'Connecting to Stripe...' : 'Download TOUCHES — $22'}</span>
              </div>
            </motion.button>
          )}
        </div>
        <p style={{ fontSize: '11px', color: isPaid ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.3)', marginTop: '14px', lineHeight: '1.6' }}>
          {isPaid ? (
            <>
              Android APK file ready for direct download &amp; installation
              <br />
              No app store needed · Install directly from this website
            </>
          ) : (
            <>
              iOS &amp; Android · Install directly from this site
              <br />
              APK download for Android also available here
            </>
          )}
        </p>
      </motion.div>
    </section>
  );
};
