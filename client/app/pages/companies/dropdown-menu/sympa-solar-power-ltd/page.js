"use client";

import React from "react";
import Image from "next/image";
import DenmHeader from "@/company-layout/denm-header/page";
import { motion } from "framer-motion";

const SymaSolarPower = () => {
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
                  src="/assets/images/company-images/syma-solar.png"
                  alt="Solar Power"
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
                Sympa Solar Power Ltd.
              </h2>
              <p className="text-md lg:text-lg text-justify text-gray-600 mb-6 leading-relaxed">
                Sympa Solar Power Limited is a renewable energy company committed to providing clean and sustainable energy solutions. Our focus is on harnessing the power of the sun to create cost-effective and eco-friendly energy options for our customers.
              </p>
              <p className="text-md lg:text-lg text-justify text-gray-600 leading-relaxed mb-6">
                We specialize in designing, building, and operating solar power plants across the country. Our team of experts works closely with clients to provide customized solutions that meet their energy needs while reducing their carbon footprint.
              </p>
              <p className="text-md lg:text-lg text-justify text-gray-600 leading-relaxed">
                We are dedicated to creating a greener tomorrow by promoting the use of renewable energy sources. At Sympa Solar Power Limited, we believe in creating a brighter future for all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SymaSolarPower;
