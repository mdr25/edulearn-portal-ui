'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LandingNavbar() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <nav className="navbar fixed-top navbar-expand-lg landing-navbar shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" href="#home">
          <i
            className="fas fa-dice-d20 fs-5"
            aria-hidden="true"
            style={{ color: '#fff', backgroundColor: '#5e81f4', padding: '10px 12px', borderRadius: '8px' }}
          ></i>
          <span className="ms-2">MDR</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          aria-controls="navbarNav"
          aria-expanded={!collapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${!collapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={() => setCollapsed(true)}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#category" onClick={() => setCollapsed(true)}>
                Category
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#course" onClick={() => setCollapsed(true)}>
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#class" onClick={() => setCollapsed(true)}>
                Class
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={() => setCollapsed(true)}>
                Contact
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link login" href="/dashboard">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
