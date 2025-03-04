import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Software Developer',
      company: 'Velozion Technologies Pvt Ltd',
      type: 'Full Time',
      period: 'Sep 2023 - Nov 2024',
      description: 'Developed responsive web and mobile applications using React.js and React Native. Built reusable components, integrated APIs, and optimized UI/UX for a seamless user experience.'
    },
    {
      id: 2,
      position: 'React Native Developer',
      company: 'CocoNids IT Solutions and IT Technologies',
      type: 'Full Time',
      period: 'Feb 2024 - Present',
      description: 'Focused on mobile app development using React Native. Implemented new features, improved app performance, and collaborated with cross-functional teams to enhance user engagement.'
    }
  ];

  return (
    <section id="experience" className="experience-section exp-padd">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div className="timeline-item" key={exp.id}>
              <div className="job-title">
                <div className="company-logo">
                  {/* Company logo would go here */}
                </div>
                <div className="title-text">
                  <div className="job-position">{exp.position} at "{exp.company}"</div>
                </div>
                <div className="job-type">{exp.type}</div>
                <div className="job-period">{exp.period}</div>
              </div>
              <div className="job-description">
                {exp.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
