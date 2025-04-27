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
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".carousel-item");
    const totalSlides = sections.length;
    const rotationAngle = 30; // Degrees to rotate for fan effect

    // Initial setup - hide all but first slide
    gsap.set(sections, {
      rotation: -rotationAngle,
      opacity: 0,
      scale: 0.8,
      transformOrigin: "center bottom",
    });
    gsap.set(sections[0] as Element, {
      rotation: 0,
      opacity: 1,
      scale: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${totalSlides * 100}%`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Create fan rotation animation
    sections.forEach((section, i) => {
      if (i === 0) return;

      // Hide previous slide with fan rotation
      tl.to(
        sections[i - 1] as Element,
        {
          rotation: rotationAngle,
          opacity: 0,
          scale: 0.8,
          duration: 1,
        },
        `+=0`
      )
        // Show current slide with fan rotation
        .fromTo(
          section as Element,
          {
            rotation: -rotationAngle,
            opacity: 0,
            scale: 0.8,
          },
          {
            rotation: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
          },
          "<"
        );
    });

    // Responsive adjustments
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      gsap.set(sections, {
        transformOrigin: isMobile ? "center center" : "center bottom",
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[var(--bg-color)] text-[var(--text-color)] md:py-20 pt-10 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row h-screen">
        {/* Left side - Fixed Text */}
        <div
          className={`w-full md:w-1/2 border p-5 ${
            window.innerWidth < 768 ? "relative" : "h-screen sticky top-0"
          } flex items-center justify-center`}
        >
          <h1
            className="md:text-5xl text-xl leading-relaxed px-8"
            data-aos="fade-up"
          >
            Ex-technology delivers tailored digital solutions that enhance user
            experiences and drive business growth.
          </h1>
        </div>

        {/* Right side - Fan Carousel */}
        <div className="w-full md:w-1/2 h-screen sticky top-0 flex items-center justify-center overflow-hidden">
          <div ref={carouselRef} className="relative w-full h-full">
            {CarouselImages.map((item) => (
              <div
                key={item.id}
                className="carousel-item absolute w-full px-8 flex flex-col items-center justify-center"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="w-[70%]">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-auto object-cover mb-4 rounded-lg shadow-xl"
                  />
                  <p className="text-2xl text-center">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollCarousel;
