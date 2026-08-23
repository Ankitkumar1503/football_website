import React from 'react';
import { motion } from 'framer-motion';
import { useStats } from '../context/StatsContext';
import { AnimatedCounter } from './AnimatedCounter';

export const StatsBand: React.FC = () => {
  const { stats } = useStats();

  const totalFoot = stats.left + stats.right;
  const leftPct = totalFoot > 0 ? Math.round((stats.left / totalFoot) * 100) : 38;
  const rightPct = 100 - leftPct;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="stats-band"
    >
      <div className="band-stat">
        <div className="band-n" id="statDownloads">
          <AnimatedCounter target={stats.downloads} />
        </div>
        <div className="band-l">App Downloads</div>
      </div>
      <div className="band-div"></div>
      <div className="band-stat">
        <div className="band-n" id="statLeft">
          <AnimatedCounter target={leftPct} formatFn={(n) => `${n}%`} />
        </div>
        <div className="band-l">Left Footers</div>
      </div>
      <div className="band-div"></div>
      <div className="band-stat">
        <div className="band-n" id="statRight">
          <AnimatedCounter target={rightPct} formatFn={(n) => `${n}%`} />
        </div>
        <div className="band-l">Right Footers</div>
      </div>
      <div className="band-div"></div>
      <div className="band-stat">
        <div className="band-n" id="statCountries">
          <AnimatedCounter target={stats.countries} />
        </div>
        <div className="band-l">Countries</div>
      </div>
    </motion.div>
  );
};
