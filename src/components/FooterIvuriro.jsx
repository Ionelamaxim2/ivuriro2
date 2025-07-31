import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Modals from "../pages/Modals";

export default function FooterIvuriro() {
  const [modalOpen, setModalOpen] = useState(null);

  return (
    <>
      <footer className="w-full bg-[#fcf8ef] pt-10 pb-4 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-6 border-b border-gray-200">
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#b3864a] mb-1">
              IVURIR<span className="text-[#8a6b3a]">O</span>
            </h2>
            <div className="text-gray-700 mb-4">
              Where science meets elegance...
            </div>
            <div className="flex gap-5 text-2xl text-[#766353] mt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#766353] mb-2">SERVICES</h3>
            <ul className="text-gray-700 space-y-1">
              <li>
                <Link to="/pricing" className="hover:underline">
                  Botox
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:underline">
                  Dermal Fillers
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:underline">
                  Skin Boosters
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:underline">
                  Body Contouring
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#766353] mb-2">CONTACT</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-center gap-2">
                <FaPhone className="text-[#b3864a]" /> +40 723 456 789
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[#b3864a]" /> info@ivuriro.com
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#b3864a]" /> Strada Eleganței
                10, București
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between pt-4 text-sm text-gray-500">
          <div className="mb-2 md:mb-0">
            © 2025 IVURIRO. All rights reserved.
          </div>
          <div className="flex gap-4">
            <button
              className="hover:underline bg-transparent border-0 p-0"
              style={{ cursor: "pointer", color: "inherit" }}
              onClick={() => setModalOpen("privacy")}
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              className="hover:underline bg-transparent border-0 p-0"
              style={{ cursor: "pointer", color: "inherit" }}
              onClick={() => setModalOpen("terms")}
            >
              Terms of Service
            </button>
          </div>
        </div>
      </footer>

      <Modals
        show={!!modalOpen}
        type={modalOpen}
        onClose={() => setModalOpen(null)}
      />
    </>
  );
}
