import React from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";
import Dither from "../components/Dither";
import FooterIvuriro from "../components/FooterIvuriro";

const prices = [
  {
    category: "Facial Contouring",
    treatments: [
      {
        name: "Botox",
        duration: "30 min",
        resultsLast: "3-6 months",
        price: 250,
      },
      {
        name: "Dermal Fillers",
        duration: "45 min",
        resultsLast: "6-18 months",
        price: 300,
      },
      {
        name: "Skin Boosters",
        duration: "40 min",
        resultsLast: "6-9 months",
        price: 220,
      },
    ],
  },
  {
    category: "Body Contouring",
    treatments: [
      {
        name: "Liposuction",
        duration: "2h 30 min",
        resultsLast: "Permanent (with maintenance)",
        price: 1200,
      },
      {
        name: "Abdominoplasty",
        duration: "3h",
        resultsLast: "Permanent",
        price: 2500,
      },
      {
        name: "Cryolipolysis",
        duration: "1h",
        resultsLast: "6-12 months",
        price: 900,
      },
    ],
  },
  {
    category: "Personalized Care",
    treatments: [
      {
        name: "Skin Analysis",
        duration: "20 min",
        resultsLast: "Consultation",
        price: 100,
      },
      {
        name: "Personalized Care Plan",
        duration: "30 min",
        resultsLast: "Based on adherence",
        price: 150,
      },
      {
        name: "Ongoing Consultation",
        duration: "15 min",
        resultsLast: "Per session",
        price: 80,
      },
    ],
  },
  {
    category: "Aesthetic Surgery",
    treatments: [
      {
        name: "Breast Implant",
        duration: "3h",
        resultsLast: "10-15 years",
        price: 3500,
      },
      {
        name: "Brazilian Butt Lift (BBL)",
        duration: "4h",
        resultsLast: "Years with maintenance",
        price: 4000,
      },
      {
        name: "Full Abdominoplasty",
        duration: "3h 30 min",
        resultsLast: "Permanent",
        price: 3000,
      },
    ],
  },
];

const Pricing = () => {
  return (
    <main>
      {/* Fundal Dither sub header */}
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "320px",
          marginBottom: "0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "120%",
            height: "100%",
            zIndex: 1,
            pointerEvents: "none", // nu blochează click
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
        {/* Titlul și subtitlul peste efect */}
        <div
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
              color: "White",
              textShadow: "0 2px 16px #fff7",
              letterSpacing: "-2px",
            }}
            className="main-title2"
          >
            Treatment Pricing
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              marginBottom: 48,
              color: "white",
              textShadow: "0 2px 16px #0007",
            }}
            className="subtitle2"
          >
            All prices are starting rates and may vary depending on personalized
            plans.
          </p>
        </div>
      </div>

      {/* Lista de prețuri */}
      <section className="pricing-clean2">
        {prices.map((category, i) => (
          <div className="pricing-list-block2" key={i}>
            <h2 className="section-title2">{category.category}</h2>
            <div className="pricing-list2">
              {category.treatments.map((treatment, j) => (
                <div className="pricing-item2" key={j}>
                  <div className="details2">
                    <h3>{treatment.name}</h3>
                    <p>⏱ Duration: {treatment.duration}</p>
                    <p>Lasts: {treatment.resultsLast}</p>
                  </div>
                  <div className="price2">from €{treatment.price}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Secțiunea consultanță gratuită */}
      <section className="free-consult4-section">
        <div className="free-consult4-box">
          <h2 className="free-consult4-title">Not sure what to choose?</h2>
          <p className="free-consult4-subtitle">
            Schedule a free consultation and receive a personalized plan with
            exact prices tailored to your needs.
          </p>
          <div className="flex justify-center  mt-9 mb-1">
            <button
              className="butonprimapaginajos2"
              onClick={() => (window.location.href = "/contact")}
            >
              <span>Book now</span>
            </button>
          </div>
        </div>
      </section>
      <FooterIvuriro />
    </main>
  );
};

export default Pricing;
