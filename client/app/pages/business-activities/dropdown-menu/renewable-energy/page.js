"use client";

import React, { useState } from "react";
import Image from "next/image";
import BistroHeader from "@/layout/bistro-header/page";
import EnergyHeader from "@/layout/energy-header/page";
import FocusAreasEnergy from "./focus-area/page";

const RenewaleEnergy = () => {
  const [activeSection, setActiveSection] = useState(1); // State to track which section is active

  // Handle section click to change active section
  const handleSectionClick = (sectionNumber) => {
    setActiveSection(sectionNumber);
  };

  return (
    <>
      <EnergyHeader />

      {/* First Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Image Section */}
            <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/assets/images/energy-images/energy-image1.jpg"
                alt="Renewable Energy"
                layout="responsive"
                width={1600}
                height={900}
                className="object-cover transition-transform duration-500 transform hover:scale-105"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 flex flex-col ">
              <h2 className="text-2xl font-semibold mb-4 text-[#2772b8] transition-all duration-500 transform hover:translate-x-2">
                Renewable Energy
              </h2>
              <p className="text-md mb-4 text-justify text-gray-600">
                Sympa Solar Power Limited is a renewable energy company
                committed to providing clean and sustainable energy solutions.
                Our focus is on harnessing the power of the sun to create
                cost-effective and eco-friendly energy options for our
                customers. We specialize in designing, building, and operating
                solar power plants across the country. Our team of experts works
                closely with clients to provide customized solutions that meet
                their energy needs while reducing their carbon footprint. We are
                dedicated to creating a greener tomorrow by promoting the use of
                renewable energy sources. At Sympa Solar Power Limited, we
                believe in creating a brighter future for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <FocusAreasEnergy />
    </>
  );
};

export default RenewaleEnergy;
