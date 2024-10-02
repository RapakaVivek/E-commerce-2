import React from 'react';
import heroImage from './images/hero.avif'; 

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <img src={heroImage} alt="Hero" /> 
      </div>
    </div>
  );
}

export default Hero;
