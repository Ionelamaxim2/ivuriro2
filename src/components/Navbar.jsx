import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-bold text-[#A77C3B]">
            IVURIRO
          </Link>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium text-lg">
          <li>
            <Link to="/pricing" className="hover:text-[#A77C3B]">
              Services
            </Link>
          </li>
          <li>
            <Link to="/results" className="hover:text-[#A77C3B]">
              Results
            </Link>
          </li>
          <li>
            <Link to="/team" className="hover:text-[#A77C3B]">
              Our Team
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#A77C3B]">
              Contact
            </Link>
          </li>
        </ul>

        {/* Book Now button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-[#A77C3B] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#8e6d32] transition"
          >
            BOOK NOW
          </Link>
        </div>

        {/* Hamburger icon for mobile */}
        <div
          className="md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer"
          onClick={toggleMenu}
        >
          <span
            className={`block h-0.5 bg-gray-700 rounded transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 bg-gray-700 rounded transition-opacity ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 bg-gray-700 rounded transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col space-y-2 px-4 py-4">
          <Link
            onClick={toggleMenu}
            to="/pricing"
            className="text-gray-700 font-medium text-lg hover:text-[#A77C3B]"
          >
            Services
          </Link>
          <Link
            onClick={toggleMenu}
            to="/results"
            className="text-gray-700 font-medium text-lg hover:text-[#A77C3B]"
          >
            Results
          </Link>
          <Link
            onClick={toggleMenu}
            to="/team"
            className="text-gray-700 font-medium text-lg hover:text-[#A77C3B]"
          >
            Our Team
          </Link>
          <Link
            onClick={toggleMenu}
            to="/contact"
            className="text-gray-700 font-medium text-lg hover:text-[#A77C3B]"
          >
            Contact
          </Link>
          <Link
            onClick={toggleMenu}
            to="/contact"
            className="mt-2 bg-[#A77C3B] text-white text-center px-4 py-2 rounded-md font-semibold hover:bg-[#8e6d32] transition"
          >
            BOOK NOW
          </Link>
        </div>
      )}
    </header>
  );
}
