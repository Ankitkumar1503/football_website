import React from 'react';
import { motion } from 'framer-motion';
import {
  PhoneMockupFrame,
  PhoneRegistrationScreen,
  PhoneTouchCounterScreen,
  PhonePlayerStatsScreen,
  PhoneQRScanCodeScreen,
  PhoneAIAgentScreen
} from './PhoneScreens';

export const ScreensSection: React.FC = () => {
  const screens = [
    {
      label: 'HOME',
      component: <PhoneMockupFrame isHomeScreen={true} />
    },
    {
      label: 'REGISTRATION',
      component: (
        <PhoneMockupFrame>
          <PhoneRegistrationScreen />
        </PhoneMockupFrame>
      )
    },
    {
      label: 'TOUCH COUNTER',
      component: (
        <PhoneMockupFrame>
          <PhoneTouchCounterScreen />
        </PhoneMockupFrame>
      )
    },
    {
      label: 'PLAYER STATS',
      component: (
        <PhoneMockupFrame>
          <PhonePlayerStatsScreen />
        </PhoneMockupFrame>
      )
    },
    {
      label: 'SCAN CODE',
      component: (
        <PhoneMockupFrame>
          <PhoneQRScanCodeScreen />
        </PhoneMockupFrame>
      )
    },
    {
      label: 'AI AGENT',
      component: (
        <PhoneMockupFrame>
          <PhoneAIAgentScreen />
        </PhoneMockupFrame>
      )
    }
  ];

  return (
    <section className="screens" id="screens">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">The App</p>
        <h2 className="section-title">Every Screen</h2>
        <p className="section-sub" style={{ marginBottom: '32px' }}>
          Clean, bold, fast. Designed for the pitch.
        </p>
      </motion.div>

      <motion.div
        className="screens-scroll"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        {screens.map((item, idx) => (
          <motion.div
            key={idx}
            className="screen-item"
            whileHover={{ scale: 1.04, y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            style={{ cursor: 'pointer' }}
          >
            {item.component}
            <p className="screen-lbl">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

