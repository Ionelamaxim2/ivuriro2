import React, { useState, useEffect } from "react";

export default function TestimonialsCarousel({ testimonials }) {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 800);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) {
    return (
      <div
        style={{
          display: "flex",
          gap: 32,
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "0 auto",
          maxWidth: 1200,
        }}
      >
        {testimonials.map((t, idx) => (
          <div key={idx} style={{ position: "relative", minWidth: 320 }}>
            <div
              style={{
                backgroundImage: `url(${t.imageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 24,
                width: 320,
                height: 340,
                filter: "blur(0.5px) brightness(0.91)",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1,
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                background: "rgba(255,255,255,0.93)",
                borderRadius: 22,
                margin: 0,
                width: 320,
                minHeight: 340,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 36px 0 rgba(120, 80, 20, 0.09)",
                padding: "0 8px",
              }}
            >
              {t.overlayContent}
            </div>
          </div>
        ))}
      </div>
    );
  }

  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const t = testimonials[current];

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        minHeight: 340,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      <button
        aria-label="Previous"
        onClick={handlePrev}
        style={{
          background: "#b3864a",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: 38,
          height: 38,
          position: "absolute",
          left: 30,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 11,
          fontSize: "1.7rem",
        }}
      >
        &#8592;
      </button>

      <div
        style={{
          width: "92vw",
          maxWidth: 340,
          minHeight: 340,
          borderRadius: 22,
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 8px 36px 0 rgba(120, 80, 20, 0.09)",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${t.imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            filter: "brightness(0.89) blur(0.4px)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.6)",
            borderRadius: 22,
            padding: "20px 8px 18px 8px",
          }}
        >
          {t.overlayContent}
        </div>
      </div>

      <button
        aria-label="Next"
        onClick={handleNext}
        style={{
          background: "#b3864a",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: 38,
          height: 38,
          position: "absolute",
          right: 30,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 11,
          fontSize: "1.7rem",
        }}
      >
        &#8594;
      </button>
    </div>
  );
}
