import React, { useState } from 'react';
import type { AdminUser } from '../../types';

interface PaymentsPageProps {
  users: AdminUser[];
  loading: boolean;
  error: string | null;
  formatDate: (d?: string) => string;
}

export const PaymentsPage: React.FC<PaymentsPageProps> = ({ users, loading, error, formatDate }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const paidUsers = users.filter((u) => u.paymentStatus === 'paid');
  const filteredPaid = paidUsers.filter((u) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return u.name.toLowerCase().includes(term) || u.email.toLowerCase().includes(term);
  });

  const totalRevenue = paidUsers.length * 22;

  return (
    <div>
      {/* PAYMENTS STAT SUMMARY CARDS */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '20px',
        marginBottom: '24px'
      }}>
        {/* REVENUE CARD */}
        <div style={{
          background: 'linear-gradient(135deg, #065F46 0%, #047857 100%)',
          borderRadius: '12px',
          padding: '20px 22px',
          color: '#FFFFFF',
          boxShadow: '0 4px 14px rgba(0,0,0,0.06)'
        }}>
          <div style={{
            fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#A7F3D0',
            marginBottom: '6px'
          }}>
            Estimated Total Revenue
          </div>
          <div style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '26px',
            fontWeight: 900,
            lineHeight: 1,
            color: '#FFFFFF'
          }}>
            ${totalRevenue.toFixed(2)} <span style={{ fontSize: '13px', fontWeight: 600, color: '#A7F3D0' }}>USD</span>
          </div>
          <div style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.7)', marginTop: '6px' }}>
            Calculated at $22.00 per verified app download
          </div>
        </div>

        {/* PAID SUBSCRIBERS COUNT */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '12px',
          padding: '20px 22px',
          border: '1px solid #E5E7EB',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          borderLeft: '4px solid #10B981'
        }}>
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
            color: '#111827',
            lineHeight: 1
          }}>
            {paidUsers.length} <span style={{ fontSize: '13px', fontWeight: 600, color: '#10B981' }}>VERIFIED</span>
          </div>
          <div style={{ fontSize: '11.5px', color: '#6B7280', marginTop: '6px' }}>
            Active TOUCHES App single-license purchases
          </div>
        </div>

        {/* AVERAGE ORDER VALUE */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '12px',
          padding: '20px 22px',
          border: '1px solid #E5E7EB',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
        }}>
          <div style={{
            fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#6B7280',
            marginBottom: '6px'
          }}>
            License Pricing
          </div>
          <div style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '26px',
            fontWeight: 900,
            color: '#111827',
            lineHeight: 1
          }}>
            $22.00 <span style={{ fontSize: '13px', fontWeight: 600, color: '#6B7280' }}>/ FLAT RATE</span>
          </div>
          <div style={{ fontSize: '11.5px', color: '#6B7280', marginTop: '6px' }}>
            One-time purchase · Lifetime access · No subscription
          </div>
        </div>
      </div>

      {/* PAYMENTS TABLE CARD */}
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
              Paid Subscribers &amp; Transactions
            </h2>
            <span style={{ fontSize: '12px', color: '#6B7280', marginTop: '2px', display: 'block' }}>
              Directory of users who completed the $22 TOUCHES app purchase
            </span>
          </div>

          <div style={{ position: 'relative', width: '260px' }}>
            <input
              type="text"
              placeholder="Search paid subscriber..."
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
            Loading paid subscribers...
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
                  <th style={{ padding: '12px 20px', fontFamily: "Inter, system-ui, -apple-system, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em', color: '#4B5563', textTransform: 'uppercase' }}>
                    SUBSCRIBER NAME
                  </th>
                  <th style={{ padding: '12px 20px', fontFamily: "Inter, system-ui, -apple-system, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em', color: '#4B5563', textTransform: 'uppercase' }}>
                    EMAIL ADDRESS
                  </th>
                  <th style={{ padding: '12px 20px', fontFamily: "Inter, system-ui, -apple-system, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em', color: '#4B5563', textTransform: 'uppercase' }}>
                    AMOUNT PAID
                  </th>
                  <th style={{ padding: '12px 20px', fontFamily: "Inter, system-ui, -apple-system, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em', color: '#4B5563', textTransform: 'uppercase' }}>
                    TRANSACTION DATE
                  </th>
                  <th style={{ padding: '12px 20px', fontFamily: "Inter, system-ui, -apple-system, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em', color: '#4B5563', textTransform: 'uppercase' }}>
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredPaid.length === 0 ? (
                  <tr>
                    <td colSpan={5} style={{ padding: '30px', textAlign: 'center', color: '#9CA3AF' }}>
                      No paid subscribers found matching your search.
                    </td>
                  </tr>
                ) : (
                  filteredPaid.map((user, idx) => (
                    <tr
                      key={user.id}
                      style={{
                        background: idx % 2 === 0 ? '#FFFFFF' : '#F9FAFB',
                        borderBottom: '1px solid #F3F4F6'
                      }}
                    >
                      <td style={{ padding: '13px 20px', fontWeight: 600, color: '#111827' }}>
                        {user.name}
                      </td>
                      <td style={{ padding: '13px 20px', color: '#4B5563' }}>
                        {user.email}
                      </td>
                      <td style={{ padding: '13px 20px', fontWeight: 700, color: '#059669' }}>
                        $22.00 USD
                      </td>
                      <td style={{ padding: '13px 20px', color: '#6B7280', fontSize: '12.5px' }}>
                        {formatDate(user.registrationDate)}
                      </td>
                      <td style={{ padding: '13px 20px' }}>
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
                          ✓ Completed
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        <div style={{
          padding: '14px 22px',
          borderTop: '1px solid #E5E7EB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#FAFAFA'
        }}>
          <div style={{ fontSize: '12.5px', color: '#6B7280', fontWeight: 500 }}>
            Showing {filteredPaid.length} verified paid transaction records
          </div>
        </div>
      </div>
    </div>
  );
};
