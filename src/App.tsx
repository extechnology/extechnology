import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import Contact from "./pages/Contact";
import AboutUs from "./pages/About";
import Vision from "./pages/Vision";
import Services from "./pages/Services";
import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 900, // Animation duration
      easing: "ease-in-out", // Easing type
      once: false, // Whether animation should happen only once
    });

    // Refresh AOS when components are loaded dynamically
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Navbar />

        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/service" element={<Services />} />
        </Routes>

        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
