import React, { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { generateLoginTokenApi } from '../services/api';
import { useStats } from '../context/StatsContext';

export const UserQRCodeSection: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const { userToken } = useStats();
  const [qrUrl, setQrUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    generateLoginTokenApi(userToken)
      .then((res) => {
        if (isMounted && res.url) {
          setQrUrl(res.url);
        }
      })
      .catch((err) => {
        console.warn('QR token generation notice:', err.message);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [userToken]);

  return (
    <div
      style={{
        marginTop: compact ? '12px' : '20px',
        padding: compact ? '14px' : '18px 20px',
        background: '#161618',
        borderRadius: '14px',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: compact ? '8px' : '12px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ fontSize: compact ? '14px' : '16px' }}>📱</span>
        <h5
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: compact ? '13px' : '15px',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#10B981',
            margin: 0,
          }}
        >
          Scan to continue on your phone
        </h5>
      </div>

      {loading ? (
        <div style={{ height: compact ? '110px' : '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>
          Generating secure QR...
        </div>
      ) : qrUrl ? (
        <>
          <div style={{ background: '#FFFFFF', padding: '10px', borderRadius: '10px', display: 'inline-block' }}>
            <QRCodeSVG
              value={qrUrl}
              size={compact ? 110 : 135}
              bgColor="#FFFFFF"
              fgColor="#000000"
              level="M"
            />
          </div>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.4 }}>
            Scan with your mobile phone camera to open in app mode logged in instantly.
          </p>
        </>
      ) : (
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
          QR Code unavailable
        </p>
      )}
    </div>
  );
};
