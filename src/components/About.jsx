import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-tag"></div>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="grid-2">
          <div className="about-left">
            <p className="about-text-lead">
              I am a dedicated backend developer and full-stack specialist with a passion for designing systems that are both robust and efficient.
            </p>
            <p className="about-text">
              Over the last decade, I have worked with various companies and clients, focusing on building high-performance APIs, database schemas, web scrapers, and secure user management workflows. My goal is always to deliver clean code that is easy to scale, maintain, and adapt.
            </p>
            <p className="about-text">
              I am constantly exploring new technologies to keep my skills up to date. I appreciate working in collaborative environments where I can solve complex problems and contribute to solid architecture design.
            </p>
          </div>

          <div className="about-right">
            <div className="stat-card">
              <div className="stat-num">10+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">20+</div>
              <div className="stat-label">Completed Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">500+</div>
              <div className="stat-label">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
