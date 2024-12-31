"use client";
import { useState, useEffect } from "react";
import { FaFacebook, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";  // React icons for social media

const SocialMediaIcons = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position to show/hide icons
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="fixed top-1/3 right-4 z-50 space-y-2"
          aria-label="Social Media Icons"
        >
          <a href="https://www.facebook.com/paragongroup.bd" target="_blank" rel="noopener noreferrer">
            <div
              className="flex justify-center items-center border-b w-8 h-8 bg-[#0562ae] text-white  shadow-md hover:bg-[#f7bb67] transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebook size={15}  />
            </div>
          </a>
          <a href="https://www.youtube.com/@paragongroup9881" target="_blank" rel="noopener noreferrer">
            <div
              className="flex justify-center items-center border-b w-8 h-8 bg-[#0562ae] text-white  shadow-md hover:bg-[#f7bb67] transition duration-300"
              aria-label="YouTube"
            >
              <FaYoutube size={15}  />
            </div>
          </a>
          <a href="https://www.linkedin.com/company/paragon-group-bd/mycompany/" target="_blank" rel="noopener noreferrer">
            <div
              className="flex justify-center  items-center border-b w-8 h-8 bg-[#0562ae] text-white  shadow-md hover:bg-[#f7bb67] transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={15}  />
            </div>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <div
              className="flex justify-center items-center  w-8 h-8 bg-[#0562ae] text-white  shadow-md hover:bg-[#f7bb67] transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={15}  />
            </div>
          </a>
        </div>
      )}
    </>
  );
};

export default SocialMediaIcons;
