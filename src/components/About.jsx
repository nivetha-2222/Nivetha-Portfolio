import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <p className="about-text">
          I am a dedicated web and mobile app developer with a strong foundation in building user-friendly 
          and efficient applications. With 1+ years of hands-on experience in React.js, React Native, JavaScript, 
          and SQL, I specialize in creating seamless digital experiences
          </p>
          <div className="skills-container">
            <h3 className="skills-title">My Skills</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-name">React.js</div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">React Native</div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">UI & UX</div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Web Design</div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">wordpress</div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">SQL</div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about-section {
          background-color: #121212;
        }

        .about-content {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .about-text {
          font-size: 18px;
          line-height: 1.7;
          color: #cccccc;
          max-width: 800px;
          margin: 0 auto;
        }

        .skills-container {
          margin-top: 20px;
        }

        .skills-title {
          font-size: 24px;
          margin-bottom: 20px;
          text-align: center;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 30px;
        }

        .skill-item {
          margin-bottom: 20px;
        }

        .skill-name {
          font-size: 16px;
          margin-bottom: 8px;
        }

        .skill-bar {
          height: 10px;
          background-color: #1a1a1a;
          border-radius: 5px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background-color: #ff6347;
          border-radius: 5px;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
