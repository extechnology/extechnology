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
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Navbar />
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
