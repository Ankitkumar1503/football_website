import React from 'react';
import {
  QrCode,
  Send,
  User,
  Trophy,
  Target,
  Shield,
  Flag,
  RotateCcw,
  FileText,
  ThumbsUp,
  ThumbsDown,
  ArrowLeft,
  Settings,
  Zap,
  Sparkles,
  ChevronRight,
  Activity,
  Footprints,
  Clock,
  MapPin,
  Share2,
  Sliders,
  CheckCircle2
} from 'lucide-react';
import { SCREEN_1 } from '../assets/images';

// Phone Frame Container Component
export const PhoneMockupFrame: React.FC<{
  children?: React.ReactNode;
  isHomeScreen?: boolean;
}> = ({ children, isHomeScreen }) => {
  return (
    <div className="phone-mockup-frame">
      {/* Top Speaker Notch */}
      <div className="phone-notch" />
      
      {/* Inside Top App Header Bar */}
      <div className="phone-screen-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ color: '#FFC700', fontWeight: '900', fontSize: '11px', lineHeight: 1 }}>Ú</span>
          <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '9px', letterSpacing: '0.08em', color: '#FFF' }}>
            TOUCHES
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#A0A0A0' }}>
          <Settings size={9} />
          <User size={9} style={{ color: '#FFC700' }} />
        </div>
      </div>

      {/* Screen Body Content */}
      <div className="phone-screen-body">
        {isHomeScreen ? (
          <img
            src={SCREEN_1}
            alt="TOUCHES Home Screen"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          children
        )}
      </div>

      {/* Inside Bottom Footer Bar */}
      <div className="phone-screen-footer">
        <span style={{ fontSize: '5.5px', fontWeight: 700, letterSpacing: '0.12em', color: '#666', textTransform: 'uppercase' }}>
          FOOTBALLER ATHLETICS
        </span>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 1. REGISTRATION SCREEN                                                     */
