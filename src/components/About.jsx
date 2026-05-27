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
            <p className="about-text">
              With over a decade of experience in journalism, I specialize in covering foreign affairs, diplomacy, and international relations from Nepal. My work focuses on South Asian geopolitics, particularly Nepal-India-China relations, providing in-depth analysis and field reporting for major news organizations.
            </p>
            <p className="about-text">
              Throughout my career with Asian News International (ANI), AP1 Television, and Sagarmatha Television, I have covered diplomatic developments, international summits, and political landscapes, establishing myself as a trusted voice in foreign correspondence. My reporting combines rigorous research with firsthand insights from the field, delivering comprehensive coverage of Nepal's evolving role in regional and international affairs.
            </p>
          </div>

          <div className="about-right">
            <div className="stat-card">
              <div className="stat-num">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">3</div>
              <div className="stat-label">Major Networks</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">500+</div>
              <div className="stat-label">Published Reports</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
