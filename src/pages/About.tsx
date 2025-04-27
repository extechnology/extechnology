// import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <div className="relative bg-[var(--bg-color)] text-[var(--text-color)] px-4 py-12 md:px-16 lg:px-24">
      <div>
        <h1
          className="md:text-7xl text-5xl pt-24 pb-14 font-bold text-center"
          data-aos="fade-up"
        >
          About Us
        </h1>
      </div>
      {/* Purple Top Shadow */}
      <div className=" absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-800 via-purple-400 to-purple-800 blur-xl opacity-30" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-14 items-center relative z-10">
        {/* Left Side - Images with dashed borders */}
        <div className="relative md:flex space-y-5  gap-6">
          <div className="relative md:top-35">
            <img
              src="/Group 115680.png"
              alt=""
              className="absolute -rotate-180 -top-[230px] hidden md:block"
              data-aos="fade-up"
              data-aos-duration="900"
            />

            <img
              src="/Image (1).svg"
              alt="Team Work"
              className="rounded-lg w-full object-cover"
              data-aos="fade-up"
              data-aos-duration="900"
            />
          </div>

          <div className="relative md:-top-22">
            <img
              src="/Image.svg"
              alt="Coding Desk"
              className="rounded-lg w-full object-cover"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <img
              src="/Group 115680.png"
              alt=""
              className="absolute pt-5 hidden md:block"
            />
          </div>

          {/* Blurred glow effect */}
          <div className="absolute top-40 -left-10 w-32 h-32 bg-purple-500 blur-3xl rounded-full opacity-40 z-0" />
        </div>

        {/* Right Side - Text and Button */}
        <div className="relative z-10">
          {/* <div className="absolute -top-15 right-0 w-32 h-32 bg-purple-500 blur-3xl rounded-full opacity-40 z-0" /> */}

          <p
            className="text-xl leading-relaxed whitespace-pre-line text-justify "
            data-aos="fade-up"
            data-aos-duration="900"
          >
            The extechnology is a dynamic technology firm specializing in the
            creation of Standard/ Dynamic websites, e-commerce platforms,
            Chatbots, and mobile applications. With a commitment to innovation
            and excellence
          </p>
          <p
            className="text-xl pt-3 leading-relaxed whitespace-pre-line text-justify"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            extechnology delivers tailored digital solutions that enhance user
            experiences and drive business growth. Their team of skilled
            developers and designers collaborates closely with clients to
            understand their unique needs, ensuring each project is executed
            with precision and creativity. Whether it's a sleek website, a
            robust e-commerce solution, or an engaging mobile app, extechnology
            IT Company leverages the most advanced technologies to build digital
            products that stand out in the competitive market.
          </p>

          <button className="mt-8 bg-[#A855F7] hover:bg-[#9333ea] text-white px-9 py-4 text-md font-semibold rounded-[20px_4px_20px_4px] shadow-md transition-all"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          >
            EXPLORE MORE
          </button>

          {/* Blurred glow behind image corner */}
          <div className="absolute -bottom-8 md:-right-8 w-28 h-28 bg-purple-400 blur-3xl rounded-full opacity-30 z-0" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
