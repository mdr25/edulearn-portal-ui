'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    name: 'Muhammad Dihya Ramdhan',
    email: 'dihya.ramdhan@example.com',
    username: 'mdr25',
    bio: 'Vocational software engineer specializing in frontend architecture and modern web design systems.',
    emailNotifications: true,
    weeklyReport: false
  });

  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="container-fluid p-0">
      <div className="mb-4">
        <h4 className="fw-bold m-0">Account Settings</h4>
        <p className="text-muted small m-0">Manage your profile credentials and application preferences</p>
      </div>

      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
        {saved && (
          <div className="alert alert-success d-flex align-items-center mb-4" role="alert">
            <i className="bx bx-check-circle fs-4 me-2"></i>
            Settings successfully saved!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <label className="form-label fw-semibold small">Full Name</label>
              <input
                type="text"
                className="form-control"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold small">Username</label>
              <input
                type="text"
                className="form-control"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold small">Email Address</label>
              <input
                type="email"
                className="form-control"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold small">Bio</label>
              <textarea
                className="form-control"
                rows={3}
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              ></textarea>
            </div>
          </div>

          <hr className="my-4" />

          <h6 className="fw-bold mb-3">Notification Preferences</h6>
          <div className="form-check form-switch mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="notif1"
              checked={formData.emailNotifications}
              onChange={(e) => setFormData({ ...formData, emailNotifications: e.target.checked })}
            />
            <label className="form-check-label small" htmlFor="notif1">
              Receive email notifications for course assignments and messages
            </label>
          </div>
          <div className="form-check form-switch mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="notif2"
              checked={formData.weeklyReport}
              onChange={(e) => setFormData({ ...formData, weeklyReport: e.target.checked })}
            />
            <label className="form-check-label small" htmlFor="notif2">
              Subscribe to weekly learning activity digest
            </label>
          </div>

          <button type="submit" className="btn btn-primary px-4 rounded-pill" style={{ backgroundColor: '#5e81f4', borderColor: '#5e81f4' }}>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
