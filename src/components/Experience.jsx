import React from 'react';
import { FaBuilding, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Backend Developer',
      company: 'Nepal Gas Industries',
      period: 'Jan 2023 - Present',
      location: 'Kathmandu, Nepal',
      desc: 'Developed and optimized high-throughput REST APIs, streamlined background job workers for reporting, managed relational and non-relational database schemas, and worked on upgrading legacy architectures to secure modern frameworks.',
    },
    {
      id: 2,
      role: 'Foreign Employment Training Provider',
      company: 'Skill & Vocational Training Institute',
      period: 'Nov 2021 - Dec 2022',
      location: 'Kathmandu, Nepal',
      desc: 'Managed technical training programs for candidates seeking overseas employment. Taught programming basics, web development tools, database setups, and best engineering practices.',
    },
    {
      id: 3,
      role: 'Foreign Employment Agent / Consultant',
      company: 'Global Careers Agency',
      period: 'Aug 2019 - Oct 2021',
      location: 'Kathmandu, Nepal',
      desc: 'Coordinated technical evaluations, assessed candidate capabilities, and matched candidates with international software development opportunities.',
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
                    <h3 className="timeline-role">{exp.role}</h3>
                    <h4 className="timeline-company">{exp.company}</h4>
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
