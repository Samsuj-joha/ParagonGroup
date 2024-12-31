"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AquaHeader from "@/company-layout/aqua-header/page";

const BayChicksLtd = () => {
  return (
    <>
      <AquaHeader />
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Image Section */}
            <motion.div
              className="w-full md:w-2/5 relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="relative">
                <Image
                  src="/assets/images/company-images/bay-chicks.png"
                  alt="Poultry Farming"
                  layout="responsive"
                  width={600}
                  height={400}
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              className="w-full md:w-3/5 text-center md:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
                Bay Chicks Ltd.
              </h2>
              <p className="text-md lg:text-lg text-gray-600 leading-relaxed text-justify">
                Bay Chicks Limited is a dynamic and innovative company committed
                to providing high-quality broiler chicks to customers worldwide.
                Operating modern hatcheries in Bangladesh, the company uses
                advanced technologies and sustainable practices to produce
                healthy and sustainable products.
              </p>
              <p className="text-md lg:text-lg text-gray-600 mt-4 leading-relaxed text-justify">
                With a focus on quality and customer satisfaction, Bay Chicks
                Limited is a trusted supplier of broiler chicks to both domestic
                and international markets. As a subsidiary of the Paragon Group,
                Bay Chicks Limited has access to the resources and expertise of
                a diversified conglomerate.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BayChicksLtd;
