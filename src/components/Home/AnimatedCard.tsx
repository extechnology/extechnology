import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "WEB/E-COMMERCE PLATFORMS",
    desc: "Build robust online stores and websites that drive sales and growth.",
    image: "/11271176_e_commerce_business_web_store_icon (1).png",
    gradient:
      "bg-[linear-gradient(to_bottom_right,_#2B130C_0%,_#BC6610B8_50%,_#B90C0C_100%)]",
  },
  {
    title: "MOBILE APPLICATIONS",
    desc: "Develop intuitive and engaging mobile apps that transform user experiences.",
    image:
      "/11850102_platform_notification_e-commerce and shopping_adobe_podium_icon 1 (1).png",
    gradient: "bg-[linear-gradient(to_bottom_right,_#2B130C_0%,_#BC6610B8_50%,_#B90C0C_100%)]",
  },
  {
    title: "AI INTEGRATED APPLICATIONS",
    desc: "Create automated and interactive chatbots that enhance customer conversations.",
    image: "/25845660_ecommercev2_5 1 (1).png",
    gradient: "bg-[linear-gradient(to_bottom_right,_#2B130C_0%,_#BC6610B8_50%,_#B90C0C_100%)]",
  },
  {
    title: "CRM APPLICATIONS",
    desc: "Create automated and interactive chatbots that enhance customer conversations.",
    image: "/crm-removebg-preview 1 (1).png",
    gradient: "bg-[linear-gradient(to_bottom_right,_#2B130C_0%,_#BC6610B8_50%,_#B90C0C_100%)]",
  },
];

const AnimatedCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="relative bg-[var(--bg-color)] text-[var(--text-color)] md:pt-56 md:pb-20">
      <img
        src="/Group 115657 (2).png"
        alt=""
        className="md:flex hidden absolute left-1/2 transform -translate-x-1/2"
      />
      <div className="transform md:translate-y-40 py-12 md:pt-0 md:pl-12 max-w-7xl mx-auto px-4 md:pb-60">
        <div className="justify-between items-center">
          <h1
            className="text-4xl md:text-6xl text-center md:text-start font-semibold"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            We Provide
          </h1>
          <div className="hidden md:flex justify-end gap-4 pr-16">
            <button
              onClick={handlePrev}
              title="Previous"
              className="border border-purple-500 hover:bg-gradient-to-r from-violet-500 to-sky-500 rounded py-3 px-10 transition-all ease-in-out duration-500"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              <ArrowLeft className="text-purple-400" />
            </button>

            <button
              onClick={handleNext}
              title="Next"
              className="border border-purple-500 hover:bg-gradient-to-r from-violet-500 to-sky-500 rounded py-3 px-10 transition-all ease-in-out duration-500"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              <ArrowRight className="text-purple-400" />
            </button>
          </div>
        </div>

        <div
          className={`flex justify-center mt-10 gap-4 ${
            isMobile ? "overflow-x-auto no-scrollbar" : ""
          } h-[450px] md:h-[500px]`}
        >
          <AnimatePresence mode="wait">
            {isMobile ? (
              // Mobile: Single card slider
              <motion.div
                key={activeIndex}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -100) {
                    handleNext();
                  } else if (info.offset.x > 100) {
                    handlePrev();
                  }
                }}
                className=" flex-shrink-0"
              >
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className={`rounded-4xl overflow-hidden ${cards[activeIndex].gradient} text-white flex flex-col justify-between h-full mx-auto w-[90vw] max-w-md`}
                >
                  <div className="px-6 py-8 h-full flex flex-col justify-center items-center text-center">
                    <h3 className="text-2xl font-bold mb-4 px-2">
                      {cards[activeIndex].title}
                    </h3>
                    <img
                      src={cards[activeIndex].image}
                      alt="icon"
                      className="w-full max-w-[280px] mx-auto object-contain my-4"
                    />
                    <Link to={"/service"}>
                      <button className="border hover:scale-105 transition-all duration-300 ease-in-out border-white rounded-full px-6 py-2 mt-2 text-sm md:text-base">
                        Learn More →
                      </button>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              // Desktop: Your current layout
              cards.map((item, index) => {
                const isActive = index === activeIndex;
                const isNext = index === (activeIndex + 1) % cards.length;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      width: isActive ? "80%" : isNext ? "40%" : "0%",
                      opacity: isActive ? 1 : 0.7,
                    }}
                    animate={{
                      width: isActive ? "80%" : isNext ? "40%" : "0%",
                      opacity: isActive ? 1 : 0.7,
                    }}
                    exit={{
                      width: "10%",
                      opacity: 0.7,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={`rounded-4xl overflow-hidden bg-gradient-to-r ${item.gradient} text-white flex flex-col justify-between min-h-full`}
                  >
                    <div
                      className={`px-7 py-10 h-full flex ${
                        isActive
                          ? "flex-row"
                          : "flex-col justify-center items-center"
                      }`}
                    >
                      {isActive ? (
                        <>
                          <div className="w-1/2 pr-4 flex flex-col justify-between">
                            <div>
                              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                {item.title}
                              </h3>
                              <p className="mb-4 md:text-2xl font-light text-white/90">
                                {item.desc}
                              </p>
                            </div>
                            <Link to={"/service"}>
                              <button className="border hover:scale-105 transition-all duration-300 ease-in-out border-white rounded px-4 py-2 w-fit">
                                Learn More →
                              </button>
                            </Link>
                          </div>
                          <div className="w-1/2 flex justify-center items-center">
                            <img
                              src={item.image}
                              alt="icon"
                              className="w-full object-contain"
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <h3 className="text-lg md:text-2xl font-bold mb-2 text-center">
                            {item.title}
                          </h3>
                          <img
                            src={item.image}
                            alt="icon"
                            className="w-[80%] mx-auto object-contain"
                          />
                          <Link to={"/service"}>
                            <button className="border mt-5 hover:scale-105 transition-all duration-300 ease-in-out border-white rounded px-4 py-2 w-fit">
                              Learn More →
                            </button>
                          </Link>
                        </>
                      )}
                    </div>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
