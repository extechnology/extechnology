import { useState } from "react";

const PotentialGrid = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  return (
    <div>
      <section
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="relative z-10 content-center items-center border border-sky-600 md:h-[90vh] px-4 bg-[var(--secondary-bg-color)] text-[var(--secondary-text-color)]"
      >
        {/* Base background at 30% opacity */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/Frame 1000001226.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.9,
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
              WebkitMaskImage: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)`,
              opacity: 1,
              transition: "opacity 0.2s ease, filter 0.2s ease",
              filter: "brightness(1.1) sepia(1) hue-rotate(170deg) saturate(4)",
            }}
          />
        )}

        {/* Foreground Content */}
        <div className="relative z-20 py-10 text-center">
          <div>
            <h1 className="text-xl md:text-7xl font-bold leading-snug m-0">
              Unlock The Full Potential of
            </h1>
            <h1 className="text-xl md:text-7xl font-bold leading-snug  m-0">
              Your Project With Our <br /> Company
            </h1>
          </div>
          <div className="absolute hidden md:flex right-0 -bottom-90 overflow-visible ">
            <img
              src="2.svg"
              alt=""
              className="hover:transform hover:rotate-90 transition-all duration-1000"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PotentialGrid;
