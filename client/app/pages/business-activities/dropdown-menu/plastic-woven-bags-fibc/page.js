"use client";
import React, { useState } from "react";
import Image from "next/image";
import PlasticHeader from "@/layout/plastic-header/page";
import FocusAreasPlastic from "./focus-area/page";

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

const PlasticWoven = () => {
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
      <PlasticHeader />

      {/* First section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="w-full md:w-1/2 relative">
              <Image
                src="/assets/images/plastic-images/plastic-image1.jpg"
                alt="Plastic Woven Bags"
                width={1600}
                height={900}
                layout="responsive"
                className="object-cover rounded-lg transition-transform transform hover:scale-105"
              />
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer"
                onClick={openModal}
              >
                <span className="text-6xl animate-pulse">▶</span>{" "}
                {/* Video Icon */}
              </div>
            </div>

            <div className="w-full md:w-1/2 text-justify">
              <h2 className="text-2xl font-semibold mb-4 text-[#0f5299] ">
                Plastic Woven Bags & FIBC
              </h2>
              <p className="text-md mb-4 text-gray-700">
              In 2007, Paragon launched its first plastic woven bag manufacturing unit in the heart of Gazipur, Dhaka, manufacturing small woven bags, FIBCs, and poly bags.
              </p>
              <p className="text-md pt-4 text-gray-700">
              We are proud to serve clients across the globe to outperform the competition and stay ahead of the latest packaging innovation curve with the help of competitive pricing and modern innovation. Our factory is certified with QMS 9001 (quality management system), FSCC 22000 (Food grade), Halal certification, and SMETA. Furthermore, we strictly maintain a solid environmental policy as all our factories have a minimum to zero waste management system by recycling process waste and harvesting rainwater.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Video */}
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Second Section - Focus Areas */}
      <FocusAreasPlastic/>
    </>
  );
};

export default PlasticWoven;
