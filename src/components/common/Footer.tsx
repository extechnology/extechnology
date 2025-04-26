import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const links = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/service" },
  { label: "About Us", path: "/about" },
  { label: "Vision", path: "/vision" },
];

const Footer = () => {
  return (
    <div>
      {/* Social bar */}
      <div className="w-full overflow-x-auto flex justify-center whitespace-nowrap border-t border-b border-[#4A1870] bg-[var(--secondary-bg-color)] text-[var(--secondary-text-color)] py-5 no-scrollbar">
        <div className="inline-flex items-center px-5 md:px-0 gap-8">
          {[
            "google",
            "Facebook",
            "YouTube",
            "Pinterest",
            "Twitch",
            "Webflow",
            "google",
            "Facebook",
            "Twitch",
          ].map((platform, i) => (
            <img
              key={i}
              src={`/${platform}.svg`}
              alt={platform}
              className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
          {/* <div className="h-3 w-full relative  opacity-20 bg-gradient-to-t from-fuchsia-400 via-slate-700 to-black"></div> */}
        </div>
      </div>
      <footer className="bg-[var(--secondary-bg-color)] text-[var(--secondary-text-color)] px-6 md:px-20 pt-1 pb-10 relative z-10">
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left - Logo and Address */}
          <div>
            <img
              src="/EX_TECHNOLOGY_LOGO-01.png"
              alt="logo"
              className="w-20 mb-4"
            />
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-white/10 text-[#9F37F8] hover:bg-white/20 p-2 rounded-full">
                <FaFacebookF size={20} />
              </span>
              <span className="bg-white/10 text-[#9F37F8] hover:bg-white/20 p-2 rounded-full">
                <FaTwitter size={20} />
              </span>
              <span className="bg-white/10 text-[#9F37F8] hover:bg-white/20 p-2 rounded-full">
                <FaYoutube size={20} />
              </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              KINFRA Advanced Technology park,
              <br /> Ramanattukara
            </p>
          </div>

          {/* Center - Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Link</h3>
            <div className="h-1 w-8 bg-purple-500 mb-6 relative before:absolute before:w-2 before:h-1 before:bg-purple-300 before:left-8 before:top-0"></div>
            <ul className="space-y-4">
              {links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-gray-300 hover:text-white hover:scale-105 hover:duration-300 transition-all"
                  >
                    <BsChevronRight className="text-purple-500" /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Newsletter</h3>
            <div className="border border-gray-500 mt-6 flex justify-between items-center p-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none text-sm placeholder:text-gray-400 text-white w-full"
              />
              <button type="submit" title="Subscribe" className="ml-2 p-2">
                <HiOutlineMail size={24} className="text-purple-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="text-center md:flex justify-between space-y-2 md:space-y-0 text-sm text-gray-500 mt-6 md:mt-12">
          <p>Privacy policy</p>
          <p>&copy; 2025 All rights reserved</p>
          <p>Terms & conditions</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
