'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RightSidebar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div id="sliders" className="slider-right">
      <div className="slider-head-right">
        <div className="d-block p-4">
          <div className="d-flex align-items-center position-relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/profile.jpg" style={{ borderRadius: '18px' }} width="50" height="50" alt="Dihya Ramdhan" />
            <div className="ms-3">
              <button
                type="button"
                className="profil btn btn-link p-0 text-decoration-none"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{ color: '#1e3953', fontWeight: 600 }}
              >
                Dihya Ramdhan <i className="bx bx-chevron-down fs-5 align-text-top"></i>
              </button>
              {dropdownOpen && (
                <ul
                  className="dropdown-menu show shadow-sm"
                  style={{ position: 'absolute', top: '55px', left: '0', zIndex: 1000, display: 'block' }}
                >
                  <li>
                    <Link className="dropdown-item" href="/dashboard/profile" onClick={() => setDropdownOpen(false)}>
                      <i className="bx bx-user-circle fs-5 me-1 align-text-top"></i> Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/dashboard" onClick={() => setDropdownOpen(false)}>
                      <i className="bx bx-tachometer fs-5 me-1 align-text-top"></i> Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/dashboard/settings" onClick={() => setDropdownOpen(false)}>
                      <i className="bx bx-cog fs-5 me-1 align-text-top"></i> Settings
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/" onClick={() => setDropdownOpen(false)}>
                      <i className="bx bx-log-out-circle fs-5 me-1 align-text-top"></i> Logout
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="slider-body-right p-4" style={{ overflowY: 'auto', height: 'calc(100vh - 100px)' }}>
        <h5 className="m-0 fw-bold">Progress</h5>
        <div className="d-flex mt-4">
          <i className="bx bx-pencil fs-4 p-2 align-text-top rounded" style={{ backgroundColor: '#d0d9fa', color: '#5e81f4', height: 'fit-content' }}></i>
          <div className="ms-3 w-100">
            <h6 className="mb-2">UI/UX Design</h6>
            <div className="progress" style={{ height: '10px', backgroundColor: '#d0d9fa' }}>
              <div
                className="progress-bar rounded-pill"
                role="progressbar"
                style={{ width: '75%', backgroundColor: '#5e81f4' }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
        </div>

        <div className="d-flex mt-3">
          <i className="bx bx-code-alt fs-4 p-2 align-text-top rounded" style={{ backgroundColor: '#d0d9fa', color: '#5e81f4', height: 'fit-content' }}></i>
          <div className="ms-3 w-100">
            <h6 className="mb-2">Web Development</h6>
            <div className="progress" style={{ height: '10px', backgroundColor: '#d0d9fa' }}>
              <div
                className="progress-bar rounded-pill"
                role="progressbar"
                style={{ width: '60%', backgroundColor: '#5e81f4' }}
                aria-valuenow={60}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h5 className="m-0 fw-bold">Upcoming Schedule</h5>
          <div className="card border-0 shadow-sm rounded-3 mt-3 p-3" style={{ backgroundColor: '#fff' }}>
            <h6 className="m-0 fw-bold text-dark">3D Animation Workshop</h6>
            <small className="text-muted">Friday, 15:00 - 17:00</small>
          </div>
          <div className="card border-0 shadow-sm rounded-3 mt-2 p-3" style={{ backgroundColor: '#fff' }}>
            <h6 className="m-0 fw-bold text-dark">Frontend Mentoring</h6>
            <small className="text-muted">Saturday, 10:00 - 12:00</small>
          </div>
        </div>

        <div className="pt-4 text-center">
          <Link href="/dashboard/upgrade">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/csright.png" style={{ borderRadius: '20px', maxWidth: '100%' }} alt="Premium Upgrade" />
          </Link>
        </div>
      </div>
    </div>
  );
}
