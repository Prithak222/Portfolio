import React from 'react';
import { FaBuilding, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Web Developer Specialist',
      company: 'Nepal Gas Corporation',
      period: 'Jan 2023 - Present',
      location: 'Kathmandu, Nepal',
      desc: 'Working as a Web Developer Specialist. Responsible for developing and maintaining the company website, managing databases, and implementing security features.',
    },
    {
      id: 2,
      role: 'Skill & Vocational Training Institute',
      company: 'Foreign employment training provider',
      period: 'Nov 2021 - Dec 2022',
      location: 'Kathmandu, Nepal',
      desc: 'Provided training to candidates seeking foreign employment. Covered topics like basic web development, computer networking, and system administration.',
    },
    {
      id: 3,
      role: 'Global Careers Agency',
      company: 'Foreign employment agent',
      period: 'Aug 2019 - Oct 2021',
      location: 'Kathmandu, Nepal',
      desc: 'Worked as a foreign employment agent. Assisted candidates with job placements, document verification, and visa application processes.',
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-tag"></div>
          <h2 className="section-title">Experience</h2>
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
                    <h3 className="timeline-role">{exp.company}</h3>
                    <h4 className="timeline-company">{exp.role}</h4>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-desc">{exp.desc}</p>
                <span className="timeline-loc">{exp.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
