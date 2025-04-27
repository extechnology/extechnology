const Vision = () => {
  return (
    <div className="bg-[var(--bg-color)] text-[var(--text-color)]">
      <div className=" md:flex justify-center items-center max-w-7xl mx-auto pt-30 pb-20">
        <div className="md:w-1/2">
          <img
            src="/Image And Frame.svg"
            alt=""
            className="opacity-30 w-[90%] mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
        </div>
        <div className=" md:w-1/2">
          <h1
            className="md:text-6xl text-5xl px-5 pt-5 md:pt-0 md:px-0 font-bold pb-5 text-center"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            Our Mission & Vision
          </h1>
          <div className="px-5 md:px-0">
            <p
              className="md:text-2xl text-xl pb-4 text-justify"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              extechnology aims to empower businesses by providing the most
              advanced IT solutions and exceptional service, ensuring our
              clients achieve ,operational efficiency,security and innovation.
              We are committed to delivering tailored technology services that
              drive business success and foster long-term partnership
            </p>
            <p
              className="md:text-2xl text-xl text-justify"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              A future where business of all sizes leverage advanced IT
              solutions to overcome challenges, achieve their goals, and stay
              ahead in a rapidly evolving digital landscape. We aspire to be a
              trusted leader in the IT services industry, recognized for our
              innovation, reliability and dedication to client success
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Vision;
