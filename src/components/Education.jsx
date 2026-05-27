import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const educationList = [
    {
      id: 1,
      degree: "Master's Degree in Communication, Journalism, and Related Programs",
      institution: 'Tribhuvan University',
      period: '2017 – 2019',
    },
    {
      id: 2,
      degree: 'Secondary Level (Accounts)',
      institution: 'New Don Bosco Academy',
      period: '2005 – 2011',
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-tag"></div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic foundation in journalism and communication</p>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
