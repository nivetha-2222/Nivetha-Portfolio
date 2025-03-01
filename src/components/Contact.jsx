// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-text">
          Let's build something extraordinary together! Whether you're a startup, a business, or an individual with a vision, 
          I specialize in Web & Mobile Development and UX/UI Design to bring ideas to life. From concept to execution, I create seamless, 
          user-friendly experiences that make an impact. Let’s collaborate and turn your vision into reality!
          </p>
          <div className="contact-info">
            <a href="mailto:nivethamuthusami29@gmail.com" className="contact-item">
              <i className="fas fa-envelope"></i>
              nivethamuthusami29@gmail.com
            </a>
            <a href="tel:+919361470233" className="contact-item">
              <i className="fas fa-phone"></i>
              +91 9361470233
            </a>
          </div>
          <div className="social-icons">
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://behance.net/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-behance"></i>
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <p>©Designed By Nivetha M</p>
        </div>
      </div>
      <style jsx>{`
        .contact-section {
          position: relative;
          padding-bottom: 120px;
        }

        .contact-content {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-text {
          font-size: 18px;
          line-height: 1.7;
          color: #cccccc;
          margin-bottom: 40px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          margin-bottom: 40px;
        }

        .contact-item {
          color: #ffffff;
          text-decoration: none;
          font-size: 18px;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          color: #ff6347;
        }

        .footer {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 20px 0;
          text-align: center;
          color: #777777;
          font-size: 14px;
        }
      `}</style>
    </section>
  );
};

export default Contact;