/* -------------------------------------------------------------------------- */
export const PhoneRegistrationScreen: React.FC = () => {
  return (
    <div style={{ padding: '6px', background: '#0a0c10', fontSize: '7.5px' }}>
      {/* Top Green Live Registry Card */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0d3822 0%, #165434 100%)',
          borderRadius: '6px',
          padding: '6px',
          marginBottom: '6px',
          border: '1px solid rgba(34,197,94,0.3)'
        }}
      >
        <div style={{ color: '#86efac', fontSize: '6.5px', marginBottom: '2px' }}>Welcome back, player</div>
        <div style={{ fontSize: '10px', fontWeight: '900', color: '#FFF', letterSpacing: '0.05em' }}>PLAYER</div>
        <div style={{ color: '#ef4444', fontSize: '6px', display: 'flex', alignItems: 'center', gap: '3px', margin: '2px 0 5px' }}>
          <span style={{ display: 'inline-block', width: '4px', height: '4px', borderRadius: '50%', background: '#ef4444' }}></span>
          <span style={{ color: '#a7f3d0' }}>Fri, Jul 24, 2026 - 9:05 AM</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3px', marginBottom: '5px' }}>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '3px', borderRadius: '4px', textAlign: 'center' }}>
            <div style={{ color: '#4ade80', fontWeight: '800', fontSize: '9px' }}>0</div>
            <div style={{ fontSize: '5px', color: '#94a3b8' }}>TOUCHES</div>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '3px', borderRadius: '4px', textAlign: 'center' }}>
            <div style={{ color: '#4ade80', fontWeight: '800', fontSize: '9px' }}>0</div>
            <div style={{ fontSize: '5px', color: '#94a3b8' }}>SESSIONS</div>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '3px', borderRadius: '4px', textAlign: 'center' }}>
            <div style={{ color: '#4ade80', fontWeight: '800', fontSize: '9px' }}>0</div>
            <div style={{ fontSize: '5px', color: '#94a3b8' }}>GOALS</div>
          </div>
        </div>

        <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '4px', padding: '4px' }}>
          <div style={{ fontSize: '6.5px', fontWeight: 800, color: '#FFF', marginBottom: '2px' }}>32,064 PLAYERS ONLINE NOW</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '5.5px', marginBottom: '2px' }}>
            <span style={{ color: '#E84D1A', fontWeight: 700 }}>12,847 LEFT</span>
            <span style={{ color: '#38bdf8', fontWeight: 700 }}>19,204 RIGHT</span>
          </div>
          <div style={{ height: '3px', background: '#334155', borderRadius: '2px', overflow: 'hidden', display: 'flex' }}>
            <div style={{ width: '40%', background: '#E84D1A' }}></div>
            <div style={{ width: '60%', background: '#0284c7' }}></div>
          </div>
        </div>
      </div>

      {/* Back Button & Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '6px', color: '#E84D1A', fontWeight: 700 }}>
        <ArrowLeft size={8} />
        <span style={{ color: '#FFF', fontSize: '8.5px', fontWeight: 800, textTransform: 'uppercase' }}>PLAYER REGISTRATION</span>
      </div>

      {/* Dominant Foot Selector */}
      <div style={{ marginBottom: '6px' }}>
        <div style={{ fontSize: '6px', color: '#94a3b8', fontWeight: 700, marginBottom: '3px' }}>DOMINANT FOOT</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
          <div
            style={{
              background: '#1e293b',
              border: '1px solid #334155',
              borderRadius: '4px',
              padding: '4px',
              textAlign: 'center',
              color: '#94a3b8',
              fontWeight: 700,
              fontSize: '6.5px'
            }}
          >
            👢 LEFT FOOTER
          </div>
          <div
            style={{
              background: '#0284c7',
              border: '1px solid #38bdf8',
              borderRadius: '4px',
              padding: '4px',
              textAlign: 'center',
              color: '#FFF',
              fontWeight: 800,
              fontSize: '6.5px'
            }}
          >
            👢 RIGHT FOOTER
          </div>
        </div>
      </div>

      {/* Form Fields Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
          <div>
            <div style={{ fontSize: '5.5px', color: '#94a3b8' }}>FULL NAME</div>
            <div style={{ background: '#1e1e1e', border: '1px solid #333', padding: '3px', borderRadius: '3px', color: '#FFF', fontSize: '6.5px' }}>Player</div>
          </div>
          <div>
            <div style={{ fontSize: '5.5px', color: '#94a3b8' }}>DATE OF BIRTH</div>
            <div style={{ background: '#1e1e1e', border: '1px solid #333', padding: '3px', borderRadius: '3px', color: '#666', fontSize: '6.5px' }}>DOB</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
          <div>
            <div style={{ fontSize: '5.5px', color: '#94a3b8' }}>AGE</div>
            <div style={{ background: '#1e1e1e', border: '1px solid #333', padding: '3px', borderRadius: '3px', color: '#666', fontSize: '6.5px' }}>Age</div>
          </div>
          <div>
            <div style={{ fontSize: '5.5px', color: '#94a3b8' }}>PLACE OF BIRTH</div>
            <div style={{ background: '#1e1e1e', border: '1px solid #333', padding: '3px', borderRadius: '3px', color: '#666', fontSize: '6.5px' }}>City</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
          <div>
            <div style={{ fontSize: '5.5px', color: '#94a3b8' }}>COUNTRY</div>
            <div style={{ background: '#1e1e1e', border: '1px solid #333', padding: '3px', borderRadius: '3px', color: '#666', fontSize: '6.5px' }}>Country</div>
          </div>
          <div>
            <div style={{ fontSize: '5.5px', color: '#94a3b8' }}>POSITION</div>
            <div style={{ background: '#1e1e1e', border: '1px solid #333', padding: '3px', borderRadius: '3px', color: '#666', fontSize: '6.5px' }}>Position / No.</div>
          </div>
        </div>

        <div>
          <div style={{ fontSize: '5.5px', color: '#94a3b8' }}>EMAIL</div>
          <div style={{ background: '#1e1e1e', border: '1px solid #333', padding: '3px', borderRadius: '3px', color: '#666', fontSize: '6.5px' }}>Email address</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
          <div>
            <div style={{ fontSize: '5.5px', color: '#94a3b8' }}>CELL PHONE</div>
            <div style={{ background: '#1e1e1e', border: '1px solid #333', padding: '3px', borderRadius: '3px', color: '#666', fontSize: '6.5px' }}>Phone</div>
          </div>
          <div>
            <div style={{ fontSize: '5.5px', color: '#94a3b8' }}>INSTAGRAM</div>
            <div style={{ background: '#1e1e1e', border: '1px solid #333', padding: '3px', borderRadius: '3px', color: '#666', fontSize: '6.5px' }}>@handle</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
          <div>
            <div style={{ fontSize: '5.5px', color: '#94a3b8' }}>CLUB</div>
            <div style={{ background: '#1e1e1e', border: '1px solid #333', padding: '3px', borderRadius: '3px', color: '#666', fontSize: '6.5px' }}>Club name</div>
          </div>
          <div>
            <div style={{ fontSize: '5.5px', color: '#94a3b8' }}>TEAM</div>
            <div style={{ background: '#1e1e1e', border: '1px solid #333', padding: '3px', borderRadius: '3px', color: '#666', fontSize: '6.5px' }}>Team name</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
          <div>
            <div style={{ fontSize: '5.5px', color: '#94a3b8' }}>LEVEL</div>
            <div style={{ background: '#1e1e1e', border: '1px solid #333', padding: '3px', borderRadius: '3px', color: '#666', fontSize: '6.5px' }}>e.g. Academy</div>
          </div>
          <div>
            <div style={{ fontSize: '5.5px', color: '#94a3b8' }}>DIVISION</div>
            <div style={{ background: '#1e1e1e', border: '1px solid #333', padding: '3px', borderRadius: '3px', color: '#666', fontSize: '6.5px' }}>e.g. U16</div>
          </div>
        </div>

        <div>
          <div style={{ fontSize: '5.5px', color: '#94a3b8' }}>FAVOURITE TEAM</div>
          <div style={{ background: '#1e1e1e', border: '1px solid #333', padding: '3px', borderRadius: '3px', color: '#666', fontSize: '6.5px' }}>e.g. Arsenal FC</div>
        </div>

        <div>
          <div style={{ fontSize: '5.5px', color: '#94a3b8' }}>FAVOURITE PLAYER</div>
          <div style={{ background: '#1e1e1e', border: '1px solid #333', padding: '3px', borderRadius: '3px', color: '#666', fontSize: '6.5px' }}>e.g. Lionel Messi</div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 2. TOUCH COUNTER SCREEN                                                    */
/* -------------------------------------------------------------------------- */
export const PhoneTouchCounterScreen: React.FC = () => {
  return (
    <div style={{ padding: '6px', background: '#0b0d12', fontSize: '7px' }}>
      {/* Player Header Inputs */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4px', marginBottom: '4px' }}>
        <div>
          <div style={{ fontSize: '5px', color: '#888' }}>PLAYER NAME</div>
          <div style={{ background: '#161922', border: '1px solid #282c37', padding: '2px 4px', borderRadius: '3px', color: '#DDD', fontSize: '6.5px' }}>
            e.g. Alex Rivera
          </div>
        </div>
        <div>
          <div style={{ fontSize: '5px', color: '#888' }}>AGE</div>
          <div style={{ background: '#161922', border: '1px solid #282c37', padding: '2px 4px', borderRadius: '3px', color: '#DDD', fontSize: '6.5px' }}>
            14
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4px', marginBottom: '6px' }}>
        <div>
          <div style={{ fontSize: '5px', color: '#888' }}>PLAYER POSITION</div>
          <div style={{ background: '#161922', border: '1px solid #282c37', padding: '2px 4px', borderRadius: '3px', color: '#DDD', fontSize: '6.5px' }}>
            Select ▾
          </div>
        </div>
        <div>
          <div style={{ fontSize: '5px', color: '#888' }}>NUMBER</div>
          <div style={{ background: '#161922', border: '1px solid #282c37', padding: '2px 4px', borderRadius: '3px', color: '#DDD', fontSize: '6.5px' }}>
            10
          </div>
        </div>
      </div>

      {/* Football Field Pitch Graphic */}
      <div
        style={{
          background: 'linear-gradient(180deg, #15803d 0%, #166534 100%)',
          borderRadius: '6px',
          height: '75px',
          position: 'relative',
          border: '1.5px solid rgba(255,255,255,0.4)',
          overflow: 'hidden',
          marginBottom: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Pitch Lines */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '1px', background: 'rgba(255,255,255,0.4)' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '5px', width: '14px', border: '1px solid rgba(255,255,255,0.4)', borderLeft: 'none' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: '5px', width: '14px', border: '1px solid rgba(255,255,255,0.4)', borderRight: 'none' }} />

        {/* Pitch Center Circle Target */}
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            border: '2px solid #FFF',
            background: 'rgba(0,0,0,0.35)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFF',
            zIndex: 2
          }}
        >
          <span style={{ fontSize: '5px', letterSpacing: '0.05em', color: '#E2E8F0', textTransform: 'uppercase' }}>TOTAL</span>
          <span style={{ fontSize: '13px', fontWeight: '900', lineHeight: 1, color: '#FFF' }}>0</span>
          <span style={{ fontSize: '4.5px', letterSpacing: '0.05em', color: '#E2E8F0', textTransform: 'uppercase' }}>TOUCHES</span>
        </div>
      </div>

      {/* Positive / Negative Counters */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', marginBottom: '6px' }}>
        <div style={{ background: '#14532d', border: '1px solid #22c55e', padding: '3px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#86efac', fontWeight: 800, fontSize: '6px' }}>POSITIVE</span>
          <span style={{ color: '#FFF', fontWeight: 900, fontSize: '9px' }}>0</span>
        </div>
        <div style={{ background: '#7f1d1d', border: '1px solid #ef4444', padding: '3px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#fca5a5', fontWeight: 800, fontSize: '6px' }}>NEGATIVE</span>
          <span style={{ color: '#FFF', fontWeight: 900, fontSize: '9px' }}>0</span>
        </div>
      </div>

      {/* First Touch Assessment */}
      <div style={{ marginBottom: '6px' }}>
        <div style={{ fontSize: '5.5px', color: '#888', textAlign: 'center', marginBottom: '2px', fontWeight: 700 }}>FIRST TOUCH ASSESSMENT</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
          <div style={{ background: '#22c55e', color: '#FFF', padding: '3px', borderRadius: '3px', textAlign: 'center', fontWeight: 800, fontSize: '6px' }}>
            👍 Positive
          </div>
          <div style={{ background: '#262626', color: '#888', padding: '3px', borderRadius: '3px', textAlign: 'center', fontWeight: 800, fontSize: '6px' }}>
            👎 Negative
          </div>
        </div>
      </div>

      {/* Touch Type Buttons Grid (3x3) */}
      <div style={{ fontSize: '5.5px', color: '#888', fontWeight: 700, marginBottom: '2px' }}>TOUCH TYPE</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3px', marginBottom: '6px' }}>
        {[
          { label: 'PASS', icon: '➔', val: 0 },
          { label: 'DRIBBLE', icon: '⚡', val: 0 },
          { label: 'SHOT', icon: '🎯', val: 0 },
          { label: 'GOAL', icon: '🏆', val: 0 },
          { label: 'HEADER', icon: '⚽', val: 0 },
          { label: 'TACKLE', icon: '🛡️', val: 0 },
          { label: 'FREE KICK', icon: '⭕', val: 0 },
          { label: 'CORNER', icon: '🚩', val: 0 },
          { label: 'THROW-IN', icon: '⮡', val: 0 }
        ].map((item, idx) => (
          <div key={idx} style={{ background: '#161922', border: '1px solid #262936', padding: '3px 2px', borderRadius: '4px', textAlign: 'center' }}>
            <div style={{ fontSize: '8px', marginBottom: '1px' }}>{item.icon}</div>
            <div style={{ color: '#FFF', fontWeight: 900, fontSize: '8px', lineHeight: 1 }}>{item.val}</div>
            <div style={{ color: '#94a3b8', fontSize: '4.5px', fontWeight: 700, marginTop: '1px' }}>{item.label}</div>
          </div>
        ))}
      </div>

      {/* Match Events */}
      <div style={{ fontSize: '5.5px', color: '#888', fontWeight: 700, marginBottom: '2px' }}>MATCH EVENTS</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3px', marginBottom: '6px' }}>
        {[
          { label: 'YELLOW CARD', val: 0 },
          { label: 'RED CARD', val: 0 },
          { label: 'MISSED GAME', val: 0 },
          { label: 'SUB IN', val: 0 },
          { label: 'SUB OUT', val: 0 },
          { label: 'INJURY', val: 0 }
        ].map((item, idx) => (
          <div key={idx} style={{ background: '#161922', border: '1px solid #262936', padding: '3px 2px', borderRadius: '3px', textAlign: 'center' }}>
            <div style={{ color: '#FFF', fontWeight: 800, fontSize: '7.5px' }}>{item.val}</div>
            <div style={{ color: '#94a3b8', fontSize: '4.5px' }}>{item.label}</div>
          </div>
        ))}
      </div>

      {/* Location Inputs & Sliders */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '6px' }}>
        <div>
          <div style={{ fontSize: '5px', color: '#888' }}>TRAINING LOCATION</div>
          <div style={{ background: '#161922', border: '1px solid #282c37', padding: '2px 4px', borderRadius: '3px', color: '#666', fontSize: '6px' }}>
            e.g. Riverside Fields
          </div>
        </div>
        <div>
          <div style={{ fontSize: '5px', color: '#888' }}>GAME LOCATION</div>
          <div style={{ background: '#161922', border: '1px solid #282c37', padding: '2px 4px', borderRadius: '3px', color: '#666', fontSize: '6px' }}>
            e.g. Home Stadium
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '5.5px', color: '#888', marginBottom: '1px' }}>
            <span>TIME IN TRAINING</span>
            <span style={{ color: '#FFC700', fontWeight: 700 }}>25 Min</span>
          </div>
          <div style={{ height: '3px', background: '#262936', borderRadius: '2px', position: 'relative' }}>
            <div style={{ width: '40%', height: '100%', background: '#FFC700', borderRadius: '2px' }} />
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '5.5px', color: '#888', marginBottom: '1px' }}>
            <span>MINUTES PLAYED</span>
            <span style={{ color: '#FFC700', fontWeight: 700 }}>35 Min</span>
          </div>
          <div style={{ height: '3px', background: '#262936', borderRadius: '2px', position: 'relative' }}>
            <div style={{ width: '60%', height: '100%', background: '#FFC700', borderRadius: '2px' }} />
          </div>
        </div>
      </div>

      {/* Save / Share Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
        <button
          style={{
            background: '#FFC700',
            color: '#000',
            border: 'none',
            borderRadius: '4px',
            padding: '4px',
            fontWeight: '900',
            fontSize: '7px',
            cursor: 'pointer'
          }}
        >
          💾 SAVE SESSION
        </button>
        <button
          style={{
            background: '#1e293b',
            color: '#FFF',
            border: '1px solid #334155',
            borderRadius: '4px',
            padding: '3px',
            fontWeight: '700',
            fontSize: '6.5px',
            cursor: 'pointer'
          }}
        >
          ⇪ SHARE / PRINT PDF
        </button>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 3. PLAYER STATS SCREEN                                                     */
/* -------------------------------------------------------------------------- */
export const PhonePlayerStatsScreen: React.FC = () => {
  return (
    <div style={{ padding: '6px', background: '#0a0b0e', fontSize: '7.5px' }}>
      {/* Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '5px', color: '#E84D1A', fontWeight: 700 }}>
        <ArrowLeft size={8} />
        <span style={{ color: '#FFF', fontSize: '8.5px', fontWeight: 800, textTransform: 'uppercase' }}>PLAYER STATS</span>
      </div>

      {/* Top Green Stat Box */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0d3822 0%, #165434 100%)',
          borderRadius: '6px',
          padding: '6px',
          marginBottom: '6px',
          border: '1px solid rgba(34,197,94,0.3)'
        }}
      >
        <div style={{ fontSize: '10px', fontWeight: '900', color: '#FFF' }}>PLAYER</div>
        <div style={{ color: '#a7f3d0', fontSize: '6px', marginBottom: '4px' }}>Jul 24, 2026</div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3px', marginBottom: '4px' }}>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '3px', borderRadius: '4px', textAlign: 'center' }}>
            <div style={{ color: '#4ade80', fontWeight: 800, fontSize: '9px' }}>0</div>
            <div style={{ fontSize: '5px', color: '#94a3b8' }}>TOUCHES</div>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '3px', borderRadius: '4px', textAlign: 'center' }}>
            <div style={{ color: '#4ade80', fontWeight: 800, fontSize: '9px' }}>0</div>
            <div style={{ fontSize: '5px', color: '#94a3b8' }}>SESSIONS</div>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '3px', borderRadius: '4px', textAlign: 'center' }}>
            <div style={{ color: '#4ade80', fontWeight: 800, fontSize: '9px' }}>0</div>
            <div style={{ fontSize: '5px', color: '#94a3b8' }}>GOALS</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px' }}>
          <div style={{ background: 'rgba(0,0,0,0.4)', padding: '2px', borderRadius: '3px', textAlign: 'center', color: '#94a3b8', fontSize: '5.5px' }}>
            LEFT FOOTER
          </div>
          <div style={{ background: '#0284c7', padding: '2px', borderRadius: '3px', textAlign: 'center', color: '#FFF', fontSize: '5.5px', fontWeight: 700 }}>
            RIGHT FOOTER
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div style={{ fontSize: '6px', color: '#FFC700', fontWeight: 800, marginBottom: '3px', letterSpacing: '0.05em' }}>QUICK STATS</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', marginBottom: '6px' }}>
        <div style={{ background: '#12141c', border: '1px solid #FFC700', borderRadius: '4px', padding: '4px' }}>
          <div style={{ fontSize: '5px', color: '#888' }}>TODAY'S TOUCHES</div>
          <div style={{ color: '#E84D1A', fontWeight: 900, fontSize: '11px' }}>0</div>
        </div>
        <div style={{ background: '#12141c', border: '1px solid #FFC700', borderRadius: '4px', padding: '4px' }}>
          <div style={{ fontSize: '5px', color: '#888' }}>TOUCHES THIS WEEK</div>
          <div style={{ color: '#38bdf8', fontWeight: 900, fontSize: '11px' }}>0</div>
        </div>
        <div style={{ background: '#12141c', border: '1px solid #FFC700', borderRadius: '4px', padding: '4px' }}>
          <div style={{ fontSize: '5px', color: '#888' }}>TOUCHES THIS MONTH</div>
          <div style={{ color: '#4ade80', fontWeight: 900, fontSize: '11px' }}>0</div>
        </div>
        <div style={{ background: '#12141c', border: '1px solid #FFC700', borderRadius: '4px', padding: '4px' }}>
          <div style={{ fontSize: '5px', color: '#888' }}>TOUCHES THIS SEASON</div>
          <div style={{ color: '#facc15', fontWeight: 900, fontSize: '11px' }}>0</div>
        </div>
      </div>

      {/* Career Totals Grid */}
      <div style={{ fontSize: '6px', color: '#AAA', fontWeight: 800, marginBottom: '3px' }}>CAREER TOTALS</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px', marginBottom: '6px' }}>
        {[
          { label: 'TOTAL TOUCHES', val: 0 },
          { label: 'GOALS SCORED', val: 0 },
          { label: 'TOTAL GAMES', val: 0 },
          { label: 'SHOTS ON TARGET', val: 0 },
          { label: 'TACKLES MADE', val: 0 },
          { label: 'PENALTIES TAKEN', val: 0 },
          { label: 'CORNER KICKS', val: 0 },
          { label: 'HEADERS', val: 0 },
          { label: 'THROW-INS', val: 0 },
          { label: 'FREE KICKS', val: 0 }
        ].map((item, idx) => (
          <div key={idx} style={{ background: '#161922', padding: '3px 4px', borderRadius: '3px', border: '1px solid #232733' }}>
            <div style={{ fontSize: '4.5px', color: '#888' }}>{item.label}</div>
            <div style={{ color: '#FFF', fontWeight: 800, fontSize: '8px' }}>{item.val}</div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
        <button style={{ background: '#1e293b', border: '1px solid #334155', color: '#FFF', padding: '3px', borderRadius: '3px', fontSize: '6px', fontWeight: 700 }}>
          ⟲ Reset
        </button>
        <button style={{ background: '#E84D1A', border: 'none', color: '#FFF', padding: '3px', borderRadius: '3px', fontSize: '6px', fontWeight: 800 }}>
          📄 Save PDF
        </button>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 4. QR SCAN CODE SCREEN                                                     */
/* -------------------------------------------------------------------------- */
export const PhoneQRScanCodeScreen: React.FC = () => {
  return (
    <div
      style={{
        padding: '10px 8px',
        background: '#090a0f',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        boxSizing: 'border-box'
      }}
    >
      <div>
        <div style={{ fontSize: '11px', fontWeight: '900', color: '#FFF', letterSpacing: '0.05em', marginBottom: '2px' }}>SCAN CODE</div>
        <div style={{ fontSize: '6px', color: '#E84D1A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          MOBILE APP ACCESS
        </div>
      </div>

      {/* Main QR Card */}
      <div
        style={{
          background: 'linear-gradient(180deg, #13151f 0%, #0d0e14 100%)',
          border: '1.5px solid rgba(232,77,26,0.5)',
          borderRadius: '12px',
          padding: '10px',
          boxShadow: '0 8px 24px rgba(232,77,26,0.15)',
          width: '85%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* High-Res Rendered QR Code Graphic */}
        <div
          style={{
            background: '#FFF',
            padding: '6px',
            borderRadius: '6px',
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <svg width="76" height="76" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="white" />
            {/* Outer Markers */}
            <rect x="5" y="5" width="28" height="28" fill="black" />
            <rect x="9" y="9" width="20" height="20" fill="white" />
            <rect x="13" y="13" width="12" height="12" fill="black" />

            <rect x="67" y="5" width="28" height="28" fill="black" />
            <rect x="71" y="9" width="20" height="20" fill="white" />
            <rect x="75" y="13" width="12" height="12" fill="black" />

            <rect x="5" y="67" width="28" height="28" fill="black" />
            <rect x="9" y="71" width="20" height="20" fill="white" />
            <rect x="13" y="75" width="12" height="12" fill="black" />

            {/* Random Matrix Pattern simulation */}
            <rect x="40" y="8" width="6" height="6" fill="black" />
            <rect x="52" y="8" width="6" height="6" fill="black" />
            <rect x="40" y="20" width="6" height="6" fill="black" />
            <rect x="52" y="26" width="6" height="6" fill="black" />
            <rect x="46" y="32" width="6" height="6" fill="black" />
            
            <rect x="8" y="40" width="6" height="6" fill="black" />
            <rect x="20" y="40" width="6" height="6" fill="black" />
            <rect x="26" y="52" width="6" height="6" fill="black" />

            <rect x="40" y="44" width="20" height="20" fill="#E84D1A" rx="4" />
            <text x="44" y="59" fill="white" fontSize="16" fontWeight="900" fontFamily="sans-serif">Ú</text>

            <rect x="67" y="40" width="6" height="6" fill="black" />
            <rect x="79" y="46" width="6" height="6" fill="black" />
            <rect x="85" y="58" width="6" height="6" fill="black" />
            <rect x="67" y="67" width="6" height="6" fill="black" />
            <rect x="79" y="79" width="6" height="6" fill="black" />
            <rect x="85" y="85" width="6" height="6" fill="black" />
            <rect x="40" y="75" width="6" height="6" fill="black" />
            <rect x="52" y="81" width="6" height="6" fill="black" />
          </svg>
        </div>

        <button
          style={{
            background: '#FFC700',
            color: '#000',
            border: 'none',
            borderRadius: '20px',
            padding: '3px 8px',
            fontWeight: '900',
            fontSize: '6.5px',
            letterSpacing: '0.05em',
            display: 'flex',
            alignItems: 'center',
            gap: '3px'
          }}
        >
          📱 USE TOUCH COUNTER
        </button>
      </div>

      {/* Instructions */}
      <div style={{ padding: '0 4px' }}>
        <div style={{ color: '#FFF', fontWeight: '800', fontSize: '7.5px', marginBottom: '2px' }}>COUNT TOUCHES ON PITCH</div>
        <div style={{ color: '#94a3b8', fontSize: '6px', lineHeight: 1.3 }}>
          Scan with your phone camera to launch the Touch Counter instantly. Zero downloads required.
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 5. AI PLAYER AGENT SCREEN                                                  */
/* -------------------------------------------------------------------------- */
export const PhoneAIAgentScreen: React.FC = () => {
  return (
    <div
      style={{
        padding: '6px',
        background: '#090a0e',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        fontSize: '7px'
      }}
    >
      {/* Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px', borderBottom: '1px solid #1a1d28', paddingBottom: '3px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
            <Sparkles size={9} style={{ color: '#FFC700' }} />
            <span style={{ color: '#FFF', fontWeight: '900', fontSize: '8.5px' }}>AiPlayerAgent</span>
          </div>
          <span style={{ background: 'rgba(34,197,94,0.2)', color: '#4ade80', fontSize: '5px', padding: '1px 4px', borderRadius: '3px', fontWeight: 700 }}>
            ● ONLINE MENTOR
          </span>
        </div>

        {/* AI Greeting Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)',
            border: '1px solid rgba(129,140,248,0.3)',
            borderRadius: '6px',
            padding: '5px',
            marginBottom: '6px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '4px'
          }}
        >
          <div style={{ background: '#4f46e5', padding: '3px', borderRadius: '50%', color: '#FFF', display: 'flex' }}>
            <Sparkles size={8} />
          </div>
          <div>
            <div style={{ color: '#c7d2fe', fontWeight: '800', fontSize: '6.5px' }}>Personal AI Coach</div>
            <div style={{ color: '#94a3b8', fontSize: '5.5px', lineHeight: 1.2, marginTop: '1px' }}>
              Ask me how to improve your technique, match tactics, fitness, or squad selection strategy!
            </div>
          </div>
        </div>

        {/* Suggested Prompt Chips */}
        <div style={{ fontSize: '5.5px', color: '#64748b', fontWeight: 700, marginBottom: '3px' }}>SUGGESTED QUESTIONS</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginBottom: '6px' }}>
          {[
            ' Why wasn\'t I picked for squad?',
            '⚡ How do I get faster on the ball?',
            '🥗 What should I eat before match?'
          ].map((chip, idx) => (
            <div
              key={idx}
              style={{
                background: '#161922',
                border: '1px solid #282e3d',
                borderRadius: '4px',
                padding: '3px 5px',
                color: '#e2e8f0',
                fontSize: '5.5px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{chip}</span>
              <ChevronRight size={6} style={{ color: '#64748b' }} />
            </div>
          ))}
        </div>

        {/* Chat Feed */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ alignSelf: 'flex-end', background: '#E84D1A', color: '#FFF', padding: '3px 6px', borderRadius: '6px 6px 0 6px', fontSize: '6px', maxWidth: '85%' }}>
            How do I stay calm during penalty kicks?
          </div>
          <div style={{ alignSelf: 'flex-start', background: '#1e293b', color: '#e2e8f0', padding: '4px 6px', borderRadius: '6px 6px 6px 0', fontSize: '5.5px', maxWidth: '90%', lineHeight: 1.25 }}>
            <span style={{ color: '#818cf8', fontWeight: 700 }}>AI Coach:</span> Pick your spot early, breathe deeply, and execute with 100% confidence. Never switch corners mid-run!
          </div>
        </div>
      </div>

      {/* Chat Input Bar */}
      <div style={{ display: 'flex', gap: '3px', background: '#161922', border: '1px solid #282e3d', borderRadius: '12px', padding: '2px 4px', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Ask AI Agent a question..."
          readOnly
          style={{
            background: 'transparent',
            border: 'none',
            color: '#FFF',
            fontSize: '5.5px',
            width: '100%',
            outline: 'none'
          }}
        />
        <div style={{ background: '#E84D1A', width: '12px', height: '12px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', flexShrink: 0 }}>
          <Send size={6} />
        </div>
      </div>
    </div>
  );
};
