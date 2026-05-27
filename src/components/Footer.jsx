import React, { useState, useEffect } from 'react';
import { FaChevronUp, FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h3 className="footer-logo">Binod Prasad Adhikari</h3>
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} Binod Prasad Adhikari. All rights reserved.
            </p>
          </div>

          <div className="footer-right">
            <div className="footer-socials">
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className="footer-social-link" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating scroll-to-top button */}
      <button
        className={`scroll-to-top ${showScroll ? 'show' : ''}`}
        onClick={scrollTop}
        aria-label="Scroll to top"
      >
        <FaChevronUp />
      </button>
    </footer>
  );
};

export default Footer;
