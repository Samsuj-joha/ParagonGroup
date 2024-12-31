"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AquaHeader from "@/company-layout/aqua-header/page";

const AquaBreedersLtd = () => {
  return (
    <>
      <AquaHeader />
      <section className="py-16 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row gap-10 "> {/* Add border here */}
            
            {/* Image Section */}
            <motion.div
              className="w-full md:w-1/2 relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="relative">
                <Image
                  src="/assets/images/company-images/aqua2.png"
                  alt="Poultry Farming"
                  layout="responsive"
                  width={1600}
                  height={900}
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              className="w-full md:w-1/2 text-center md:text-left  lg:border-l-[4px] border-[#f99d19] px-5"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <h2 className="text-xl lg:text-2xl font-bold mb-6 text-[#2772b8]">
                Aqua Breeders Ltd.
              </h2>
              <p className="text-md lg:text-md text-gray-600 leading-relaxed text-justify">
                Aqua Breeders Limited is a subsidiary of the Paragon Group,
                specializing in high-quality fish and shrimp breeding for
                commercial purposes. It operates modern aquaculture facilities
                in Bangladesh, using advanced technologies and sustainable
                practices. The company produces a range of species including
                tilapia, pangasius, catfish, and shrimp, supplying both domestic
                and international markets.
              </p>
              <p className="text-md lg:text-lg text-gray-600 mt-4 leading-relaxed text-justify">
                Known for its commitment to quality and sustainability, Aqua
                Breeders Limited constantly innovates to improve efficiency and
                reduce its carbon footprint through eco-friendly practices, such
                as renewable energy usage and waste management.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AquaBreedersLtd;
