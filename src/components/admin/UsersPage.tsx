import React, { useState } from 'react';
import type { AdminUser } from '../../types';

interface UsersPageProps {
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

export const UsersPage: React.FC<UsersPageProps> = ({
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

  return (
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
            Registered Players Directory
          </h2>
          <span style={{ fontSize: '12px', color: '#6B7280', marginTop: '2px', display: 'block' }}>
            Complete list of all registered Left and Right footers worldwide
          </span>
        </div>

        <div style={{ position: 'relative', width: '260px' }}>
          <input
            type="text"
            placeholder="Search registered player..."
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
          Loading registered players...
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
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={4} style={{ padding: '30px', textAlign: 'center', color: '#9CA3AF' }}>
                    No players found matching your search.
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
                    >
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
  );
};
