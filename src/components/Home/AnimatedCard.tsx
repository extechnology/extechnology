import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const cards = [
  {
    title: "WEB/E-COMMERCE PLATFORMS",
    desc: "Build robust online stores and websites that drive sales and growth.",
    image: "/11271176_e_commerce_business_web_store_icon.png",
    gradient: "from-orange-900 via-orange-600 to-red-700",
  },
  {
    title: "MOBILE APPLICATIONS",
    desc: "Develop intuitive and engaging mobile apps that transform user experiences.",
    image:
      "/11850102_platform_notification_e-commerce and shopping_adobe_podium_icon 1.png",
    gradient: "from-gray-900 via-gray-800 to-gray-700",
  },
  {
    title: "AI INTEGRATED APPLICATIONS",
    desc: "Create automated and interactive chatbots that enhance customer conversations.",
    image: "/25845660_ecommercev2_5 1.png",
    gradient: "from-blue-900 via-blue-600 to-purple-700",
  },
  {
    title: "CRM APPLICATIONS",
    desc: "Create automated and interactive chatbots that enhance customer conversations.",
    image: "/crm-removebg-preview 1.png",
    gradient: "from-blue-900 via-blue-600 to-purple-700",
  },
];

const AnimatedCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="bg-[var(--bg-color)] text-[var(--text-color)] md:pt-56  md:pb-20">
      <img
        src="/Group 115657 (2).png"
        alt=""
        className="md:flex hidden absolute left-11"
      />
      <div className="transform md:translate-y-40 py-12 md:pt-0 pl-12 max-w-7xl mx-auto px-4 md:pb-60 ">
        <div className=" justify-between items-center">
          <h1
            className=" text-4xl md:text-6xl text-center md:text-start font-semibold"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            We Provide
          </h1>
          <div className="hidden md:flex justify-end gap-4 pr-16">
            <button
              onClick={handlePrev}
              title="Previous"
              className="border border-purple-500 rounded py-3 px-8"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              <ArrowLeft className="text-purple-400" />
            </button>

            <button
              onClick={handleNext}
              title="Next"
              className="border border-purple-500 rounded py-3 px-8"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              <ArrowRight className="text-purple-400" />
            </button>
          </div>
        </div>

        <div className="flex mt-10 gap-4 h-[400px]  md:h-[500px]">
          <AnimatePresence mode="wait">
            {cards.map((item, index) => {
              const isActive = index === activeIndex;
              const isNext = index === (activeIndex + 1) % cards.length;
              // const isPrev =
              //   index === (activeIndex - 1 + cards.length) % cards.length;

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
                            <p className="mb-4  md:text-2xl font-light text-white/90">
                              {item.desc}
                            </p>
                          </div>
                          <button className="border border-white rounded px-4 py-2 w-fit">
                            Learn More →
                          </button>
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
                        <button className="border mt-5 border-white rounded px-4 py-2 w-fit">
                          Learn More →
                        </button>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
