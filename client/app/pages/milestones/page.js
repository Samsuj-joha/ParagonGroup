// import MilestonesHeader from "@/layout/milestones-header/page";
// import React from "react";
// import Image from "next/image";

// const Milestones = () => {
//   return (
//     <>
//       <MilestonesHeader />
//       <section className="bg-[#333333] py-10 relative">
//         <div className="container mx-auto px-4">
//           {/* Parent Wrapper */}
//           <div className="flex flex-col lg:flex-row gap-10">
//             {/* Left Section */}
//             <div className="flex-1 space-y-10">
//               {/* Single Milestone Item */}
//               {[1, 2, 3].map((_, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col md:flex-row items-center gap-6 animate-fade-in-up"
//                 >
//                   {/* Image Section */}
//                   <div className="relative w-full md:w-5/5 h-52 overflow-hidden">
//                     <Image
//                       height={300}
//                       width={450}
//                       src="/assets/images/milestones/1680753879_printingpress.jpeg" // Replace with your actual image path
//                       alt="Printing Press"
//                       className="absolute inset-0 w-full h-full object-cover bg-center transition-transform duration-700 hover:scale-105"
//                     />
//                     {/* Skewed Overlay */}
//                     <div className="absolute top-0 right-0 bottom-0 w-full h-full bg-[#333333] transform skew-y-[110deg] origin-top-right"></div>
//                   </div>
//                   {/* Content Section */}
//                   <div className="text-center md:text-left space-y-3">
//                     <h3 className="text-2xl font-bold text-[#f3a019]">1989</h3>
//                     <h4 className="text-xl font-medium text-[#f3a019]">
//                       PRINTING PRESS
//                     </h4>
//                     <p className="text-lg text-white leading-relaxed text-justify">
//                       Paragon started its journey with a printing press in 1989.
//                       It was founded by the late Mizanur Rahman, who started the
//                       business back in 1952 under the name Udayon Press.
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Sticky Right-Side Content */}
//             <div className="h-auto w-full lg:w-[235px] bg-[#424040] rounded-lg shadow-lg sticky top-10 self-start">
//               <div className="flex flex-col items-center justify-center p-6 space-y-6">
//                 {/* Year at the Top */}
//                 <h3 className="text-4xl font-bold text-[#ffffff] animate-bounce">
//                   1989
//                 </h3>

//                 {/* Border Bottom */}
//                 <div className="w-full border-b-2 border-gray-300 my-4"></div>

//                 {/* Dashed Line */}
//                 <div className="h-48 border-l-2 border-dashed border-gray-300"></div>

//                 {/* Border Top */}
//                 <div className="w-full border-t-2 border-gray-300 my-4"></div>

//                 {/* Year at the Bottom */}
//                 <h3 className="text-4xl font-bold text-[#ffffff]">2020</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </>
//   );
// };

// export default Milestones;

import MilestonesHeader from "@/layout/milestones-header/page";
import React from "react";
import Image from "next/image";

