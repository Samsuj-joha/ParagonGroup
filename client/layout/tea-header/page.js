'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/page";
import SearchMenu from "../search/page";

const TeaHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <div className="nav-item lg:flex items-center space-x-6">
            <Navbar />
            <SearchMenu />
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
          src="/assets/images/tea-images/tea-images-header.jpg"
          alt="Tea Header"
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

export default TeaHeader;
