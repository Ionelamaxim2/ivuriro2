import React from "react";

export default function HeroTitleAnimated({ textAlign = "center" }) {
  return (
    <h1
      className="hero-title"
      style={{
        fontFamily: '"Playfair Display", serif',
        fontWeight: 900,
        lineHeight: 1.08,
        textTransform: "uppercase",
        color: "#191919",
        textAlign,
        margin: "32px 0 22px 0",
        maxWidth: 1500,
      }}
    >
      <span style={{ display: "inline-block", whiteSpace: "normal" }}>
        REFINING
      </span>
      <br />
      <span style={{ display: "inline-block", whiteSpace: "normal" }}>
        YOUR
      </span>
      <br />
      <span style={{ display: "inline-block", whiteSpace: "normal" }}>
        NATURAL
      </span>
      <br />
      <span style={{ display: "inline-block", whiteSpace: "normal" }}>
        BEAUTY
      </span>
    </h1>
  );
}
