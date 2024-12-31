"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const FocusAreasPlastic = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [businessOperationsImageIndex, setBusinessOperationsImageIndex] =
    useState(0); // To track the image for Business Operations

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  // Auto Slide Effect for Business Operations
  useEffect(() => {
    if (activeSection === 1) {
      const interval = setInterval(() => {
        setBusinessOperationsImageIndex((prevIndex) => (prevIndex + 1) % 2); // Toggle between 0 and 1
      }, 5000); // Slide every 5 seconds

      return () => clearInterval(interval); // Clean up on component unmount or when the section changes
    }
  }, [activeSection]);

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
              <p className="text-sm text-gray-700">
                <strong>Paragon Plast Fiber Ltd (Unit-1)</strong> founded in the
                Year 2007 is located in Baniarchala, Bhabanipur Gazipur, Dhaka.
              </p>
              <p className="text-sm pt-4 text-gray-700 py-4">
                <strong>Number of Employee500</strong>
              </p>
             
                <table className="min-w-full border-collapse border border-gray-300 text-left text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">
                        Machinery
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Quantity
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Capacity
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Tape Plant Lorex – 1400
                      </td>
                      <td className="border border-gray-300 px-4 py-2">2</td>
                      <td className="border border-gray-300 px-4 py-2">
                        400 ton/Month
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Loom M/C with Winder (Lohia)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">76</td>
                      <td className="border border-gray-300 px-4 py-2">
                        40 Lac Meter/Month
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Printing (Auto)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        5 (five color auto print)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        50 Lac Pcs/Month
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Lamination Plant
                      </td>
                      <td className="border border-gray-300 px-4 py-2">2</td>
                      <td className="border border-gray-300 px-4 py-2">
                        45 Lac Meter/Month
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Auto Cutting & Sewing & liner Insertion
                      </td>
                      <td className="border border-gray-300 px-4 py-2">2</td>
                      <td className="border border-gray-300 px-4 py-2">
                        45 Lac Meter/Month
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Finish Goods
                      </td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                      <td className="border border-gray-300 px-4 py-2">
                        50 Lac Pcs/Month
                      </td>
                    </tr>
                  </tbody>
                </table>
            

              <p className="text-sm pt-4 text-gray-700 py-4">
                <strong>Paragon Plast Fiber Ltd. (Unit-2)</strong> founded in
                the Year 2016, is located in Baniarchala, Bhabanipur Gazipur,
                Dhaka. Through unremitting optimization and improvement, it has
                achieved extended production scale and a complete range of
                categories, and developed into a professional manufacturer local
                & export-oriented Garments Poly Bag.
              </p>

             
                <table className="min-w-full border-collapse border border-gray-300 text-left text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">
                        Machinery
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Quantity
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Capacity
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">HDPE</td>
                      <td className="border border-gray-300 px-4 py-2">4</td>
                      <td className="border border-gray-300 px-4 py-2">
                        60 ton/Month
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">LDPE</td>
                      <td className="border border-gray-300 px-4 py-2">5</td>
                      <td className="border border-gray-300 px-4 py-2">
                        70 ton/Month
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">PP</td>
                      <td className="border border-gray-300 px-4 py-2">1</td>
                      <td className="border border-gray-300 px-4 py-2">
                        10 ton/Month
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Printing (Auto)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        2 (4 color auto print)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        50 Lac Pcs/Month
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Side Sealing
                      </td>
                      <td className="border border-gray-300 px-4 py-2">2</td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Bottom Sealing
                      </td>
                      <td className="border border-gray-300 px-4 py-2">2</td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Multifilament Yarn
                      </td>
                      <td className="border border-gray-300 px-4 py-2">1</td>
                      <td className="border border-gray-300 px-4 py-2">
                        20 ton/Month
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Number of Employee
                      </td>
                      <td className="border border-gray-300 px-4 py-2">50</td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                    </tr>
                  </tbody>
                </table>
              

              <p className="text-sm pt-4 text-gray-700 py-4">
                <strong>Paragon Plastics Ltd.</strong>
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 text-left text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">
                        Machinery
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Quantity
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Capacity
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Tape Plant Lorex – 1400 (Lohia)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">2</td>
                      <td className="border border-gray-300 px-4 py-2">
                        400 mt/Month
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Loom M/C with Winder (Lohia)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">33</td>
                      <td className="border border-gray-300 px-4 py-2">
                        15 lac mtr/Month
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Colour Printing Machine (Manual)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        JPI Printing Machinery (P) Ltd. India
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        2.6 lac Pcs/Month
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Lamination Plant
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Sen Yang Machinery (P) Ltd. India
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        19 lac mtr/Month
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Auto Cutting
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Lohia, Gabbar & WEIYU Precision Machinery, China
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        19 lac mtr/Month
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Sewing Machine
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Juki, Gabbar & Revo
                      </td>
                      <td className="border border-gray-300 px-4 py-2">93</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Pre-Shape Liner
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Rondo, Thailand
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        20000 Pcs/Month
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Needle Loom
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Susmatex, India
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        12 lac mtr/Month
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Loop Cutting Machine
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        WEIYU Precision Machinery, China
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        35 mt/Month
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Twisting Machine
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        KRISLON, India
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        35 mt/Month
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Hydraulic Bale Press Machine
                      </td>
                      <td className="border border-gray-300 px-4 py-2">4</td>
                      <td className="border border-gray-300 px-4 py-2">
                        5 lac Pcs/Month
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Needle Detector Machine
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        WEIYU Precision Machinery, China
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        5 lac Pcs/Month
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Bag Cleaner Machine
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        WEIYU Precision Machinery, China
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        5 lac Pcs/Month
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Finished Goods
                      </td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                      <td className="border border-gray-300 px-4 py-2">
                        5 lac Pcs/Month
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm pt-4 text-gray-700 py-4">
                <strong>Laboratory Equipment</strong>
              </p>
              
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    UV Testing Machine (Q-LAB, USA)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">1</td>
                  <td className="border border-gray-300 px-4 py-2"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Bag Testing Machine Hydro Product
                  </td>
                  <td className="border border-gray-300 px-4 py-2">1</td>
                  <td className="border border-gray-300 px-4 py-2"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Tensile Testing Machine For Dah, Taiwan
                  </td>
                  <td className="border border-gray-300 px-4 py-2">1</td>
                  <td className="border border-gray-300 px-4 py-2"></td>
                </tr>
              </tbody>
              

            </>
          )}
          {activeSection === 2 && (
            <>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Product Category
              </h3>
              <p className="text-md text-gray-700 py-1">
              <strong>Poly bag: </strong>PE poly, PE Garments poly, Hanger poly, Roll poly, Hope poly, flower poly.
              </p>
              <p className="text-md text-gray-700 py-1">
                <strong>Multifilament:</strong>  Export quality twisted multifilament.
              </p>
              <p className="text-md text-gray-700 py-1">
                <strong>Woven bag:</strong>  Fertilizer bag, Fish bag, Poultry bag, Sugar bag, Textile bag, Transparent bag.
              </p>
              <p className="text-md text-gray-700 py-1"><strong>Export bag:</strong> U shape cross corner bag, Standard big bag, Buffle bag, U shape bag, Cross corner bag, Single loop bag</p>
             
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
            <div className="relative">
              {/* Business Operations Auto-Sliding */}
              <Image
                src={`/assets/images/plastic-images/plastic-image${
                  businessOperationsImageIndex + 1
                }.jpg`} // Corrected the image path
                alt="Business Operations"
                width={1600}
                height={900}
                className="object-cover w-full h-[300px] rounded-lg shadow-md transform transition-all hover:scale-105"
              />
            </div>
          )}
          {activeSection === 2 && (
            <Image
              src="/assets/images/plastic-images/plastic-image4.jpg"
              alt="Product Category"
              width={1600}
              height={900}
              className="object-cover w-full h-[300px] rounded-lg shadow-md transform transition-all hover:scale-105"
            />
          )}
          {activeSection === 3 && (
            <Image
              src="/assets/images/plastic-images/plastic-image5.png"
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
export default FocusAreasPlastic;
