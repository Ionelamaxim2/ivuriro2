import React, { useState, useEffect } from "react";
import LiquidChrome from "../components/LiquidChrome";
import ServicesCards from "../components/ServicesCards";
import TiltedCard from "../components/TiltedCard";
import CircularGallery from "../components/CircularGallery";
import FooterIvuriro from "../components/FooterIvuriro";
import Dither from "../components/Dither";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import "./Home.css";

const testimonials = [
  {
    imageSrc: "/images/client1.jpg",
    altText: "Sarah Johnson",
    overlayContent: (
      <div className="flex flex-col items-center bg-white/90 rounded-xl shadow-xl p-6 w-[260px] h-[300px]">
        <img
          src="/images/client1.jpg"
          alt="Sarah Johnson"
          className="w-16 h-16 rounded-full mb-2 object-cover shadow"
        />
        <h3 className="font-bold text-lg mb-1">Sarah Johnson</h3>
        <div className="text-xs text-gray-500 mb-1">Age 34</div>
        <div className="font-medium text-[15px] text-[#b3864a] mb-1">
          Botox & Dermal Fillers
        </div>
        <div className="flex text-[#f9be58] mb-1">★★★★★</div>
        <div className="text-xs text-center text-gray-600">
          "The results exceeded my expectations. The team at ivuriro made me
          feel comfortable throughout the entire process. My skin looks
          naturally refreshed and I feel more confident than ever."
        </div>
      </div>
    ),
  },
  {
    imageSrc: "/images/client2.jpg",
    altText: "Emma Rodriguez",
    overlayContent: (
      <div className="flex flex-col items-center bg-white/90 rounded-xl shadow-xl p-6 w-[260px] h-[300px]">
        <img
          src="/images/client2.jpg"
          alt="Emma Rodriguez"
          className="w-16 h-16 rounded-full mb-2 object-cover shadow"
        />
        <h3 className="font-bold text-lg mb-1">Emma Rodriguez</h3>
        <div className="text-xs text-gray-500 mb-1">Age 28</div>
        <div className="font-medium text-[15px] text-[#b3864a] mb-1">
          Skin Boosters
        </div>
        <div className="flex text-[#f9be58] mb-1">★★★★★</div>
        <div className="text-xs text-center text-gray-600">
          "Amazing experience from consultation to follow-up. My skin has never
          looked better – it's glowing and hydrated. The personalized approach
          really makes a difference."
        </div>
      </div>
    ),
  },
  {
    imageSrc: "/images/client3.jpg",
    altText: "Lisa Chen",
    overlayContent: (
      <div className="flex flex-col items-center bg-white/90 rounded-xl shadow-xl p-6 w-[260px] h-[300px]">
        <img
          src="/images/client3.jpg"
          alt="Lisa Chen"
          className="w-16 h-16 rounded-full mb-2 object-cover shadow"
        />
        <h3 className="font-bold text-lg mb-1">Lisa Chen</h3>
        <div className="text-xs text-gray-500 mb-1">Age 42</div>
        <div className="font-medium text-[15px] text-[#b3864a] mb-1">
          Body Contouring
        </div>
        <div className="flex text-[#f9be58] mb-1">★★★★★</div>
        <div className="text-xs text-center text-gray-600">
          "Professional, caring, and incredibly effective. The body contouring
          treatment helped me achieve the results I wanted without surgery.
          Highly recommend ivuriro."
        </div>
      </div>
    ),
  },
];

