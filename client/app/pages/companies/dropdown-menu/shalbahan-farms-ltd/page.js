"use client";

import React from "react";
import Image from "next/image";
import DenmHeader from "@/company-layout/denm-header/page";
import { motion } from "framer-motion";

const ShalbahanFarmsLtd = () => {
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
                  src="/assets/images/company-images/shalbahan.png"
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
                Shalbahan Farms Ltd.
              </h2>
              <p className="text-md lg:text-lg text-justify text-gray-600 mb-6 leading-relaxed">
                Shalbahan Farms Limited is a subsidiary of the Paragon Group, committed to providing high-quality and sustainable food products. We take pride in our state-of-the-art farming practices and the quality of our products.
              </p>
              <p className="text-md lg:text-lg text-justify text-gray-600 leading-relaxed mb-6">
                Our focus is on producing safe and healthy food through innovative and environmentally friendly methods. We employ a team of skilled professionals and use modern technology to ensure that our products meet the highest standards of quality.
              </p>
              <p className="text-md lg:text-lg text-justify text-gray-600 leading-relaxed">
                At Shalbahan Farms, we believe in responsible and ethical farming practices, which are reflected in our product offerings. Our products include eggs, broiler chickens, and other poultry products that are both healthy and delicious. We are committed to providing our customers with the best products possible and promoting sustainable agriculture for a healthier world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShalbahanFarmsLtd;
