import React from 'react';

export const AnalyticsPage: React.FC = () => {
  return (
    <div style={{
      background: '#FFFFFF',
      borderRadius: '12px',
      border: '1px solid #E5E7EB',
      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      padding: '60px 24px',
      textAlign: 'center'
    }}>
      <div style={{
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: 'rgba(232, 77, 26, 0.1)',
        color: '#E84D1A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 20px',
        border: '1px solid rgba(232, 77, 26, 0.25)'
      }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      </div>

      <h2 style={{
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        fontSize: '18px',
        fontWeight: 700,
        color: '#111827',
        margin: '0 0 8px'
      }}>
        Player Telemetry &amp; Match Day Analytics
      </h2>

      <p style={{
        fontSize: '14px',
        color: '#6B7280',
        maxWidth: '460px',
        margin: '0 auto 24px',
        lineHeight: 1.6
      }}>
        Advanced touch frequency maps, assist distribution charts, and regional cohort growth telemetry are coming soon to the TOUCHES Admin Panel.
      </p>

      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        fontSize: '12px',
        fontWeight: 600,
        color: '#E84D1A',
        background: '#FFF7ED',
        padding: '6px 16px',
        borderRadius: '20px',
        border: '1px solid #FFEDD5'
      }}>
        ● Feature in Development (Phase 4)
      </span>
    </div>
  );
};
