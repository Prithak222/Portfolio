import React from 'react';
import { FaBuilding, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Nepal Correspondent',
      company: 'Asian News International (ANI)',
      period: 'Feb 2017 – Present',
      desc: "Covering Nepal's political landscape, foreign affairs, and diplomatic developments for India's leading news agency. Providing comprehensive analysis of regional geopolitics and Nepal's international relations.",
    },
    {
      id: 2,
      role: 'Foreign Affairs and Diplomacy Reporter',
      company: 'AP1 Television',
      period: 'Feb 2016 – Feb 2017',
      desc: 'Covered diplomatic relations, international summits, and foreign policy developments. Reported on bilateral and multilateral engagements affecting Nepal and the broader South Asian region.',
    },
    {
      id: 3,
      role: 'Foreign Affairs Reporter',
      company: 'Sagarmatha Television',
      period: 'Jul 2013 – Feb 2016',
      desc: 'Early career covering international affairs and building expertise in foreign correspondence. Developed foundational skills in diplomatic reporting and political analysis.',
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-tag"></div>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">A decade of journalism excellence</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          {experiences.map((exp) => (
            <div className="timeline-item" key={exp.id}>
              <div className="timeline-icon-box">
                <FaBriefcase className="timeline-icon" />
              </div>
              <div className="timeline-content card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <h4 className="timeline-company">{exp.company}</h4>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-desc">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
