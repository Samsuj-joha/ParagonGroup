"use client";

import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Image
        src="/assets/images/metadata-logo.jpg" 
        alt="Loading"
        width={100}
        height={100}
        className="object-contain"
      />
    </div>
  );
};

export default Loading;
