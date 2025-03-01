// src/components/Education.js
import React from 'react';

const Education = () => {
  const educations = [
    {
      id: 1,
      degree: 'B.E. CSE (Data Science)',
      institution: 'Annamalai University, Chidambaram',
      grade: '90%',
      period: '2019 - 2024'
    },
    {
      id: 2,
      degree: 'SSLC & HSC',
      institution: 'Government Higher Secondary School, Perambalur',
      grade: 'SSLC-94% & HSC-81%',
      period: '2016 - 2019'
    },
    
  ];


  return (
    <section id="education" className="education-section">
    <div className="container">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {educations.map((edu) => (
          <div className="timeline-item" key={edu.id}>
            <div className="job-title">
              <div className="company-logo">
                {/* Institution logo would go here */}
              </div>
              <div className="title-text">
                <div className="job-position">{edu.degree}</div>
                <div className="company-name">{edu.institution}</div>
              </div>
              <div className="job-type">Grade: {edu.grade}</div>
              <div className="job-period">{edu.period}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
      <style jsx>{`
        .education-section {
          background-color: #121212;
        }
      `}</style>
    </section>
  );
};

export default Education;