import React from 'react';
import { SCREEN_1, LEFT_FOOTER_BADGE, RIGHT_FOOTER_BADGE } from '../assets/images';

interface FunSectionProps {
  onOpenModal: (foot: 'left' | 'right') => void;
}

export const FunSection: React.FC<FunSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="fun-section" style={{ background: '#111', padding: '100px 5%', position: 'relative', overflow: 'hidden' }}>
      <div className="fun-inner" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(300px, 400px) 1fr', gap: '64px', alignItems: 'center' }}>
        
        {/* Left Column: Standalone Orange Splash Phone Mockup */}
        <div className="fun-phone-col" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="phone-frame" style={{
            position: 'relative',
            width: '290px',
            height: '580px',
            borderRadius: '42px',
            background: '#000',
            padding: '12px',
            boxShadow: '0 30px 60px rgba(0,0,0,0.8), 0 0 30px rgba(232,77,26,0.15)',
            border: '4px solid #282828'
          }}>
            <img src={SCREEN_1} style={{ width: '100%', height: '100%', borderRadius: '32px', objectFit: 'cover' }} alt="TOUCHES Splash Screen" />
          </div>
        </div>

        {/* Right Column: Complete Content Block */}
        <div className="fun-content-col" style={{ textAlign: 'left' }}>
          <div className="fun-eyebrow" style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#E84D1A',
            marginBottom: '16px'
          }}>
            THE FOOTBALLER ATHLETICS CLUB · EST. 1986
          </div>
          
          <h2 className="fun-heading" style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 900,
            lineHeight: 1.0,
            textTransform: 'uppercase',
            letterSpacing: '-0.01em',
            margin: '0 0 20px',
            color: '#FFF'
          }}>
            FOOTBALLERS HAVING FUN.<br />
            <span style={{ color: '#E84D1A' }}>GETTING THEIR TOUCHES.</span>
          </h2>
          
          <p className="fun-desc" style={{
            fontSize: '15px',
            fontWeight: 300,
            color: 'rgba(255, 255, 255, 0.65)',
            lineHeight: 1.7,
            maxWidth: '540px',
            marginBottom: '36px'
          }}>
            From grassroots to the global stage — every touch counts. Every pass. Every shot. Every goal. The TOUCHES App was built to track every single one of them. This is football. This is your game.
          </p>
          
          {/* VS Comparison Block */}
          <div className="fun-vs-block" style={{ display: 'flex', alignItems: 'center', gap: '36px', marginBottom: '36px' }}>
            <div className="fun-badge-item" style={{ textAlign: 'center' }}>
              <img src={LEFT_FOOTER_BADGE} style={{
                width: '110px',
                height: '110px',
                objectFit: 'contain',
                borderRadius: '50%',
                filter: 'drop-shadow(0 0 20px rgba(232,77,26,0.35))'
              }} alt="Left Footer" />
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '14px',
                fontWeight: 800,
                color: '#E84D1A',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                marginTop: '12px'
              }}>LEFT FOOTER</div>
              <div style={{ fontStyle: 'italic', fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>"The Rare Breed"</div>
            </div>

            <div className="fun-vs-center" style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '36px',
                fontWeight: 900,
                color: 'rgba(255,255,255,0.2)',
                lineHeight: 1
              }}>VS</div>
              <div style={{
                fontSize: '9px',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.35)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginTop: '6px'
              }}>WHICH ONE ARE YOU?</div>
            </div>

            <div className="fun-badge-item" style={{ textAlign: 'center' }}>
              <img src={RIGHT_FOOTER_BADGE} style={{
                width: '110px',
                height: '110px',
                objectFit: 'contain',
                borderRadius: '50%',
                filter: 'drop-shadow(0 0 20px rgba(26,138,232,0.35))'
              }} alt="Right Footer" />
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '14px',
                fontWeight: 800,
                color: '#1A8AE8',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                marginTop: '12px'
              }}>RIGHT FOOTER</div>
              <div style={{ fontStyle: 'italic', fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>"The Dominant Foot"</div>
            </div>
          </div>

          <div className="fun-motto-quote" style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            fontWeight: 800,
            textTransform: 'uppercase',
            fontStyle: 'italic',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '28px'
          }}>
            "Play Like You Always Have The Ball"
          </div>

          <div className="fun-cta-buttons" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => onOpenModal('left')} style={{ padding: '14px 26px', fontSize: '13px', borderRadius: '4px' }}>
              I'M LEFT FOOTER — REGISTER
            </button>
            <button className="btn btn-ghost" onClick={() => onOpenModal('right')} style={{ padding: '14px 26px', fontSize: '13px', borderRadius: '4px', borderColor: '#1A8AE8', color: '#1A8AE8' }}>
              I'M RIGHT FOOTER — REGISTER
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

