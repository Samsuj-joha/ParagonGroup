"use client";

import React from "react";
import Image from "next/image";
import ParagonPlastFiber from "@/company-layout/paragon-plast-fiber-ltd/page";
import { motion } from "framer-motion";

const ParagonPlastFiberLtd = () => {
  return (
    <>
      <ParagonPlastFiber />
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
                  src="/assets/images/company-images/plast-fiber2.png"
                  alt="Paragon Plast Fiber"
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
                Paragon Plast Fiber Ltd.
              </h2>
              <p className="text-md lg:text-lg text-justify text-gray-600 mb-6 leading-relaxed">
                Paragon Plast Fiber Limited is a leading manufacturer of
                high-quality plastic products that cater to various industries.
                Our advanced technology and state-of-the-art machinery allow us to
                produce a wide range of plastic products including woven sacks,
                leno bags, jumbo bags, and more.
              </p>
              <p className="text-md lg:text-lg text-justify text-gray-600 leading-relaxed">
                Our team of experienced professionals is committed to providing
                top-notch services that meet the needs of our clients. We prioritize
                quality control and use only the best raw materials to ensure the
                durability and strength of our products. Our production processes are
                environmentally friendly and adhere to industry standards.
              </p>
              <p className="text-md lg:text-lg text-justify text-gray-600 leading-relaxed">
                At Paragon Plast Fiber Limited, we strive to exceed our client's
                expectations and deliver products that are reliable, efficient, and
                cost-effective.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParagonPlastFiberLtd;
