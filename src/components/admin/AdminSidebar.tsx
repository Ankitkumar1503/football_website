import React from 'react';
import { TOUCHES_LOGO_HEADER } from '../../assets/images';

interface AdminSidebarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ currentPath, onNavigate }) => {
  const navItems = [
    {
      path: '/admin/dashboard',
      label: 'Dashboard',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
        </svg>
      ),
    },
    {
      path: '/admin/users',
      label: 'Users',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      path: '/admin/payments',
      label: 'Payments',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      ),
    },
    {
      path: '/admin/analytics',
      label: 'Analytics',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
  ];

  const isActive = (itemPath: string) => {
    if (itemPath === '/admin/dashboard') {
      return currentPath === '/admin/dashboard' || currentPath === '/admin' || currentPath === '/admin/';
    }
    return currentPath.startsWith(itemPath);
  };

  return (
    <aside style={{
      width: '240px',
      background: '#0F172A',
      color: '#F8FAFC',
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '20px 16px',
      zIndex: 1000,
      boxShadow: '4px 0 20px rgba(0,0,0,0.05)',
      boxSizing: 'border-box',
      textAlign: 'left',
      borderRight: '1px solid rgba(255,255,255,0.06)'
    }}>
      <div style={{ width: '100%' }}>
        {/* LOGO BRAND */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px', padding: '0 4px' }}>
          <img src={TOUCHES_LOGO_HEADER} alt="TOUCHES" style={{ height: '18px', width: 'auto', display: 'block' }} />
          <span style={{
            fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            background: 'rgba(232, 77, 26, 0.2)',
            color: '#E84D1A',
            padding: '2px 7px',
            borderRadius: '4px',
            border: '1px solid rgba(232, 77, 26, 0.3)'
          }}>
            ADMIN
          </span>
        </div>

        {/* MENU HEADER */}
        <div style={{
          fontFamily: "Inter, system-ui, -apple-system, sans-serif",
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#64748B',
          marginBottom: '10px',
          padding: '0 8px'
        }}>
          Navigation
        </div>

        {/* NAV ITEMS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.path);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '9px 12px',
                  borderRadius: '7px',
                  background: active ? 'rgba(232, 77, 26, 0.15)' : 'transparent',
                  color: active ? '#FFFFFF' : '#94A3B8',
                  fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                  fontWeight: active ? 600 : 500,
                  fontSize: '13.5px',
                  textDecoration: 'none',
                  position: 'relative',
                  transition: 'all 0.15s ease',
                  borderLeft: active ? '3px solid #E84D1A' : '3px solid transparent'
                }}
              >
                <span style={{ color: active ? '#E84D1A' : '#64748B', display: 'flex', alignItems: 'center' }}>
                  {item.icon}
                </span>
                {item.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* FOOTER LINKS */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '14px', width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <button
          type="button"
          onClick={() => {
            localStorage.removeItem('isAdminLoggedIn');
            onNavigate('/admin/login');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '9px 12px',
            borderRadius: '6px',
            background: 'rgba(239, 68, 68, 0.12)',
            color: '#FCA5A5',
            fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            fontSize: '13px',
            fontWeight: 500,
            border: '1px solid rgba(239, 68, 68, 0.25)',
            cursor: 'pointer',
            width: '100%',
            textAlign: 'left'
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Logout
        </button>

        <a
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '9px 12px',
            borderRadius: '6px',
            background: 'rgba(255,255,255,0.04)',
            color: '#CBD5E1',
            fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            fontSize: '13px',
            fontWeight: 500,
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.08)',
            transition: 'background 0.2s'
          }}
        >
          <span style={{ color: '#E84D1A' }}>←</span> Back to Main App
        </a>
      </div>
    </aside>
  );
};
