'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeAnimation, setFadeAnimation] = useState(false);



  const slides = [
    "/assets/images/landing-carosel/landing-page1.jpeg",
    "/assets/images/landing-carosel/landing-page2.jpeg",
    "/assets/images/landing-carosel/landing-page3.jpg",
    "/assets/images/landing-carosel/landing-page4.jpg",
    "/assets/images/landing-carosel/landing-page5.jpg",
    "/assets/images/landing-carosel/landing-page6.png",
    "/assets/images/landing-carosel/landing-page7.png",
    "/assets/images/landing-carosel/landing-page8.jpg",
    "/assets/images/landing-carosel/landing-page9.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    setFadeAnimation(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setFadeAnimation(false);
    }, 300);
  };

  const handlePreviousSlide = () => {
    setFadeAnimation(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
      setFadeAnimation(false);
    }, 300);
  };

  return (
    <div className="relative w-full h-[300px] md:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px]">
      {/* Carousel */}
      <div
        className={`absolute  inset-0 overflow-hidden transition-opacity duration-500 ${fadeAnimation ? 'opacity-0' : 'opacity-100'}`}
      >
        <Image
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          priority
          quality={100}
          className="object-cover"
        />
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button
          onClick={handlePreviousSlide}
          className="bg-[#263e7a] hover:bg-[#faa91d] text-white p-3 rounded-full hover:bg-opacity-90 shadow-lg transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button
          onClick={handleNextSlide}
          className="bg-[#263e7a] hover:bg-[#faa91d] text-white p-3 rounded-full hover:bg-opacity-90 shadow-lg transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
