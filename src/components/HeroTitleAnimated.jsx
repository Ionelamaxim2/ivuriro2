import React from "react";
import { motion } from "framer-motion";

const words = ["REFINING", "YOUR", "NATURAL"];
const lastWord = "BEAUTY";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.045 },
  },
};
const child = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "cubic-bezier(0.23, 0.52, 0.48, 0.93)",
    },
  },
};

export default function HeroTitleAnimated() {
  return (
    <motion.h1
      className="hero-title"
      style={{
        fontFamily: '"Playfair Display", serif',
        fontWeight: 900,
        fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
        letterSpacing: "0.11em",
        lineHeight: 1.08,
        textTransform: "uppercase",
        color: "#191919",
        textAlign: "center",
        margin: "32px 0 22px 0",
        maxWidth: 1500,
      }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, wi) => (
        <span
          key={wi}
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            marginRight: wi === words.length - 1 ? 0 : "0.4em",
          }}
        >
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              variants={child}
              style={{
                display: "inline-block",
                minWidth: "0.035em",
                margin: "0 0.04em",
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
      <br />

      <span
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          marginTop: "0.18em",
        }}
      >
        {lastWord.split("").map((char, ci) => (
          <motion.span
            key={ci}
            variants={child}
            style={{
              display: "inline-block",
              minWidth: "0.035em",
              margin: "0 0.04em",
            }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    </motion.h1>
  );
}
