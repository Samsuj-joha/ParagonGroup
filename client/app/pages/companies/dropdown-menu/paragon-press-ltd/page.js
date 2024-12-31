"use client";

import React from "react";
import Image from "next/image";
import ParagonPressHeader from "@/company-layout/paragon-press-header/page";
import { motion } from "framer-motion";

const ParagonPress = () => {
  return (
    <>
      <ParagonPressHeader />
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
                  src="/assets/images/company-images/press2.jpg"
                  alt="Poultry Farming"
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
                Paragon Press Ltd.
              </h2>
              <p className="text-md lg:text-lg text-justify text-gray-600 mb-6 leading-relaxed">
                Paragon Press Limited is a leading printing and packaging company
                that specializes in producing high-quality paper products for various
                industries. With over three decades of experience, our skilled team of
                professionals delivers exceptional services that meet the needs of our
                clients.
              </p>
              <p className="text-md lg:text-lg text-justify text-gray-600 leading-relaxed mb-6">
                Our advanced technology and modern infrastructure enable us to handle
                large-scale production with precision and efficiency. We offer a wide
                range of services including printing, binding, lamination, UV coating,
                and more.
              </p>
              <p className="text-md lg:text-lg text-justify text-gray-600 leading-relaxed">
                Our commitment to quality and customer satisfaction has made us a trusted
                partner for businesses of all sizes. At Paragon Press Limited, we strive to
                exceed our client's expectations and deliver top-notch products that meet
                industry standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParagonPress;
