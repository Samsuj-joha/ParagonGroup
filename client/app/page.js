"use client"
import React, { useEffect } from 'react';
import Home from './pages/home/page';  // Your Home component
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

const Paragon = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      once: true,      // Trigger animation only once
      offset: 100,     // Trigger animation once the element is 100px from the viewport
    });
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
};

export default Paragon;

