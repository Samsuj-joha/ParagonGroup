"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FocusAreasDairy = () => {
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
            Our Location
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
                src="/assets/images/dairy-images/image1.jpg"
                alt="Business Operations"
                width={1600}
                height={400}
                className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px]"
              />
            )}
            {activeSection === 2 && (
              <Image
                src="/assets/images/dairy-images/image2.jpg"
                alt="Product Category"
                width={1600}
                height={400}
                className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px]"
              />
            )}
            {activeSection === 3 && (
              <Image
                src="/assets/images/feedmil-images/image4.png"
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
              <p className="text-sm text-gray-500 pb-8">
              Milking is now performed almost exclusively by machine, though human technicians are still essential on most facilities The most common milking machine is called a cluster milker. This milker consists of four metal cups—one per teat—each lined with rubber or silicone. The cluster is attached to both a milk collection system and a pulsating vacuum system. When the vacuum is on, it pulls air from between the outer metal cup and the liner, drawing milk out of the teat. When the vacuum turns off, it gives the teat an opportunity to refill with milk. In most milking systems, a milking technician must attach the cluster to each cow, but the machine senses when the cow has been fully milked and drops off independently.
              Milking routine
              </p>
              <p className="text-sm text-gray-500 pb-8">
              Every time a cow enters the parlor several things need to happen to ensure milk quality and cow health. First, the cow's udder must be cleaned and disinfected to prevent both milk contamination and udder infections. Then the milking technician must check each teat for signs of infection by observing the first stream of milk. During this processes, called stripping the teat, the milking technician is looking for any discoloration or chunkiness that would indicate mastitis, an infection in the cow's mammary gland. Milk from a cow with mastitis cannot enter the human milk supply, thus farmers must be careful that infected milk does not mix with the milk from healthy cows and that the cow gets the necessary treatment. If the cow passes the mastitis inspection, the milking technician will attach the milking cluster. The cluster will run until the cow is fully milked and then drop off. The milk travels immediately through a cooling system and then into a large cooled storage tank, where it will stay until picked up by a refrigerated milk truck. Before the cow is released from the milking stalls her teats are disinfected one last time to prevent infection.
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
              <li className="text-sm text-gray-500">
                {" "}
                pasteurizated milk.
              </li>
              <li className="text-sm text-gray-500">
                {" "}
                UHT milk.
              </li>
              <li className="text-sm text-gray-500">
                {" "}
                Ghee.
              </li>
              <li className="text-sm text-gray-500">
                {" "}
                Butter.
              </li>
              <li className="text-sm text-gray-500">
                {" "}
                Cheese.
              </li>
              <li className="text-sm text-gray-500">
                {" "}
                Yogurt.
              </li>
              <li className="text-sm text-gray-500">
                {" "}
                Laban
              </li>
              
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
              <p className="text-md text-gray-500 pb-5">
                In total, Paragon Group runs 16 lines in 6 locations under its
                concerns. Those are-
              </p>

              <li className="text-sm text-gray-500">
                {" "}
                Paragon Poultry Limited (Feed division), Gazipur.
              </li>
              <li className="text-sm text-gray-500">
                {" "}
                Denm Poultry Limited (Feed division), Kapasia.
              </li>
              <li className="text-sm text-gray-500">
                {" "}
                Paragon Feed Limited, (Unit-2), Savar.
              </li>
              <li className="text-sm text-gray-500">
                {" "}
                Jessore Feed Limited, Jessore.
              </li>
              <li className="text-sm text-gray-500">
                {" "}
                Chittagong Feed Limited, Chattogram.
              </li>
              <li className="text-sm text-gray-500">
                {" "}
                Rangpur Poultry Limited (Feed division), Rangpur.
              </li>
              <p className="text-md text-gray-500 pt-5">
                The company’s operations are spread throughout the country, with
                plans to expand more operational units in the future.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasDairy;
