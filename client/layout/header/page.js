
// 'use client';
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Navbar from "../navbar/page";
// import SearchMenu from "../search/page";

// const Header = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [fadeAnimation, setFadeAnimation] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const slides = [
//     "/assets/images/landing-carosel/landing-page1.jpeg",
//     "/assets/images/landing-carosel/landing-page2.jpeg",
//     "/assets/images/landing-carosel/landing-page3.jpg",
//     "/assets/images/landing-carosel/landing-page4.jpg",
//     "/assets/images/landing-carosel/landing-page5.jpg",
//     "/assets/images/landing-carosel/landing-page6.png",
//     "/assets/images/landing-carosel/landing-page7.png",
//     "/assets/images/landing-carosel/landing-page8.jpg",
//     "/assets/images/landing-carosel/landing-page9.jpg"
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNextSlide();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleNextSlide = () => {
//     setFadeAnimation(true);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//       setFadeAnimation(false);
//     }, 300);
//   };

//   const handlePreviousSlide = () => {
//     setFadeAnimation(true);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
//       setFadeAnimation(false);
//     }, 300);
//   };

//   return (
//     <header className="relative w-full h-screen z-10">
//       {/* Carousel */}
//       <div className={`absolute inset-0 overflow-hidden transition-opacity duration-500 ${fadeAnimation ? "opacity-0" : "opacity-100"}`}>
//         <Image
//           src={slides[currentIndex]}
//           alt={`Slide ${currentIndex + 1}`}
//           fill
//           priority
//           quality={100}
//           className="object-cover"
//         />
//       </div>

//       {/* Fixed Header Content */}
//       <div className="fixed top-0 left-0 right-0 z-20 bg-opacity-100 bg-[rgba(255,255,255,1.0)] p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           {/* Logo Section */}
//           <div>
//             <Link href="/">
//               <Image
//                 src="/paragongroup-logo.png"
//                 alt="Paragon Group"
//                 height={100}
//                 width={100}
//                 quality={100}
//                 priority
//                 className="object-contain"
//               />
//             </Link>
//           </div>

//           {/* Hamburger Menu for Small Screens */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-white bg-[#faa91d] p-2 rounded-md hover:bg-opacity-90"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//             </button>
//           </div>

//           {/* Navbar and SearchMenu for Large Screens */}
//           <div className="nav-item lg:flex justify-between items-center space-x-6">
//             <Navbar />
//             <SearchMenu />
//           </div>
          
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="fixed top-0 left-0 w-full h-screen bg-[#026ab5] bg-opacity-100 z-30 flex flex-col justify-center items-center space-y-6 text-white">
//           <button
//             onClick={() => setMenuOpen(false)}
//             className="absolute top-4 right-4 bg-[#faa91d] p-2 rounded-md"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//           <Navbar />
//           <SearchMenu />
//         </div>
//       )}

//       {/* Navigation Controls */}
//       <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
//         <button
//           onClick={handlePreviousSlide}
//           className="bg-[#263e7a] hover:bg-[#faa91d] text-white p-3 rounded-full hover:bg-opacity-90 shadow-lg transition-all duration-300"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>
//       </div>
//       <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
//         <button
//           onClick={handleNextSlide}
//           className="bg-[#263e7a] hover:bg-[#faa91d] text-white p-3 rounded-full hover:bg-opacity-90 shadow-lg transition-all duration-300"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;




// 'use client';
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Navbar from "../navbar/page";
// import SearchMenu from "../search/page";

// const Header = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [fadeAnimation, setFadeAnimation] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const slides = [
//     "/assets/images/landing-carosel/landing-page1.jpeg",
//     "/assets/images/landing-carosel/landing-page2.jpeg",
//     "/assets/images/landing-carosel/landing-page3.jpg",
//     "/assets/images/landing-carosel/landing-page4.jpg",
//     "/assets/images/landing-carosel/landing-page5.jpg",
//     "/assets/images/landing-carosel/landing-page6.png",
//     "/assets/images/landing-carosel/landing-page7.png",
//     "/assets/images/landing-carosel/landing-page8.jpg",
//     "/assets/images/landing-carosel/landing-page9.jpg"
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNextSlide();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleNextSlide = () => {
//     setFadeAnimation(true);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//       setFadeAnimation(false);
//     }, 300);
//   };

//   const handlePreviousSlide = () => {
//     setFadeAnimation(true);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
//       setFadeAnimation(false);
//     }, 300);
//   };

//   return (
//     <header className="relative w-full h-screen z-10">
//       {/* Carousel */}
//       <div className={`absolute  inset-0 overflow-hidden transition-opacity duration-500 ${fadeAnimation ? "opacity-0" : "opacity-100"}`}>
//         <Image
//           src={slides[currentIndex]}
//           alt={`Slide ${currentIndex + 1}`}
//           fill
//           priority
//           quality={100}
//           className="object-cover"
//         />
//       </div>

//       {/* Fixed Header Content */}
//       <div className="fixed top-0 left-0 right-0 z-20 bg-opacity-100 bg-[rgba(255,255,255,1.0)] p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           {/* Logo Section */}
//           <div>
//             <Link href="/">
//               <Image
//                 src="/paragongroup-logo.png"
//                 alt="Paragon Group"
//                 height={100}
//                 width={100}
//                 quality={100}
//                 priority
//                 className="object-contain"
//               />
//             </Link>
//           </div>

//           {/* Navbar and SearchMenu for Large Screens */}
//           <div className="hidden lg:flex flex-1 justify-center items-center relative">
//             <Navbar />
//             <div className="absolute right-0">
//               <SearchMenu />
//             </div>
//           </div>

//           {/* Hamburger Menu for Small Screens */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-white bg-[#faa91d] p-2 rounded-md hover:bg-opacity-90"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="fixed top-0 left-0 w-full h-screen bg-[#026ab5] bg-opacity-100 z-30 flex flex-col justify-center items-center space-y-6 text-white">
//           <button
//             onClick={() => setMenuOpen(false)}
//             className="absolute top-4 right-4 bg-[#faa91d] p-2 rounded-md"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//           <Navbar />
//           <SearchMenu />
//         </div>
//       )}

//       {/* Navigation Controls */}
//       <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
//         <button
//           onClick={handlePreviousSlide}
//           className="bg-[#263e7a] hover:bg-[#faa91d] text-white p-3 rounded-full hover:bg-opacity-90 shadow-lg transition-all duration-300"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>
//       </div>
//       <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
//         <button
//           onClick={handleNextSlide}
//           className="bg-[#263e7a] hover:bg-[#faa91d] text-white p-3 rounded-full hover:bg-opacity-90 shadow-lg transition-all duration-300"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;




'use client';
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/page";
import SearchMenu from "../search/page";
// import Carousel from "./Carousel"; // Import the Carousel component
import Carousel from "./carosel/page";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <header className="relative w-full z-10">
      {/* Use the Carousel component */}
      <Carousel  />

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

          {/* Hamburger Menu for Small Screens */}
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
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
    </header>
  );
};

export default Header;

