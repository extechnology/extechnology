import { FaFacebookF, FaInstagram,FaPinterest, FaLinkedin, FaPhone, FaYoutube  } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";


const links = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/service" },
  { label: "About Us", path: "/about" },
  { label: "Vision", path: "/vision" },
  { label: "Contact", path: "/contact" },
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
        <div className="max-w-7xl mx-auto">
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
                  <a
                    title="facebook"
                    href="https://www.facebook.com/extechnology.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF size={20} />
                  </a>
                </span>
                <span className="bg-white/10 text-[#9F37F8] hover:bg-white/20 p-2 rounded-full">
                  <a
                    href="https://in.pinterest.com/extechnologyin/"
                    title="pinterest"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaPinterest size={20} />
                  </a>
                </span>
                <span className="bg-white/10 text-[#9F37F8] hover:bg-white/20 p-2 rounded-full">
                  <a
                    title="linkedin"
                    href="https://www.linkedin.com/company/ex-technology"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </span>
                <span className="bg-white/10 text-[#9F37F8] hover:bg-white/20 p-2 rounded-full">
                  <a
                    title="instagram"
                    href="https://www.instagram.com/extechnology.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={20} />
                  </a>
                </span>
                <span className="bg-white/10 text-[#9F37F8] hover:bg-white/20 p-2 rounded-full">
                  <a
                    title="twitter"
                    href="https://x.com/extechnologyin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter size={20} />
                  </a>
                </span>
                <span className="bg-white/10 text-[#9F37F8] hover:bg-white/20 p-2 rounded-full">
                  <a
                    title="youtuve"
                    href="https://www.youtube.com/@extechnologyin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube size={20} />
                  </a>
                </span>
              </div>
              <ul className="text-sm text-gray-300 space-y-2 leading-relaxed">
                <li>Indo arcade</li>
                <li>room no:412</li>
                <li>Cherootty road calicut</li>
                <li className="flex gap-1 content-center">
                  {" "}
                  <FaPhone className="relative top-1" /> 9526123466
                </li>
                <li className="flex gap-1 content-center">
                  {" "}
                  <IoIosMail className="relative top-1" /> Info@extechnology.in
                </li>
              </ul>
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
                      <BsChevronRight className="text-purple-500" />{" "}
                      {link.label}
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
            <Link to={"/privacy"}>
              <p>Privacy policy</p>
            </Link>
            <p>&copy; 2025 All rights reserved</p>
            <Link to={"/terms"}>
              <p>Terms & conditions</p>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
