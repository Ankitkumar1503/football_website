import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { verifyPaymentSession, generateLoginTokenApi } from '../services/api';
import { TOUCHES_LOGO_HEADER } from '../assets/images';
import { useStats } from '../context/StatsContext';

export const PaymentSuccessPage: React.FC = () => {
  let markUserAsPaid: (() => void) | undefined;
  try {
    const stats = useStats();
    markUserAsPaid = stats.markUserAsPaid;
  } catch (e) {
    console.warn('StatsContext fallback in PaymentSuccessPage:', e);
  }
  const [verifying, setVerifying] = useState(true);
  const [verified, setVerified] = useState(false);
  const [amountPaid, setAmountPaid] = useState<number>(22.0);
  const [paymentDate, setPaymentDate] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [appUrl, setAppUrl] = useState<string | null>(null);
  const [loadingToken, setLoadingToken] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get('session_id');
    const userToken = localStorage.getItem('touches_user_token');

    if (!sessionId) {
      setVerifying(false);
      setErrorMessage('Missing session ID in payment confirmation URL.');
      return;
    }

    verifyPaymentSession(sessionId, userToken)
      .then((res) => {
        if (res.paid || res.success) {
          setVerified(true);
          if (markUserAsPaid) markUserAsPaid();
          if (res.amount) setAmountPaid(res.amount);
          if (res.paymentDate) {
            try {
              setPaymentDate(new Date(res.paymentDate).toLocaleDateString());
            } catch {
              setPaymentDate(new Date().toLocaleDateString());
            }
          } else {
            setPaymentDate(new Date().toLocaleDateString());
          }

          // Fetch personalized login URL for external app
          setLoadingToken(true);
          generateLoginTokenApi(userToken)
            .then((tokenRes) => {
              if (tokenRes.url) {
                setAppUrl(tokenRes.url);
              }
            })
            .catch((tokenErr) => {
              console.warn('Could not generate login token URL:', tokenErr.message);
              setAppUrl('http://localhost:5175');
            })
            .finally(() => setLoadingToken(false));
        } else {
          setErrorMessage('Payment status not verified. Session may be unpaid or cancelled.');
        }
      })
      .catch((err) => {
        console.error('Session verification error:', err);
        setErrorMessage('Unable to verify Stripe checkout session with backend.');
      })
      .finally(() => setVerifying(false));
  }, []);

  const handleCopyLink = () => {
    if (appUrl) {
      navigator.clipboard.writeText(appUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleOpenApp = () => {
    if (appUrl) {
      window.open(appUrl, '_blank');
    }
  };

  if (verifying) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#0A0A0A',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        boxSizing: 'border-box',
        fontFamily: "Inter, system-ui, -apple-system, sans-serif"
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            width: '100%',
            maxWidth: '460px',
            background: '#121214',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            padding: '44px 36px',
            textAlign: 'center'
          }}
        >
          <img src={TOUCHES_LOGO_HEADER} alt="TOUCHES" style={{ height: '24px', marginBottom: '28px', display: 'inline-block' }} />
          <div style={{ fontSize: '18px', fontWeight: 600, color: '#E84D1A', marginBottom: '12px' }}>
            Verifying Payment...
          </div>
          <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)' }}>
            Confirming your checkout session with Stripe. Please hold tight...
          </p>
        </motion.div>
      </div>
    );
  }

  if (errorMessage && !verified) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#0A0A0A',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        boxSizing: 'border-box',
        fontFamily: "Inter, system-ui, -apple-system, sans-serif"
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            width: '100%',
            maxWidth: '480px',
            background: '#121214',
            borderRadius: '20px',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 30px rgba(239, 68, 68, 0.15)',
            padding: '44px 36px',
            textAlign: 'center'
          }}
        >
          <img src={TOUCHES_LOGO_HEADER} alt="TOUCHES" style={{ height: '24px', marginBottom: '28px', display: 'inline-block' }} />
          <div style={{
            width: '68px',
            height: '68px',
            borderRadius: '50%',
            background: 'rgba(239, 68, 68, 0.15)',
            border: '2px solid #EF4444',
            color: '#EF4444',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            fontWeight: 800,
            margin: '0 auto 20px',
            boxShadow: '0 0 25px rgba(239, 68, 68, 0.3)'
          }}>
            ✕
          </div>
          <h1 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 'clamp(28px, 4vw, 36px)',
            fontWeight: 900,
            lineHeight: 1,
            textTransform: 'uppercase',
            letterSpacing: '-0.01em',
            color: '#FFFFFF',
            margin: '0 0 12px'
          }}>
            Verification Failed
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6, marginBottom: '24px' }}>
            {errorMessage}
          </p>
          <a
            href="/#download"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '14px',
              borderRadius: '8px',
              background: '#E84D1A',
              color: '#FFFFFF',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '16px',
              fontWeight: 800,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(232, 77, 26, 0.35)',
              boxSizing: 'border-box'
            }}
          >
            Try Checkout Again →
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0A0A0A',
      color: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px 24px',
      boxSizing: 'border-box',
      fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          width: '100%',
          maxWidth: '520px',
          background: '#121214',
          borderRadius: '24px',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.85), 0 0 40px rgba(16, 185, 129, 0.25)',
          padding: '40px 36px',
          textAlign: 'center'
        }}
      >
        <img src={TOUCHES_LOGO_HEADER} alt="TOUCHES" style={{ height: '26px', marginBottom: '20px', display: 'inline-block' }} />

        {/* Payment Confirmation Small Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(16, 185, 129, 0.12)',
          border: '1px solid rgba(16, 185, 129, 0.4)',
          borderRadius: '20px',
          padding: '6px 16px',
          marginBottom: '24px',
          fontSize: '12px',
          fontWeight: 700,
          color: '#10B981',
          letterSpacing: '0.04em'
        }}>
          <span>✓ ${amountPaid.toFixed(2)} USD Paid</span>
          <span style={{ opacity: 0.5 }}>•</span>
          <span>{paymentDate || 'Verified'}</span>
        </div>

        <h1 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 'clamp(26px, 4vw, 34px)',
          fontWeight: 900,
          lineHeight: 1.1,
          textTransform: 'uppercase',
          letterSpacing: '-0.01em',
          color: '#FFFFFF',
          margin: '0 0 10px'
        }}>
          Payment Successful!
        </h1>

        <p style={{
          fontSize: '14px',
          color: 'rgba(255, 255, 255, 0.7)',
          lineHeight: 1.5,
          marginBottom: '28px',
          maxWidth: '420px',
          margin: '0 auto 28px'
        }}>
          Scan this QR code with your mobile camera to open <strong style={{ color: '#E84D1A' }}>TOUCHES</strong> on your phone.
        </p>

        {/* QR Code Container */}
        <div style={{
          background: '#18181B',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          padding: '24px',
          marginBottom: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px'
        }}>
          {loadingToken ? (
            <div style={{ height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>
              Generating secure phone link QR...
            </div>
          ) : appUrl ? (
            <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '14px', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
              <QRCodeSVG
                value={appUrl}
                size={160}
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="M"
              />
            </div>
          ) : (
            <div style={{ height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>
              QR Code unavailable
            </div>
          )}

          {/* Installation Instructions */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.04)',
            borderRadius: '12px',
            padding: '14px 16px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            textAlign: 'left',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em', color: '#10B981', textTransform: 'uppercase', marginBottom: '8px' }}>
              📲 INSTALL AS APP ON YOUR PHONE
            </div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div>
                <strong style={{ color: '#FFF' }}>iOS (Safari):</strong> Tap <span style={{ color: '#38BDF8' }}>Share ➔</span> then select <span style={{ color: '#FFF', fontWeight: 600 }}>"Add to Home Screen"</span>
              </div>
              <div>
                <strong style={{ color: '#FFF' }}>Android (Chrome):</strong> Tap <span style={{ color: '#38BDF8' }}>⋮ Menu ➔</span> then select <span style={{ color: '#FFF', fontWeight: 600 }}>"Install App"</span> or <span style={{ color: '#FFF', fontWeight: 600 }}>"Add to Home Screen"</span>
              </div>
              <div style={{ marginTop: '6px', paddingTop: '8px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <strong style={{ color: '#FFF' }}>Direct Android APK:</strong>{' '}
                <a
                  href="/app/app-release.apk"
                  download="touches.apk"
                  style={{ color: '#10B981', textDecoration: 'underline', fontWeight: 600 }}
                >
                  Download touches.apk 📥
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={handleCopyLink}
            style={{
              flex: 1,
              minWidth: '140px',
              padding: '12px 16px',
              borderRadius: '10px',
              background: copied ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.08)',
              border: copied ? '1px solid #10B981' : '1px solid rgba(255, 255, 255, 0.18)',
              color: copied ? '#10B981' : '#FFFFFF',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '14px',
              fontWeight: 800,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {copied ? '✓ Link Copied!' : '📋 Copy Link'}
          </button>

          <button
            type="button"
            onClick={handleOpenApp}
            style={{
              flex: 1,
              minWidth: '140px',
              padding: '12px 16px',
              borderRadius: '10px',
              background: '#10B981',
              border: 'none',
              color: '#000000',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '14px',
              fontWeight: 800,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(16, 185, 129, 0.35)',
              transition: 'all 0.2s'
            }}
          >
            Open App ↗
          </button>
        </div>

        <a
          href="/"
          style={{
            display: 'inline-block',
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '13px',
            textDecoration: 'none',
            transition: 'color 0.2s'
          }}
        >
          Return to TOUCHES Homepage →
        </a>
      </motion.div>
    </div>
  );
};
