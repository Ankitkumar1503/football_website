import React from 'react';
import { motion } from 'framer-motion';
import { LEFT_FOOTER_BADGE, RIGHT_FOOTER_BADGE, SCREEN_1 } from '../assets/images';
import { useStats } from '../context/StatsContext';

interface HeroSectionProps {
  onOpenModal: (foot: 'left' | 'right') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
  const { registeredUser } = useStats();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="hero" style={{
      minHeight: '100vh',
      padding: '140px 4% 80px',
      position: 'relative',
      overflow: 'hidden',
      background: '#0A0A0A'
    }}>
      <div className="hero-bg-l"></div>
      <div className="hero-bg-r"></div>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr minmax(280px, 320px) 1fr',
        gap: '36px',
        alignItems: 'start'
      }}>
        {/* LEFT COLUMN: Hero Question & Choices */}
        <motion.div
          className="hero-content"
          style={{ textAlign: 'left' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero-eyebrow" style={{ marginBottom: '16px' }}>
            FOOTBALLER ATHLETICS · TOUCHES APP
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="hero-question" style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 'clamp(38px, 4.5vw, 64px)',
            fontWeight: 900,
            lineHeight: 0.95,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            margin: '0 0 16px'
          }}>
            ARE YOU A<br />
            <span className="acc-l" style={{ color: '#E84D1A' }}>LEFT</span> OR<br />
            <span className="acc-r" style={{ color: '#1A8AE8' }}>RIGHT</span> FOOTER?
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-tagline" style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)',
            marginBottom: '10px'
          }}>
            THERE ARE ONLY TWO TYPES OF FOOTBALLERS IN THE WORLD
          </motion.p>

          <motion.p variants={itemVariants} className="hero-motto" style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '16px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.85)',
            fontStyle: 'italic',
            marginBottom: '24px'
          }}>
            "Play Like You Always Have The Ball"
          </motion.p>

          <motion.p variants={itemVariants} className="hero-desc" style={{
            fontSize: '14px',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.62)',
            lineHeight: 1.7,
            marginBottom: '32px'
          }}>
            Every footballer is either left-footed or right-footed. That's it. Join the worldwide registry, download the TOUCHES App, and start tracking every kick, pass, and goal — whichever foot leads you.
          </motion.p>

          <motion.div variants={itemVariants} className="foot-choice" style={{ display: 'flex', gap: '14px', marginBottom: '24px' }}>
            <motion.button
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="foot-btn foot-btn-left"
              onClick={() => onOpenModal('left')}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '16px 12px',
                borderRadius: '10px',
                border: registeredUser?.footPreference === 'left' ? '2px solid #E84D1A' : '1.5px solid rgba(232,77,26,0.35)',
                background: registeredUser?.footPreference === 'left' ? 'rgba(232,77,26,0.22)' : 'rgba(232,77,26,0.08)',
                cursor: 'pointer',
                boxShadow: registeredUser?.footPreference === 'left' ? '0 0 20px rgba(232,77,26,0.4)' : 'none'
              }}
            >
              <img src={LEFT_FOOTER_BADGE} alt="Left Footer" className="foot-badge-img" style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'contain', marginBottom: '10px' }} />
              <div className="foot-btn-text" style={{ textAlign: 'center' }}>
                <span className="foot-btn-label" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '13px', fontWeight: 800, color: '#E84D1A', textTransform: 'uppercase', display: 'block' }}>
                  {registeredUser?.footPreference === 'left' ? '✓ REGISTERED (LEFT)' : "I'M A LEFT FOOTER"}
                </span>
                <span className="foot-btn-sub" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)', display: 'block', marginTop: '2px' }}>
                  {registeredUser?.footPreference === 'left' ? `Registered as ${registeredUser.firstName}` : 'Register + Download App'}
                </span>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="foot-btn foot-btn-right"
              onClick={() => onOpenModal('right')}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '16px 12px',
                borderRadius: '10px',
                border: registeredUser?.footPreference === 'right' ? '2px solid #1A8AE8' : '1.5px solid rgba(26,138,232,0.35)',
                background: registeredUser?.footPreference === 'right' ? 'rgba(26,138,232,0.22)' : 'rgba(26,138,232,0.08)',
                cursor: 'pointer',
                boxShadow: registeredUser?.footPreference === 'right' ? '0 0 20px rgba(26,138,232,0.4)' : 'none'
              }}
            >
              <img src={RIGHT_FOOTER_BADGE} alt="Right Footer" className="foot-badge-img" style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'contain', marginBottom: '10px' }} />
              <div className="foot-btn-text" style={{ textAlign: 'center' }}>
                <span className="foot-btn-label" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '13px', fontWeight: 800, color: '#1A8AE8', textTransform: 'uppercase', display: 'block' }}>
                  {registeredUser?.footPreference === 'right' ? '✓ REGISTERED (RIGHT)' : "I'M A RIGHT FOOTER"}
                </span>
                <span className="foot-btn-sub" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)', display: 'block', marginTop: '2px' }}>
                  {registeredUser?.footPreference === 'right' ? `Registered as ${registeredUser.firstName}` : 'Register + Download App'}
                </span>
              </div>
            </motion.button>
          </motion.div>

          {registeredUser?.paymentStatus === 'paid' ? (
            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#download"
              className="btn-download-main"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                width: '100%',
                padding: '14px 20px',
                background: '#10B981',
                color: '#000000',
                borderRadius: '6px',
                textDecoration: 'none'
              }}
            >
              <span style={{ fontSize: '20px' }}>📱</span>
              <div className="dl-btn-text" style={{ textAlign: 'center' }}>
                <span className="dl-btn-sub" style={{ display: 'block', fontSize: '9px', textTransform: 'uppercase', color: 'rgba(0,0,0,0.7)', letterSpacing: '0.05em' }}>PURCHASED · INSTANT ACCESS ACTIVE ✓</span>
                <span className="dl-btn-main" style={{ display: 'block', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '15px', fontWeight: 800, color: '#000000', letterSpacing: '0.05em' }}>OPEN TOUCHES APP 📱</span>
              </div>
            </motion.a>
          ) : (
            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#download"
              className="btn-download-main"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                width: '100%',
                padding: '14px 20px',
                background: '#E84D1A',
                color: '#FFF',
                borderRadius: '6px',
                textDecoration: 'none'
              }}
            >
              <svg style={{ width: '22px', height: '22px', fill: 'currentColor' }} viewBox="0 0 24 24">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              <div className="dl-btn-text" style={{ textAlign: 'center' }}>
                <span className="dl-btn-sub" style={{ display: 'block', fontSize: '9px', textTransform: 'uppercase', opacity: 0.7, letterSpacing: '0.05em' }}>INSTANT DOWNLOAD · IOS &amp; ANDROID</span>
                <span className="dl-btn-main" style={{ display: 'block', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '15px', fontWeight: 800, letterSpacing: '0.05em' }}>DOWNLOAD TOUCHES — $22</span>
              </div>
            </motion.a>
          )}
        </motion.div>

        {/* CENTER COLUMN: Phone Mockup with continuous floating animation */}
        <div className="hero-phones" style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className="phone-frame"
            style={{
              position: 'relative',
              width: '280px',
              height: '560px',
              borderRadius: '40px',
              background: '#000',
              padding: '10px',
              boxShadow: '0 30px 60px rgba(0,0,0,0.85), 0 0 25px rgba(232,77,26,0.2)',
              border: '4px solid #222'
            }}
          >
            <img src={SCREEN_1} style={{ width: '100%', height: '100%', borderRadius: '30px', objectFit: 'cover' }} alt="TOUCHES Splash Screen" />
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Fun Section Content with VS Badges */}
        <motion.div
          className="fun-content-col"
          style={{ textAlign: 'left' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="fun-eyebrow" style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#E84D1A',
            marginBottom: '16px'
          }}>
            THE FOOTBALLER ATHLETICS CLUB · EST. 1986
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="fun-heading" style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 'clamp(38px, 4.5vw, 64px)',
            fontWeight: 900,
            lineHeight: 0.95,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            margin: '0 0 16px',
            color: '#FFF'
          }}>
            FOOTBALLERS HAVING FUN.<br />
            <span style={{ color: '#E84D1A' }}>GETTING THEIR TOUCHES.</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="fun-desc" style={{
            fontSize: '14px',
            fontWeight: 300,
            color: 'rgba(255, 255, 255, 0.65)',
            lineHeight: 1.7,
            marginBottom: '32px'
          }}>
            From grassroots to the global stage — every touch counts. Every pass. Every shot. Every goal. The TOUCHES App was built to track every single one of them. This is football. This is your game.
          </motion.p>
          
          {/* VS Comparison Block with interactive hover & pulse */}
          <motion.div variants={itemVariants} className="fun-vs-block" style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '28px', justifyContent: 'flex-start' }}>
            <motion.div
              whileHover={{ scale: 1.08, rotate: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="fun-badge-item"
              style={{ textAlign: 'center', cursor: 'pointer' }}
            >
              <img src={LEFT_FOOTER_BADGE} style={{
                width: '95px',
                height: '95px',
                objectFit: 'contain',
                borderRadius: '50%',
                filter: 'drop-shadow(0 0 15px rgba(232,77,26,0.45))'
              }} alt="Left Footer" />
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '13px',
                fontWeight: 800,
                color: '#E84D1A',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginTop: '10px'
              }}>LEFT FOOTER</div>
              <div style={{ fontStyle: 'italic', fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>"The Rare Breed"</div>
            </motion.div>

            <div className="fun-vs-center" style={{ textAlign: 'center' }}>
              <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '32px',
                  fontWeight: 900,
                  color: 'rgba(255,255,255,0.4)',
                  lineHeight: 1
                }}
              >
                VS
              </motion.div>
              <div style={{
                fontSize: '8px',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.35)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginTop: '4px'
              }}>WHICH ONE ARE YOU?</div>
            </div>

            <motion.div
              whileHover={{ scale: 1.08, rotate: 4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="fun-badge-item"
              style={{ textAlign: 'center', cursor: 'pointer' }}
            >
              <img src={RIGHT_FOOTER_BADGE} style={{
                width: '95px',
                height: '95px',
                objectFit: 'contain',
                borderRadius: '50%',
                filter: 'drop-shadow(0 0 15px rgba(26,138,232,0.45))'
              }} alt="Right Footer" />
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '13px',
                fontWeight: 800,
                color: '#1A8AE8',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginTop: '10px'
              }}>RIGHT FOOTER</div>
              <div style={{ fontStyle: 'italic', fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>"The Dominant Foot"</div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="fun-motto-quote" style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 'clamp(18px, 2.2vw, 24px)',
            fontWeight: 800,
            textTransform: 'uppercase',
            fontStyle: 'italic',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '24px'
          }}>
            "Play Like You Always Have The Ball"
          </motion.div>

          <motion.div variants={itemVariants} className="fun-cta-buttons" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="btn btn-primary"
              onClick={() => onOpenModal('left')}
              style={{ padding: '12px 20px', fontSize: '12px', borderRadius: '4px' }}
            >
              I'M LEFT FOOTER — REGISTER
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="btn btn-ghost"
              onClick={() => onOpenModal('right')}
              style={{ padding: '12px 20px', fontSize: '12px', borderRadius: '4px', borderColor: '#1A8AE8', color: '#1A8AE8' }}
            >
              I'M RIGHT FOOTER — REGISTER
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


