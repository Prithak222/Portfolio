import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillList = [
    'Journalism',
    'Foreign Affairs Reporting',
    'Political Analysis',
    'Field Reporting',
    'Media Communication',
    'Diplomatic Coverage',
    'Investigative Journalism',
    'News Writing',
    'International Relations',
    'South Asian Geopolitics',
    'Editorial Writing',
    'Broadcast Journalism',
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-tag"></div>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Core competencies in journalism and international reporting</p>
        </div>

        <div className="skills-grid">
          {skillList.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-dot"></div>
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
