"use client";

import React from "react";
import Image from "next/image";
import ParagonPlasticHeader from "@/company-layout/paragon-plastic-header/page";
import { motion } from "framer-motion";

const ParagonPlastic = () => {
  return (
    <>
      <ParagonPlasticHeader />
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
                  src="/assets/images/company-images/paragon-plastic2.jpg"
                  alt="Paragon Plastics"
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
                  className="absolute h-[295px] w-[295px] border-[4px] border-[#f99d19] rounded-full top-[10px] right-[-20px] hidden md:block"
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
                Paragon Plastics Ltd.
              </h2>
              <p className="text-md lg:text-lg text-justify text-gray-600 mb-6 leading-relaxed">
                Paragon Plastics Limited is a leading manufacturer of
                high-quality plastic products in Bangladesh, committed to
                producing eco-friendly and sustainable solutions. With advanced
                technology and experienced professionals, we provide customized
                products tailored to meet the unique needs of our clients.
              </p>
              <p className="text-md lg:text-lg text-justify text-gray-600 leading-relaxed">
                Our products range from household goods to industrial items and
                packaging solutions, ensuring the highest standards of quality
                and safety. We are dedicated to driving innovation and
                excellence in the plastic manufacturing industry, contributing
                to the country's economic growth and development.
              </p>
              <p className="text-md lg:text-lg text-justify text-gray-600 leading-relaxed">
                Our team is passionate about sustainability and uses
                eco-friendly materials and processes in all our operations. At
                Paragon Plastics Limited, we believe in providing exceptional
                customer service and building long-term partnerships with our
                clients. Choose us for your plastic manufacturing needs and
                experience the Paragon difference.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParagonPlastic;
