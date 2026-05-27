import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillList = [
    'Laravel',
    'Database Design',
    'Web Design',
    'REST API',
    'System Admin',
    'WordPress',
    'PHP',
    'JavaScript',
    'Python',
    'Git / GitHub',
    'Linux',
    'HTML & CSS',
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-tag"></div>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies, Frameworks and Tools I use</p>
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
