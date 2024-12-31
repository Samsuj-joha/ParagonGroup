"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FeedMillsHeader from "@/layout/feed-mils-header/page";
import FocusAreasFeed from "./focus-area/page";

// Modal Component for Video
const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="bg-white p-4 w-[90%] max-w-[600px] relative rounded-md shadow-lg"
      >
        <button
          className="absolute top-2 right-2 text-xl text-black"
          onClick={onClose}
        >
          X
        </button>
        <video controls className="w-full rounded-md">
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </motion.div>
  );
};

const FeedMills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <FeedMillsHeader />

      {/* First Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-10 lg:flex-nowrap md:flex-nowrap">
            {/* Left Section with Image */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 relative"
            >
              <Image
                src="/assets/images/feedmil-images/header-image.jpg"
                alt="Poultry Farming"
                layout="responsive"
                width={1600}
                height={900}
                className="object-cover rounded-md shadow-md"
              />
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer"
                onClick={openModal}
              >
                <span className="text-6xl">▶</span> {/* Video Icon */}
              </div>
            </motion.div>

            {/* Right Section with Text */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-2xl font-semibold mb-4 text-[#2772b8]">Feed Mills</h2>
              <p className="text-md mb-4 text-justify text-gray-700">
                Paragon, is a leading brand in the national market for poultry,
                cattle, and marine life feed. It is by operation and customer
                base, one of the largest agro-based industries in Bangladesh.
                Paragon Group started its feed operations in the year 1996
                producing high-quality animal feed to promote affordable and
                suitable poultry, fish, and cattle production ensuring national
                food security for Bangladesh.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal for Video */}
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Second Section */}
      <FocusAreasFeed />
    </>
  );
};

export default FeedMills;
