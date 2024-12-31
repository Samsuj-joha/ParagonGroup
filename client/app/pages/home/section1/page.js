"use client";
import AOS from "aos"; // Import AOS library
import Image from "next/image";
import { useEffect } from "react";

const SectionOne = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
    AOS.refresh(); // Refresh AOS after initial load (to fix issues in dynamic content)
  }, []);

  return (
    <section className="bg-[#e6e6ea] w-full py-4 relative">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-center gap-8 px-6 md:px-12">
        {/* Text Section (Left Side) */}
        <div
          className="sm:col-span-2 lg:col-span-2 space-y-6"
          data-aos="fade-up" // Fade up animation
          data-aos-delay="200" // Delay for 200ms before animation
        >
          <h3
            className="text-4xl font-bold"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span className="text-[#fab803]">Paragon</span>{" "}
            <span className="text-[#123f8e]">Group</span>
          </h3>
          <p
            className="text-lg text-gray-700 leading-relaxed text-justify"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            The foundation of what would grow to become the Paragon Group was
            laid in 1952 by Mr. Mizanur Rahman with a family business initiative
            – he established a modern printing and packaging company in Dhaka. A
            visionary entrepreneur transferred his knowledge of precision
            printing craftsmanship to his children. Mr. Moshiur Rahman, inspired
            by his father, pivoted toward the poultry industry in 1993. He
            established the first fully integrated modern poultry farming with
            his wife, Mrs. Yasmin Rahman. The company diversified into other
            business sectors by maintaining sustainable business practices,
            creating job opportunities, and positively impacting our economy.
          </p>
        </div>

        {/* Image Section (Right Side) */}
        <div
          className="relative sm:col-span-2 lg:col-span-3 h-[400px] md:h-[500px]"
          data-aos="zoom-in" // Zoom-in animation when the image comes into view
          data-aos-delay="800" // Delay for 800ms before animation
        >
          <Image
            src="/home-image-1.png"
            alt="Paragon Group Image"
            fill
            className="absolute bottom-0 right-0 object-contain transform hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
