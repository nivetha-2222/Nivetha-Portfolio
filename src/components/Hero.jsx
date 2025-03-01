import React from 'react';
import profileImg from "../assets/Nivetha.png"

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm Nivetha
            <br />
            I'm a <span className="highlight"> Front-End Developer</span>
          </h1>
          <p className="hero-description">
          I specialize in Web and Mobile Development, with 1.3 years of experience building dynamic and responsive applications.
           My expertise includes HTML, CSS, JavaScript, React.js, React Native, and SQL,
           allowing me to create seamless user experiences across platforms.
          </p>
          <div className="hero-buttons">
            <button className="btn contact-btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Get in touch
            </button>
            <a href="/resume.pdf" className="btn resume-btn" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-circle">
            <img src={profileImg} alt="Mohammad Thoufiq" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px;
        }

        .hero-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .hero-content {
          flex: 1;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .highlight {
          color: #FF457E;
        }

        .hero-description {
          font-size: 18px;
          color: #cccccc;
          margin-bottom: 40px;
          line-height: 1.6;
          max-width: 600px;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
        }

        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .profile-circle {
          width: 320px;
          height: 320px;
          border-radius: 50%;
          overflow: hidden;
          border: 5px solid rgba(255, 99, 71, 0.3);
        }

        .profile-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 992px) {
          .hero-container {
            flex-direction: column-reverse;
            text-align: center;
          }

          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-title {
            font-size: 36px;
          }

          .profile-circle {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
