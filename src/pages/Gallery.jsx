import React, { useState, lazy, Suspense, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import FooterIvuriro from "../components/FooterIvuriro";
import "./Gallery.css";

const Dither = lazy(() => import("../components/Dither"));

const resultsData = [
  {
    category: "facial",
    title: "Lip Filler",
    desc: "Visible volume and hydration",
    img: "/images/buze1.webp",
    alt: "acid hialuronic in buze",
  },
  {
    category: "body",
    title: "Butt Filler",
    desc: "Non-surgical volumization",
    img: "/images/fund1.webp",
    alt: "acid in fese",
  },
  {
    category: "facial",
    title: "Jawline Filler",
    desc: "Sharpened facial contour",
    img: "/images/jawline1.webp",
    alt: "acid in jawline",
  },
  {
    category: "enhancement",
    title: "Breast Implant",
    desc: "Enhanced shape and symmetry",
    img: "/images/sani1.webp",
    alt: "implant mamar",
  },
  {
    category: "enhancement",
    title: "Brazilian Butt Lift",
    desc: "Surgical contouring and lift",
    img: "/images/bbl1.webp",
    alt: "bbl",
  },
  {
    category: "enhancement",
    title: "Abdominoplasty",
    desc: "Improved abdomen silhouette",
    img: "/images/abdomen1.webp",
    alt: "Abdominoplastie",
  },
];

const faqData = [
  {
    q: "Are the listed prices final?",
    a: "Yes, all displayed prices are final and include VAT. There are no hidden fees. Any additional procedures are discussed transparently in advance.",
  },
  {
    q: "Is the consultation truly free?",
    a: "Yes! Your first consultation is 100% free, with no obligation. It is our way of helping you discover the best personalized solution before any treatment.",
  },
  {
    q: "Do you offer installment plans?",
    a: "Yes. For more complex treatments or packages, we can offer flexible payment plans tailored to your needs. Please ask during your consultation.",
  },
  {
    q: "What’s included in the treatment price?",
    a: "All prices include the procedure, sterile materials, personalized recommendations, and a post-treatment follow-up consultation after 2 weeks. Any extra touch-ups are priced separately.",
  },
  {
    q: "How often do I need maintenance sessions?",
    a: "It depends on the treatment and your lifestyle. For example, dermal fillers may need refreshing every 6–12 months, and botulinum toxin every 3–6 months.",
  },
  {
    q: "Can I combine different procedures?",
    a: "Absolutely. Many of our clients achieve the best results by combining multiple treatments. Our doctors will recommend a safe and effective plan tailored for you.",
  },
  {
    q: "Do you guarantee the results?",
    a: "We guarantee medical safety, premium products, and certified professionals. Results depend on individual response, but we ensure honest expectations and expert care.",
  },
  {
    q: "How does your loyalty program work?",
    a: "With every visit, you earn points that unlock discounts, complimentary sessions, or priority access to new treatments. Enrollment is automatic for all clients.",
  },
];

const filterCategories = [
  { label: "All Results", value: "all" },
  { label: "Facial Treatments", value: "facial" },
  { label: "Body Contouring", value: "body" },
  { label: "Surgical Enhancements", value: "enhancement" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function useScrollAnimation(threshold = 0.2) {
  const ref = React.useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, {
    once: true,
    margin: "0px",
    amount: threshold,
  });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return [ref, controls];
}

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [openFAQ, setOpenFAQ] = useState(null);

  const filteredResults =
    activeFilter === "all"
      ? resultsData
      : resultsData.filter((item) => item.category === activeFilter);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [headerRef, headerAnim] = useScrollAnimation();
  const [filterRef, filterAnim] = useScrollAnimation();
  const [resultsRef, resultsAnim] = useScrollAnimation();
  const [faqRef, faqAnim] = useScrollAnimation();

  return (
    <main>
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "320px",
          marginBottom: "0",
          overflow: "hidden",
        }}
      >
        <Suspense fallback={<div style={{ height: 260 }} />}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              width: "120%",
              height: "100%",
              zIndex: 1,
              pointerEvents: "none",
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
        <motion.div
          ref={headerRef}
          variants={fadeUp}
          initial="hidden"
          animate={headerAnim}
          style={{
            position: "relative",
            zIndex: 2,
            color: "#1c1c1c",
            padding: "80px 0 50px 0",
            textAlign: "center",
            width: "100%",
          }}
        >
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: 800,
              marginBottom: 16,
              color: "white",
              textShadow: "0 2px 16px #0007",
            }}
            className="main-title2"
          >
            Real Results. Real Confidence.
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              marginBottom: 48,
              color: "white",
              fontWeight: 700,
              textShadow: "0 2px 16px #0007",
            }}
            className="subtitle2"
          >
            Browse our gallery to see real before-and-after photos from our
            satisfied clients.
          </p>
        </motion.div>
      </div>

      <motion.div
        ref={filterRef}
        variants={fadeLeft}
        initial="hidden"
        animate={filterAnim}
        className="filter-buttons-gallery3"
        style={{ textAlign: "center", margin: "40px 0 24px 0" }}
      >
        {filterCategories.map((cat) => (
          <button
            key={cat.value}
            className={`filter-btn-gallery3${
              activeFilter === cat.value ? " active" : ""
            }`}
            onClick={() => setActiveFilter(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      <motion.div
        ref={resultsRef}
        variants={fadeUp}
        initial="hidden"
        animate={resultsAnim}
        className="results-grid-gallery3"
      >
        {filteredResults.map((item, idx) => (
          <div className={`result-card-gallery3 ${item.category}`} key={idx}>
            <div className="result-single-gallery3">
              <img src={item.img} alt={item.alt} loading="lazy" />
              <span className="label before">Before</span>
              <span className="label after">After</span>
            </div>
            <div className="result-info-gallery3">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
        {filteredResults.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: 60,
              color: "#b3864a",
              fontWeight: 700,
            }}
          >
            No results found for this category.
          </div>
        )}
      </motion.div>

      <motion.section
        ref={faqRef}
        variants={fadeRight}
        initial="hidden"
        animate={faqAnim}
        className="faq4"
      >
        <h2>
          Frequently <span className="orange">Asked Questions</span>
        </h2>
        <p className="faq-subtitle4">
          Answers to the most common questions about results and treatments
        </p>
        <div className="faq-grid4">
          {faqData.map((item, i) => (
            <div
              className={`faq-item4${openFAQ === i ? " active" : ""}`}
              key={i}
            >
              <button
                className="faq-question4"
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                aria-expanded={openFAQ === i}
              >
                {item.q} <span>{openFAQ === i ? "-" : "+"}</span>
              </button>
              <div
                className="faq-answer4"
                style={{ display: openFAQ === i ? "block" : "none" }}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
        <div className="faq-contact4">
          <h3>Still have questions?</h3>
          <p>
            Our specialists are ready to help and guide you through your
            aesthetic journey
          </p>
          <div className="faq-buttons4">
            <a href="tel:+40786772343" className="btn-call4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
              Call Now
            </a>
            <a href="/contact" className="btn-email4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
              </svg>
              Send Message
            </a>
          </div>
        </div>
      </motion.section>
      <FooterIvuriro />
    </main>
  );
};

export default Gallery;
