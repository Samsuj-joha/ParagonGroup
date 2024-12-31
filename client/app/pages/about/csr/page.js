"use client";
import CsrHeader from "@/layout/csr-header/page";
import Image from "next/image";
import { useState } from "react";

const Csr = () => {
  const [activeSection, setActiveSection] = useState(1);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <CsrHeader />

      {/* Section 1: CSR Header */}
      <section className="bg-gray-100 py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
          {/* Title */}
          <h1 className="text-lg sm:textxl md:text-4xl lg:text-3xl font-bold text-[#123f8e] mb-4">
            CORPORATE SOCIAL RESPONSIBILITIES
          </h1>

          {/* Border */}
          <div className="w-16 sm:w-20 lg:w-40 h-1 bg-[#fab803] mx-auto mb-6"></div>

          {/* CSR Image and Content */}
          <div className="flex flex-col lg:flex-row items-start lg:items-start justify-between gap-6 md:gap-8 lg:gap-12">
            {/* Image */}
            <div className="w-full lg:w-1/3 flex justify-start items-start">
              <Image
                src="/assets/images/csrImages/csrImage2.jpeg"
                alt="CSR Image"
                height={300}
                width={400}
                className="rounded-lg object-cover w-full"
              />
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-2/3 text-left">
              <p className="text-sm sm:text-base md:text-md text-gray-700 leading-relaxed mb-6">
                In response to the call of responsibility, Paragon feels for
                civic duty for the welfare of society and the environment for
                maintaining a balance between economic growth and ecosystems.
                Paragon developed a CSR framework for needy meritorious students
                through HOPES, oral & dental health support for rural school
                children partnering with JICA & a Japanese Dental institute,
                providing school feeding for village schools, contributing to
                the Special Olympics movement for physically & intellectually
                challenged children & adults, constructing schools and religious
                centers, etc.
              </p>

              {/* Subheading */}
              <h3 className="text-xl sm:text-lg md:text-xl font-bold text-[#123f8e] mb-6 text-center lg:text-left">
                SOME OF OUR ACTIVITIES
              </h3>

              {/* List of Activities */}
              <ol className="list-decimal pl-6 space-y-4 text-sm sm:text-base md:text-md text-gray-700">
                <li>
                  Boiled Egg, Banana, and Snacks are distributed among the
                  students and teachers of 17 Primary Schools and 2 Hafizia
                  Madrashas. The distribution frequency is twice a week on a
                  regular basis.
                </li>
                <li>
                  We arrange Dental Camps for dental treatment and distribute
                  toothbrushes and toothpaste. Every 4 months, we arrange this
                  Dental Camp.
                </li>
                <li>
                  A permanent dental clinic has been established to ensure
                  dental treatment for students and people living nearby.
                </li>
                <li>
                  We are ensuring pure drinking water and sanitation systems in
                  various schools and local areas.
                </li>
                <li>
                  We are arranging the monthly salary for a few teachers of
                  local schools to maintain a balanced teacher-student ratio.
                </li>
                <li>Chicken meat is distributed to various orphanages.</li>
                <li>We ensure electricity by providing our own generators.</li>
                <li>
                  We conduct regular maintenance of orphanages, schools, roads,
                  and prayer locations.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      {/* Second Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#123f8e] mb-6">
              Our Focus Areas
            </h2>
          </div>

          {/* Header Buttons */}
          <div className="flex justify-center gap-4 mb-10">
            <button
              onClick={() => handleSectionClick(1)}
              className={`text-lg px-6 py-3 rounded-md transition-all duration-300 ${
                activeSection === 1
                  ? "bg-[#123f8e] text-white shadow-lg"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              All
            </button>
            <button
              onClick={() => handleSectionClick(2)}
              className={`text-lg px-6 py-3 rounded-md transition-all duration-300 ${
                activeSection === 2
                  ? "bg-[#123f8e] text-white shadow-lg"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Dental Camp
            </button>
            <button
              onClick={() => handleSectionClick(3)}
              className={`text-lg px-6 py-3 rounded-md transition-all duration-300 ${
                activeSection === 3
                  ? "bg-[#123f8e] text-white shadow-lg"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Egg Feeding
            </button>
          </div>

          {/* Image Cards */}
          <div className="flex flex-wrap justify-center gap-8 mx-auto">
            {/* Show all cards */}
            {(activeSection === 1 || activeSection === 2) && (
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 w-full sm:w-1/2 lg:w-1/3 xl:w-2/5">
                <Image
                  src="/assets/images/csrImages/dental.jpg"
                  alt="Dental Camp"
                  width={500}
                  height={300}
                  className="object-cover w-full h-[200px]"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-[#123f8e] mb-2">
                    Dental Camp
                  </h3>
                  <p className="text-sm text-gray-700">
                    We organize dental camps to provide free dental treatment
                    and distribute oral hygiene materials.
                  </p>
                </div>
              </div>
            )}
            {(activeSection === 1 || activeSection === 3) && (
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 w-full sm:w-1/2 lg:w-1/3 xl:w-2/5">
                <Image
                  src="/assets/images/csrImages/egg.jpg"
                  alt="Egg Feeding"
                  width={500}
                  height={300}
                  quality={100}
                  className="object-cover w-full h-[200px] opacity-100"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-[#123f8e] mb-2">
                    Egg Feeding
                  </h3>
                  <p className="text-sm text-gray-700">
                    We distribute eggs and other nutritional food to
                    underprivileged students regularly.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Csr;
