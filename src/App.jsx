import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skill";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";

// Common components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Always at top */}

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<h2 className="text-center mt-5">Page Not Found</h2>} />
      </Routes>

      <Footer /> {/* Always at bottom */}
    </BrowserRouter>
  );
}

export default App;
