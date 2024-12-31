"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiFillPlayCircle } from "react-icons/ai";

const SectionTwo = ({ image2, image3 }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleVideoModal = () => {
    setIsVideoOpen((prev) => !prev);
  };

  return (
    <section className="bg-[#ffffff] w-full py-16">
      <div className="container mx-auto md:px-12 grid grid-cols-1  lg:grid-cols-12 gap-8">
        {/* Column 1: Image with Video Icon */}
        <div className="relative flex justify-center col-span-1 md:col-span-1 lg:col-span-5 transition-transform duration-500 ease-in-out transform hover:scale-95">
          <Image
            src={image2 || "/assets/images/home-image-2.jpg"}
            height={100}
            width={600}
            alt="Home image 2"
            className="rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-110"
          />
          <button
            onClick={toggleVideoModal}
            className="absolute bottom-4 left-4 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 transform hover:rotate-12"
          >
            <AiFillPlayCircle className="h-12 w-12 text-blue-600" />
          </button>
        </div>

        {/* Column 2: Statistics */}
        <div className="flex flex-col items-center md:items-center space-y-8 justify-center col-span-1 md:col-span-1 lg:col-span-2 lg:justify-center">
          <div className="flex flex-col items-center md:items-center lg:ml-10 ">
            <span className="text-[#f58220] text-3xl font-semibold">19</span>
            <span className="text-xl font-medium text-[#f58220]">
              Companies
            </span>
          </div>
          <div className="flex flex-col items-center md:items-center lg:ml-10">
            <span className="text-[#f58220] text-3xl font-semibold">65</span>
            <span className="text-xl font-medium text-[#f58220]">Projects</span>
          </div>
          <div className="flex flex-col items-center md:items-center lg:ml-10">
            <span className="text-[#f58220] text-3xl font-semibold">30</span>
            <span className="text-xl font-medium text-[#f58220]">
              Locations
            </span>
          </div>
          <div className="flex flex-col items-center md:items-center lg:ml-10">
            <span className="text-[#f58220] text-3xl font-semibold">7700</span>
            <span className="text-xl font-medium text-[#f58220]">
              Employees
            </span>
          </div>
        </div>

        {/* Column 3: Static Image with Animation */}
        <div className="relative flex justify-center col-span-1 md:col-span-1 lg:col-span-5 transition-transform duration-500 ease-in-out transform hover:scale-105">
          <Image
            src={image3 || "/assets/images/home-image-3.png"}
            height={400}
            width={700}
            alt="Home image 3"
            className="rounded-lg transition-all duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative w-full max-w-2xl max-h-92">
            <button
              onClick={toggleVideoModal}
              className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md hover:bg-gray-200"
            >
              ✕
            </button>
            <div className="aspect-w-16 aspect-h-8">
              <iframe
                src="https://www.youtube.com/embed/pM5YgZ1S750?si=ADZLoZAOljDC7DfH"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SectionTwo;
