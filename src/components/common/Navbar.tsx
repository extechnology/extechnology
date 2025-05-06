import { useState, useEffect } from "react";
import {
  User,
  LogIn,
  Tag,
  Home,
  Sun,
  Moon,
  Menu,
  X,
  Contact,
} from "lucide-react";
// import { useIsMobile } from "../../hooks/useMobile";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Button } from "@/ui/Button";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  // const isMobile = useIsMobile();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  interface ThemeContextValue {
    darkMode: boolean;
    toggleTheme: () => void;
  }
  const [isScrolled, setIsScrolled] = useState(false);

  const { darkMode, toggleTheme } = useContext<ThemeContextValue>(ThemeContext);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navItems = [
    {
      label: "Home",
      href: "/",
      icon: <Home className="w-4 h-4" />,
    },
    {
      label: "Service",
      href: "/service",
      icon: <Tag className="w-4 h-4" />,
    },
    {
      label: "About",
      href: "/about",
      icon: <LogIn className="w-4 h-4" />,
    },
    {
      label: "Vision",
      href: "/vision",
      icon: <User className="w-4 h-4" />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (location.pathname === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(href);
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 py-3 ">
      <div
        className={`transition-all duration-500 ease-in-out ${
          isScrolled
            ? "md:w-[85%] w-[94%] rounded-full text-[var(--text-color)] backdrop-blur-lg border border-white/10 bg-opacity-80 [box-shadow:0_0_15px_5px_rgba(159,54,248,0.3)]"
            : "w-full bg-transparent text-[var(--text-color)]"
        }`}
      >
        <div className="container mx-auto md:px-4">
          <div className="flex items-center justify-between py-3">
            {/* Company Logo */}
            <div className="md:flex hidden items-center justify-center md:pl-5">
              <Link to={"/"} className="group">
                <div className="flex items-center justify-center">
                  <img
                    src="/Vector (2).svg"
                    alt="Exbot Logo"
                    loading="lazy"
                    className="pl-4 md:pl-0 h-8 md:mb-1 object-contain transition-transform duration-500 hover:scale-x-[-1]"
                  />
                  <img
                    src="/Group (4).svg"
                    alt="Exbot Logo"
                    loading="lazy"
                    className=" pl-4 md:pl-0 h-8  md:mb-1 object-contain transition-all duration-300  "
                  />
                  <img
                    src="/Group (5).svg"
                    alt="Exbot Logo"
                    loading="lazy"
                    className=" pl-4 md:pl-0 h-8  md:mb-1 object-contain transition-all duration-300  "
                  />
                </div>
                <div className="flex justify-center">
                  <img src="/Group (6).svg" alt="" className="w-18" />
                </div>
              </Link>
            </div>

            {/* mobile logo */}
            <div className="flex items-center justify-center md:hidden">
              <Link to={"/"} className="group">
                <img
                  src="/EX_TECHNOLOGY_LOGO-01.png"
                  alt="Exbot Logo"
                  loading="lazy"
                  className="md:w-36 pl-4 md:pl-0 h-12  md:mb-1 object-contain transition-all duration-300 group-hover:scale-110 "
                />
                {/* <img
                  src="/EX_TECHNOLOGY_LOGO-01.png"
                  alt="Exbot Logo"
                  loading="lazy"
                  className="w-36 h-12 mb-1 object-contain transition-all duration-300 group-hover:scale-110 hidden dark:block"
                /> */}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center flex-1 justify-center">
              <nav className="flex items-center space-x-10">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className={`transition-colors flex items-center space-x-1 relative group text-primary bg-transparent border-none focus:outline-none`}
                  >
                    <span className="ml-1">{item.label}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4 pr-7">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full  hover:bg-white/20 dark:hover:bg-black/20 transition-colors cursor-pointer"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-primary" />
                ) : (
                  <Moon className="w-5 h-5 text-primary" />
                )}
              </button>

              {/* Contact Button */}
              <button className="px-4 py-1 border border-gray-400 rounded-lg hover:bg-primary hover:text-[var(--bg-color)] transition-colors flex items-center space-x-2">
                {/* <Mail className="w-4 h-4" /> */}
                <Link to={"/contact"}>
                  <span>Contact Us</span>
                </Link>
              </button>
            </div>

            {/* Mobile Navigation Toggle Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full  hover:bg-white/20 dark:hover:bg-black/20 transition-colors cursor-pointer"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-primary" />
                ) : (
                  <Moon className="w-5 h-5 text-primary" />
                )}
              </button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="mr-3 text-[var(--text-color)]  relative z-50"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="animate-fade-in" />
                ) : (
                  <Menu className="animate-fade-in" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobile && (
            <div
              className={`fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-lg flex flex-col justify-center items-center transition-all duration-500 ease-in-out z-40 ${
                isOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <nav className="flex flex-col space-y-8 w-full px-4">
                {navItems.map((item, index) => (
                  <button
                    type="button"
                    key={item.href}
                    style={{
                      transitionDelay: `${100 + index * 50}ms`,
                    }}
                    className={`text-white/90 hover:text-white transition-all duration-300 py-2 flex items-center justify-center space-x-3 text-lg transform ${
                      isOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                    onClick={() => handleNavClick(item.href)}
                  >
                    <div className="p-2 rounded-full bg-white/5 border border-white/10">
                      {item.icon}
                    </div>
                    <span>{item.label}</span>
                  </button>
                ))}
                <div className="flex justify-center text-white">
                  <Link
                    to={"/contact"}
                    className=" flex gap-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="content-center rounded-full bg-white/5 border border-white/10 p-2">
                      <Contact className="w-4 h-4" />
                    </div>
                    <div className="content-center">Contact Us</div>
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