const milestonesData = [
  {
    year: "1989",
    title: "PRINTING PRESS",
    content:
      "Paragon started its journey with a printing press in 1989. It was founded by the late Mizanur Rahman, who started the business back in 1952 under the name Udayon Press.",
    image: "/assets/images/milestones/printing-press.jpeg",
  },
  {
    year: "1993",
    title: "POULTRY FARMING",
    content:
      "A poultry farm of 25,000 parent stock with a vision to diversify and become one of the largest and revolutionized poultry farmers in Bangladesh.",
    image: "/assets/images/milestones/poultry.jpg",
  },
  {
    year: "1995",
    title: "FEED MILLS",
    content:
      "Paragon started to produce to poultry units to gain more control of the bird and soon after, expanding the supply to the local market.Paragon went global in 2000, establishing offices in major cities worldwide.",
    image: "/assets/images/milestones/feed-mi.jpg",
  },
  {
    year: "1998",
    title: "POULTRY HATCHERIES",
    content:
      "Paragon launched it’s own hatcheries with the latest technology to facilitate commercial layer and broiler, day old chicken to local farmers all across Bangladesh.",
    image: "/assets/images/milestones/poultry-hatachary.jpg",
  },
  {
    year: "1999",
    title: "POULTRY CARE LABORATORIES",
    content:
      "Introducing on of the first private laboratory to control the quality, health and safety of the birds.",
    image: "/assets/images/milestones/1666154468_poultry-care-lab.jpg",
  },
  {
    year: "2002",
    title: "TEA ESTATES",
    content:
      "A Very refreshing project with 449 acres of land producing 244 MT green leaf and 56 MT made tea per month.",
    image: "/assets/images/milestones/1666154527_tea-easte.jpg",
  },
  {
    year: "2003",
    title: "GRAND PARENT POULTRY",
    content:
      "Cocooned in the Midst of the tea gardens, a new generation of poultry breeding was first introduced in Bangladesh.",
    image: "/assets/images/milestones/1666154582_story-2-min.jpg",
  },
  {
    year: "2005",
    title: "BIO-GAS PLANT",
    content:
      "The first Poultry farms in Bangladesh to introduce a bio-gas plant, with the latest technology, now collective producing 1 MW.",
    image: "/assets/images/milestones/1666154669_bio-gas.jpg",
  },
  {
    year: "2007",
    title: "PLASTIC WOVEN BAGS",
    content:
      "A breakthrough in the packaging industry, paragon established a plastic woven factory to facilitate to all feed mills within the group and to cater other industries in Bangladesh",
    image: "/assets/images/milestones/1666154722_PLASTIC-WOVEN-BAGS.jpg",
  },
  {
    year: "2016",
    title: "Processing & further processing plants",
    content:
      "Paragon secures the poultry consumption  chain from raising Grandparent poultry birds to processing them in a complete hygienic and halal certified factory.",
    image:
      "/assets/images/milestones/1680329344_Process-Chicken-1024x576-700x400.png",
  },
  {
    year: "2016",
    title: "Consumer products",
    content:
      "While staying true to the traditional recipes, Paragon engineered frozen and chilled foods to maintain freshness, hygienic and quality, sold at every retail outlet.",
    image: "/assets/images/milestones/1680377523_IMG-20230331-WA0019.jpg",
  },
  {
    year: "2016",
    title: "Mini Grid Project",
    content:
      "In 2016 Paragon launched a mini grid solar project of 210kw in an island in Kushtia, Bangladesh. ",
    image:
      "/assets/images/milestones/1680764032_shutterstock_785799997-1-800x400.jpg",
  },
  {
    year: "2017",
    title: "Bistro & Convenient Store",
    content:
      "Inspired by flavors from around the world, Paragon introduces an intercontinental menu tailored to the traditional tastes and a convenient shop with a franchise program for future expansions.",
    image: "/assets/images/milestones/1680376716_IMG-20230331-WA0007.jpg",
  },
  {
    year: "2017",
    title: "Joint Venture Mega Grid Project",
    content:
      "A successful join venture with Symbior Solar, jointly signing a power purchase agreement with the Bangladesh government for developing 10 MW grid tied solar project.",
    image: "/assets/images/milestones/1680382719_IMG-20230331-WA0013.jpg",
  },
  {
    year: "2018",
    title: "FIBC Factory",
    content:
      "Producing high quality jumbo bags with a capacity of 400 MT, exporting to the European market",
    image: "/assets/images/milestones/1680763389_fibc-min.jpg",
  },
  {
    year: "2018",
    title: "Fish Hatchery",
    content:
      "In 2007 Paragon explores its first fishery project along a hatchery located in Jessore.",
    image: "/assets/images/milestones/1680386821_FB_IMG_1680380447027-01.jpeg",
  },
  {
    year: "2019",
    title: "Flour Mill",
    content:
      "Paragon launches a fully integrated flour mill producing for direct consumer through the brand Paragon Atta, Paragon Maida, and Paragon Suji.",
    image:
      "/assets/images/milestones/1680763896_H669f7524fdbd429faa08305d38a25235V.jpg",
  },
  {
    year: "2019",
    title: "Footwear Manufacturing",
    content:
      "Paragon launched a new footwear manufacturing unit in 2019. This venture to established fulfill the demand gap in the international market and a step toward the future in the shoe industry.",
    image: "/assets/images/milestones/1680381399_IMG-20230331-WA0018.jpg",
  },
  {
    year: "2019",
    title: "Dairy Project",
    content:
      "In 2019 Paragon launches its first dairy operation with an aim to produce pasteurizated milk, UHT milk, ghee, butter, cheese, yogurt and laban for the local market.",
    image: "/assets/images/milestones/1680381664_IMG-20230331-WA0016.jpg",
  },
  {
    year: "2020",
    title: "Organic Fertilizer",
    content:
      "With growth comes responsibility,  in 2020 Paragon launched its first organic fertilizer project.",
    image: "/assets/images/milestones/1680381889_IMG-20230331-WA0009.jpg",
  },
];

const Milestones = () => {
  return (
    <>
      <MilestonesHeader />
      <section className="bg-[#333333] py-10">
        <div className="container mx-auto px-4">
          {/* Parent Wrapper */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Section */}
            <div className="flex-1 space-y-10">
              {milestonesData.map((milestone, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center gap-6 animate-fade-in-up border-b border-gray-600 pb-6"
                >
                  {/* Image Section with Skewed Overlay */}
                  <div className="relative w-full md:w-[50%] sm:w-full h-48 overflow-hidden rounded-lg">
                    <Image
                      height={300}
                      width={450}
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    {/* Skewed Overlay */}
                    <div className="absolute inset-0 bg-[#333333] transform skew-y-[110deg] origin-top-right opacity-100"></div>
                  </div>
                  {/* Content Section */}
                  <div className="text-center md:text-left space-y-3 md:w-[50%]">
                    <h3 className="text-2xl font-bold text-[#f3a019]">
                      {milestone.year}
                    </h3>
                    <h4 className="text-xl font-medium text-[#f3a019]">
                      {milestone.title}
                    </h4>
                    <p className="text-md text-white leading-relaxed text-justify">
                      {milestone.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sticky Right-Side Content */}
            <div className="h-auto w-full lg:w-[235px] bg-[#424040] rounded-lg shadow-lg sticky top-20 self-start">
              <div className="flex flex-col items-center justify-center p-6 space-y-6">
                {/* Year at the Top */}
                <h3 className="text-4xl font-bold text-[#ffffff] animate-bounce">
                  1989
                </h3>

                {/* Border Bottom */}
                <div className="w-full border-b-2 border-gray-300 my-4"></div>

                {/* Dashed Line */}
                <div className="h-48 border-l-2 border-dashed border-gray-300"></div>

                {/* Border Top */}
                <div className="w-full border-t-2 border-gray-300 my-4"></div>

                {/* Year at the Bottom */}
                <h3 className="text-4xl font-bold text-[#ffffff]">2020</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Milestones;
