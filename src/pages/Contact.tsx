export default function Contact() {
  return (
    <div className="bg-[var(--bg-color)] text-[var(--text-color)] py-24">
      <div className="text-center py-10  ">
        <h1 className="text-7xl font-bold ">Get in touch</h1>
        <p className=" text-2xl py-5">
          Reach out , and let's create a universe of possibilities together{" "}
        </p>
      </div>
      <div className="max-w-6xl mx-auto  text-white flex flex-col md:flex-row">
        {/* Left Side - Contact Form */}
        <div className="w-full md:w-1/2 bg-[var(--tertiary-bg-color)] text-[var(--tertiary-text-color)] p-10 rounded-l-xl flex flex-col justify-center">
          <div className="absolute bottom-80 left-40 w-28 h-28 bg-purple-500 blur-3xl rounded-full opacity-20 z-10" />

          <h2 className="text-4xl font-bold tracking-wider mb-8">
            Let’s connect
          </h2>

          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 px-4 py-3 bg-[var(--quaternary-bg-color)]  border border-[var(--border-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 px-4 py-3 bg-[var(--quaternary-bg-color)] border border-[var(--border-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-3 bg-[var(--quaternary-bg-color)] border border-[var(--border-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full mb-4 px-4 py-3 bg-[var(--quaternary-bg-color)] border border-[var(--border-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            placeholder="Message"
            className="w-full mb-6 px-4 py-3 h-28 resize-none bg-[var(--quaternary-bg-color)] border border-[var(--border-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>

          <button className="w-full bg-gradient-to-r from-purple-600 to-purple-500 py-3 rounded-md text-white font-semibold tracking-wide flex items-center justify-center gap-2 hover:brightness-110 transition-all">
            Send it
            <span className="inline-block animate-bounce">🚀</span>
          </button>
          <div className="absolute -bottom-8 left-40 w-28 h-28 bg-purple-500 blur-3xl rounded-full opacity-20 z-10" />
        </div>

        {/* Right Side - Robot Image */}
        <div className="w-full md:w-1/2 bg-black rounded-r-xl flex items-center justify-center">
          <div className="absolute bottom-90 right-40 w-28 h-28 bg-purple-500 blur-3xl rounded-full opacity-30 z-1" />

          <img
            src="/Image box.svg"
            alt="Robot"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
