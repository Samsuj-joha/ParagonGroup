"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DairyHeader from "@/layout/dairy-header/page";
import FocusAreasDairy from "./focus-area/page";

const Dairy = () => {
  const [activeSection, setActiveSection] = useState(1);

  // Handle section click to change active section
  const handleSectionClick = (sectionNumber) => {
    setActiveSection(sectionNumber);
  };

  return (
    <>
      <DairyHeader />

      {/* First Section */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 relative">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src="/assets/images/dairy-images/image0.jpg"
                  alt="Dairy Project"
                  layout="responsive"
                  width={1600}
                  height={900}
                  className="object-cover"
                />
              </motion.div>
            </div>

            <div className="w-full md:w-1/2">
              <motion.h2
                className="text-2xl font-semibold mb-4 text-[#2772b8]"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Dairy Project
              </motion.h2>
              <motion.p
                className="text-md mb-4 text-justify text-gray-600"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                In 2019, Paragon launched its first dairy operation with an aim
                to produce pasteurized milk, UHT milk, ghee, butter, cheese,
                yogurt, and laban for the local market. To address the modern
                day dairy requirements, Paragon engages from the grassroots by
                producing high-quality feed, improving feeding management,
                maintaining overall rearing management, providing breeding
                technology, and producing dairy products.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Second Section */}
      <FocusAreasDairy />
    </>
  );
};

export default Dairy;
