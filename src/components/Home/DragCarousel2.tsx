import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CarouselImages = [
  {
    id: 1,
    image: "/Rectangle 34624243.svg",
    title: `Years of Proven Expertise in IT consulting and distribution`,
  },
  {
    id: 2,
    image: "/Rectangle 34624243 (1).svg",
    title: `Years of Proven Expertise in IT consulting and distribution`,
  },
  {
    id: 3,
    image: "/Rectangle 34624243 (2).svg",
    title: `Years of Proven Expertise in IT consulting and distribution`,
  },
];

const ScrollCarousel = () => {
  const containerRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".carousel-item");
    const totalSlides = sections.length;

    gsap.set(sections, { xPercent: 100, opacity: 0 });
    gsap.set(sections[0], { xPercent: 0, opacity: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${totalSlides * 300}vh`, 

        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    sections.forEach((section, i) => {
      if (i === 0) return;
      tl.to(
        sections[i - 1],
        { xPercent: -100, opacity: 0, duration: 1 },
        `+=0`
      ).fromTo(
        section,
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 1 },
        "<"
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[var(--bg-color)] text-[var(--text-color)] py-20 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row h-screen">
        {/* Left side - Fixed Text */}
        <div className="w-full md:w-1/2 border p-5 h-screen flex items-center justify-center sticky top-0">
          <h1 className="md:text-5xl text-xl leading-relaxed px-8">
            Ex-technology delivers tailored digital solutions that enhance user
            experiences and drive business growth.
          </h1>
        </div>

        {/* Right side - Carousel */}
        <div className="w-full md:w-1/2 h-screen sticky border top-0 flex items-center justify-center overflow-hidden ">
          <div ref={carouselRef} className="relative w-full h-full">
            {CarouselImages.map((item) => (
              <div
                key={item.id}
                className="carousel-item absolute w-full px-8 flex flex-col items-center justify-center"
                style={{
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-[70%] h-auto object-cover mb-4 rounded-lg shadow-xl"
                />
                <p className="text-2xl text-center">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollCarousel;
