import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
      <div className="container">
        <div className="hero-content animate-fade-in">
          <p className="hero-tagline">HELLO, MY NAME IS</p>
          <h1 className="hero-name">Binod Prasad Adhikari</h1>
          <h2 className="hero-title">
            Foreign employment training provider & Web developer specialist
          </h2>
          <div className="hero-btns">
            <a href="#contact" className="btn btn-primary">
              DOWNLOAD CV
            </a>
            <a href="#contact" className="btn btn-secondary">
              CONTACT ME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
