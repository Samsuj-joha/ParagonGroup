import { useState } from "react";
import Image from "next/image";

const FocusAreasPoultry = () => {
  const [activeSection, setActiveSection] = useState(1);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-8">
      {/* Header */}
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-md sm:text-xl md:text-2xl font-semibold mb-4 text-[#2772b8]">Our Focus Areas</h2>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {["Business Operations", "Product Category", "Business Units"].map((title, index) => (
            <button
              key={index}
              onClick={() => handleSectionClick(index + 1)}
              className={`transition-all duration-300 text-md px-4 py-2 rounded-md transform ${
                activeSection === index + 1
                  ? "bg-[#2772b8] text-white scale-105 shadow-lg"
                  : "bg-gray-200 text-black hover:bg-[#2772b8] hover:text-white"
              }`}
            >
              {title}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div
        className={`container mx-auto flex flex-col ${
          activeSection !== null ? "md:flex-row" : "md:flex-row-reverse"
        } gap-10 transition-all duration-500 ease-in-out`}
      >
        {/* Content (left on md/lg screens) */}
        <div className="w-full md:w-1/2">
          {activeSection === 1 && (
            <>
              <h3 className="text-md sm:text-xl font-semibold mb-4 text-[#2772b8]">Business Operations</h3>
              <p className="text-md text-gray-700">
                Paragon Poultry operates state-of-the-art poultry farms with strict biosecurity measures to ensure the health
                and quality of our poultry. Our facilities are equipped with the latest technology to manage feeding,
                monitoring, and care.
              </p>
            </>
          )}
          {activeSection === 2 && (
            <>
              <h3 className="text-md sm:text-xl font-semibold mb-4 text-[#2772b8]">Product Category</h3>
              <p className="text-md text-gray-700">
                We provide a variety of poultry products, including day-old layers, broilers, and colored birds. We also
                offer poultry meat and eggs for direct consumers, ensuring high quality and sustainability.
              </p>
            </>
          )}
          {activeSection === 3 && (
            <>
              <h3 className="text-md sm:text-xl font-semibold mb-4 text-[#2772b8]">Business Units</h3>
              <p className="text-md text-gray-700">
                Our business units cover a wide range of services, including breeding, hatching, processing, and
                distribution, ensuring a streamlined operation from farm to table.
              </p>
            </>
          )}
        </div>

        {/* Image (right on md/lg screens) */}
        <div className="w-full md:w-1/2 relative">
          {activeSection === 1 && (
            <Image
              src="/assets/images/poultry-images/poultry-image-3.jpg"
              alt="Business Operations"
              width={1600}
              height={900}
              className="object-cover w-full h-[300px] rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105"
            />
          )}
          {activeSection === 2 && (
            <Image
              src="/assets/images/poultry-images/poultry-image-4.jpg"
              alt="Product Category"
              width={1600}
              height={900}
              className="object-cover w-full h-[300px] rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105"
            />
          )}
          {activeSection === 3 && (
            <Image
              src="/assets/images/poultry-images/poultry-image-5.jpg"
              alt="Business Units"
              width={1600}
              height={900}
              className="object-cover w-full h-[300px] rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasPoultry;
