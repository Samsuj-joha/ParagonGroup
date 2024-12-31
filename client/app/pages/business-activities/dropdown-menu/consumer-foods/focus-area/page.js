"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FocusAreasFood = () => {
  const [activeSection, setActiveSection] = useState(1);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-2xl font-semibold text-[#2772b8] mb-4">
          Our Focus Areas
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-10">
          {/* Header buttons */}
          <motion.button
            onClick={() => handleSectionClick(1)}
            className={`text-xl px-4 py-2 rounded-md transition-colors duration-300 w-full sm:w-auto ${
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
            className={`text-xl px-4 py-2 rounded-md transition-colors duration-300 w-full sm:w-auto ${
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
            className={`text-xl px-4 py-2 rounded-md transition-colors duration-300 w-full sm:w-auto ${
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
              <p className="text-md text-gray-500 pb-5 font-semibold">
                Paragon has three different plants for process, further process
                & dry food unit. All units located in Ashulia, Savar. Paragon
                has its own delivery chain through which it is delivering its
                products to consumers end.
              </p>
              <p className="text-md text-gray-500 pb-5 font-semibold">
                Currently processing
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-500 space-y-2">
                <li>
                  Process Chicken production capacity: 1000 pcs birds dressed
                  per hour
                </li>
                <li>
                  Further process production capacity: 5000 kg per day with
                  different product categories
                </li>
                <li>
                  Dry food production capacity : 5000 kg per day with different
                  product categories
                </li>
              </ul>
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
              <p className="text-md text-gray-600 text-justify py-2">
                In Paragon Agro’s process, further process, Dry food unit,
                varieties of product are being processed in different forms.
              </p>
              <p className="text-md text-gray-600 text-justify py-2">
                <strong>Processing unit:</strong> Whole chicken (with and
                without skin), Chicken breast boneless, Chicken leg boneless,
                Chicken drumstick, Chicken thigh, Chicken wings, etc.
              </p>

              <p className="text-md text-gray-600 text-justify py-2">
                <strong>Further process unit:</strong> Chicken Nugget, Chicken
                Sausage, Beef Sausage, Chicken Burger Patty, Shami Kabab, and
                more.
              </p>

              <p className="text-md text-gray-600 text-justify py-2">
                <strong>Dry food unit:</strong> Plain Cake, Muffin Cake, Cookies,
                Toast biscuits, Chanachur, and other snacks.
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
              <ul className="list-decimal pl-5 text-sm text-gray-500 space-y-2">
                <li>Process Plant</li>
                <li>Further Process Plant</li>
                <li>Dry Food Unit</li>
              </ul>
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
                src="/assets/images/consumer-food-images/image2.jpg"
                alt="Business Operations"
                width={1600}
                height={400}
                className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px]"
              />
            )}
            {activeSection === 2 && (
              <Image
                src="/assets/images/consumer-food-images/image3.jpg"
                alt="Product Category"
                width={1600}
                height={400}
                className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px]"
              />
            )}
            {activeSection === 3 && (
              <Image
                src="/assets/images/consumer-food-images/image4.png"
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

export default FocusAreasFood;
