"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FishHatcharyHeader from "@/layout/fish-hatchary-header/page";
import FocusAreasFish from "./focus-area/page";

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

const Fish = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <FishHatcharyHeader />

      {/* First Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left Section (Image with Video Modal Trigger) */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 relative"
            >
              <Image
                src="/assets/images/fish-hatchary-images/image1.jpg"
                alt="Fish Hatchery"
                layout="responsive"
                width={1600}
                height={900}
                className="object-cover rounded-md shadow-md"
              />
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer"
                onClick={openModal}
              >
                <span className="text-6xl">▶</span>
              </div>
            </motion.div>

            {/* Right Section (Text) */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-2xl font-semibold mb-4 text-[#2772b8]">Fish Hatchery</h2>
              <p className="text-md mb-4 text-gray-600 text-justify">
                A fish hatchery is a place for artificial breeding, hatching, and rearing through the early life stages of animals such as finfish and shellfish. Hatcheries produce larval and juvenile fish, shellfish, and crustaceans to support the aquaculture industry where they are transferred to on-growing systems, such as fish farms, to reach harvest size.
              </p>
              <p className="text-md text-gray-600 text-justify">
                The value of global aquaculture farming is estimated to be US$98.4 billion in 2008 with China significantly dominating the market. However, the value of aquaculture hatchery and nursery production has yet to be estimated. Additional hatchery production for small-scale domestic uses or conservation programs is also significant, particularly in South-East Asia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal for Video */}
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Second Section */}
      <FocusAreasFish />
    </>
  );
};

export default Fish;
