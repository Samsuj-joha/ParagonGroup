"use client";

import React, { useState } from "react";
import Image from "next/image";
import PlasticHeader from "@/layout/plastic-header/page";
import BistroHeader from "@/layout/bistro-header/page";
import FocusAreas from "../tea-estates-horticulture/focus-area/page";
import FocusAreasBistro from "./focus-area/page";

// Modal Component for Video
const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
      <div className="bg-white p-4 w-[80%] max-w-[600px] relative">
        <button
          className="absolute top-2 right-2 text-xl text-black"
          onClick={onClose}
        >
          X
        </button>
        <video controls className="w-full">
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

const BistroCafe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(1); // State to track which section is active

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle section click to change active section
  const handleSectionClick = (sectionNumber) => {
    setActiveSection(sectionNumber);
  };

  return (
    <>
      <BistroHeader />

      {/* first section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Image Section */}
            <div className="w-full md:w-1/2 relative">
              <Image
                src="/assets/images/bistro-images/bistro-image1.jpeg"
                alt="Poultry Farming"
                layout="responsive"
                width={1600}
                height={900}
                className="object-cover rounded-lg shadow-lg"
              />
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer"
                onClick={openModal}
              >
                <span className="text-6xl transition-transform duration-300 transform hover:scale-110">▶</span> {/* Video Icon */}
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-justify">
              <h2 className="text-xl font-semibold mb-4 text-[#2772b8]">
                Bistro Cafe & Retail Shops
              </h2>
              <p className="text-md mb-4 text-gray-600">
              An intercontinental menu with an electronic environment to cater to all walks of life. Collecting flavors from around the world and reinventing a cuisine to best serve the locals, Paragon introduces Bistro Central. With a vision to expand throughout the country, cafe central has been introduced as sub-branches to hotels, lobbies and airports.
              </p>
              <p className="text-md text-gray-600">
              Maintaining a fresh, clean and comfortable environment, Freshmart was introduced as a solution to your daily shopping needs. The business provides a franchise program to small owners to transform into a recognized brand and small business owners to invest in convenient shops in their locality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Video */}
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />

      {/* second section */}
      <FocusAreasBistro />
    </>
  );
};

export default BistroCafe;