// Hook pentru mobil/desktop
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
}

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <div className="w-screen min-h-screen bg-[#faeedc] overflow-x-hidden">
      {/* 1. HERO section */}
      <section
        className="relative flex flex-col items-center justify-center px-6 text-center select-none hero-section"
        style={{
          minHeight: "90vh",
          height: "90vh",
          overflow: "hidden",
        }}
      >
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-auto">
          <LiquidChrome
            baseColor={[0.95, 0.9, 0.8]}
            speed={0.2}
            amplitude={0.5}
            frequencyX={3}
            frequencyY={2}
            interactive={true}
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pointer-events-auto">
          <div className="brand hero-brand">IVURIRO</div>
          <h1 className="hero-title">REFINING YOUR NATURAL BEAUTY</h1>
          <p className="subtitle hero-desc">
            Redefining facial and body contouring with a seamless blend of
            advanced technology and aesthetic artistry.
            <br />
            Whether you’re looking for a revitalizing treatment, non-invasive
            anti-aging solution, or subtle enhancement, our team transforms
            every visit into a journey toward authentic beauty and well-being.
          </p>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="hero-btn px-8 py-3 border border-black rounded-md font-semibold uppercase tracking-wider bg-transparent cursor-pointer pointer-events-auto transition-colors hover:bg-black hover:text-white"
          >
            BOOK NOW
          </button>
        </div>
      </section>

      {/* 2. SERVICES CARDS */}
      <section className="bg-[#faeedc] py-16">
        <div
          className="treatments-title-section px-6"
          style={{ background: "transparent" }}
        >
          <div className="treatments-title-container max-w-5xl mx-auto text-left">
            <h2 className="treatments-title text-4xl font-serif font-bold mb-2">
              Discover the Treatments from IVURIRO Clinic
            </h2>
            <p className="treatments-subtitle text-gray-700 text-lg max-w-xl">
              You're in the right place – explore the complete details about the
              procedures that interest you most.
            </p>
          </div>
        </div>
        <ServicesCards />
      </section>

      {/* 3. TESTIMONIALS */}
      <section
        style={{
          width: "100%",
          minHeight: "600px",
          position: "relative",
          overflow: "hidden",
          padding: 0,
        }}
        className="flex flex-col justify-center"
      >
        {/* Fundalul cu efectul dithered */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "120%",
            height: "100%",
            zIndex: 1,
            pointerEvents: "auto",
          }}
        >
          <Dither
            waveColor={[1, 0.9, 0.8]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.3}
            colorNum={4}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
          />
        </div>
        {/* Titlu & testimoniale */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            color: "white",
            padding: "60px 0 0 0",
            textAlign: "center",
            width: "100%",
          }}
        >
          <h2
            style={{
              fontSize: "2.8rem",
              fontWeight: 800,
              marginBottom: 16,
              color: "white",
              textShadow: "0 2px 16px #0007",
            }}
          >
            What Our Clients Say
          </h2>
          <p
            style={{
              fontSize: "1.15rem",
              marginBottom: 48,
              color: "white",
              textShadow: "0 2px 16px #0007",
            }}
          >
            Real stories from real people who have experienced the IVURIRO
            difference
          </p>
          {/* MOBIL: carusel | DESKTOP: TiltedCard grid */}
          {isMobile ? (
            <TestimonialsCarousel testimonials={testimonials} />
          ) : (
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
                <TiltedCard
                  key={idx}
                  imageSrc={t.imageSrc}
                  altText={t.altText}
                  containerHeight="390px"
                  containerWidth="340px"
                  rotateAmplitude={14}
                  scaleOnHover={1.08}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={t.overlayContent}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. GALLERY */}
      <section className="bg-[#faeedc] ">
        <div
          className="treatments-title-section  mb-0"
          style={{
            marginBottom: 0,
            paddingBottom: 0,
            background: "transparent",
          }}
        >
          <div className="treatments-title-container">
            <h2 className="treatments-title ">
              Satisfied Patients, Real Experiences and Opinions
            </h2>
            <p className="treatments-subtitle ">
              Transparent. Honest. Real. Discover What Our Patients Say.
            </p>
          </div>
        </div>
        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery
            bend={1}
            textColor="black"
            borderRadius={0.15}
            scrollEase={0.02}
          />
        </div>
        <div className="flex justify-center mt--9 mb-14">
          <button className="butonprimapaginajos2">
            <span>Book now</span>
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <div className="bg-[#faeedc]">
        <FooterIvuriro />
      </div>
    </div>
  );
}
