"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AquaHeader from "@/company-layout/aqua-header/page";
import ChittagonhFeedHeader from "@/company-layout/chittagong-feed-header/page";

const ChittagongFeed = () => {
  return (
    <>
      <ChittagonhFeedHeader />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row gap-10 relative">
            {/* Image Section */}
            <motion.div
              className="w-full sm:w-2/5 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <Image
                  src="/assets/images/company-images/chittagong-feed2.png"
                  alt="Poultry Farming"
                  layout="responsive"
                  width={1600}
                  height={900}
                  className="object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-105"
                />
                {/* Decorative Border */}
                <motion.div
                  className="absolute h-[275px] border-[4px] border-[#f99d19] rounded-[100px] top-[45px] right-[-20px] sm:block"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                ></motion.div>
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              className="w-full sm:w-3/5"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center sm:text-left">
                Chittagong Feed Ltd.
              </h2>
              <p className="text-md sm:text-lg text-justify mb-4">
                Chittagong Feed Limited, a subsidiary of the Paragon Group, is a leading supplier of high-quality animal feed in Bangladesh. The company operates a modern feed mill in Chittagong, using advanced technologies and sustainable practices to produce nutritious and affordable feed for the poultry, fish, and livestock industries. With a commitment to quality and customer satisfaction, Chittagong Feed Limited offers products that meet international standards and provide exceptional performance. The company places a high value on environmental sustainability, utilizing renewable energy sources, and implementing best practices in waste management and water treatment. With a team of experienced professionals, Chittagong Feed Limited is dedicated to providing reliable and efficient service to its customers worldwide. As part of the Paragon Group, Chittagong Feed Limited has access to the resources and expertise of a diversified conglomerate. Through a commitment to innovation, sustainability, and excellence, Chittagong Feed Limited is positioned for continued growth and success in the global animal feed market.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChittagongFeed;
