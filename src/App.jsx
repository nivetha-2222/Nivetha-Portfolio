import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import ProjectsSection from './components/Project';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <ProjectsSection />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
