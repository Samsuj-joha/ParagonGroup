"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FocusAreasFootware = () => {
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
            Our Buyer List
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
                src="/assets/images/footware-images/image2.jpg"
                alt="Business Operations"
                width={1600}
                height={400}
                className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px]"
              />
            )}
            {activeSection === 2 && (
              <Image
                src="/assets/images/footware-images/image3.png"
                alt="Product Category"
                width={1600}
                height={400}
                className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px]"
              />
            )}
            {activeSection === 3 && (
              <Image
                src="/assets/images/footware-images/image4.png"
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
              <p className="text-md text-gray-500 pb-8">
                {
                  "Design->> Marketing->> Purchasing->> Paper Pattern Grading->> Cutting Knives->> Trial Production->> Lamination->> Cutting->> Printing->> Embossing->> Embroidery->> Stitching->> Lasting->> Outsole->> Finishing->> Export."
                }
              </p>

              <p className="text-md text-gray-500 pb-2">
                <strong> Business Type:</strong> Manufacturer and 100% Exporter
                of all kind of Shoes.
              </p>
              <p className="text-md text-gray-500 pb-2">
                <strong>Product Type:</strong> All kinds of Sports, Casual and
                Fashion Shoes for Man’s Woman’s & Infant.
              </p>
              <p className="text-md text-gray-500 pb-2">
                <strong> Factory Areas:</strong> 1,05,826 sft. (Approx)
              </p>

              <p className="text-md text-gray-500 pb-2">
                <strong> Production Areas: </strong> 47,900 sft.
              </p>
              <p className="text-md text-gray-500 pb-2">
                <strong>Warehouse Areas:</strong> 17,800 sft.
              </p>
              <p className="text-md text-gray-500 pb-2">
                <strong> Production Capacity:</strong> 10,000 pairs /Day (4-line
                production –Single shift)
              </p>
              <p className="text-md text-gray-500 pb-2">
                <strong> Nos. of Employees:</strong>1324 Persons (Cutting- 170,
                Sewing-680, A/F-295, Other-179)
              </p>
              <p className="text-md text-gray-500 pb-2">
                <strong> Export Development Fund Facility:</strong>USD 5.2
                Million (EDF Fund Facility Limit can easily be increase if
                required.)
              </p>

              <p className="pt-2 text-md text-gray-500 decoration-slice">
                MACHINERIES Our Strength
              </p>
              <p className="text-md text-gray-500 pb-2">
                <strong>Cutting & preparation department: </strong> 30 nos
              </p>

              <p className="text-md text-gray-500 pb-2">
                <strong>Printing & lamination department: </strong> 9 nos
              </p>
              <p className="text-md text-gray-500 pb-2">
                <strong>Stitching & upper making department: </strong> 426 nos
              </p>
              <p className="text-md text-gray-500 pb-2">
                <strong>Lasting department: </strong> 58 nos
              </p>
              <p className="text-md text-gray-500 pb-2">
                <strong>Gluing & assembly department: </strong> 26 nos
              </p>
              <p className="text-md text-gray-500 pb-2">
                <strong>Finishing department: </strong> 38 nos
              </p>
              <p className="text-md text-gray-500 pb-2">
                <strong>Insole section: </strong> 6 nos
              </p>
              <p className="text-md text-gray-500 pb-2">
                <strong>Store department: </strong> 10 nos
              </p>
              <p className="text-md text-gray-500 pb-2">
                <strong>Lab department: </strong> 14 nos
              </p>
              <p className="text-md text-gray-500 pb-2">
                <strong>Total: </strong> 617 Nos
              </p>
            </motion.div>
          )}
          {activeSection === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#2772b8]">
                Production Catagory
              </h3>
              <p className="text-md text-gray-600 text-justify  pt-5">
                <strong>ParaSole Footwear Ltd.</strong> is a Manufacturer and
                100% Exporter of all kind of Shoes. We develop footwear- from
                provided sketch or picture or concept. Our strong team will
                source all material based on an assessment of safety, health,
                environment and security.
              </p>
              <p className="text-md text-gray-600 text-justify  pt-5">
                Product Type:
              </p>
              <p className="text-md text-gray-600 text-justify  pt-5">Kid's</p>
              <li>- sandal.</li>
              <li>- Running shoes.</li>
              <p className="text-md text-gray-600 text-justify  pt-5">Man's</p>
              <li>- Boot's.</li>
              <li>- Sandal.</li>
              <li>- Running Shoes.</li>
              <p className="text-md text-gray-600 text-justify  pt-5">Ladies</p>
              <li>- Boot's.</li>
              <li>- Sandal.</li>
              <li>- Running Shoes.</li>
              <p className="text-md text-gray-600 text-justify  pt-5">
                All kinds of Sports.
              </p>
              <p className="text-md text-gray-600 text-justify pt-5">
                All kinds of Casual.
              </p>
              <p className="text-md text-gray-600 text-justify pt-5">
                Fashion Shoes for Man’s Woman’s & Infant.
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
                Our Buyer List
              </h3>
              <p className="text-md text-gray-500 pb-5">
                ParaSole Footwear limited
              </p>

              <li className="text-sm text-gray-500 list-decimal"> HEYDUDE</li>
              <li className="text-sm text-gray-500 list-decimal"> H&M</li>
              <li className="text-sm text-gray-500 list-decimal"> DEICHMAN</li>
              <li className="text-sm text-gray-500 list-decimal"> ALDI</li>
              <li className="text-sm text-gray-500 list-decimal"> CCC</li>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasFootware;
