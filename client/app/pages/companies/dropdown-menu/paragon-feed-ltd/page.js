"use client";

import React from "react";
import Image from "next/image";
import ParagonFeedHeader from "@/company-layout/paragon-feed-header/page";
import { motion } from "framer-motion";

const ParagonFeedLtd = () => {
  return (
    <>
      <ParagonFeedHeader />
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
                  src="/assets/images/company-images/paragon-feed2.png"
                  alt="Paragon Feed"
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
                Paragon Feed Ltd.
              </h2>
              <p className="text-md lg:text-lg text-justify text-gray-600 mb-6 leading-relaxed">
                Paragon Feed Limited is a leading producer of high-quality
                animal feed, committed to supporting the growth and development
                of the livestock industry in Bangladesh. With advanced
                technology and production techniques, the company offers
                customized feed solutions tailored to the unique needs of its
                clients.
              </p>
              <p className="text-md lg:text-lg text-justify text-gray-600 leading-relaxed">
                Paragon Feed Limited ensures that its feed meets the highest
                standards of quality and safety, providing nutritious and
                affordable options for farmers. With a team of experienced
                professionals, the company is dedicated to driving the
                sustainability of the livestock industry in Bangladesh,
                contributing to the country's economic development, and
                supporting the livelihoods of thousands of farmers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParagonFeedLtd;
