"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import OrganicHeader from "@/layout/organic-fertilizer-header/page";
import FocusAreasOrganic from "./focus-area/page";

const Organic = () => {
  const [activeSection, setActiveSection] = useState(1); // State to track which section is active

  const handleSectionClick = (sectionNumber) => {
    setActiveSection(sectionNumber);
  };

  return (
    <>
      <OrganicHeader />

      {/* First Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left Section: Image */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 relative"
            >
              <Image
                src="/assets/images/organic-images/image1.jpg"
                alt="Organic Fertilizer"
                layout="responsive"
                width={1600}
                height={900}
                className="object-cover rounded-md shadow-md"
              />
            </motion.div>

            {/* Right Section: Text */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-2xl font-semibold mb-4 text-[#2772b8]">Organic Fertilizer</h2>
              <p className="text-md text-justify mb-4 text-gray-600">
                With growth comes responsibility. In 2020, Paragon launched its first organic fertilizer project. Channeling all organic waste to this project, Paragon takes another step toward improving its ecological footprint with another environmentally friendly initiative.
              </p>
              <p className="text-md text-justify text-gray-600">
                Paragon designed an organic fertilizer using technology that improves soil texture, holds water longer, increases bacterial and fungal activity in the soil, improves nutrient efficiency, and produces more robust crops. It facilitates the slow release of nutrients based on the dynamic needs of plants, boosts water efficiency, safeguards ecosystems by minimizing leaching, and helps the soil become more fertile for future crops.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <FocusAreasOrganic />
    </>
  );
};

export default Organic;
