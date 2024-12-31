"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProcessingHeader from "@/layout/processing-header/page";
import CertificateSection from "./certificate/page";
import FocusAreasSection from "./focus-area/page";

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

const ProcessingPlant = () => {
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
      <ProcessingHeader />
      {/* first section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="w-full md:w-1/2 relative">
              <Image
                src="/assets/images/processing-image/processing-video-player.jpg"
                alt="Poultry Farming"
                width={600}
                height={400}
                layout="responsive"
                className="object-cover rounded-lg transition-transform transform hover:scale-105"
              />
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer"
                onClick={openModal}
              >
                <span className="text-6xl animate-pulse">▶</span> {/* Video Icon */}
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4 text-[#0f5299]">Processing and Further Processing Plant</h2>
              <p className="text-md mb-4 text-gray-700 text-justify">
                Paragon launched a poultry processing and further processing plant in 2015, producing ready-to-cook and ready-to-eat frozen foods.
              </p>
              <p className="text-md text-gray-700 text-justify">
                Our factory has ISO 22000, GMP, HACCP, and HALAL certifications. We proudly serve all multinational hotels, fast food brands like KFC and Pizza Hut, and local airlines. Furthermore, we also launched a collection of traditional and Western-inspired ready-to-eat/cook frozen products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Video */}
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />

      {/* second section */}
      <FocusAreasSection />

      {/* New Section: Our Certifications */}
      <CertificateSection />
    </>
  );
};

export default ProcessingPlant;
