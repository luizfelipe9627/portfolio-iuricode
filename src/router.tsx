import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Services from "./pages/Services/Services";
import Skills from "./pages/Skills/Skills";
import Home from "./pages/Home/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  );
}
