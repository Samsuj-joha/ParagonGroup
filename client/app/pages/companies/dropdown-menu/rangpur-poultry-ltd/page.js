"use client";

import React from "react";
import Image from "next/image";
import DenmHeader from "@/company-layout/denm-header/page";
import { motion } from "framer-motion";

const RangpurPoultryLtd = () => {
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
                  src="/assets/images/company-images/rangpur-poultry-1.png"
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
                Rangpur Poultry Ltd.
              </h2>
              <p className="text-md lg:text-lg text-justify text-gray-600 mb-6 leading-relaxed">
                Rangpur Poultry Limited is a leading poultry company under the Paragon
                Group, committed to providing high-quality and nutritious poultry products
                to its customers. With advanced production facilities and state-of-the-art
                technology, Rangpur Poultry Limited ensures the highest standard of animal
                welfare and food safety.
              </p>
              <p className="text-md lg:text-lg text-justify text-gray-600 leading-relaxed mb-6">
                The company is dedicated to serving the needs of its customers while
                maintaining sustainable and eco-friendly practices. Rangpur Poultry Limited
                is driven by its core values of integrity, innovation, and excellence, and
                its team of experienced professionals is committed to delivering the best
                possible products and services.
              </p>
              <p className="text-md lg:text-lg text-justify text-gray-600 leading-relaxed">
                The company's focus on continuous improvement and customer satisfaction
                has made it a trusted name in the poultry industry both domestically and
                globally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RangpurPoultryLtd;
