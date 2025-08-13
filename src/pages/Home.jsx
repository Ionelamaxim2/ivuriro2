import React, { Suspense, lazy, useState, useEffect } from "react";
import "./Home.css";

import HeroTitleAnimated from "../components/HeroTitleAnimated";
import FooterIvuriro from "../components/FooterIvuriro";
import ServicesCards from "../components/ServicesCards";
import TiltedCard from "../components/TiltedCard";

const StaticMobileGallery = lazy(() =>
  import("../components/StaticMobileGallery")
);
const LiquidChrome = lazy(() => import("../components/LiquidChrome"));
const CircularGallery = lazy(() => import("../components/CircularGallery"));
const Dither = lazy(() => import("../components/Dither"));
const TestimonialsCarousel = lazy(() =>
  import("../components/TestimonialsCarousel")
);

const testimonials = [
  {
    imageSrc: "/images/client1.webp",
    altText: "Sarah Johnson",
    overlayContent: (
      <div className="flex flex-col items-center bg-white/90 rounded-xl shadow-xl p-6 w-[260px] h-[300px]">
        <img
          src="/images/client1.webp"
          alt="Sarah Johnson"
          className="w-16 h-16 rounded-full mb-2 object-cover shadow"
          loading="lazy"
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
    imageSrc: "/images/client2.webp",
    altText: "Emma Rodriguez",
    overlayContent: (
      <div className="flex flex-col items-center bg-white/90 rounded-xl shadow-xl p-6 w-[260px] h-[300px]">
        <img
          src="/images/client2.webp"
          alt="Emma Rodriguez"
          className="w-16 h-16 rounded-full mb-2 object-cover shadow"
          loading="lazy"
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
    imageSrc: "/images/client3.webp",
    altText: "Lisa Chen",
    overlayContent: (
      <div className="flex flex-col items-center bg-white/90 rounded-xl shadow-xl p-6 w-[260px] h-[300px]">
        <img
          src="/images/client3.webp"
          alt="Lisa Chen"
          className="w-16 h-16 rounded-full mb-2 object-cover shadow"
          loading="lazy"
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

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );
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
      <section
        className="relative flex items-center md:items-start justify-center px-6 select-none hero-section"
        style={{
          minHeight: "90vh",
          height: isMobile ? "60vh" : "100vh",
          overflow: "hidden",
        }}
      >
        <Suspense fallback={<div className="w-full h-full bg-[#f5ecd9]" />}>
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
        </Suspense>
        {/* Absolute hero image anchored to bottom-right, full height on desktop */}
        <div
          className="hidden md:block absolute pointer-events-none"
          style={{ zIndex: 5, bottom: 0, right: "6vw", height: "88%" }}
        >
          <img
            src="/images/pozahero.webp"
            alt="IVURIRO Hero"
            style={{
              height: "100%",
              width: "auto",
              objectFit: "contain",
              objectPosition: "right bottom",
            }}
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center md:items-stretch w-full h-full pointer-events-auto md:pt-12 lg:pt-16 pb-8 md:pb-12">
          <div className="flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-left px-2 md:px-6 md:mt-8 lg:mt-10">
            <div className="brand hero-brand">IVURIRO</div>
            <HeroTitleAnimated textAlign={isMobile ? "center" : "left"} />
            <p
              className="subtitle hero-desc"
              style={
                isMobile
                  ? undefined
                  : { marginLeft: 0, marginRight: 0, textAlign: "left" }
              }
            >
              Redefining facial and body contouring with a seamless blend of
              advanced technology and aesthetic artistry.
            </p>
            <button
              onClick={() => (window.location.href = "/contact")}
              className="hero-btn px-8 py-3 border border-black rounded-md font-semibold uppercase tracking-wider bg-transparent cursor-pointer pointer-events-auto transition-colors hover:bg-black hover:text-white"
            >
              BOOK NOW
            </button>
          </div>
          <div className="hidden md:block" />
        </div>
      </section>
      <section className="bg-[#faeedc] py-10">
        <div
          className="treatments-title-section px-6"
          style={{
            background: "transparent",
            paddingBottom: "0.2rem",
            marginBottom: 0,
          }}
        >
          <div
            className="treatments-title-container max-w-5xl mx-auto text-left"
            style={{ marginBottom: "0.1rem" }}
          >
            <h2 className="treatments-title text-4xl font-serif font-bold mb-1">
              Discover the Treatments from IVURIRO Clinic
            </h2>
            <p
              className="treatments-subtitle text-gray-700 text-lg max-w-xl"
              style={{ marginBottom: 0 }}
            >
              You're in the right place – explore the complete details about the
              procedures that interest you most.
            </p>
          </div>
        </div>
        <ServicesCards />
      </section>

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
        <Suspense fallback={<div className="w-full h-[600px] bg-[#f5ecd9]" />}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              width: "120%",
              height: isMobile ? "140%" : "100%",
              zIndex: 1,
              pointerEvents: "auto",
            }}
          >
            <Dither
              waveColor={[1, 0.9, 0.8]}
              disableAnimation={false}
              enableMouseInteraction={false}
              mouseRadius={0.3}
              colorNum={4}
              waveAmplitude={0.3}
              waveFrequency={3}
              waveSpeed={0.05}
            />
          </div>
        </Suspense>
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
              fontWeight: 700,
            }}
          >
            Real stories from real people who have experienced the IVURIRO
            difference
          </p>
          <Suspense fallback={<div>Loading testimonials...</div>}>
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
          </Suspense>
        </div>
      </section>

      <section className="bg-[#faeedc] ">
        <div
          className="treatments-title-section mb-0"
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
            <p
              className="treatments-subtitle "
              style={{ marginBottom: "24px" }}
            >
              Transparent. Honest. Real. Discover What Our Patients Say.
            </p>
          </div>
        </div>
        <div style={{ height: "450px", position: "relative" }}>
          <Suspense fallback={<div>Loading gallery...</div>}>
            {isMobile ? (
              <StaticMobileGallery />
            ) : (
              <CircularGallery
                bend={1}
                textColor="black"
                borderRadius={0.15}
                scrollEase={0.02}
              />
            )}
          </Suspense>
        </div>
        <div className="flex justify-center -mt-13 mb-14">
          <button
            className="butonjos2"
            onClick={() => (window.location.href = "/contact")}
          >
            <span>Book now</span>
          </button>
        </div>
      </section>

      <div className="bg-[#faeedc]">
        <FooterIvuriro />
      </div>
    </div>
  );
}
