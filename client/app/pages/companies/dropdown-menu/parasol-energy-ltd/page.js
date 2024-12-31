"use client";

import React from "react";
import Image from "next/image";
import DenmHeader from "@/company-layout/denm-header/page";
import { motion } from "framer-motion";

const ParasoleEnergy = () => {
  return (
    <>
      <DenmHeader />
      <section className="py-14 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col md:flex-row gap-10 relative items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-2/5 relative"
            >
              <div className="relative">
                <Image
                  src="/assets/images/company-images/parasole-energy.jpg"
                  alt="Parasol Energy"
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
                Parasol Energy Ltd.
              </h2>
              <p className="text-md lg:text-lg text-justify text-gray-600 mb-6 leading-relaxed">
                Parasol Energy Limited, a subsidiary of the Paragon Group, is a
                leading developer of renewable energy projects in Bangladesh.
                The company specializes in solar power generation, offering
                innovative and sustainable solutions to meet the energy needs of
                its clients.
              </p>
              <p className="text-md lg:text-lg text-justify text-gray-600 leading-relaxed">
                Parasol Energy is committed to promoting environmental
                sustainability and reducing dependence on fossil fuels. With a
                team of experienced professionals, the company delivers reliable
                and efficient service to its clients. As part of the Paragon
                Group, Parasol Energy has access to a wide range of resources
                and expertise, enabling it to drive growth and innovation in the
                renewable energy sector.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParasoleEnergy;
