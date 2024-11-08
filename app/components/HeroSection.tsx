import React from 'react';
import Image from 'next/image';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="hero-title">SAFE HOME CHEMICALS.</h1>
        <h2 className="hero-subtitle">HEXA SHIELD.</h2>
        <p className="hero-description">
          one spray, total protection.<br /> Say goodbye to unwanted invaders with<br />
          <span style={{ textTransform: 'uppercase', color: '#1e3a8a' }}>Hexa Shield</span>
          <br />the all-in-one solution for a pest-free home!
        </p>
      </div>
      <div className="hero-image-container">
        <Image 
          src="/p1.jpg" 
          alt="hero-img" 
          width={500} 
          height={500} 
          className="hero-image" 
        />
      </div>
    </div>
  );
};

export default HeroSection;
