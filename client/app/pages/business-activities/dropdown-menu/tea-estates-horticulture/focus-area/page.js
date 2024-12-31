"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FocusAreas = () => {
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
            className={`text-md px-4 py-2 rounded-md transition-colors duration-300 w-full sm:w-auto ${
              activeSection === 1
                ? "bg-[#2772b8] text-white"
                : "bg-gray-200 text-black"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Business Operations
          </motion.button>
          <motion.button
            onClick={() => handleSectionClick(2)}
            className={`text-md px-4 py-2 rounded-md transition-colors duration-300 w-full sm:w-auto ${
              activeSection === 2
                ? "bg-[#2772b8] text-white"
                : "bg-gray-200 text-black"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Product Category
          </motion.button>
          <motion.button
            onClick={() => handleSectionClick(3)}
            className={`text-md px-4 py-2 rounded-md transition-colors duration-300 w-full sm:w-auto ${
              activeSection === 3
                ? "bg-[#2772b8] text-white"
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
        {/* Left side with content */}
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
              <p className="text-md text-gray-500 pb-5 text-justify">
                Paragon has four different plants for tea cultivation. All units are located in Sylhet. Paragon has its own delivery chain through which it delivers products to the consumer's end. Currently processing:
              </p>
              <li className="text-md text-gray-500 text-justify">Tea Packing Unit capacity: 100 tons production capacity per day.</li>
            </motion.div>
          )}
          {activeSection === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#2772b8]">
                Product Category
              </h3>
              <p className="text-lg text-gray-600 text-justify">
                In Paragon Agro’s process & further process unit, varieties of products are being processed in different forms, like:
              </p>
              <p>
                <strong>Tea Packing unit:</strong> Tea BOP, Tea PD, Tea CD, Tea DUST, Exotic Tea, Tea Bag, etc.
              </p>
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
              <p className="text-lg text-gray-600">Tea Estates</p>
              <ol className="text-md text-gray-600 list-decimal ml-10">
                <li>Hazinagar Tea Estate, Moulvibazar</li>
                <li>Rahmania Tea Estate, Moulvibazar</li>
                <li>Fatehabad Tea Estate, Moulvibazar</li>
                <li>Voban Tea Estate, Hobigong</li>
              </ol>
            </motion.div>
          )}
        </div>

        {/* Right side with image */}
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
                src="/assets/images/tea-images/tea-image2.jpg"
                alt="Business Operations"
                width={1600}
                height={400}
                className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px]"
              />
            )}
            {activeSection === 2 && (
              <Image
                src="/assets/images/tea-images/tea-image3.jpg"
                alt="Product Category"
                width={1600}
                height={400}
                className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px]"
              />
            )}
            {activeSection === 3 && (
              <Image
                src="/assets/images/tea-images/tea-image4.png"
                alt="Business Units"
                width={1600}
                height={400}
                className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px]"
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
