"use client";

import React from "react";
import Image from "next/image";
import DenmHeader from "@/company-layout/denm-header/page";
import { motion } from "framer-motion";

const FatehBaghTea = () => {
  return (
    <>
      <DenmHeader />
      <section className="py-14 bg-gradient-to-b from-white to-gray-100">
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
                  src="/assets/images/company-images/fatehbagh.png"
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
                Fatehbagh Tea Company Ltd.
              </h2>
              <p className="text-md lg:text-lg text-justify text-gray-600 mb-6 leading-relaxed">
                Fatehbagh Tea Company Limited is a subsidiary of the Paragon Group, and one of the leading tea producers in Bangladesh. Our tea gardens are located in the scenic hills of Srimangal, where the climate and soil are ideal for growing high-quality tea leaves.
              </p>
              <p className="text-md lg:text-lg text-justify text-gray-600 leading-relaxed mb-6">
                We take great care in every step of the tea production process, from planting and nurturing the tea bushes to carefully selecting and processing the leaves. Our commitment to quality has earned us a reputation for producing some of the finest teas in the region.
              </p>
              <p className="text-md lg:text-lg text-justify text-gray-600 leading-relaxed">
                We offer a wide range of teas, including black, green, and white teas, as well as flavored and specialty teas. Our products are sold in both domestic and international markets, and are enjoyed by tea lovers around the world. We take pride in our tea, and we are dedicated to bringing the best of Bangladesh to the world through our products.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FatehBaghTea;
