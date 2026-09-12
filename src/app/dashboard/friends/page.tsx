'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Friend } from '@/types';

export default function FriendsPage() {
  const [search, setSearch] = useState('');

  const friendsList: Friend[] = [
    { id: '1', name: 'Mr Davinsy', handle: '@MrDavinsy', status: 'Offline', avatarUrl: '/img/friend1.png' },
    { id: '2', name: 'Kim RM', handle: '@KimRM', status: 'Online', avatarUrl: '/img/friend2.png' },
    { id: '3', name: 'George Pratama', handle: '@GeorgeP', status: 'Online', avatarUrl: '/img/friend3.png' },
    { id: '4', name: 'Leonardo Setiawan', handle: '@LeoSetiawan', status: 'Offline', avatarUrl: '/img/friend4.png' },
    { id: '5', name: 'Ethan Obread', handle: '@EthOb', status: 'Online', avatarUrl: '/img/friend5.png' },
    { id: '6', name: 'Rachel Omega', handle: '@OmegaRach', status: 'Offline', avatarUrl: '/img/friend6.png' },
    { id: '7', name: 'Kiky Ramadhani', handle: '@k1kys', status: 'Online', avatarUrl: '/img/friend7.png' }
  ];

  const filtered = friendsList.filter(
    (f) =>
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.handle.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-fluid p-0">
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
        <div>
          <h4 className="fw-bold m-0">Friends & Peers</h4>
          <p className="text-muted small m-0">Collaborate with fellow students and mentors in your learning circle</p>
        </div>
        <div className="search-bar" style={{ width: '280px' }}>
          <input
            type="text"
            className="form-control rounded-pill px-3 shadow-sm border"
            placeholder="Search friends..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="row g-3">
        {filtered.map((friend) => (
          <div key={friend.id} className="col-sm-6 col-xl-4 col-xxl-3">
            <div className="d-friend p-3 shadow-sm border h-100 justify-content-between">
              <div className="d-flex align-items-center">
                <div className="position-relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={friend.avatarUrl}
                    className="rounded-circle shadow-sm"
                    width="64"
                    height="64"
                    style={{ objectFit: 'cover' }}
                    alt={friend.name}
                  />
                  <span
                    className={`position-absolute bottom-0 end-0 p-1 border border-light rounded-circle ${
                      friend.status === 'Online' ? 'bg-success' : 'bg-secondary'
                    }`}
                  ></span>
                </div>
                <div className="ms-3">
                  <h6 className="mb-0 fw-bold">{friend.name}</h6>
                  <small className="text-muted d-block">{friend.handle}</small>
                  <span
                    className={`badge rounded-pill mt-1 ${
                      friend.status === 'Online' ? 'bg-success-subtle text-success' : 'bg-secondary-subtle text-secondary'
                    }`}
                    style={{ fontSize: '10px' }}
                  >
                    {friend.status}
                  </span>
                </div>
              </div>
              <div>
                <Link
                  href="/dashboard/chat"
                  className="btn btn-sm btn-light border rounded-circle p-2 text-primary"
                  title="Send Message"
                >
                  <i className="bx bx-message-rounded-dots fs-5"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
