"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FocusAreasEnergy = () => {
  const [activeSection, setActiveSection] = useState(1);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-2xl font-semibold text-[#2772b8] mb-4">Our Focus Areas</h2>
        <div className="flex flex-wrap justify-center gap-2 md:gap-10">
          {/* Header buttons */}
          <motion.button
            onClick={() => handleSectionClick(1)}
            className={`text-xl px-2 py-2 rounded-md transition-colors duration-300 w-full sm:w-auto ${
              activeSection === 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Business Operations
          </motion.button>
          <motion.button
            onClick={() => handleSectionClick(2)}
            className={`text-xl px-2 py-2 rounded-md transition-colors duration-300 w-full sm:w-auto ${
              activeSection === 2
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Product Category
          </motion.button>
          <motion.button
            onClick={() => handleSectionClick(3)}
            className={`text-xl px-2 py-2 rounded-md transition-colors duration-300 w-full sm:w-auto ${
              activeSection === 3
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Business Units
          </motion.button>
        </div>
      </div>

      {/* Conditional Content Rendering based on Active Section */}
      <div className="container mx-auto flex flex-col md:flex-row gap-10">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 relative">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            {activeSection === 1 && (
              <Image
                src="/assets/images/energy-images/energy-image1.jpg"
                alt="Business Operations"
                width={1600}
                height={400}
                className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px]"
              />
            )}
            {activeSection === 2 && (
              <Image
                src="/assets/images/energy-images/energy-image2.jpg"
                alt="Product Category"
                width={1600}
                height={400}
                className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px]"
              />
            )}
            {activeSection === 3 && (
              <Image
                src="/assets/images/energy-images/energy-image3.jpg"
                alt="Business Units"
                width={1600}
                height={400}
                className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px]"
              />
            )}
          </motion.div>
        </div>

        {/* Right side with content */}
        <div className="w-full md:w-1/2">
          {activeSection === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#2772b8]">
                Business Operations
              </h3>
              <p className="text-md text-gray-500 pb-5">
              Sympa Solar Power Limited, a joint venture company of Symbior Solar and Paragon Group established the ‘Tetulia 8MW (AC) solar PV Power Plant’ in Tetulia, Panchaghar (26.483277 N, 88.409462 E). Using Paragon’s poultry farm and its open area as the base, this solar farm is using space-efficient east-west installation method to utilize the free spaces along with rooftop facilities. The project was implemented under a 20-year PPA singed with Power Development Board of Bangladesh (BPDB) on 12th May 2018. This 8MW project is generating clean energy and supplying it to the national grid.
              </p>
              <p className="text-md text-gray-500 pb-5">Major components present at the power plant:</p>
              <li className="text-sm text-gray-500 list-decimal"> PV module</li>
              <li className="text-sm text-gray-500 list-decimal">  Inverter</li>
              <li className="text-sm text-gray-500 list-decimal"> AC combiner box</li>
              <li className="text-sm text-gray-500 list-decimal"> Transformer</li>
              <li className="text-sm text-gray-500 list-decimal">  Static Var generator (SVG)</li>
              <li className="text-sm text-gray-500 list-decimal"> Lightning protection system (LPS)</li>
              <li className="text-sm text-gray-500 list-decimal">  Solar radiation measurement equipment</li>
            </motion.div>
          )}
          {activeSection === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#2772b8]">
              System description & Status of the plant
              </h3>
              <p className="text-md text-gray-600 text-justify">
              37,512nos panels with a capacity of 275Wp gives over 10MWp of DC power. 33 panels make 1 string and 12 strings are connected to 1 inverter. Total 96nos inverters with a capacity of 90KW are present making the total capacity of the system over 8MW. All the inverter’s output goes into the AC combiner box and then to the transformer. The transformer steps up the voltage level and supplies the power to national grid. The Static Var Generator is connected via SF6 circuit breaker with the grid. It is there for reactive power compensation in the 33KV grid. If there is a voltage drop or power loss noticed, maintenance team starts the generator and connects it by switching on the breaker manually.
              </p>
              <p className="text-md text-gray-600 text-justify py-3">
              The plant has an area of 37.62 acres under single ownership. PPA with BPDB was singed at 12th May 2018 and commercial operation of the plant started from 24th July 2019. The solar plant is connected with Tetulia substation by an automatic circuit recloser (ACR). To supply the power to grid, a 33KV transmission line is used from the power plant to the substation. Following observations were made:
              </p>
              <li className="text-sm text-gray-500 list-decimal"> An average daily generation of 32 MWh is found for last 1 year</li>
              <li className="text-sm text-gray-500 list-decimal">   Average monthly generation is around 965 MWh.</li>
              <li className="text-sm text-gray-500 list-decimal"> Total generation of 2020 was 11580 MWhx</li>
              <li className="text-sm text-gray-500 list-decimal"> Highest efficiency of the modules is found around 26-27˚C</li>
              <li className="text-sm text-gray-500 list-decimal">  Highest generation in a year was in month of March 2020 which is around 1244.8 MWh</li>
              <li className="text-sm text-gray-500 list-decimal"> There is dust and soil IQ measurement system available at site</li>
              <li className="text-sm text-gray-500 list-decimal">   According to Sympa authority, the earthing value is 0.25 ohms at the site</li>
              <li className="text-sm text-gray-500 list-decimal">  Monthly consumption for maintenance equipment is around 2MWh</li>
              <li className="text-sm text-gray-500 list-decimal">   Pyranometer data is recorded for every 1 minute</li>
              <li className="text-sm text-gray-500 list-decimal"> Generation, transformer and solar radiation data are easily accessible through software.</li>
              <li className="text-sm text-gray-500 list-decimal"> There is a dedicated operation and maintenance team present in the plant. They are monitoring</li>
              <li className="text-sm text-gray-500 list-decimal">   Cleaning crew is cleaning the whole system once in every 25 days</li>
              <li className="text-sm text-gray-500 list-decimal"> Breeder farm’s connection is from NESCO which is separate from SYMPA solar power plant.</li>
              <li className="text-sm text-gray-500 list-decimal">  Solar radiation measurement equipment</li>
            </motion.div>
          )}
          {activeSection === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#2772b8]">
                Business Units
              </h3>
              <p className="text-lg text-gray-600">
              Tea Estates
              </p>
              <ol className="text-md text-gray-600 list-decimal ml-10">
                <li>Hazinagar Tea Estate, Mouluvibazar</li>
                <li>Rahmania Tea Estate, Mouluvibazar</li>
                <li>Fatehabad Tea Estate, Mouluvibazar</li>
                <li>Voban Tea Estate, hobigong</li>
              </ol>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasEnergy;
