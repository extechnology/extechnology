import React from "react";
import CarouselDisplay from "./CarouselDisplay";

const DragCarousel: React.FC = () => {
  return (
    <div className="flex h-screen w-full text-white font-mono overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-black p-8 fixed md:static z-10">
        <h1 className="text-3xl md:text-4xl leading-relaxed whitespace-pre-line">
          Ex-Technology{"\n"}
          Delivers Tailored{"\n"}
          Digital Solutions{"\n"}
          That Enhance User{"\n"}
          Experiences And{"\n"}
          Drive Business{"\n"}
          Growth.
        </h1>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 ml-auto h-full relative">
        <CarouselDisplay />
      </div>
    </div>
  );
};

export default DragCarousel;
