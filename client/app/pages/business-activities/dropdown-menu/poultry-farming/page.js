"use client";

import React, { useState } from "react";
import Image from "next/image";
import PoultryHeader from "@/layout/poultry-header/page";
import FocusAreasPoultry from "./focus-area/page";

// Modal Component for Video
const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
      <div className="bg-white p-6 w-[90%] max-w-[600px] rounded-lg shadow-lg transform transition-all duration-500">
        <button
          className="absolute top-2 right-2 text-xl text-black"
          onClick={onClose}
        >
          X
        </button>
        <video controls className="w-full rounded-lg shadow-md">
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

const PoultryFarming = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(1);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSectionClick = (sectionNumber) => {
    setActiveSection(sectionNumber);
  };

  return (
    <>
      <PoultryHeader />

      {/* First Section with Animation */}
      <section className="py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="w-full sm:w-1/2 relative transform transition-transform duration-700 ease-in-out hover:scale-105">
              <Image
                src="/assets/images/poultry-images/poultry-image-2.jpg"
                alt="Poultry Farming"
                layout="responsive"
                width={1600}
                height={900}
                className="object-cover rounded-lg shadow-lg"
              />
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer animate-pulse"
                onClick={openModal}
              >
                <span className="text-6xl">▶</span> {/* Video Icon */}
              </div>
            </div>

            <div className="w-full sm:w-1/2">
              <h2 className="text-md sm:text-xl md:text-2xl font-semibold mb-4 text-[#2772b8]">Poultry Farming</h2>
              <p className="text-md text-justify mb-4 text-gray-700 transition duration-300 ">
                Established in 1993, Paragon Poultry is one of the top three poultry
                farmers in Bangladesh. Our farms are strategically located across
                the country in remote areas, away from biological hazards, and
                pollution to facilitate the best environment for high-quality day-old poultry.
              </p>
              <p className="text-md text-justify text-gray-700">
                Furthermore, we also produce commercial layers and broilers for
                direct consumers to ensure safe, sustainable poultry meat and eggs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Video */}
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Second Section with Animated Buttons */}
      <FocusAreasPoultry/>
    </>
  );
};

export default PoultryFarming;
