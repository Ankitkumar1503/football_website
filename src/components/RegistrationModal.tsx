import React, { useState } from 'react';
import { useStats } from '../context/StatsContext';
import { LEFT_FOOTER_BADGE, RIGHT_FOOTER_BADGE } from '../assets/images';
import { UserQRCodeSection } from './UserQRCodeSection';

interface RegistrationModalProps {
  isOpen: boolean;
  foot: 'left' | 'right';
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, foot: initialFoot, onClose }) => {
  const { registerPlayer, registeredUser, clearRegistration } = useStats();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [foot, setFoot] = useState<'left' | 'right'>(initialFoot || 'left');
  const [country, setCountry] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [position, setPosition] = useState('');
  const [noteToCoach, setNoteToCoach] = useState('');
  const [showAddress, setShowAddress] = useState(false);
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);
    const firstName = name.trim().split(' ')[0] || name;
    const lastName = name.trim().split(' ').slice(1).join(' ') || '';

    try {
      await registerPlayer({
        name,
        firstName,
        lastName,
        email,
        password,
        footPreference: foot,
        country: country || 'Canada',
        ageGroup: ageGroup || undefined,
        position: position || undefined,
        noteToCoach: noteToCoach || undefined,
        address: showAddress ? { street, city, zipCode } : undefined,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isLeft = foot === 'left';
  const badgeImg = isLeft ? LEFT_FOOTER_BADGE : RIGHT_FOOTER_BADGE;
  const titleText = isLeft ? 'LEFT FOOTER REGISTRATION' : 'RIGHT FOOTER REGISTRATION';
  const titleColor = isLeft ? 'var(--left-color)' : 'var(--right-color)';

  return (
    <div className="modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
          <img src={badgeImg} style={{ width: '52px', height: '52px', objectFit: 'contain', borderRadius: '50%' }} alt="Badge" />
          <div>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '24px', fontWeight: 800, textTransform: 'uppercase', color: titleColor }}>
              {titleText}
            </h3>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>
              {registeredUser ? 'Player Registered' : 'Complete your registration'}
            </p>
          </div>
        </div>

        {!registeredUser ? (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* 1. DOMINANT FOOT (MOVED TO TOP) */}
            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <label style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
                DOMINANT FOOT <span style={{ color: '#E84D1A' }}>*</span>
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <button
                  type="button"
                  onClick={() => setFoot('left')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '12px',
                    borderRadius: '10px',
                    border: foot === 'left' ? '1.5px solid #E84D1A' : '1px solid rgba(255,255,255,0.2)',
                    background: foot === 'left' ? 'rgba(232,77,26,0.15)' : '#121212',
                    color: '#FFF',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer'
                  }}
                >
                  <img src={LEFT_FOOTER_BADGE} style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'contain' }} alt="Left" />
                  Left Footer
                </button>

                <button
                  type="button"
                  onClick={() => setFoot('right')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '12px',
                    borderRadius: '10px',
                    border: foot === 'right' ? '1.5px solid #1A8AE8' : '1px solid rgba(255,255,255,0.2)',
                    background: foot === 'right' ? 'rgba(26,138,232,0.15)' : '#121212',
                    color: '#FFF',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer'
                  }}
                >
                  <img src={RIGHT_FOOTER_BADGE} style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'contain' }} alt="Right" />
                  Right Footer
                </button>
              </div>
            </div>

            {/* 2. NAME (50%) + EMAIL (50%) */}
            <div className="form-row-2col">
              <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
                  NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: '#121212',
                    color: '#FFF',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: '#121212',
                    color: '#FFF',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* 3. PASSWORD (50%) + COUNTRY (50%) */}
            <div className="form-row-2col">
              <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
                  PASSWORD
                </label>
                <input
                  type="password"
                  placeholder="Min. 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: '#121212',
                    color: '#FFF',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
                  COUNTRY
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: '#121212',
                    color: '#FFF',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                >
                  <option value="">Select country</option>
                  <option value="Canada">Canada</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Spain">Spain</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                  <option value="Italy">Italy</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* 4. AGE GROUP (50%) + POSITION (50%) */}
            <div className="form-row-2col">
              <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
                  AGE GROUP
                </label>
                <select
                  value={ageGroup}
                  onChange={(e) => setAgeGroup(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: '#121212',
                    color: '#FFF',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                >
                  <option value="">Select age</option>
                  <option value="Under 12">Under 12</option>
                  <option value="U-13 to U-15">U-13 to U-15</option>
                  <option value="U-16 to U-18">U-16 to U-18</option>
                  <option value="18+ / Senior">18+ / Senior</option>
                </select>
              </div>

              <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
                  POSITION
                </label>
                <select
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: '#121212',
                    color: '#FFF',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                >
                  <option value="">Select position</option>
                  <option value="Forward / Striker">Forward / Striker</option>
                  <option value="Winger (LW/RW)">Winger (LW/RW)</option>
                  <option value="Attacking Midfielder (CAM)">Attacking Midfielder (CAM)</option>
                  <option value="Central Midfielder (CM)">Central Midfielder (CM)</option>
                  <option value="Defensive Midfielder (CDM)">Defensive Midfielder (CDM)</option>
                  <option value="Full-back (LB/RB)">Full-back (LB/RB)</option>
                  <option value="Center-back (CB)">Center-back (CB)</option>
                  <option value="Goalkeeper (GK)">Goalkeeper (GK)</option>
                </select>
              </div>
            </div>

            {/* EVALUATION SECTION */}
            <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '15px', fontWeight: 800, letterSpacing: '0.12em', color: '#1A8AE8', textTransform: 'uppercase', margin: 0 }}>
                EVALUATION
              </h4>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5, margin: 0 }}>
                Tell us about your current level and what you want to improve — this helps build your player profile.
              </p>

              <div style={{ marginTop: '6px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em', color: '#10B981', textTransform: 'uppercase' }}>
                  NOTE TO COACH
                </label>
                <textarea
                  rows={4}
                  placeholder="Share goals, strengths, or what you want your coach to know..."
                  value={noteToCoach}
                  onChange={(e) => setNoteToCoach(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: '#121212',
                    color: '#FFF',
                    fontSize: '14px',
                    resize: 'vertical',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* MAILING ADDRESS TOGGLE */}
            <div style={{
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.15)',
              background: '#121212',
              overflow: 'hidden'
            }}>
              <button
                type="button"
                onClick={() => setShowAddress(!showAddress)}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'transparent',
                  border: 'none',
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '13px',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '20px' }}>📿</span>
                  <span>Add mailing address (optional — silver soccer ball necklace with app)</span>
                </div>
                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{showAddress ? '−' : '+'}</span>
              </button>

              {showAddress && (
                <div style={{ padding: '0 16px 16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <input
                    type="text"
                    placeholder="Street Address"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', background: '#1A1A1A', color: '#FFF', fontSize: '13px' }}
                  />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <input
                      type="text"
                      placeholder="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', background: '#1A1A1A', color: '#FFF', fontSize: '13px' }}
                    />
                    <input
                      type="text"
                      placeholder="Zip / Postal Code"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', background: '#1A1A1A', color: '#FFF', fontSize: '13px' }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '12px',
                border: 'none',
                background: '#E84D1A',
                color: '#FFF',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '18px',
                fontWeight: 900,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                marginTop: '8px',
                boxShadow: '0 8px 24px rgba(232,77,26,0.35)',
                transition: 'all 0.2s'
              }}
            >
              {isSubmitting ? 'JOINING...' : 'JOIN THE CLUB — FREE'}
            </button>
          </form>
        ) : (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div className="checkmark">✓</div>
            <h4 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '22px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '6px' }}>
              You're Registered!
            </h4>
            <p style={{ fontSize: '13px', color: '#FFF', fontWeight: 600, marginBottom: '4px' }}>
              Welcome back, {registeredUser.name || registeredUser.firstName}!
            </p>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>
              Your {registeredUser.footPreference === 'left' ? 'Left' : 'Right'} foot registration is saved in the global index.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
              {registeredUser.paymentStatus !== 'paid' && (
                <a href="#download" className="btn btn-primary" onClick={onClose} style={{ fontSize: '12px', display: 'inline-flex' }}>
                  Download TOUCHES App — $22 →
                </a>
              )}
              <button
                type="button"
                onClick={clearRegistration}
                style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.5)', fontSize: '11px', textDecoration: 'underline', cursor: 'pointer' }}
              >
                Register Another Player
              </button>
            </div>

            {/* PERSISTENT MOBILE QR CODE SECTION */}
            <UserQRCodeSection compact />
          </div>
        )}
      </div>
    </div>
  );
};
