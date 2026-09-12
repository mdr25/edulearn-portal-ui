'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'about' | 'friends' | 'courses'>('about');

  const friends = [
    { name: 'Mr Davinsy', handle: '@MrDavinsy', status: 'Offline', avatar: '/img/friend1.png' },
    { name: 'Kim RM', handle: '@KimRM', status: 'Online', avatar: '/img/friend2.png' },
    { name: 'George Pratama', handle: '@GeorgeP', status: 'Online', avatar: '/img/friend3.png' },
    { name: 'Leonardo Setiawan', handle: '@LeoSetiawan', status: 'Offline', avatar: '/img/friend4.png' }
  ];

  return (
    <div className="container-fluid p-0">
      {/* Header Banner */}
      <div className="container-fluid header rounded-4 shadow-sm position-relative mb-5">
        <div className="d-flex justify-content-end p-3">
          <Link className="btn btn-sm btn-light rounded-pill px-3 shadow-sm fw-semibold text-primary" href="/dashboard">
            <i className="bx bx-arrow-back me-1"></i> Back to Dashboard
          </Link>
        </div>
      </div>

      {/* User Info Card */}
      <div className="container" style={{ marginTop: '-80px' }}>
        <div className="bg-white rounded-4 shadow-sm p-4 mb-4 border">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div className="d-flex align-items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/profile.jpg"
                width="110"
                height="110"
                className="rounded-circle shadow border border-3 border-white me-4"
                style={{ objectFit: 'cover' }}
                alt="Dihya Ramdhan"
              />
              <div>
                <h3 className="mb-0 fw-bold">Dihya Ramdhan</h3>
                <p className="mb-1 text-muted">@mdr25 &bull; Software Engineering Student</p>
                <span className="badge bg-primary rounded-pill px-3 py-1" style={{ backgroundColor: '#5e81f4 !important' }}>
                  Vocational Scholar
                </span>
              </div>
            </div>
            <div className="d-flex gap-2">
              <Link href="/dashboard/settings" className="btn btn-outline-secondary rounded-pill px-4 btn-sm">
                <i className="bx bx-cog me-1"></i> Edit Profile
              </Link>
            </div>
          </div>

          <hr className="my-4" />

          {/* Navigation Tabs */}
          <ul className="nav nav-pills gap-2">
            <li className="nav-item">
              <button
                type="button"
                className={`btn rounded-pill px-4 btn-sm fw-semibold ${activeTab === 'about' ? 'btn-primary' : 'btn-light'}`}
                style={activeTab === 'about' ? { backgroundColor: '#5e81f4', borderColor: '#5e81f4' } : {}}
                onClick={() => setActiveTab('about')}
              >
                About
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className={`btn rounded-pill px-4 btn-sm fw-semibold ${activeTab === 'friends' ? 'btn-primary' : 'btn-light'}`}
                style={activeTab === 'friends' ? { backgroundColor: '#5e81f4', borderColor: '#5e81f4' } : {}}
                onClick={() => setActiveTab('friends')}
              >
                Friends
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className={`btn rounded-pill px-4 btn-sm fw-semibold ${activeTab === 'courses' ? 'btn-primary' : 'btn-light'}`}
                style={activeTab === 'courses' ? { backgroundColor: '#5e81f4', borderColor: '#5e81f4' } : {}}
                onClick={() => setActiveTab('courses')}
              >
                Course History
              </button>
            </li>
          </ul>
        </div>

        {/* Tab Content Panels */}
        <div className="bg-white rounded-4 shadow-sm p-4 border mb-5">
          {activeTab === 'about' && (
            <div>
              <h5 className="fw-bold mb-3">About Me</h5>
              <p className="text-muted leading-relaxed" style={{ textAlign: 'justify' }}>
                Passionate software engineering student with a strong vocational foundation in modern web technologies, UI slicing, component architecture, and fullstack frameworks. Experienced in converting complex mockups into pixel-perfect responsive web applications with offline data persistence.
              </p>
              <h6 className="fw-bold mt-4 mb-2">Social Profiles</h6>
              <p className="m-0 mb-1">
                <i className="bx bxl-github text-dark me-2"></i>
                GitHub: <a href="https://github.com/mdr25" target="_blank" rel="noreferrer">github.com/mdr25</a>
              </p>
              <p className="m-0 mb-1">
                <i className="bx bxl-instagram text-danger me-2"></i>
                Instagram: <a href="https://www.instagram.com/dihya_r/" target="_blank" rel="noreferrer">instagram.com/dihya_r</a>
              </p>
              <p className="m-0">
                <i className="bx bxl-facebook text-primary me-2"></i>
                Facebook: <a href="https://web.facebook.com/dihya.ramdhan/" target="_blank" rel="noreferrer">facebook.com/dihya.ramdhan</a>
              </p>
            </div>
          )}

          {activeTab === 'friends' && (
            <div className="row g-3">
              {friends.map((f, i) => (
                <div key={i} className="col-md-6 col-lg-3">
                  <div className="d-friend p-3 border shadow-sm h-100 text-center flex-column">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={f.avatar} className="rounded-circle mb-2" width="70" height="70" alt={f.name} />
                    <h6 className="mb-0 fw-bold">{f.name}</h6>
                    <small className="text-muted">{f.handle}</small>
                    <span className="badge bg-light text-secondary border mt-2 px-3 py-1">{f.status}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="row g-3">
              <div className="col-md-4">
                <div className="course1 shadow-sm h-100">
                  <span className="badge bg-light text-dark mb-2">Completed</span>
                  <h4 className="fw-bold text-white">Photography Fundamentals</h4>
                  <small className="text-white-50">Score: 94 / 100</small>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course2 shadow-sm h-100">
                  <span className="badge bg-light text-dark mb-2">In Progress</span>
                  <h4 className="fw-bold text-white">Fullstack Engineering</h4>
                  <small className="text-white-50">Progress: 75%</small>
                </div>
              </div>
              <div className="col-md-4">
                <div className="course3 shadow-sm h-100">
                  <span className="badge bg-light text-dark mb-2">Completed</span>
                  <h4 className="fw-bold text-white">3D Animation & Modeling</h4>
                  <small className="text-white-50">Score: 90 / 100</small>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
