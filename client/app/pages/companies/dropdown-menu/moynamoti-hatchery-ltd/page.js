"use client";

import React from "react";
import Image from "next/image";
import DenmHeader from "@/company-layout/denm-header/page";
import { motion } from "framer-motion";

const MoynamotiHatchary = () => {
  return (
    <>
      <DenmHeader />
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
                  src="/assets/images/company-images/moynamoti.png"
                  alt="Poultry Farming"
                  layout="responsive"
                  width={600}
                  height={400}
                  className="object-cover rounded-lg shadow-lg"
                />
                {/* Decorative Border */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute h-[255px] w-[255px] border-[4px] border-[#f99d19] rounded-full top-[10px] right-[-20px] hidden md:block"
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
                Moynamoti Hatchery Ltd.
              </h2>
              <p className="text-md lg:text-lg text-justify text-gray-600 mb-6 leading-relaxed">
                Moynamoti Hatchery Limited, a subsidiary of the Paragon Group,
                is a modern hatchery producing high-quality poultry products.
                The company is committed to providing safe, healthy, and
                nutritious products that meet international standards. With a
                team of experienced professionals, Moynamoti Hatchery offers
                reliable and efficient service to customers worldwide.
              </p>
              <p className="text-md lg:text-lg text-justify text-gray-600 leading-relaxed">
                As part of the Paragon Group, the hatchery has access to the
                resources and expertise of a diversified conglomerate. Through a
                commitment to animal welfare, sustainability, and innovation,
                Moynamoti Hatchery is poised for continued growth and success in
                the global poultry industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoynamotiHatchary;
