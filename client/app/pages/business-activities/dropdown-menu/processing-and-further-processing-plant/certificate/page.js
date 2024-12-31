"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CertificateSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display three images at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show two images on medium screens
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, // Show one image on small screens
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center mb-10 px-4">
        <h2 className="text-3xl font-semibold mb-4 text-blue-800">
          Our Certifications
        </h2>

        {/* Slider for certificates on all screen sizes */}
        <Slider {...sliderSettings}>
          <div className="p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all transform hover:scale-105">
              <Image
                src="/assets/images/processing-image/processing-carosel1.jpg"
                alt="Certification 1"
                width={250} // Width of image
                height={120} // Reduced height for the image
                className="w-full h-96 object-contain rounded-t-lg"
              />
            </div>
          </div>
          <div className="p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all transform hover:scale-105">
              <Image
                src="/assets/images/processing-image/processing-carosel2.jpg"
                alt="Certification 2"
                width={250} // Width of image
                height={120} // Reduced height for the image
                className="w-full h-96 object-contain rounded-t-lg"
              />
            </div>
          </div>
          <div className="p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all transform hover:scale-105">
              <Image
                src="/assets/images/processing-image/processing-carosel3.jpg"
                alt="Certification 3"
                width={250} // Width of image
                height={120} // Reduced height for the image
                className="w-full h-96 object-contain rounded-t-lg"
              />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default CertificateSection;
