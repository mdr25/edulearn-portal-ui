'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import '@/styles/dashboard.css';
import LeftSidebar from '@/components/dashboard/LeftSidebar';
import RightSidebar from '@/components/dashboard/RightSidebar';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Profile page in legacy was full-width header without right sidebar
  const isProfilePage = pathname === '/dashboard/profile';

  return (
    <div className="dashboard-root position-relative min-vh-100">
      {/* Left Navigation Sidebar */}
      <LeftSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Right User & Progress Sidebar (hidden on profile page to match legacy layout) */}
      {!isProfilePage && <RightSidebar />}

      {/* Mobile Offcanvas Backdrop */}
      <div
        className={`slider-background ${isSidebarOpen ? 'active' : ''}`}
        id="sliders-background"
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* Main Content View */}
      <div className={`main-pages ${isProfilePage ? 'full-width' : ''}`}>
        {/* Mobile Header Bar with Burger Trigger */}
        <div className="d-lg-none d-flex align-items-center justify-content-between p-2 mb-3 bg-white rounded shadow-sm">
          <button
            type="button"
            id="btn-slider"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="btn btn-light border"
            aria-label="Toggle navigation"
          >
            <i className="bx bx-menu fs-4"></i>
          </button>
          <span className="fw-bold text-primary">MDR Dashboard</span>
          <div style={{ width: '40px' }}></div>
        </div>

        {/* Dynamic Page Content */}
        <div className="page-content flex-grow-1">{children}</div>

        {/* Persistent Sticky Footer */}
        <div className="footer-bottom py-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 text-center">
                <p className="m-0 text-muted small">
                  Copyright &copy; {new Date().getFullYear()} MDR - Learning Management System. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
