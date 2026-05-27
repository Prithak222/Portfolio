import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const educationList = [
    {
      id: 1,
      degree: 'Master Degree in Computer Application & Web Design',
      institution: 'Tribhuvan University',
      period: '2019 - 2021',
      desc: 'Focused on advanced software engineering methodologies, web application architectures, secure database management, and UI/UX usability testing.',
    },
    {
      id: 2,
      degree: 'Bachelor Degree in Computer Science (B.Sc. CSIT)',
      institution: 'Tribhuvan University',
      period: '2015 - 2019',
      desc: 'Studied core computer science topics including algorithms, data structures, object-oriented design, computer networking, operating systems, and web technologies.',
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-tag"></div>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="grid-2">
          {educationList.map((edu) => (
            <div className="edu-card card" key={edu.id}>
              <div className="edu-icon-box">
                <FaGraduationCap className="edu-icon" />
              </div>
              <span className="edu-period">{edu.period}</span>
              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-institution">{edu.institution}</h4>
              <p className="edu-desc">{edu.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
