import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

const App = () => {
  return (
    <div id="root">
      <CustomCursor />
      <Navigation />

      <main className="main-content">
        <Hero />

        <div id="about" className="section">
          <About />
        </div>

        <div id="skills" className="section">
          <Skills />
        </div>

        <div id="work" className="section">
          <Projects />
        </div>

        <div id="contact" className="section">
          <Contact />
        </div>

        <footer className="main-footer">
          <div className="container footer-text">
            <p>© {new Date().getFullYear()} Gauri Jindal. Built with Intelligence.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
