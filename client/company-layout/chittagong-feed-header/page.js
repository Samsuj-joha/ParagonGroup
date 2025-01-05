'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../layout/navbar/page";
import SearchMenu from "../../layout/search/page";

const ChittagongHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Define the menuOpen state

  return (
    <header className="relative w-full">
      {/* Fixed Header Content */}
      <div className="fixed top-0 left-0 right-0 z-20 bg-opacity-100 bg-[rgba(255,255,255,1.0)] p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <Link href="/">
              <Image
                src="/paragongroup-logo.png"
                alt="Paragon Group"
                height={100}
                width={100}
                quality={100}
                priority
                className="object-contain"
              />
            </Link>
          </div>

          {/* Navbar and SearchMenu for Large Screens */}
          <div className="hidden lg:flex flex-1 justify-center items-center relative">
            <Navbar />
            <div className="absolute right-0">
              <SearchMenu />
            </div>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white bg-[#faa91d] p-2 rounded-md hover:bg-opacity-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#026ab5] bg-opacity-100 z-30 flex flex-col justify-center items-center space-y-6 text-white">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 bg-[#faa91d] p-2 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Navbar />
          <SearchMenu />
        </div>
      )}

      {/* Background Image Section */}
      <div className="relative mt-20 pt-2">
        <Image
          src="/assets/images/company-images/chittagong-feed1.jpeg"
          alt="Chittagong Feed Background"
          layout="responsive"
          width={1600}
          height={600}
          quality={100}
          className="object-cover"
        />
      </div>
    </header>
  );
};

export default ChittagongHeader;
