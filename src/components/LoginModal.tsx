import React, { useState } from 'react';
import { userLoginApi } from '../services/api';
import { useStats } from '../context/StatsContext';
import { TOUCHES_LOGO_HEADER } from '../assets/images';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const { loginUser } = useStats();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    if (!email.trim() || !password.trim()) return;

    setLoading(true);
    try {
      const res = await userLoginApi({ email: email.trim(), password: password.trim() });
      if (res.success && res.user && res.token) {
        loginUser(res.token, res.user);
        onClose();
      } else {
        setErrorMsg(res.message || 'Invalid email or password');
      }
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        setErrorMsg(err.response.data.message);
      } else {
        setErrorMsg('Invalid email or password');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" style={{ maxWidth: '420px', padding: '32px 28px' }}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div style={{ textAlign: 'center', marginBottom: '22px' }}>
          <img src={TOUCHES_LOGO_HEADER} alt="TOUCHES" style={{ height: '22px', marginBottom: '14px', display: 'inline-block' }} />
          <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '24px', fontWeight: 900, textTransform: 'uppercase', color: '#FFF', margin: '0 0 4px' }}>
            PLAYER LOGIN
          </h3>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
            Log back in to your TOUCHES player profile
          </p>
        </div>

        {errorMsg && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid rgba(239, 68, 68, 0.4)',
            borderRadius: '8px',
            padding: '10px 12px',
            marginBottom: '18px',
            color: '#FCA5A5',
            fontSize: '12.5px',
            textAlign: 'center',
            fontWeight: 600
          }}>
            ⚠️ {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
              EMAIL ADDRESS
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

          <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
              PASSWORD
            </label>
            <input
              type="password"
              required
              placeholder="Enter your password"
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

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '10px',
              border: 'none',
              background: '#E84D1A',
              color: '#FFF',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '16px',
              fontWeight: 900,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
              marginTop: '6px',
              boxShadow: '0 6px 20px rgba(232,77,26,0.35)'
            }}
          >
            {loading ? 'LOGGING IN...' : 'LOGIN TO TOUCHES'}
          </button>
        </form>
      </div>
    </div>
  );
};
