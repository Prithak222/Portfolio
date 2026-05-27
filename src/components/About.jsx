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
              Hi, I am Binod Prasad Adhikari. I am a Foreign employment training provider & Web developer specialist based in Kathmandu, Nepal. I have more than 10 years of experience in training and web development.
            </p>
            <p className="about-text">
              I am passionate about creating clean, modern, and user-friendly websites. I specialize in backend development, database design, and systems architecture. I always strive to write code that is clean, scalable, and easy to maintain.
            </p>
          </div>

          <div className="about-right">
            <div className="stat-card">
              <div className="stat-num">10+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">2</div>
              <div className="stat-label">Completed Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">500+</div>
              <div className="stat-label">Students Trained</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
