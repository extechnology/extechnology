import { useState, useEffect, useRef } from "react";

const lines = [
  "EXTECHNOLOGY IS A DYNAMIC TECHNOLOGY FIRM SPECIALIZING IN",
  "THE CREATION OF STANDARD/ DYNAMIC WEBSITES, E-COMMERCE",
  "PLATFORMS, CHATBOTS, AND MOBILE APPLICATIONS. WITH A",
  "COMMITMENT TO INNOVATION AND EXCELLENCE.",
];

export default function GridIntro() {
  const [backgroundSize, setBackgroundSize] = useState("80px 80px");
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setBackgroundSize(window.innerWidth <= 768 ? "50px 50px" : "80px 80px");
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const typeLines = async () => {
      for (let i = 0; i < lines.length; i++) {
        await new Promise((resolve) => {
          let text = "";
          let index = 0;
          const interval = setInterval(() => {
            text += lines[i][index++];
            setVisibleLines((prev) => [...prev.slice(0, i), text]);
            if (index >= lines[i].length) {
              clearInterval(interval);
              resolve(null);
            }
          }, 30);
        });
        await new Promise((res) => setTimeout(res, 300));
      }
    };

    const section = sectionRef.current;
    if (!section) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observerRef.current?.disconnect();
          typeLines();
        }
      },
      { threshold: 0.2 }
    );

    observerRef.current.observe(section);
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 md:px-16 bg-[var(--secondary-bg-color)] text-[var(--secondary-text-color)] overflow-hidden"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-800 via-black to-black opacity-10" />
        <div className="absolute bottom-12 left-12 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-30" />
        <div className="hidden md:block absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-30" />
      </div>

      {/* Grid */}
      <div className="relative max-w-7xl md:w-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="absolute w-[150%] max-w-[1500px] md:h-[150%] h-[80%] md:max-h-[1500px] mx-auto"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(99, 102, 241, 0.5) 1.5px, transparent 1.5px),
                linear-gradient(to bottom, rgba(14, 165, 233, 0.5) 1.5px, transparent 1.5px)
              `,
              backgroundSize: backgroundSize,
              backgroundPosition: "center center",
              maskImage:
                "linear-gradient(to right, transparent 10%, white 20%, white 80%, transparent 90%)",
            }}
          />
        </div>

        {/* Typing Text */}
        <div className="relative z-10 text-white py-10 font-bold text-md md:text-2xl lg:text-4xl text-left md:space-y-8 space-y-4">
          {visibleLines.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
