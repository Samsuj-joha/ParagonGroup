"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FootwareHeader from "@/layout/footware-header/page";
import FocusAreasFootware from "./focus-area/page";

// Modal Component for Video
const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-4 w-[90%] max-w-[600px] relative shadow-lg rounded-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <button
          className="absolute top-2 right-2 text-xl text-black"
          onClick={onClose}
        >
          ✕
        </button>
        <video controls className="w-full rounded-lg">
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </motion.div>
  );
};

const Footware = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Header */}
      <FootwareHeader />

      {/* First Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row gap-10">
          {/* Left: Image */}
          <motion.div
            className="relative w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/assets/images/footware-images/image1.jpg"
              alt="Footwear Manufacturing"
              layout="responsive"
              width={1600}
              height={900}
              className="object-cover rounded-lg shadow-lg"
            />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer bg-black bg-opacity-50 p-3 rounded-full"
              onClick={openModal}
            >
              <span className="text-6xl">▶</span> {/* Video Icon */}
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#2772b8]">
              Footwear Manufacturing
            </h2>
            <p className="text-md text-gray-600 mb-4 leading-relaxed text-justify">
              Established in 2018, ParaSole Footwear limited is a fully compliant
              factory as per Bangladesh government labor law. We develop footwear
              from sketches, pictures, or concepts. ParaSole ensures products meet
              customer standards by involving quality control and production planning
              in every process. Our strong team ensures every order is handled with
              care and delivered on time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Second Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <FocusAreasFootware />
      </motion.section>
    </>
  );
};

export default Footware;
