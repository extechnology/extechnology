import { motion, useMotionValue, animate } from "framer-motion";
import React, { useState } from "react";

import img1 from "/Rectangle 34624243.svg";
import img2 from "/Rectangle 34624243.svg";
import img3 from "/Rectangle 34624243 (2).svg";

const slides = [
  {
    image: img1,
    caption: "Years of Proven Expertise in IT consulting and distribution",
  },
  {
    image: img2,
    caption: "Empowering Businesses With Custom Software Solutions",
  },
  {
    image: img3,
    caption: "Bridging Innovation Through Strategic Technology Partnerships",
  },
];

const CarouselDisplay: React.FC = () => {
  const [index, setIndex] = useState(0);
  const dragY = useMotionValue(0);
  const [rotation, setRotation] = useState(0);

  const snapToClosestIndex = (y: number) => {
    const snapPoints = [0, 100, 200];
    const distances = snapPoints.map((p) => Math.abs(p - y));
    const closest = distances.indexOf(Math.min(...distances));
    return closest;
  };

  const handleDragEnd = (_: any, info: any) => {
    const finalY = info.point.y;
    const newIndex = snapToClosestIndex(finalY);

    // Animate drag handle back to the snapped position
    animate(dragY, newIndex * 100, { duration: 0.3 });

    if (newIndex !== index) {
      setRotation(newIndex * 90);
      setIndex(newIndex);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-black text-white relative overflow-hidden">
      {/* Rotating Image Block */}
      <motion.div
        className="w-60 h-60 mb-4 rounded-xl overflow-hidden shadow-lg"
        style={{ rotateX: rotation }}
        transition={{ type: "spring", stiffness: 100 }}
        key={index}
      >
        <img
          src={slides[index].image}
          alt="Slide"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Caption */}
      <motion.p
        key={index + "-text"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center px-6 text-xl"
      >
        {slides[index].caption.split(" ").map((word, i) =>
          ["IT", "consulting", "distribution"].includes(word) ? (
            <span key={i} className="text-blue-400 ">
              {word + " "}
            </span>
          ) : (
            word + " "
          )
        )}
      </motion.p>

      {/* Drag Handle */}
      <motion.div className="absolute top-4 right-4 w-8 h-64 rounded-full bg-purple-600">
        <motion.div
          className="w-8 h-8 bg-white rounded-full shadow cursor-grab"
          drag="y"
          style={{ y: dragY }}
          dragConstraints={{ top: 0, bottom: 200 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
        />
      </motion.div>
    </div>
  );
};

export default CarouselDisplay;


