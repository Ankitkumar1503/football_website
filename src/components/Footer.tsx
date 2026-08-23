import React from 'react';
import { motion } from 'framer-motion';
import { TOUCHES_LOGO_HEADER, FOOTER_LEFT_BADGE, FOOTER_RIGHT_BADGE } from '../assets/images';
import footerBannerImg from '../assets/footer-banner.jpg';

export const Footer: React.FC = () => {
  return (
    <footer style={{ background: '#050505', paddingTop: '40px', paddingBottom: '40px', color: '#FFF' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 4%' }}>
        
        {/* PITCH BANNER GRAPHIC CARD WITH GLOW & SCROLL REVEAL */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: '100%',
            height: '280px',
            borderRadius: '24px',
            overflow: 'hidden',
            position: 'relative',
            marginBottom: '56px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(232, 77, 26, 0.18)',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <motion.img 
            src={footerBannerImg} 
            alt="Football Pitch & Goal" 
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center'
            }} 
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 50%, rgba(5,5,5,0.4) 100%)',
            pointerEvents: 'none'
          }}></div>
        </motion.div>

        {/* FOOTER CONTENT GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '48px',
          marginBottom: '50px',
          alignItems: 'start'
        }}>
          
          {/* LEFT COLUMN: BRAND & BADGES */}
          <div>
            <img 
              src={TOUCHES_LOGO_HEADER} 
              alt="TOUCHES" 
              style={{ height: '22px', marginBottom: '20px', display: 'block' }} 
            />
            <p style={{
              fontSize: '14px',
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.55)',
              maxWidth: '380px',
              marginBottom: '28px'
            }}>
              The Footballer Athletics Club — free to join as a left or right footer. Download TOUCHES to track every touch. Reflect. Improve.
            </p>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <img 
                src={FOOTER_LEFT_BADGE} 
                alt="Left Footer" 
                style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(232, 77, 26, 0.3))' }} 
              />
              <img 
                src={FOOTER_RIGHT_BADGE} 
                alt="Right Footer" 
                style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(26, 138, 232, 0.3))' }} 
              />
            </div>
          </div>

          {/* MIDDLE COLUMN: PRODUCT */}
          <div>
            <h4 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '13px',
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '20px'
            }}>
              PRODUCT
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a href="#features" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  AIPlayerAgent
                </a>
              </li>
              <li>
                <a href="#registry" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Join the Club
                </a>
              </li>
              <li>
                <a href="#screens" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  App Showcase
                </a>
              </li>
              <li>
                <a href="#pricing" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#download" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* RIGHT COLUMN: COMPANY */}
          <div>
            <h4 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '13px',
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '20px'
            }}>
              COMPANY
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Support
                </a>
              </li>
              <li>
                <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '12px',
          color: 'rgba(255, 255, 255, 0.35)'
        }}>
          <div>© 1986–2026 Footballer Athletics · TOUCHES App. All rights reserved.</div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.1em', fontWeight: 600 }}>
            LEFT FOOTER / RIGHT FOOTER · GLOBAL REGISTRY
          </div>
        </div>

      </div>
    </footer>
  );
};
