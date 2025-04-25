import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PotentialGrid from "./PotentialGrid";

const lines = [
  "Empower Business By Providing The Most Advanced IT Solutions And Exceptional Service",
  "Ensuring Our Clients Achieve Operational Efficiency, Security And Innovation",
  "Tailored Digital Solutions that Enhance User Experiences And Drive Business Growth.",
  "We embrace the latest technologies and agile methodologies to",
  "Certified Experts With Deep Industry Knowledge And Hands-On Experience In Delivering Scalable Solutions",
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

const UnlockPotential: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div>
      <div className="relative">
        <PotentialGrid />
      </div>
      <section className="relative z-5 flex items-center justify-center px-4 md:px-16 pt-16 md:pt-40 pb-20 bg-[var(--bg-color)] text-[var(--text-color)] overflow-hidden">
        {/* Background Layer with Gradient */}
        <div className="absolute  inset-0 z-0 overflow-hidden">
          {/* Main gradient background */}
          <div className="absolute  inset-0 bg-gradient-to-tr from-purple-800 via-black to-black opacity-10" />

          {/* Bottom left gradient blur accent */}
          {/* <div className="absolute bottom-12 left-12 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-30" /> */}

          {/* Top right gradient blur accent */}
          {/* <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full filter blur-3xl opacity-30" /> */}
        </div>

        {/* Grid container that matches text width */}
        <div className="relative   max-w-6xl w-full">
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
            className="relative z-10 font-bold  text-md md:text-xl lg:text-2xl grid grid-cols-1 md:grid-cols-3 items-center space-y-18  content-center gap-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {lines.map((line, idx) => (
              <div key={idx}>
                <div className="flex justify-center pb-3">
                  <img src="/Vector.svg" alt="" />
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
