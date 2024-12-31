import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SectionThree = () => {
  const activities = [
    {
      title: "Poultry Farming",
      description: "Description of activity 1.",
      imageSrc: "/assets/images/cardImage1.jpg",
      link: "/pages/business-activities/dropdown-menu/poultry-farming",
    },
    {
      title: "Processing & Further Processing Plant",
      description: "Description of activity 2.",
      imageSrc: "/assets/images/processing-image/processing-header.jpg",
      link: "/pages/business-activities/dropdown-menu/processing-and-further-processing-plant",
    },
    {
      title: "Plastic Woven Bags & FIBC",
      description: "Description of activity 3.",
      imageSrc: "/assets/images/plastic-images/plastic-image-header.jpg",
      link: "/pages/business-activities/dropdown-menu/plastic-woven-bags-fibc",
    },
    {
      title: "Tea Estates & Horticulture",
      description: "Description of activity 4.",
      imageSrc: "/assets/images/tea-images/tea-images-header.jpg",
      link: "/pages/business-activities/dropdown-menu/tea-estates-horticulture",
    },
    {
      title: "Bistro Cafe & Retail Shops",
      description: "Description of activity 5.",
      imageSrc: "/assets/images/bistro-images/bistro-image-header.jpg",
      link: "/pages/business-activities/dropdown-menu/bistro-cafe-retail-shop",
    },
    {
      title: "Renewable Energy",
      description: "Description of activity 6.",
      imageSrc: "/assets/images/energy-images/energy-header.jpg",
      link: "/pages/business-activities/dropdown-menu/renewable-energy",
    },
    {
      title: "Feed Mills",
      description: "Description of activity 7.",
      imageSrc: "/assets/images/feedmil-images/header-image.jpg",
      link: "/pages/business-activities/dropdown-menu/feed-mills",
    },
    {
      title: "Consumer Foods",
      description: "Description of activity 8.",
      imageSrc: "/assets/images/consumer-food-images/header.jpg",
      link: "/pages/business-activities/dropdown-menu/consumer-foods/",
    },
    {
      title: "Fish Hatchery",
      description: "Description of activity 9.",
      imageSrc: "/assets/images/fish-hatchary-images/header.jpg",
      link: "/pages/business-activities/dropdown-menu/fish-hatchery",
    },
    {
      title: "Organic Fertilizer",
      description: "Description of activity 10.",
      imageSrc: "/assets/images/organic-images/organic-card.jpg",
      link: "/pages/business-activities/dropdown-menu/organic-fertilizer",
    },
    {
      title: "Flour Mill",
      description: "Description of activity 11.",
      imageSrc: "/assets/images/flour-images/flour-card.jpg",
      link: "/pages/business-activities/dropdown-menu/flour-mill",
    },
    {
      title: "Footwear Manufacturing",
      description: "Description of activity 12.",
      imageSrc: "/assets/images/footware-images/footware-card.jpg",
      link: "/pages/business-activities/dropdown-menu/footwear-manufacturing",
    },
    {
      title: "Dairy Project",
      description: "Description of activity 12.",
      imageSrc: "/assets/images/dairy-images/dairy-card.jpg",
      link: "/pages/business-activities/dropdown-menu/dairy-project",
    },
  ];

  return (
    <section className=" w-full py-16">
      <div className="md:px-12">
        <p className="text-3xl font-bold text-[#0e376c] mb-8 text-center">
          BUSINESS ACTIVITIES
        </p>

        <div className="rounded-lg p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="relative w-full h-[18rem] rounded-lg overflow-hidden cursor-pointer shadow-lg group transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
              >
                {/* Card Image */}
                <div className="relative w-full h-1/2 overflow-hidden">
                  <Image
                    src={activity.imageSrc}
                    height={200}
                    width={300}
                    alt={activity.title}
                    className="object-cover w-full h-full opacity-90 transition-opacity duration-200 ease-out group-hover:opacity-100"
                  />
                </div>

                {/* Card Content */}
                <div className="relative bottom-0 left-0 right-0 w-full h-1/2 text-left bg-gradient-to-b from-[#0e376c] to-[#12397e] rounded-b-lg opacity-100 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                  <Link
                    href={activity.link}
                    className="flex flex-col items-start justify-center h-full px-6 py-4 transition-transform duration-300 ease-out group-hover:-translate-y-4"
                  >
                    <h2 className="text-white text-md font-semibold uppercase tracking-wide">
                      {activity.title}
                    </h2>
                    <button className="flex items-center text-sm text-gray-200 mt-2 hover:underline cursor-pointer">
                      See More
                      <ArrowRight className="ml-2" size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
