"use client";

import React from "react";
import Image from "next/image";
import ParagonPoultryHeader from "@/company-layout/paragon-poultry-header/page";
import { motion } from "framer-motion";

const ParagonPoultryLtd = () => {
  return (
    <>
      <ParagonPoultryHeader />
      <section className="py-14 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col md:flex-row gap-10 relative">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-2/5 relative"
            >
              <div className="relative">
                <Image
                  src="/assets/images/company-images/paragon-poultry2.png"
                  alt="Poultry Farming"
                  layout="responsive"
                  width={500}
                  height={400}
                  className="object-cover rounded-lg shadow-lg"
                />
                {/* Decorative Border */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute h-[275px] w-[275px] border-[4px] border-[#f99d19] rounded-full top-[10px] right-[-20px] hidden md:block"
                ></motion.div>
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-3/5"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
                Paragon Poultry Ltd
              </h2>
              <p className="text-md lg:text-lg text-justify text-gray-600 mb-6 leading-relaxed">
                Paragon Poultry Limited is a leading provider of high-quality
                poultry products in Bangladesh. We are committed to ensuring the
                health and wellbeing of our birds, and we use the latest technology
                and best practices to ensure their comfort and safety.
              </p>
              <p className="text-md lg:text-lg text-justify text-gray-600 leading-relaxed mb-6">
                Our state-of-the-art facilities and experienced staff enable us to
                produce and deliver fresh, delicious, and healthy chicken meat to our
                customers across the country. We are also dedicated to sustainable
                and ethical poultry farming practices, minimizing our environmental
                impact and promoting animal welfare.
              </p>
              <p className="text-md lg:text-lg text-justify text-gray-600 leading-relaxed">
                With our commitment to quality and customer satisfaction, we are
                proud to be one of the top poultry companies in Bangladesh.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParagonPoultryLtd;
