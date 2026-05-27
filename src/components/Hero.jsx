import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
      <div className="container">
        <div className="hero-content animate-fade-in">
          <p className="hero-tagline">Foreign Affairs & Diplomacy Journalist</p>
          <h1 className="hero-name">Binod Prasad Adhikari</h1>
          <h2 className="hero-title">
            Nepal Correspondent at Asian News International (ANI)
          </h2>
          <p className="hero-desc">
            Specializing in foreign affairs, diplomacy, and international relations from Nepal, covering South Asian geopolitics, regional developments, and global affairs.
          </p>
          <div className="hero-btns">
            <a href="#portfolio" className="btn btn-primary">
              View Portfolio
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
