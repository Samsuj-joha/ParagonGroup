"use client";
import React, { useState } from "react";
import Image from "next/image";

const FocusAreasSection = () => {
  const [activeSection, setActiveSection] = useState(1);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto text-center mb-10 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-[#0f5299]">
          Our Focus Areas
        </h2>
        <div className="flex justify-center gap-6 flex-wrap mb-6">
          {/* Header buttons */}
          <button
            onClick={() => handleSectionClick(1)}
            className={`transition-all duration-300 text-md px-4 py-2 rounded-md transform ${
              activeSection === 1
                ? "bg-[#faa919] text-white scale-105 shadow-lg"
                : "bg-gray-200 text-black hover:bg-[#0b54a1] hover:text-white"
            }`}
          >
            Business Operations
          </button>
          <button
            onClick={() => handleSectionClick(2)}
            className={`transition-all duration-300 text-md px-4 py-2 rounded-md transform ${
              activeSection === 2
                ? "bg-[#faa919] text-white scale-105 shadow-lg"
                : "bg-gray-200 text-black hover:bg-[#0b54a1] hover:text-white"
            }`}
          >
            Product Category
          </button>
          <button
            onClick={() => handleSectionClick(3)}
            className={`transition-all duration-300 text-md px-4 py-2 rounded-md transform ${
              activeSection === 3
                ? "bg-[#faa919] text-white scale-105 shadow-lg"
                : "bg-gray-200 text-black hover:bg-[#0b54a1] hover:text-white"
            }`}
          >
            Business Units
          </button>
        </div>
      </div>

      {/* Conditional Content Rendering based on Active Section */}
      <div className="container mx-auto flex flex-col md:flex-row gap-10 px-4">
        {/* Left side with content */}
        <div className="w-full md:w-1/2 text-justify order-2 md:order-1">
          {activeSection === 1 && (
            <>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Business Operations
              </h3>
              <p className="text-md text-gray-700">
                Paragon has two different plants for processing and further
                processing units. Both units are located in Ashulia, Savar.
                Paragon has its own delivery chain through which it is
                delivering its products to consumers' end. Currently processing
              </p>
              <ul className="pt-4 list-decimal pl-5 text-gray-700">
                <li>
                  Process Chicken production capacity: 1000 pcs birds dressed
                  per hour.
                </li>
                <li>
                  Further process production capacity: 5000 kg per day with
                  different product categories.
                </li>
              </ul>
            </>
          )}
          {activeSection === 2 && (
            <>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Product Category
              </h3>
              <p className="text-md text-gray-700 py-1">
                In Paragon Agro’s process & further process unit, varieties of
                products are being processed in different forms, like
              </p>
              <p className="py-1">
                <strong>Processing unit:</strong> Whole chicken (with and
                without skin), Chicken breast boneless, Chicken drumstick,
                Chicken thigh, Chicken kima, Chicken wings, etc.
              </p>
              <p className="py-1">
                <strong>Further process unit:</strong> The company produces
                Chicken Nugget, Chicken Sausage, Chicken Burger Patty, Shami
                Kabab, Chicken Meatball, Chicken Strip, Chicken Wings, Popcorn
                Chicken, Chicken Lollipop, Chicken Spring Rolls, Chicken
                Drumlet, Ruti, Paratha, Dalpuri, Singara, Samusa, and different
                types of Momo.
              </p>
            </>
          )}
          {activeSection === 3 && (
            <>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Business Units
              </h3>
              <ul className="list-decimal py-5 px-5">
                <li>Process Plant</li>
                <li>Further Process Plant</li>
                <li>Dry Food Unit</li>
              </ul>
            </>
          )}
        </div>

        {/* Right side with image */}
        <div className="w-full md:w-1/2 relative order-1 md:order-2">
          {activeSection === 1 && (
            <Image
              src="/assets/images/processing-image/focus1.jpg"
              alt="Business Operations"
              width={1600}
              height={900}
              className="object-cover w-full h-[300px] rounded-lg shadow-md transform transition-all hover:scale-105"
            />
          )}
          {activeSection === 2 && (
            <Image
              src="/assets/images/processing-image/focus2.jpg"
              alt="Product Category"
              width={1600}
              height={900}
              className="object-cover w-full h-[300px] rounded-lg shadow-md transform transition-all hover:scale-105"
            />
          )}
          {activeSection === 3 && (
            <Image
              src="/assets/images/processing-image/focus4.png"
              alt="Business Units"
              width={1600}
              height={900}
              className="object-cover w-full h-[300px] rounded-lg shadow-md transform transition-all hover:scale-105"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
