"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FlourMillHeader from "@/layout/flour-mil-header/page";
import FocusAreasFlour from "./focus-area/page";

const FlourMill = () => {
  return (
    <>
      <FlourMillHeader />

      {/* First Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Image Section */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 relative"
            >
              <Image
                src="/assets/images/flour-images/image1.jpg"
                alt="Flour Mill"
                layout="responsive"
                width={1600}
                height={900}
                className="object-cover rounded-md shadow-md"
              />
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-2xl font-semibold mb-4 text-[#2772b8]">Flour Mill</h2>
              <p className="text-md text-justify mb-4 text-gray-600">
                Paragon launches a fully integrated flour mill producing for
                direct consumer through the brand Paragon Atta, Paragon Maida,
                and Paragon Suji. The company is also a backbone for the feed
                mill industries in Bangladesh providing factory-grade flour for
                animal feed production.
              </p>
              <p className="text-md text-justify text-gray-600">
                Paragon offers the best quality and taste using machine and
                technology designed by Buhler Industries Inc. from Switzerland.
                With our strong quality assurance team, Paragon carefully
                selects the best quality raw material and uses a multi-step
                cleaning process to maintain the nutritional goodness. The
                factory officially launched in 2021 with a nationwide expansion
                plan.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <FocusAreasFlour />
    </>
  );
};

export default FlourMill;
