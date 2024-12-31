"use client";

import React from "react";
import Image from "next/image";
import UshaPoultryHeader from "@/company-layout/usha-header/page";
import { motion } from "framer-motion";

const UshaPoultryLtd = () => {
  return (
    <>
      <UshaPoultryHeader />
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
                  src="/assets/images/company-images/usha2.png"
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
                Usha Poultry Ltd.
              </h2>
              <p className="text-md lg:text-lg text-justify text-gray-600 mb-6 leading-relaxed">
                Usha Poultry Ltd. is a company under the Paragon Group that specializes in producing and supplying high-quality poultry products. With a commitment to excellence and sustainability, we have established ourselves as a leading player in the poultry industry.
              </p>
              <p className="text-md lg:text-lg text-justify text-gray-600 leading-relaxed mb-6">
                Our state-of-the-art facilities, cutting-edge technology, and highly skilled team enable us to deliver products of exceptional quality, taste, and nutritional value. We are dedicated to upholding the highest standards of animal welfare, hygiene, and food safety throughout our operations.
              </p>
              <p className="text-md lg:text-lg text-justify text-gray-600 leading-relaxed">
                Our products include a wide range of fresh and frozen chicken, eggs, and other poultry items, catering to both domestic and international markets. At Usha Poultry, we are passionate about providing healthy and delicious food options that meet the evolving needs and preferences of consumers worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UshaPoultryLtd;
