import React, { useState, useEffect } from 'react';
import PageList from './PageList/PageList';
import '../index.css';
import About from './About/About';
import Contact from './Contact/Contact';
import { ReactComponent as BorderImage } from '../assets/borderGradient.svg';
import { ReactComponent as BorderImageDown } from '../assets/borderGradientDown.svg';

export const App = () => {
  const [showAbout, setShowAbout] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth);

    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);
  const handleChange = () => {
    setShowAbout(!showAbout);
  };
  return (
    <div>
      {screenWidth > 1400 ? (
        <div>
          <BorderImage className="borderImage" />
          <BorderImageDown className="borderImageDown" />
        </div>
      ) : null}

      <Contact />
      <div className="container">
        {showAbout ? (
          <About handleChange={handleChange} />
        ) : (
          <PageList handleChange={handleChange} />
        )}
      </div>
    </div>
  );
};
