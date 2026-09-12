'use client';

import { useState } from 'react';

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const courses = [
    {
      id: '1',
      title: 'UI/UX Design Masterclass',
      category: 'Design',
      lessons: '24 Lessons',
      hours: '18h 30m',
      progress: 75,
      bgClass: 'course1',
      instructor: 'Ethan Permatasari'
    },
    {
      id: '2',
      title: 'Fullstack Web Engineering with Next.js',
      category: 'Development',
      lessons: '36 Lessons',
      hours: '32h 15m',
      progress: 45,
      bgClass: 'course2',
      instructor: 'Daniel Obread'
    },
    {
      id: '3',
      title: '3D Modeling & Blender Animation',
      category: 'Multimedia',
      lessons: '18 Lessons',
      hours: '14h 00m',
      progress: 90,
      bgClass: 'course3',
      instructor: 'Dylan George'
    },
    {
      id: '4',
      title: 'Responsive Web Architecture & Grid',
      category: 'Development',
      lessons: '15 Lessons',
      hours: '10h 45m',
      progress: 20,
      bgClass: 'course1',
      instructor: 'Omega Setiawan'
    }
  ];

  const categories = ['All', 'Development', 'Design', 'Multimedia'];

  const filtered = selectedCategory === 'All'
    ? courses
    : courses.filter(c => c.category === selectedCategory);

  return (
    <div className="container-fluid p-0">
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
        <div>
          <h4 className="fw-bold m-0">All Courses</h4>
          <p className="text-muted small m-0">Continue your enrolled curriculum or explore new competencies</p>
        </div>
        <div className="d-flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`btn btn-sm px-3 rounded-pill ${
                selectedCategory === cat ? 'btn-primary' : 'btn-outline-secondary'
              }`}
              style={selectedCategory === cat ? { backgroundColor: '#5e81f4', borderColor: '#5e81f4' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="row g-4">
        {filtered.map((course) => (
          <div key={course.id} className="col-md-6 col-xxl-6">
            <div className={`${course.bgClass} shadow-sm position-relative overflow-hidden`}>
              <div className="crs-content">
                <span className="badge bg-light text-dark mb-2 px-3 py-1 rounded-pill">{course.category}</span>
                <h4 className="fw-bold mb-2">{course.title}</h4>
                <p className="text-white-50 small mb-3">Instructor: {course.instructor}</p>
                <div className="d-flex align-items-center justify-content-between mb-3 text-white-50 small">
                  <span><i className="bx bx-book-content me-1"></i>{course.lessons}</span>
                  <span><i className="bx bx-time me-1"></i>{course.hours}</span>
                  <span>{course.progress}% Completed</span>
                </div>
                <div className="progress" style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.3)' }}>
                  <div
                    className="progress-bar bg-warning rounded-pill"
                    role="progressbar"
                    style={{ width: `${course.progress}%` }}
                    aria-valuenow={course.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
                <div className="mt-4 text-end">
                  <button type="button" className="btn btn-light btn-sm px-4 fw-semibold rounded-pill text-primary">
                    Resume Class
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
