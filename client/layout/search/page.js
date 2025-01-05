// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Search } from "lucide-react";
// import { useState } from "react";

// const SearchMenu = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log("Search Query:", searchQuery); // Perform search action here
//   };

//   return (
//     <div className="flex justify-center items-center">
//       <form
//         onSubmit={handleSearch}
//         className="flex items-center w-full max-w-md border border-gray-300 rounded-full shadow-lg bg-white overflow-hidden"
//       >
//         {/* Input Field */}
//         <Input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="Search for anything..."
//           className="rounded-none border-none focus-visible:ring-0 focus-visible:outline-none flex-grow px-4 py-1 text-sm text-gray-700 placeholder-black-900 "
//         />

//         {/* Search Icon Button */}
//         <Button
//           type="submit"
//           className="bg-[#263e7a] text-white px-4 py-4 rounded-none hover:bg-blue-700 transition duration-300"
//         >
//           <Search className="h-5 w-5" />
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default SearchMenu;




"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const SearchMenu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery); // Perform search action here
  };

  const toggleSearch = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="relative flex justify-center items-center">
      <form
        onSubmit={handleSearch}
        className={`absolute right-0 flex items-center border border-gray-300 rounded-full shadow-lg bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "w-44 sm:w-64" : "w-12"
        }`}
      >
        {isExpanded && (
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for anything..."
            className="rounded-none border-none focus-visible:ring-0 focus-visible:outline-none flex-grow px-4 py-1 text-sm text-gray-700 placeholder-gray-500"
          />
        )}

        <Button
          type="button"
          onClick={toggleSearch}
          className="text-gray-700 px-4 py-4 rounded-none transition duration-300 ease-in-out"
        >
          <Search className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
};

export default SearchMenu;
