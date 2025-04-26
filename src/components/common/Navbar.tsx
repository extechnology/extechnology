import { useState, useEffect } from "react";
import { User, LogIn, Tag, Home, Sun, Moon, Menu, X } from "lucide-react";
// import { useIsMobile } from "../../hooks/useMobile";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Button } from "@/ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  // const isMobile = useIsMobile();

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 py-3 ">
      <div
        className={`transition-all duration-500 ease-in-out  ${
          isScrolled
            ? "md:w-[85%] w-[94%] rounded-full  text-[var(--text-color)]  backdrop-blur-lg border border-white/10 shadow-sm bg-opacity-80 shadow-[#9f36f8] transform-gpu"
            : "w-full bg-transparent text-[var(--text-color)] transform-gpu"
        }`}
      >
        <div className="container mx-auto md:px-4">
          <div className="flex items-center justify-between py-3">
            {/* Company Logo */}
            <div className="flex items-center justify-center">
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
              <nav className="flex items-center space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`font-semibold  transition-colors flex items-center space-x-1 relative group text-primary`}
                  >
                    <span className="ml-1">{item.label}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </Link>
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
              <button className="px-4 py-1 border border-gray-400 rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2">
                {/* <Mail className="w-4 h-4" /> */}
                <Link to={"/contact"}>
                  <span>Contact</span>
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
                  <a
                    key={item.label}
                    href={item.href}
                    style={{
                      transitionDelay: `${100 + index * 50}ms`,
                    }}
                    className={`text-white/90 hover:text-white transition-all duration-300 py-2 flex items-center justify-center space-x-3 text-lg transform ${
                      isOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="p-2 rounded-full bg-white/5 border border-white/10">
                      {item.icon}
                    </div>
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
