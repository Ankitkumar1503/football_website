import React from 'react';
import { motion } from 'framer-motion';

export const FeaturesSection: React.FC = () => {
  const tools = [
    {
      title: 'Touch Counter',
      desc: 'Football-shaped dial — 15+ action types, positive or negative ratings, real-time totals.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E84D1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
      ),
    },
    {
      title: 'Starting Lineup',
      desc: 'Build your 11-player lineup on a full pitch view. Save, share, or export as PDF instantly.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E84D1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      ),
    },
    {
      title: 'Team Roster',
      desc: 'Manage 20-player rosters for games, training, tryouts, and evaluations.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E84D1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: 'Player Evaluation',
      desc: '30+ metrics across technique, physical, tactical, mental, and social skills.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E84D1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      title: 'Player Stats Profile',
      desc: 'Full career history — training hours, games, goals, clubs. Grassroots to pro.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E84D1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
    },
    {
      title: 'Note to Coach',
      desc: 'Players write direct notes to their coach — open communication built into the app.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E84D1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      title: 'Match Day Analytics',
      desc: 'Track live match stats, goal distribution, assist maps, and key performance indicators.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E84D1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
    {
      title: 'Training Log & Drills',
      desc: 'Log custom training sessions, drill performance, and personal growth milestones.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E84D1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="features" id="features" style={{ background: '#0A0A0C', padding: '100px 5%' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <p style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#E84D1A',
            marginBottom: '12px'
          }}>
            WHAT'S INSIDE
          </p>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 900,
            lineHeight: 0.95,
            textTransform: 'uppercase',
            letterSpacing: '-0.01em',
            color: '#FFFFFF',
            margin: '0 0 16px'
          }}>
            8 TOOLS. ONE APP.
          </h2>
          <p style={{
            fontSize: '15px',
            fontWeight: 300,
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '540px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Built by a licensed football coach. Every feature designed on the pitch, for the pitch.
          </p>
        </motion.div>

        {/* 8-CARD GRID WITH STAGGERED ENTRANCE */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}
        >
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, borderColor: 'rgba(232, 77, 26, 0.45)', backgroundColor: '#191B20' }}
              transition={{ duration: 0.25 }}
              style={{
                background: '#141518',
                borderRadius: '16px',
                padding: '30px 26px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                cursor: 'pointer'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(232, 77, 26, 0.12)',
                border: '1px solid rgba(232, 77, 26, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                {tool.icon}
              </div>
              <h3 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '20px',
                fontWeight: 800,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                margin: '0 0 10px'
              }}>
                {tool.title}
              </h3>
              <p style={{
                fontSize: '14px',
                fontWeight: 300,
                color: 'rgba(255, 255, 255, 0.78)',
                lineHeight: 1.65,
                margin: 0
              }}>
                {tool.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
