import React, { useState, useEffect } from "react";
import styles from "./ServicesCards.module.css";

const cards = [
  {
    title: "Facial contouring",
    subtitle:
      "Rejuvenate your skin with our advanced facial treatments including Botox, dermal fillers, and skin boosters.",
    bg: "/images/botox.jpg",
    link: "/pricing",
  },
  {
    title: "Body contouring",
    subtitle:
      "Rejuvenate your skin with our advanced body contouring treatments including liposuction, tummy tucks, and non-invasive fat reduction.",
    bg: "/images/rino.jpg",
    link: "/pricing",
  },
  {
    title: "Personalised care",
    subtitle:
      "Rejuvenate your skin with our advanced personalised care treatments including skin analysis, tailored skincare plans, and ongoing support.",
    bg: "/images/skincream.jpg",
    link: "/pricing",
  },
];

export default function ServicesCards() {
  const [idx, setIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 700);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function prevCard() {
    setIdx((prev) => (prev - 1 + cards.length) % cards.length);
  }
  function nextCard() {
    setIdx((prev) => (prev + 1) % cards.length);
  }

  if (isMobile) {
    const card = cards[idx];
    return (
      <div className={styles.carouselWrapper}>
        <button
          className={styles.arrowBtn}
          onClick={prevCard}
          aria-label="Prev"
        >
          &#8592;
        </button>
        <div
          className={styles.card}
          style={{ backgroundImage: `url('${card.bg}')` }}
        >
          <div className={styles.cardOverlay}></div>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{card.title}</h2>
            <h3 className={styles.cardSubtitle}>{card.subtitle}</h3>
            <a href={card.link} className={styles.discoverLink}>
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Discover</span>
              </button>
            </a>
          </div>
        </div>
        <button
          className={styles.arrowBtn}
          onClick={nextCard}
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
    );
  }

  return (
    <div className={styles.cardsContainer}>
      {cards.map((card, i) => (
        <div
          key={i}
          className={styles.card}
          style={{ backgroundImage: `url('${card.bg}')` }}
        >
          <div className={styles.cardOverlay}></div>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{card.title}</h2>
            <h3 className={styles.cardSubtitle}>{card.subtitle}</h3>
            <a href={card.link} className={styles.discoverLink}>
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Discover</span>
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
