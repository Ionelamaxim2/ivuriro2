import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarAceternity from "./components/NavbarAceternity";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <NavbarAceternity />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/results" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
