import React from 'react';
import { FaWordpress, FaShoppingCart, FaSearch, FaChartBar, FaPalette, FaHtml5, FaEnvelope, FaCertificate } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      category: 'WordPress',
      title: 'Responsive WordPress website',
      icon: <FaWordpress className="portfolio-card-icon" />,
      link: '#',
    },
    {
      id: 2,
      category: 'E-Commerce',
      title: 'Online store, multi-vendor shop',
      icon: <FaShoppingCart className="portfolio-card-icon" />,
      link: '#',
    },
    {
      id: 3,
      category: 'SEO',
      title: 'Search Engine Optimization',
      icon: <FaSearch className="portfolio-card-icon" />,
      link: '#',
    },
    {
      id: 4,
      category: 'Dashboard',
      title: 'Admin Panel & Dashboard',
      icon: <FaChartBar className="portfolio-card-icon" />,
      link: '#',
    },
    {
      id: 5,
      category: 'System Admin',
      title: 'Linux System Administration',
      icon: <FaPalette className="portfolio-card-icon" />,
      link: '#',
    },
    {
      id: 6,
      category: 'Laravel',
      title: 'Custom Laravel Web Application',
      icon: <FaHtml5 className="portfolio-card-icon" />,
      link: '#',
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-tag"></div>
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">My Projects and Works</p>
        </div>

        <div className="grid-3 portfolio-grid">
          {projects.map((project) => (
            <div className="portfolio-card card" key={project.id}>
              <div className="portfolio-img-box">
                <div className="portfolio-img-overlay"></div>
                {project.icon}
              </div>
              <div className="portfolio-info">
                <span className="portfolio-cat">{project.category}</span>
                <h3 className="portfolio-title">{project.title}</h3>
                <a href={project.link} className="portfolio-link">
                  Read More &gt;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Banners underneath */}
        <div className="portfolio-banners grid-2">
          <div className="banner-card card">
            <div className="banner-icon-box">
              <FaEnvelope className="banner-icon" />
            </div>
            <div className="banner-content">
              <h3 className="banner-title">Work With Me</h3>
              <p className="banner-text">
                If you have any projects in mind, feel free to contact me. I am open to freelance work, full-time roles, or consultancy.
              </p>
              <a href="#contact" className="banner-link">
                Let's Talk &gt;
              </a>
            </div>
          </div>

          <div className="banner-card card">
            <div className="banner-icon-box">
              <FaCertificate className="banner-icon" />
            </div>
            <div className="banner-content">
              <h3 className="banner-title">Dedicated to Quality</h3>
              <p className="banner-text">
                Always striving for clean code, solid performance, and client satisfaction. I focus on doing the job right.
              </p>
              <a href="#about" className="banner-link">
                About My Process &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
