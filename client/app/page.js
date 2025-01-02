"use client"
import React, { useEffect } from 'react';
import Home from './pages/home/page';  // Your Home component
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

const Paragon = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
      offset: 100,     
    });
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
};

export default Paragon;

