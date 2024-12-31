"use client";

import React from "react";
import Image from "next/image";
import AquaHeader from "@/company-layout/aqua-header/page";

const ChittagonhChicksLtd = () => {
  return (
    <>
      <AquaHeader />
      <section className="py-14 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 relative">
            {/* Image Section */}
            <div className="w-full md:w-2/5 relative">
              <div className="relative">
                <Image
                  src="/assets/images/company-images/chittagong-chicks.png"
                  alt="Poultry Farming"
                  layout="responsive"
                  width={600}
                  height={400} // Adjusted height
                  className="object-cover rounded-lg shadow-lg h-[250px]" // Set height explicitly
                />
                {/* Decorative Border */}
                <div
                  className="absolute h-[275px] border-[4px] border-[#f99d19] rounded-[100px] top-[45px] right-[-20px] hidden md:block"
                ></div>
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-3/5 text-center md:text-left">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-gray-800">
                Chittagong Chicks Ltd.
              </h2>
              <p className="text-md lg:text-lg text-gray-600 leading-relaxed text-justify mb-4">
                Chittagong Chicks Limited is a leading supplier of high-quality broiler chicks for
                commercial purposes worldwide. Operating modern hatcheries in Chittagong, Bangladesh,
                the company uses advanced technologies and sustainable practices to produce healthy and
                fast-growing chicks. With a focus on quality and customer satisfaction, Chittagong Chicks
                Limited is committed to providing its customers with high-performance broiler chicks that meet
                international standards.
              </p>
              <p className="text-md lg:text-lg text-gray-600 leading-relaxed text-justify mb-4">
                The company places a high value on environmental sustainability, utilizing renewable energy
                sources to reduce its carbon footprint. With a team of experienced professionals, Chittagong
                Chicks Limited is dedicated to providing reliable and efficient service to its customers worldwide.
              </p>
              <p className="text-md lg:text-lg text-gray-600 leading-relaxed text-justify mb-4">
                As a subsidiary of the Paragon Group, Chittagong Chicks Limited has access to the resources and
                expertise of a diversified conglomerate. Through a commitment to innovation, sustainability, and
                excellence, Chittagong Chicks Limited is poised for continued success in the global poultry industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChittagonhChicksLtd;
