import { useState } from "react";
import { motion } from "framer-motion";


const TransformBusiness = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  return (
    <div>
      <section
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="relative content-center items-center border border-sky-600  md:min-h-screen px-4  bg-[var(--secondary-bg-color)] text-[var(--secondary-text-color)]"
      >
        {/* Base background at 30% opacity */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/Frame 1000001226.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.9,
          }}
        />

        {/* Hover spotlight effect */}
        {hovering && (
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              backgroundImage: `url('/Frame 1000001226.svg')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              maskImage: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)`,
              WebkitMaskImage: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 50%, transparent 100%)`,
              opacity: 1,
              transition: "opacity 0.2s ease, filter 0.2s ease",
              filter: "brightness(1.1) sepia(1) hue-rotate(170deg) saturate(4)",
            }}
          />
        )}

        {/* Foreground Content */}
        <div className="relative z-20 text-center py-5">
          <div>
            <h1 className="text-2xl md:text-7xl font-bold leading-snug tracking-wider m-0">
              Transform Your Business
            </h1>
            <h1 className="text-2xl md:text-7xl font-bold leading-snug tracking-wider m-0">
              With Our Services
            </h1>
          </div>
          <img
            src="/Group (1).png"
            alt=""
            className="absolute right-50 top-80 -rotate-45 w-24"
          />

          <div className="absolute hidden md:flex z-21 left-0 top-50">
            <img src="/Group 115682.png" alt="" className="relative " />
            <motion.img
              src="/1 (2).svg"
              alt=""
              className="transform -translate-x-150 translate-y-10"
              whileHover={{
                rotate: 90,
                transition: { duration: 1 },
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransformBusiness;
