import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useStats } from '../context/StatsContext';
import { LEFT_FOOTER_BADGE, RIGHT_FOOTER_BADGE } from '../assets/images';
import { AnimatedCounter } from './AnimatedCounter';

const formatK = (num: number): string => {
  if (num >= 1000000) {
    const val = (num / 1000000).toFixed(1);
    return val.endsWith('.0') ? `${Math.floor(num / 1000000)}m` : `${val}m`;
  }
  if (num >= 1000) {
    const val = (num / 1000).toFixed(1);
    return val.endsWith('.0') ? `${Math.floor(num / 1000)}k` : `${val}k`;
  }
  return num.toString();
};

export const LiveTracker: React.FC = () => {
  const { stats } = useStats();
  const barRef = useRef<HTMLDivElement>(null);
  const isBarInView = useInView(barRef, { once: true });

  const totalFoot = stats.left + stats.right;
  const leftPct = totalFoot > 0 ? Math.round((stats.left / totalFoot) * 100) : 40;
  const rightPct = 100 - leftPct;

  return (
    <div className="tracker-bar">
      <div className="tracker-label">
        <div className="live-dot"></div>Live Worldwide Registry
      </div>
      <div className="tracker-stats">
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span className="tracker-num" id="totalDownloads">
            <AnimatedCounter target={stats.downloads} formatFn={formatK} />
          </span>
          <span className="tracker-sub">Footballers</span>
        </div>
        <div style={{ width: '1px', height: '18px', background: 'rgba(255,255,255,0.1)' }}></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <img src={LEFT_FOOTER_BADGE} style={{ width: '18px', height: '18px', borderRadius: '50%', objectFit: 'contain' }} alt="Left" />
          <span className="tracker-num" id="leftCount">
            <AnimatedCounter target={stats.left} formatFn={formatK} />
          </span>
          <span className="tracker-sub">Left</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <img src={RIGHT_FOOTER_BADGE} style={{ width: '18px', height: '18px', borderRadius: '50%', objectFit: 'contain' }} alt="Right" />
          <span className="tracker-num" id="rightCount">
            <AnimatedCounter target={stats.right} formatFn={formatK} />
          </span>
          <span className="tracker-sub">Right</span>
        </div>
      </div>
      <div className="tracker-split" ref={barRef}>
        <span className="bar-pct l" id="leftPct">
          <AnimatedCounter target={leftPct} formatFn={(n) => `${n}%`} />
        </span>
        <div className="bar-wrap" style={{ display: 'flex', gap: '4px', background: 'transparent', height: '4px' }}>
          <motion.div
            className="bar-fill-l"
            id="barL"
            initial={{ width: 0 }}
            animate={{ width: isBarInView ? `${leftPct}%` : 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ borderRadius: '2px' }}
          ></motion.div>
          <motion.div
            className="bar-fill-r"
            id="barR"
            initial={{ width: 0 }}
            animate={{ width: isBarInView ? `${rightPct}%` : 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ borderRadius: '2px' }}
          ></motion.div>
        </div>
        <span className="bar-pct r" id="rightPct">
          <AnimatedCounter target={rightPct} formatFn={(n) => `${n}%`} />
        </span>
      </div>
    </div>
  );
};
