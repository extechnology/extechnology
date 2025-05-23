import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  // Updated scroll configuration to make it complete before next section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Adjusted ranges for smoother completion
  const animationRange: [number, number] = [0, 0.8]; // 80% of scroll completes all animations

  // Text transformations - now includes X movement
  const textScale = useTransform(scrollYProgress, animationRange, [1.1, 1.6]);
  const textRotate = useTransform(scrollYProgress, animationRange, [0, -15]);
  const textX = useTransform(scrollYProgress, animationRange, [0, -200]); // Moves left

  // Button horizontal movement
  const leftBtnX = useTransform(scrollYProgress, animationRange, [0, -450]);
  const rightBtnX = useTransform(scrollYProgress, animationRange, [0, 450]);

  // Globe movement and opacity
  const globeY = useTransform(scrollYProgress, animationRange, [100, -380]);
  const globeOpacity = useTransform(scrollYProgress, animationRange, [1, 1.5]);

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
        className="relative content-center items-center justify-center border-b border-sky-700 md:min-h-screen h-[100dvh] px-4 bg-[var(--bg-color)] text-[var(--text-color)] overflow-hidden"
        style={{ scrollSnapAlign: "start" }} // Ensures complete scroll before next section
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

        {/* Main Text - Now moves left while rotating */}
        <motion.div
          className="relative z-20 text-center max-w-6xl mx-auto top-11"
          style={{
            scale: textScale,
            rotate: textRotate,
            x: textX, // Added horizontal movement
          }}
        >
          <h1 className="text-3xl md:text-6xl font-bold tracking-wider m-0">
            EMPOWER YOUR BUSINESS
          </h1>
          <h1 className="text-3xl md:text-6xl font-bold tracking-wider m-0">
            WITH PERFECT IT
          </h1>
          <h1 className="text-3xl md:text-6xl font-bold tracking-wider m-0">
            SOLUTIONS
          </h1>
        </motion.div>

        {/* Buttons */}
        <div className="relative z-20 md:top-32 top-20 space-y-5 md:space-y-0 md:flex justify-center items-center gap-4">
          <motion.div style={{ x: leftBtnX }} className="flex justify-center">
            <div className="p-[1px] rounded-md hover:rounded-full transform transition-all bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500  duration-300 inline-block">
              <Link to={"/contact"}>
                <button className="bg-[var(--button-bg-color)] text-white px-6 py-3 rounded-md hover:rounded-full transition-all duration-300">
                  Get Started →
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div style={{ x: rightBtnX }} className="flex justify-center">
            <a
              href="https://wa.me/919526123466"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 border border-[var(--border-secondary)] rounded-md hover:bg-white hover:text-black transition">
                Talk to sales
              </button>
            </a>
          </motion.div>
        </div>

        {/* Globe */}
        <motion.div
          className="absolute z-30 flex justify-center w-full pointer-events-none"
          style={{
            top: "70%",
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
