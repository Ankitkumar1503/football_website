import React, { useState } from 'react';
import type { AdminUser } from '../../types';

interface DashboardOverviewProps {
  users: AdminUser[];
  total: number;
  page: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
  onPrevPage: () => void;
  onNextPage: () => void;
  formatDate: (d?: string) => string;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  users,
  total,
  page,
  totalPages,
  loading,
  error,
  onPrevPage,
  onNextPage,
  formatDate,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter((u) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return u.name.toLowerCase().includes(term) || u.email.toLowerCase().includes(term);
  });

  const paidCount = users.filter((u) => u.paymentStatus === 'paid').length;
  const leftCount = users.filter((u) => u.footPreference === 'left').length;
  const rightCount = users.filter((u) => u.footPreference === 'right').length;
  const leftPct = users.length > 0 ? Math.round((leftCount / users.length) * 100) : 50;
  const rightPct = 100 - leftPct;

  return (
    <div>
      {/* 3 ASYMMETRICAL STAT CARDS */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr 1.2fr',
        gap: '20px',
        marginBottom: '24px'
      }}>
        
        {/* CARD 1: HERO STAT CARD (TOTAL IMPACT) */}
        <div style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          borderRadius: '12px',
          padding: '20px 24px',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
          border: '1px solid rgba(232, 77, 26, 0.3)'
        }}>
          <div style={{
            fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#E84D1A',
            marginBottom: '6px'
          }}>
            Total Registration Impact
          </div>

          <div style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '28px',
            fontWeight: 900,
            lineHeight: 1,
            color: '#FFFFFF',
            letterSpacing: '0.02em',
            marginBottom: '4px'
          }}>
            {total.toLocaleString()} <span style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>PLAYERS</span>
          </div>

          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
            Real-time registered player directory for TOUCHES app.
          </div>
        </div>

        {/* CARD 2: PAID PLAYERS STAT */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '12px',
          padding: '20px 22px',
          border: '1px solid #E5E7EB',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderLeft: '4px solid #10B981'
        }}>
          <div>
            <div style={{
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#6B7280',
              marginBottom: '6px'
            }}>
              Paid Subscribers
            </div>
            <div style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '26px',
              fontWeight: 900,
              color: '#065F46',
              lineHeight: 1
            }}>
              {paidCount} <span style={{ fontSize: '14px', fontWeight: 700, color: '#10B981' }}>($22 / user)</span>
            </div>
          </div>
          <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }}></span>
            App download revenue conversion
          </div>
        </div>

        {/* CARD 3: FOOT DOMINANCE RATIO */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '12px',
          padding: '20px 22px',
          border: '1px solid #E5E7EB',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#6B7280',
              marginBottom: '6px'
            }}>
              Foot Dominance Ratio
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '18px', fontWeight: 800, color: '#E84D1A' }}>
                LEFT {leftPct}% <span style={{ fontSize: '12px', color: '#6B7280', fontWeight: 600 }}>({leftCount})</span>
              </span>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '18px', fontWeight: 800, color: '#1A8AE8' }}>
                RIGHT {rightPct}% <span style={{ fontSize: '12px', color: '#6B7280', fontWeight: 600 }}>({rightCount})</span>
              </span>
            </div>
          </div>

          {/* DUAL COLOR PROGRESS BAR */}
          <div>
            <div style={{ height: '8px', width: '100%', borderRadius: '4px', overflow: 'hidden', display: 'flex', background: '#E2E8F0' }}>
              <div style={{ width: `${leftPct}%`, background: '#E84D1A', transition: 'width 0.4s' }}></div>
              <div style={{ width: `${rightPct}%`, background: '#1A8AE8', transition: 'width 0.4s' }}></div>
            </div>
          </div>
        </div>

      </div>

      {/* DIRECTORY TABLE CARD */}
      <div style={{
        background: '#FFFFFF',
        borderRadius: '12px',
        border: '1px solid #E5E7EB',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
        overflow: 'hidden'
      }}>
        
        {/* HEADER & SEARCH BOX */}
        <div style={{
          padding: '16px 22px',
          borderBottom: '1px solid #E5E7EB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          background: '#FAFAFA'
        }}>
          <div>
            <h2 style={{
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              fontSize: '16px',
              fontWeight: 700,
              color: '#111827',
              margin: 0
            }}>
              Overview Directory & Payments
            </h2>
            <span style={{ fontSize: '12px', color: '#6B7280', marginTop: '2px', display: 'block' }}>
              Master record of player profiles and app download status
            </span>
          </div>

          {/* SEARCH INPUT */}
          <div style={{ position: 'relative', width: '260px' }}>
            <input
              type="text"
              placeholder="Search player or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px 8px 34px',
                borderRadius: '6px',
                border: '1px solid #D1D5DB',
                background: '#FFFFFF',
                fontSize: '12.5px',
                color: '#1F2937',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>
              <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>

        {/* TABLE CONTENT */}
        {loading ? (
          <div style={{ padding: '40px 22px', textAlign: 'center', color: '#6B7280', fontSize: '13px' }}>
            Loading player records...
          </div>
        ) : error ? (
          <div style={{ padding: '40px 22px', textAlign: 'center', color: '#EF4444', fontSize: '13px' }}>
            ⚠️ {error}
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
                  <th style={{ width: '4px', padding: 0 }}></th>
                  <th style={{ padding: '12px 20px', fontFamily: "Inter, system-ui, -apple-system, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em', color: '#4B5563', textTransform: 'uppercase' }}>
                    PLAYER NAME
                  </th>
                  <th style={{ padding: '12px 20px', fontFamily: "Inter, system-ui, -apple-system, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em', color: '#4B5563', textTransform: 'uppercase' }}>
                    EMAIL ADDRESS
                  </th>
                  <th style={{ padding: '12px 20px', fontFamily: "Inter, system-ui, -apple-system, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em', color: '#4B5563', textTransform: 'uppercase' }}>
                    FOOTER TYPE
                  </th>
                  <th style={{ padding: '12px 20px', fontFamily: "Inter, system-ui, -apple-system, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em', color: '#4B5563', textTransform: 'uppercase' }}>
                    REGISTERED DATE
                  </th>
                  <th style={{ padding: '12px 20px', fontFamily: "Inter, system-ui, -apple-system, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em', color: '#4B5563', textTransform: 'uppercase' }}>
                    PAYMENT STATUS
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={6} style={{ padding: '30px', textAlign: 'center', color: '#9CA3AF' }}>
                      No player records match your search query.
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user, idx) => {
                    const isLeft = user.footPreference === 'left';
                    return (
                      <tr
                        key={user.id}
                        style={{
                          background: idx % 2 === 0 ? '#FFFFFF' : '#F9FAFB',
                          borderBottom: '1px solid #F3F4F6'
                        }}
                        className="admin-table-row"
                      >
                        <td style={{ background: isLeft ? '#E84D1A' : '#1A8AE8', width: '4px', padding: 0 }}></td>
                        
                        <td style={{ padding: '13px 20px', fontWeight: 600, color: '#111827' }}>
                          {user.name}
                        </td>
                        <td style={{ padding: '13px 20px', color: '#4B5563' }}>
                          {user.email}
                        </td>
                        <td style={{ padding: '13px 20px' }}>
                          <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            padding: '3px 10px',
                            borderRadius: '16px',
                            fontSize: '11.5px',
                            fontWeight: 600,
                            background: isLeft ? '#FFEDD5' : '#DBEAFE',
                            color: isLeft ? '#C2410C' : '#1E40AF',
                            border: isLeft ? '1px solid #FED7AA' : '1px solid #BFDBFE'
                          }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: isLeft ? '#EA580C' : '#2563EB' }}></span>
                            {isLeft ? 'Left Footer' : 'Right Footer'}
                          </span>
                        </td>
                        <td style={{ padding: '13px 20px', color: '#6B7280', fontSize: '12.5px' }}>
                          {formatDate(user.registrationDate)}
                        </td>
                        <td style={{ padding: '13px 20px' }}>
                          {user.paymentStatus === 'paid' ? (
                            <span style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              padding: '3px 10px',
                              borderRadius: '16px',
                              fontSize: '11.5px',
                              fontWeight: 600,
                              background: '#D1FAE5',
                              color: '#065F46',
                              border: '1px solid #A7F3D0'
                            }}>
                              ✓ Paid ($22)
                            </span>
                          ) : (
                            <span style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              padding: '3px 10px',
                              borderRadius: '16px',
                              fontSize: '11.5px',
                              fontWeight: 500,
                              background: '#F3F4F6',
                              color: '#6B7280',
                              border: '1px solid #E5E7EB'
                            }}>
                              Unpaid
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* PAGINATION FOOTER */}
        <div style={{
          padding: '14px 22px',
          borderTop: '1px solid #E5E7EB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#FAFAFA'
        }}>
          <div style={{ fontSize: '12.5px', color: '#6B7280', fontWeight: 500 }}>
            Page {page} of {totalPages} — Total {total} player records
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              type="button"
              onClick={onPrevPage}
              disabled={page <= 1 || loading}
              style={{
                padding: '6px 14px',
                borderRadius: '5px',
                border: '1px solid #D1D5DB',
                background: page <= 1 ? '#F3F4F6' : '#FFFFFF',
                color: page <= 1 ? '#9CA3AF' : '#111827',
                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                fontSize: '12.5px',
                fontWeight: 500,
                cursor: page <= 1 ? 'not-allowed' : 'pointer'
              }}
            >
              Previous
            </button>

            <button
              type="button"
              onClick={onNextPage}
              disabled={page >= totalPages || loading}
              style={{
                padding: '6px 14px',
                borderRadius: '5px',
                border: '1px solid #D1D5DB',
                background: page >= totalPages ? '#F3F4F6' : '#FFFFFF',
                color: page >= totalPages ? '#9CA3AF' : '#111827',
                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                fontSize: '12.5px',
                fontWeight: 500,
                cursor: page >= totalPages ? 'not-allowed' : 'pointer'
              }}
            >
              Next
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
