'use client';

import Link from 'next/link';
import '@/styles/landing.css';
import LandingNavbar from '@/components/marketing/LandingNavbar';
import LandingFooter from '@/components/marketing/LandingFooter';

export default function LandingPage() {
  const categories = [
    { title: 'Programming', icon: 'bx-code-alt', courses: '12 Courses' },
    { title: 'Web Design', icon: 'bx-paint', courses: '8 Courses' },
    { title: 'Graphic Design', icon: 'bx-palette', courses: '15 Courses' },
    { title: 'Digital Marketing', icon: 'bx-line-chart', courses: '6 Courses' }
  ];

  const featuredCourses = [
    {
      id: 1,
      title: 'Fullstack Web Development with Next.js',
      category: 'Programming',
      image: '/img/course1.jpg',
      rating: 4.9,
      students: 1240,
      price: '$49.00'
    },
    {
      id: 2,
      title: 'UI/UX Design Masterclass: Figma to Code',
      category: 'Design',
      image: '/img/course2.jpg',
      rating: 4.8,
      students: 980,
      price: '$39.00'
    },
    {
      id: 3,
      title: 'Modern Motion Graphic & 3D Animation',
      category: 'Multimedia',
      image: '/img/course3.jpg',
      rating: 4.7,
      students: 760,
      price: '$45.00'
    }
  ];

  const latestClasses = [
    {
      id: 1,
      title: 'Digital Illustration & Vector Art',
      image: '/img/class1.jpg',
      instructor: 'Ethan Permatasari',
      instructorImg: '/img/ins1.JPG'
    },
    {
      id: 2,
      title: 'Modern TypeScript & Frontend Engineering',
      image: '/img/class2.jpg',
      instructor: 'Daniel Obread',
      instructorImg: '/img/ins2.JPG'
    },
    {
      id: 3,
      title: 'Brand Identity & Visual Design Systems',
      image: '/img/class3.jpg',
      instructor: 'Dylan George',
      instructorImg: '/img/ins3.JPG'
    },
    {
      id: 4,
      title: 'Responsive Web Design & Grid Architecture',
      image: '/img/class4.jpg',
      instructor: 'Omega Setiawan',
      instructorImg: '/img/ins1.JPG'
    }
  ];

  return (
    <div className="landing-page">
      <LandingNavbar />

      {/* Hero Section */}
      <section id="home" className="bg-page d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">DEVELOP YOUR SKILL WITH A CLASS</h1>
              <p className="lead mb-4 text-white-50">
                Master industry-grade programming, UI/UX design, and digital craftsmanship with guided vocational roadmaps and real-world projects.
              </p>
              <div className="box mx-auto shadow-lg" style={{ maxWidth: '600px' }}>
                <input type="text" placeholder="Search your favorite course..." />
                <button type="button" className="btn p-0 border-0" aria-label="Search">
                  <i className="bx bx-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="category" className="py-5 bg-light">
        <div className="container py-4">
          <div className="row mb-5 text-center">
            <div className="col">
              <h3 className="display-6 fw-bold">TOP CATEGORIES</h3>
              <p className="text-muted">Explore popular learning pathways crafted by vocational mentors</p>
            </div>
          </div>
          <div className="row g-4">
            {categories.map((cat, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="class-c bg-white rounded-4 p-4 text-center shadow-sm h-100 border">
                  <div
                    className="icon-box mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: '70px', height: '70px', backgroundColor: '#eef2ff' }}
                  >
                    <i className={`bx ${cat.icon} fs-1`}></i>
                  </div>
                  <h5 className="fw-bold mb-1">{cat.title}</h5>
                  <small className="text-muted">{cat.courses}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section id="course" className="py-5">
        <div className="container py-4">
          <div className="row mb-5 text-center">
            <div className="col">
              <h3 className="display-6 fw-bold">FEATURED COURSES</h3>
              <p className="text-muted">Structured curriculum designed to elevate your technical capabilities</p>
            </div>
          </div>
          <div className="row g-4">
            {featuredCourses.map((course) => (
              <div key={course.id} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={course.image} className="card-img-top" style={{ height: '220px', objectFit: 'cover' }} alt={course.title} />
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge px-3 py-2 rounded-pill" style={{ backgroundColor: '#eef2ff', color: '#5e81f4' }}>
                        {course.category}
                      </span>
                      <span className="text-warning small fw-bold">
                        <i className="bx bxs-star me-1"></i>
                        {course.rating}
                      </span>
                    </div>
                    <h5 className="card-title fw-bold mb-3">{course.title}</h5>
                    <div className="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                      <span className="text-muted small">
                        <i className="bx bx-user me-1"></i>
                        {course.students} Students
                      </span>
                      <span className="fs-5 fw-bold" style={{ color: '#5e81f4' }}>
                        {course.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Classes */}
      <section id="class" className="py-5 bg-light">
        <div className="container py-4">
          <div className="row mb-5 text-center">
            <div className="col">
              <h3 className="display-6 fw-bold">LATEST CLASS</h3>
              <p className="text-muted">Fresh modular lessons added weekly to our curriculum</p>
            </div>
          </div>
          <div className="row g-4">
            {latestClasses.map((item) => (
              <div key={item.id} className="col-md-6">
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-3">
                  <div className="row g-0">
                    <div className="col-md-4" style={{ minHeight: '190px' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        className="img-fluid rounded-start"
                        alt={item.title}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body p-4 d-flex flex-column justify-content-between h-100">
                        <div>
                          <h5 className="card-title fw-bold mb-2">{item.title}</h5>
                          <p className="card-text text-muted small">
                            Comprehensive step-by-step case study project guiding students through modern design and implementation patterns.
                          </p>
                        </div>
                        <div className="d-flex align-items-center mt-3 pt-2 border-top">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.instructorImg}
                            className="rounded-circle me-2"
                            width="42"
                            height="42"
                            style={{ objectFit: 'cover' }}
                            alt={item.instructor}
                          />
                          <div>
                            <p className="m-0 fw-semibold small">{item.instructor}</p>
                            <small className="text-muted" style={{ fontSize: '11px' }}>Vocational Mentor</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor CTA */}
      <section id="instructor" className="py-5 text-center text-white" style={{ backgroundColor: '#1e293b' }}>
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h3 className="display-6 fw-bold mb-3 text-white">Become a Course Instructor</h3>
              <p className="lead text-white-50 mb-4">
                Share your technical industry expertise with thousands of ambitious learners. We provide the curriculum tooling, student community, and platform analytics.
              </p>
              <Link className="btn1" href="/dashboard">
                Join As Instructor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <h3 className="display-6 fw-bold text-white">GET IN TOUCH</h3>
              <p className="text-white-50">Have questions regarding curriculum or institutional partnerships?</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form onSubmit={(e) => e.preventDefault()} className="row g-3">
                <div className="col-12 inputBox">
                  <input type="text" placeholder="Your Full Name" required />
                </div>
                <div className="col-12 inputBox">
                  <input type="email" placeholder="Your Email Address" required />
                </div>
                <div className="col-12 inputBox">
                  <textarea rows={4} placeholder="Your Message..." required></textarea>
                </div>
                <div className="col-12 text-center mt-4">
                  <button type="submit" className="btn2 border-0">
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}
