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
    desc: "Design and develop intuitive mobile apps for iOS and Android.",
    image: "/11271176_e_commerce_business_web_store_icon.png",
    gradient: "from-gray-900 via-gray-800 to-gray-700",
  },
  {
    title: "CLOUD SOLUTIONS",
    desc: "Leverage cloud platforms for scalable and secure infrastructure.",
    image: "/11271176_e_commerce_business_web_store_icon.png",
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
    <div className=" bg-[var(--bg-color)] text-[var(--text-color)] pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className=" justify-between items-center">
          <h1 className=" text-4xl md:text-5xl font-semibold">
            We Provide
          </h1>
          <div className="flex justify-end gap-4">
            <button
              onClick={handlePrev}
              title="Previous"
              className="border border-purple-500 rounded py-3 px-8"
            >
              <ArrowLeft className="text-purple-400" />
            </button>

            <button
              onClick={handleNext}
              title="Next"
              className="border border-purple-500 rounded py-3 px-8"
            >
              <ArrowRight className="text-purple-400" />
            </button>
          </div>
        </div>

        <div className="flex mt-10 gap-4 overflow-hidden h-[400px]">
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
                    width: isActive ? "60%" : isNext ? "30%" : "10%",
                    opacity: isActive ? 1 : 0.7,
                  }}
                  animate={{
                    width: isActive ? "60%" : isNext ? "30%" : "10%",
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
                        <h3 className="text-lg font-bold mb-2 text-center">
                          {item.title}
                        </h3>
                        <img
                          src={item.image}
                          alt="icon"
                          className="w-full object-contain"
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
