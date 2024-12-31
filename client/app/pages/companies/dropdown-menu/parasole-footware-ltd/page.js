"use client";

import React from "react";
import Image from "next/image";
import ParasoleFootwareLtd from "@/company-layout/parasole-footware-header/page";
import { motion } from "framer-motion";

const ParasoleFootware = () => {
  return (
    <>
      <ParasoleFootwareLtd />
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
                  src="/assets/images/company-images/parasole-footware2.png"
                  alt="Footwear Production"
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
                ParaSole Footwear Ltd.
              </h2>
              <p className="text-md lg:text-lg text-justify text-gray-600 mb-6 leading-relaxed">
                ParaSole Footwear Limited is a subsidiary of Paragon Group, specializing in
                the production of high-quality footwear. With a commitment to innovation and
                sustainable production, ParaSole Footwear Limited has become a leading supplier
                of footwear in Bangladesh and beyond.
              </p>
              <p className="text-md lg:text-lg text-justify text-gray-600 leading-relaxed mb-6">
                Our team of experienced designers and skilled artisans work tirelessly to
                create comfortable, durable, and fashionable shoes for men, women, and children.
                We use only the finest materials to ensure our products meet the highest
                standards.
              </p>
              <p className="text-md lg:text-lg text-justify text-gray-600 leading-relaxed">
                Our mission is to provide our customers with exceptional footwear that meets
                their unique needs and exceeds their expectations. Join us in walking towards
                a better future with ParaSole Footwear Limited.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParasoleFootware;
