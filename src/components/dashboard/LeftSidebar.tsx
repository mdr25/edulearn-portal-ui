'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LeftSidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

export default function LeftSidebar({ isOpen, onClose }: LeftSidebarProps) {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: 'bx-layout' },
    { href: '/dashboard/courses', label: 'All Courses', icon: 'bx-category' },
    { href: '/dashboard/friends', label: 'Friends', icon: 'bx-user' },
    { href: '/dashboard/chat', label: 'Chats', icon: 'bx-message' }
  ];

  return (
    <div id="sliders" className={`slider ${isOpen ? 'active' : ''}`}>
      <div className="slider-head">
        <div className="d-block p-3 text-center">
          <Link href="/" className="btn btn-default" type="button" onClick={onClose}>
            <i
              className="fas fa-dice-d20 fs-5"
              aria-hidden="true"
              style={{ color: '#fff', backgroundColor: '#5e81f4', padding: '10px 12px', borderRadius: '8px' }}
            ></i>
            <span className="ms-2">MDR</span>
          </Link>
          <Link className="btn1 mt-4" href="/dashboard/courses" onClick={onClose}>
            Join a courses
          </Link>
        </div>
      </div>
      <div className="slider-body ps-1">
        <nav className="nav flex-column">
          {navItems.map((item, idx) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`nav-link ${isActive ? 'highlight active' : ''} ${idx === 0 ? 'mt-3' : 'my-2'}`}
              >
                <i className={`bx ${item.icon} fs-5 me-2 align-text-top`}></i> {item.label}
              </Link>
            );
          })}

          <div className="sc-left text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="rounded-circle" src="/img/csleft.png" width="90" alt="Upgrade" />
            <p className="my-3">Upgrade for more resources</p>
            <Link className="btn2" href="/dashboard/upgrade" onClick={onClose}>
              Upgrade
            </Link>
          </div>

          <Link className="nav-link logout" href="/" onClick={onClose}>
            <i className="bx bx-log-out fs-5 me-2"></i> LogOut
          </Link>
        </nav>
      </div>
    </div>
  );
}
