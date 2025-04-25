import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SlideData = [
  {
    title: `Innovation Design& Exceptional UX`,
    desc: `We dont just write code, we craft seamless, user-friendly experiences that drive success.`,
    image: "/unsplash_MyRHFbfRI0Q.svg",
  },
  {
    title: `Crafting Clean Interfaces`,
    desc: `From wireframes to pixel-perfect UI, we design solutions that users love and understand.`,
    image: "/unsplash_UWMKm7K0dgo.svg",
  },
  {
    title: `Speed and Performance First`,
    desc: `We prioritize lightning-fast, accessible applications with beautiful design.`,
    image: "/unsplash_UWMKm7K0dgo.svg",
  },
];

const WhyChooseUs = () => {
  const [current, setCurrent] = useState(0);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SlideData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" overflow-hidden relative md:min-h-screen">
      <section
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="relative z-1 flex items-center  justify-center h-[150%] min-h-[300px]    bg-[var(--secondary-bg-color)] text-[var(--secondary-text-color)]  overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0 border border-sky-500"
          style={{
            backgroundImage: `url('/Frame 1000001226.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 1,
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
        <div className="relative z-20 text-center  ">
          <h1 className="text-4xl md:text-7xl font-bold leading-snug tracking-wider m-0">
            Why Choose Us
          </h1>
        </div>
      </section>

      <div className=" bg-[var(--bg-color)] text-[var(--text-color)]  grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto h-screen px-6">
        {/* Text Section */}
        <div className="relative border h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 absolute"
            >
              <div className="w-[80%] mx-auto">
                <h1 className="text-4xl md:text-5xl pb-3 font-bold whitespace-pre-line">
                  {SlideData[current].title}
                </h1>
                <p className="text-xl md:text-2xl max-w-lg">
                  {SlideData[current].desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image Section */}
        <div className="relative border h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={SlideData[current].image}
              alt="Slide Visual"
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 150 }}
              transition={{ duration: 0.8 }}
              className="rounded-lg w-3/4 object-cover absolute"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
