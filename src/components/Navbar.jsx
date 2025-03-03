import React, { useState, useEffect } from 'react';
import resume from '../assets/Nivetha.pdf'
const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#hero" className="logo" onClick={() => handleNavClick('hero')}>
          Nivetha M
        </a>

        <div className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? '✕' : '☰'}
        </div>

        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li className={activeSection === 'about' ? 'active' : ''}>
            <a href="#about" onClick={() => handleNavClick('about')}>About</a>
          </li>
          <li className={activeSection === 'projects' ? 'active' : ''}>
            <a href="#projects" onClick={() => handleNavClick('projects')}>Projects</a>
          </li>
          <li className={activeSection === 'experience' ? 'active' : ''}>
            <a href="#experience" onClick={() => handleNavClick('experience')}>Experience</a>
          </li>
          <li className={activeSection === 'education' ? 'active' : ''}>
            <a href="#education" onClick={() => handleNavClick('education')}>Education</a>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <a href="#contact" onClick={() => handleNavClick('contact')}>Contact</a>
          </li>
          <li>
            <a href={resume} className="resume1-btn" target="_blank" rel="noopener noreferrer">Resume</a>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: rgba(17, 17, 17, 0.95);
          z-index: 1000;
          backdrop-filter: blur(10px);
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 30px;
          align-items: center;
        }

        .nav-links li a {
          color: #ffffff;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .nav-links li.active a {
          color: #ff6347;
        }

        .nav-links li a:hover {
          color: #ff6347;
        }

        .resume1-btn {
          display: inline-block;
          padding: 8px 24px;
          background-color: transparent;
          color: #ff6347 !important;
          border: 1px solid #ff6347;
          border-radius: 30px;
          transition: all 0.3s ease;
        }

        .resume-btn:hover {
          background-color: #ff6347;
          color: #111111 !important;
        }

        .mobile-menu-toggle {
          display: none;
          font-size: 24px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: block;
          }

          .nav-links {
            position: fixed;
            top: 60px;
            left: 0;
            width: 100%;
            flex-direction: column;
            background-color: rgba(17, 17, 17, 0.95);
            padding: 20px 0;
            gap: 20px;
            transform: translateY(-200%);
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
          }

          .nav-links.mobile-open {
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
