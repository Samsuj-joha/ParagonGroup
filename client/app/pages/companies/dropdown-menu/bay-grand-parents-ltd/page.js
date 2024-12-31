"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AquaHeader from "@/company-layout/aqua-header/page";

const BayGrandParentsLtd = () => {
  return (
    <>
      <AquaHeader />
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 ">
            {/* Image Section */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="relative shadow-lg rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/company-images/bay-grand.png"
                  alt="Bay Grand Parents"
                  layout="responsive"
                  width={600}
                  height={900}
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 text-center md:text-left">
                Bay Grand Parents Ltd.
              </h2>
              <p className="text-md lg:text-lg text-gray-600 leading-relaxed text-justify mb-4">
                Bay Grand Parents Limited is a leading supplier of high-quality breeding stock for
                the poultry industry worldwide. Operating modern hatcheries in Bangladesh, the company
                uses advanced technologies and sustainable practices to produce healthy and genetically
                superior parent stock.
              </p>
              <p className="text-md lg:text-lg text-gray-600 leading-relaxed text-justify mb-4">
                With a focus on quality and customer satisfaction, Bay Grand Parents Limited is
                committed to providing its customers with high-performance breeding stock that meets
                international standards. The company places a high value on environmental
                sustainability, utilizing renewable energy sources to reduce its carbon footprint.
              </p>
              <p className="text-md lg:text-lg text-gray-600 leading-relaxed text-justify mb-4">
                With a team of experienced professionals, Bay Grand Parents Limited is dedicated to
                providing reliable and efficient service to its customers worldwide. As a subsidiary
                of the Paragon Group, Bay Grand Parents Limited has access to the resources and
                expertise of a diversified conglomerate.
              </p>
              <p className="text-md lg:text-lg text-gray-600 leading-relaxed text-justify">
                Through a commitment to innovation, sustainability, and excellence, Bay Grand Parents
                Limited is poised for continued success in the global poultry industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BayGrandParentsLtd;
