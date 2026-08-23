import React, { useEffect, useState } from 'react';
import { fetchAdminUsers } from '../services/api';
import type { AdminUser } from '../types';
import { AdminSidebar } from '../components/admin/AdminSidebar';
import { DashboardOverview } from '../components/admin/DashboardOverview';
import { UsersPage } from '../components/admin/UsersPage';
import { PaymentsPage } from '../components/admin/PaymentsPage';
import { AnalyticsPage } from '../components/admin/AnalyticsPage';
import { AdminLoginPage } from './AdminLoginPage';

export const AdminDashboard: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    () => localStorage.getItem('isAdminLoggedIn') === 'true'
  );

  const [users, setUsers] = useState<AdminUser[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Sync route on popstate (browser back/forward)
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      setIsLoggedIn(localStorage.getItem('isAdminLoggedIn') === 'true');
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Client-side router navigation
  const handleNavigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    setIsLoggedIn(localStorage.getItem('isAdminLoggedIn') === 'true');
  };

  const loadData = async (targetPage: number) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchAdminUsers(targetPage, 10);
      setUsers(data.users || []);
      setTotal(data.pagination?.total ?? data.total ?? 0);
      setPage(data.pagination?.page ?? data.page ?? 1);
      setTotalPages(data.pagination?.totalPages ?? data.totalPages ?? 1);
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || 'Failed to load user directory');
    } finally {
      setLoading(false);
    }
  };

  // Load data when logged in
  useEffect(() => {
    if (isLoggedIn) {
      loadData(page);
    }
  }, [page, isLoggedIn]);

  // ROUTE GUARD: If visiting /admin/login OR not logged in, render AdminLoginPage
  if (currentPath === '/admin/login' || !isLoggedIn) {
    return (
      <AdminLoginPage
        onLoginSuccess={() => {
          setIsLoggedIn(true);
          handleNavigate('/admin/dashboard');
        }}
      />
    );
  }

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return 'N/A';
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  // Sub-route renderer
  const renderRouteContent = () => {
    if (currentPath.startsWith('/admin/users')) {
      return (
        <UsersPage
          users={users}
          total={total}
          page={page}
          totalPages={totalPages}
          loading={loading}
          error={error}
          onPrevPage={() => setPage((p) => Math.max(1, p - 1))}
          onNextPage={() => setPage((p) => Math.min(totalPages, p + 1))}
          formatDate={formatDate}
        />
      );
    }

    if (currentPath.startsWith('/admin/payments')) {
      return (
        <PaymentsPage
          users={users}
          loading={loading}
          error={error}
          formatDate={formatDate}
        />
      );
    }

    if (currentPath.startsWith('/admin/analytics')) {
      return <AnalyticsPage />;
    }

    // Default /admin or /admin/dashboard
    return (
      <DashboardOverview
        users={users}
        total={total}
        page={page}
        totalPages={totalPages}
        loading={loading}
        error={error}
        onPrevPage={() => setPage((p) => Math.max(1, p - 1))}
        onNextPage={() => setPage((p) => Math.min(totalPages, p + 1))}
        formatDate={formatDate}
      />
    );
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#F8FAFC',
      color: '#1E293B',
      fontFamily: "Inter, system-ui, -apple-system, sans-serif",
      display: 'flex'
    }}>
      {/* FIXED SIDEBAR */}
      <AdminSidebar currentPath={currentPath} onNavigate={handleNavigate} />

      {/* MAIN CONTENT CONTAINER */}
      <main style={{
        marginLeft: '240px',
        flex: 1,
        padding: '24px 32px',
        maxWidth: 'calc(100vw - 240px)',
        boxSizing: 'border-box'
      }}>
        {/* TOP BAR */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          borderBottom: '1px solid #E2E8F0',
          paddingBottom: '16px'
        }}>
          <div>
            <h1 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '22px',
              fontWeight: 800,
              color: '#0F172A',
              margin: 0,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              lineHeight: 1
            }}>
              TOUCHES ATHLETIC MANAGEMENT
            </h1>
            <p style={{ fontSize: '13px', color: '#64748B', margin: '4px 0 0', fontWeight: 400 }}>
              Real-time administration, player registry, and subscription performance metrics.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{
              fontSize: '11.5px',
              fontWeight: 600,
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              color: '#065F46',
              background: '#D1FAE5',
              padding: '5px 12px',
              borderRadius: '16px',
              border: '1px solid #A7F3D0'
            }}>
              ● Live Admin Telemetry Active
            </span>
          </div>
        </div>

        {/* ACTIVE SUB-ROUTE CONTENT */}
        {renderRouteContent()}
      </main>

      <style>{`
        .admin-table-row:hover {
          background-color: #F1F5F9 !important;
        }
      `}</style>
    </div>
  );
};
