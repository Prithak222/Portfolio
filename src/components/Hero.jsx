import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
      <div className="container">
        <div className="hero-content animate-fade-in">
          <p className="hero-tagline">WELCOME TO MY PORTFOLIO</p>
          <h1 className="hero-name">Binod Prasad Adhikari</h1>
          <h2 className="hero-title">
            Backend Developer & Web Dev Specialist
          </h2>
          <p className="hero-desc">
            Based in Kathmandu, Nepal. Building high-performance, secure, and scalable web solutions with modern technologies. Focus on backend APIs, systems architecture, and clean user interfaces.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
            <a href="#portfolio" className="btn btn-secondary">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
