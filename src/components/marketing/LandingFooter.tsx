'use client';

import { useState, useEffect } from 'react';

export default function LandingFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <h4 className="fw-bold mb-3">MDR Learning</h4>
                <p className="pe-lg-4">
                  Transforming vocational skills into production-ready software craftsmanship through structured curriculum and interactive project laboratories.
                </p>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <h5 className="fw-bold mb-3">Programs</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="#course">Web Development</a></li>
                  <li className="mb-2"><a href="#course">UI/UX Design</a></li>
                  <li className="mb-2"><a href="#course">Graphic Design</a></li>
                  <li className="mb-2"><a href="#course">Digital Marketing</a></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <h5 className="fw-bold mb-3">Navigation</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="#home">Home</a></li>
                  <li className="mb-2"><a href="#category">Category</a></li>
                  <li className="mb-2"><a href="#class">Latest Class</a></li>
                  <li className="mb-2"><a href="#contact">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6">
                <h5 className="fw-bold mb-3">Stay Connected</h5>
                <p>Follow our vocational milestone updates and interactive learning repositories.</p>
                <div className="d-flex gap-3 fs-5">
                  <a href="https://github.com/mdr25" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="bx bxl-github"></i></a>
                  <a href="https://www.instagram.com/dihya_r/" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="https://web.facebook.com/dihya.ramdhan/" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="bx bxl-facebook-circle"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="landing-footer-bottom py-3 text-center border-top border-light border-opacity-25">
          <p className="m-0 text-white">
            Copyright &copy; {new Date().getFullYear()} MDR - Learning Management System. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Button To Top */}
      <a
        href="#home"
        onClick={scrollToTop}
        className={`ke-atas ${showTopBtn ? 'active' : ''}`}
        aria-label="Scroll to top"
      >
        <i className="bx bx-chevron-up fs-3"></i>
      </a>
    </>
  );
}
