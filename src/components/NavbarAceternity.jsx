"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const pages = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Results", href: "/results" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export default function CenterMenuNavbar() {
  const [active, setActive] = useState(null);

  return (
    <header className="w-full flex flex-col items-center sticky top-0 z-50 bg-transparent">
      <nav
        onMouseLeave={() => setActive(null)}
        className="relative rounded-full bg-white shadow-input flex justify-center space-x-4 md:space-x-8 px-4 md:px-10 py-3 md:py-4 mt-6 max-w-md md:max-w-4xl w-full mx-auto"
      >
        {pages.map((page) => (
          <div
            key={page.label}
            onMouseEnter={() => setActive(page.label)}
            onMouseLeave={() => setActive(null)}
            className="relative"
          >
            <motion.a
              href={page.href}
              transition={{ duration: 0.3 }}
              className={`cursor-pointer text-lg font-semibold transition-colors ${
                active === page.label ? "text-[#a77c3b]" : "text-black"
              }`}
            >
              {page.label}
              {active === page.label && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-2 h-[2px] bg-[#a77c3b] rounded-full"
                  transition={transition}
                />
              )}
            </motion.a>
          </div>
        ))}
      </nav>
    </header>
  );
}
