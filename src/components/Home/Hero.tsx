import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Faster animations: adjust in 0 to 0.5 scroll range
  const fastRange: [number, number] = [0, 0.5];

  // Text transformations
  const textScale = useTransform(scrollYProgress, fastRange, [1.1, 1.6]);
  const textRotate = useTransform(scrollYProgress, fastRange, [0, -15]);

  // Button horizontal movement
  const leftBtnX = useTransform(scrollYProgress, fastRange, [0, -300]);
  const rightBtnX = useTransform(scrollYProgress, fastRange, [0, 290]);

  // Globe movement and opacity
  const globeY = useTransform(scrollYProgress, fastRange, [100, -380]);
  const globeOpacity = useTransform(scrollYProgress, fastRange, [1, 1.5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="">
      <section
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="relative content-center items-center justify-center border-b border-sky-700 md:min-h-screen h-[80vh] px-4 bg-[var(--bg-color)] text-[var(--text-color)] overflow-hidden"
      >
        {/* Base background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/Frame 1000001226.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.9,
          }}
        />

        {/* Hover mask effect */}
        {hovering && (
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              backgroundImage: `url('/Frame 1000001226.svg')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              maskImage: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)`,
              WebkitMaskImage: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)`,
              opacity: 1,
              transition: "opacity 0.2s ease, filter 0.2s ease",
              filter: "brightness(1.1) sepia(1) hue-rotate(170deg) saturate(4)",
            }}
          />
        )}

        {/* Main Text */}
        {/* Rotating Heading Only */}
        <motion.div
          className="relative z-20 text-center top-11"
          style={{ scale: textScale, rotate: textRotate }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-wider m-0">
            EMPOWER YOUR BUSINESS
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold tracking-wider m-0">
            WITH PERFECT IT
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold tracking-wider m-0">
            SOLUTIONS
          </h1>
        </motion.div>

        {/* Buttons — moved outside so they don’t rotate */}
        <div className="relative z-20 top-32 flex justify-center items-center gap-4">
          <motion.div style={{ x: leftBtnX }}>
            <div className="p-[1px] rounded-md bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 transition-all duration-300 inline-block">
              <button className="bg-black text-white px-6 py-3 rounded-md hover:rounded-full transition-all duration-300">
                Get Started →
              </button>
            </div>
          </motion.div>

          <motion.div style={{ x: rightBtnX }}>
            <button className="px-6 py-3 border rounded-md hover:bg-white hover:text-black transition">
              Talk to sales
            </button>
          </motion.div>
        </div>

        {/* Globe */}
        <motion.div
          className="absolute z-30 flex justify-center w-full pointer-events-none"
          style={{
            top: "70%", // start partially visible
            y: globeY,
            opacity: globeOpacity,
          }}
        >
          <img
            src="/globe.png"
            alt="globe"
            className="w-[450px] md:w-[550px] lg:w-[650px]"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
