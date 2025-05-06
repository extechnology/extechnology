import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef,useEffect,useState } from "react";
import PotentialGrid from "./PotentialGrid";

const lines = [
  "Empower Business By Providing The Most Advanced IT Solutions And Exceptional Service",
  "Ensuring Our Clients Achieve Operational Efficiency,Security And Innovation",
  "Tailored Digital Solutions that Enhance User Experiences And Drive Business Growth.",
  "We embrace the latest technologies and agile methodologies to build future-ready digital solutions",
  "Certified experts with deep industry knowledge and hands-on experience in delivering scalable IT solutions",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const lineImages = [
  "/Vector.svg",
  "/line-md_security.svg",
  "/uil_chart-growth.svg",
  "/streamline_ai-technology-spark.svg",
  "/grommet-icons_status-good.svg",
];


interface MousePosition {
  x: number;
  y: number;
}

const UnlockPotential: React.FC = () => {
  const ref = useRef(null);

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  console.log(mousePosition); // Log the mouse position to the console

  // Motion values for smooth animation
  const x = useMotionValue<number>(0);
  const y = useMotionValue<number>(0);

  // Transform mouse position to movement values
  const xMove = useTransform<number, number>(x, [0, 1], [-15, 15]);
  const yMove = useTransform<number, number>(y, [0, 1], [-15, 15]);

  // const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      // Get bounding rect of the container
      const rect = (ref.current as HTMLElement).getBoundingClientRect();

      // Calculate mouse position relative to the container (0 to 1)
      const xPos = (e.clientX - rect.left) / rect.width;
      const yPos = (e.clientY - rect.top) / rect.height;

      setMousePosition({ x: xPos, y: yPos });

      // Smoothly animate to new position
      animate(x, xPos, { duration: 0.5 });
      animate(y, yPos, { duration: 0.5 });
    };

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered, x, y]);

  return (
    <div>
      <div className="relative">
        <PotentialGrid />
      </div>
      <section className="relative z-5 flex items-center justify-center px-4 md:px-16 pt-16 md:pt-56 md:pb-55 pb-20 bg-[var(--bg-color)] text-[var(--text-color)] overflow-hidden">
        {/* Background Layer with Gradient */}
        <img
          src="/Group 115657.png"
          alt=""
          className="absolute pb-10 hidden md:flex"
        />
        <div className="absolute  inset-0 z-0 overflow-hidden">
          {/* Main gradient background */}
          <div className="absolute  inset-0 bg-gradient-to-tr from-purple-800 via-black to-black opacity-10" />

          {/* Bottom left gradient blur accent */}
          {/* <div className="absolute bottom-12 left-12 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-30" /> */}

          {/* Top right gradient blur accent */}
          {/* <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full filter blur-3xl opacity-30" /> */}
        </div>

        {/* Grid container that matches text width */}
        <div className="relative content-center  max-w-6xl w-full">
          {/* ✅ Grid pattern - hidden on mobile */}
          <div className="absolute  inset-0 items-center justify-center hidden md:flex">
            <div
              className="absolute w-[150%] max-w-[1500px] h-[80%] max-h-[1300px] mx-auto"
              style={{
                backgroundImage: `
          linear-gradient(to right, rgba(99, 102, 241, 0.5) 1.5px, transparent 1.5px),
          linear-gradient(to bottom, rgba(14, 165, 233, 0.5) 1.5px, transparent 1.5px)
        `,
                backgroundSize: "80px 80px",
                backgroundPosition: "center center",
                maskImage:
                  "linear-gradient(to right, transparent 10%, white 20%, white 80%, transparent 90%)",
              }}
            />
          </div>

          {/* ✅ Animated Text Section (always visible) */}
          <motion.div
            ref={ref}
            className="relative z-10 font-bold text-md md:text-xl lg:text-2xl flex space-y-8 flex-wrap justify-center items-center gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            style={{
              x: isHovered ? xMove : 0,
              y: isHovered ? yMove : 0,
            }}
          >
            {lines.map((line, idx) => (
              <div
                key={idx}
                className="w-full md:w-auto md:max-w-[30%] px-4"
                data-aos="fade-up"
              >
                <div className="flex justify-center pb-3">
                  <img src={lineImages[idx]} alt={`Line Icon ${idx + 1}`} />
                </div>
                <motion.p variants={lineVariants} className="text-center">
                  {line}
                </motion.p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UnlockPotential;
