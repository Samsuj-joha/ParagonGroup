"use client";

import TeaHeader from "@/layout/tea-header/page";
import Image from "next/image";
import { useState } from "react";
import FocusAreas from "./focus-area/page";
import { motion } from "framer-motion";

const TeaEstate = () => {
  const [activeSection, setActiveSection] = useState(1); // State to track which section is active

  // Handle section click to change active section
  const handleSectionClick = (sectionNumber) => {
    setActiveSection(sectionNumber);
  };

  return (
    <>
      <TeaHeader />

      {/* First Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2 relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/images/tea-images/tea-image1.jpg"
                alt="Poultry Farming"
                width={1600}
                height={400} // Reduced the height of the image
                className="object-cover w-full h-full"
              />
            </div>

            <motion.div
              className="w-full md:w-1/2 text-justify" // Ensured text is justified here
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-[#2772b8] mb-4">
                Tea Estates & Horticulture
              </h2>
              <p className="text-md mb-6 text-gray-600 leading-relaxed text-justify">
                {" "}
                {/* Justified text for paragraph */}
                Established in 1993, Paragon Poultry is one of the top three
                poultry farmers in Bangladesh. Our farms are strategically
                located across the country in remote areas, away from biological
                hazards and pollution to facilitate the best environment for
                high-quality day-old poultry.
              </p>
              <p className="text-md text-gray-600 leading-relaxed text-justify">
                {" "}
                {/* Justified text for paragraph */}
                Furthermore, we also produce commercial layers and broilers for
                direct consumers to ensure safe, sustainable poultry meat and
                eggs.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Second Section: Focus Areas */}
      <FocusAreas />
    </>
  );
};

export default TeaEstate;
