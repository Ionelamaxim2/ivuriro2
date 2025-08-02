import React from "react";
import Dither from "../components/Dither";
import "./Team.css";
import FooterIvuriro from "../components/FooterIvuriro";

const teamMembers = [
  {
    name: "Dr. Ana Dhali",
    img: "/images/profil.webp",
    role: "Aesthetic Medicine Specialist",
    descShort: "Passionate about natural beauty and patient care.",
    bio: `Dr. Ana Dhali brings over 10 years of experience in aesthetic medicine. She specializes in non-surgical facial rejuvenation and believes in enhancing natural beauty through precision and artistry. Her gentle approach and attention to detail have earned her the trust of countless patients.`,
    qualifications: [
      "MD – Medical University of Bucharest",
      "Aesthetic Medicine Certification",
      "Advanced Botox & Fillers Training",
    ],
    pink: false,
  },
  {
    name: "Cristina Ionescu",
    img: "/images/doctor2.webp",
    role: "Senior Nurse & Injector",
    descShort: "Precision and empathy in every treatment.",
    bio: `Cristina is a highly skilled nurse with specialized training in aesthetic injections. Her meticulous attention to detail and compassionate bedside manner make every patient feel comfortable and confident. She has performed thousands of successful treatments with exceptional precision.`,
    qualifications: [
      "RN – Nursing Degree",
      "Advanced Injection Techniques",
      "Patient Care Specialization",
    ],
    pink: true,
  },
];

const Team = () => {
  return (
    <main style={{ background: "#faeedc", minHeight: "100vh", width: "100%" }}>
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
        <section
          style={{
            position: "relative",
            zIndex: 2,
            color: "#1c1c1c",
            padding: "80px 0 50px 0",
            textAlign: "center",
            width: "100%",
          }}
          className="ourteam4-hero"
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
            Meet the Experts Behind MIL-clinique
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
            Our dedicated team combines medical expertise with artistic vision
            to deliver exceptional results while ensuring your comfort and
            safety at every step.
          </p>
        </section>
      </div>

      <section className="ourteam4-members">
        {teamMembers.map((member, idx) => (
          <div
            className={`member4${idx % 2 === 1 ? " reverse" : ""}`}
            key={member.name}
          >
            <img src={member.img} alt={member.name} />
            <div className="member4-info">
              <h2>{member.name}</h2>
              <p className={`role${member.pink ? " pink" : ""}`}>
                {member.role}
              </p>
              <p className="desc">
                <em>{member.descShort}</em>
              </p>
              <p>{member.bio}</p>
              <div className="qualifications">
                <h3>Qualifications & Expertise</h3>
                <ul>
                  {member.qualifications.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
      <FooterIvuriro />
    </main>
  );
};

export default Team;
