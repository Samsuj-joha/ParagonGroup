"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ConsumerHeader from "@/layout/consumer-food-header/page";
import FocusAreasFood from "./focus-area/page";

const Consumer = () => {
  const [activeSection, setActiveSection] = useState(1);

  // Handle section click to change active section
  const handleSectionClick = (sectionNumber) => {
    setActiveSection(sectionNumber);
  };

  return (
    <>
      <ConsumerHeader />

      {/* First Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left Section (Image) */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 relative"
            >
              <Image
                src="/assets/images/consumer-food-images/image1.jpg"
                alt="Poultry Farming"
                layout="responsive"
                width={1600}
                height={900}
                className="object-cover rounded-md shadow-md"
              />
            </motion.div>

            {/* Right Section (Text) */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-2xl font-semibold mb-4 text-[#2772b8]">Consumer Foods</h2>
              <p className="text-md mb-4 text-justify text-gray-700">
              Consumer food division under Paragon Agro Limited, a subsidiary of the Paragon Group, produces and distributes high-quality animal feed. Utilizing modern technologies and sustainable practices, the company is committed to providing safe, healthy, and nutritious feed that meets international standards. With a skilled team of professionals, Paragon Agro offers reliable and efficient service to its customers worldwide. As part of the Paragon Group, the company has access to the resources and expertise of a diversified conglomerate. Through a commitment to innovation, sustainability, and animal welfare, Paragon Agro is positioned for continued growth and success in the global agribusiness industry.
              </p>
              <p className="text-md text-justify text-gray-700">
              Our factory has ISO 22000, GMP, HACCP, and HALAL certifications. We proudly serve all multinational hotels, fast food brands like KFC and Pizza Hut, and local airlines. Furthermore, we also launched a collection of traditional and Western-inspired ready-to-eat/cook frozen products.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Second Section */}
    <FocusAreasFood/>
    </>
  );
};

export default Consumer;
