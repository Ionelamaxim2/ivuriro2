import React, { useState, useCallback } from "react";

export default function StaticMobileGallery() {
  const slides = [
    { image: "/images/abdomen1.webp", text: "Abdomen shape restoration" },
    {
      image: "/images/buze1.webp",
      text: "Visible volume and hydration after injection",
    },
    { image: "/images/bbl1.webp", text: "Brazilian Butt Lift" },
    {
      image: "/images/fund1.webp",
      text: "Non-surgical lifting and volumization",
    },
    {
      image: "/images/sani1.webp",
      text: "Improved shape, volume, and symmetry",
    },
    { image: "/images/jawline1.webp", text: "Defined jawline contour" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  return (
    <div className="relative w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
      <p className="text-center font-semibold text-lg mb-4">
        {slides[currentIndex].text}
      </p>
      <img
        src={slides[currentIndex].image}
        alt={slides[currentIndex].text}
        className="rounded-lg object-cover max-h-64"
        loading="lazy"
      />
      <div className="flex justify-between w-full max-w-xs mt-4">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="p-2 rounded-full bg-[#b3864a] text-white hover:bg-[#a77c3b] transition"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="p-2 rounded-full bg-[#b3864a] text-white hover:bg-[#a77c3b] transition"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
