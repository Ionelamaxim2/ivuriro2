import React, { useState } from "react";
import Dither from "../components/Dither";
import "./Contact.css";
import FooterIvuriro from "../components/FooterIvuriro";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const allowedEmailDomains = [
  "@gmail.com",
  "@yahoo.com",
  "@hotmail.com",
  "@icloud.com",
  "@protonmail.com",
  "@outlook.com",
];

function countWords(str) {
  return str.trim().split(/\s+/).filter(Boolean).length;
}

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Validare
  const validateForm = () => {
    if (countWords(form.name) > 5) return "Name too long (max 5 words)";
    if (!allowedEmailDomains.some((domain) => form.email.endsWith(domain)))
      return "Enter a correct email";
    if (form.email.includes(" ")) return "Email should not contain spaces.";
    if (countWords(form.phone) > 3) return "Phone too long (max 3 words)";
    if (countWords(form.message) > 60) return "Message too long (max 60 words)";
    return "";
  };

  // Handlers
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const validationMsg = validateForm();
    if (validationMsg) {
      setError(validationMsg);
      return;
    }

    setLoading(true);

    try {
      await new Promise((res) => setTimeout(res, 1000));
      setSuccess(true);
      setForm(initialState);

      // Cardul de succes dispare după 5 secunde
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError("There was an error sending your message. Please try again!");
    }
    setLoading(false);
  };

  return (
    <main>
      {/* Dither pe titlu/subtitlu */}
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
            enableMouseInteraction={true}
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
            Contact
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
            We’re here to assist you with any inquiries or appointments
          </p>
        </section>
      </div>

      <section className="contact-container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-info-box">
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <h4>Address:</h4>
                <p>
                  Strada Eleganței 10,
                  <br />
                  București, Romania
                </p>
              </div>
            </div>
            <div className="contact-info-box">
              <i className="fa-solid fa-envelope"></i>
              <div>
                <h4>Email:</h4>
                <p>contact@ivuriro.com</p>
              </div>
            </div>
            <div className="contact-info-box">
              <i className="fa-solid fa-phone"></i>
              <div>
                <h4>Phone:</h4>
                <p>+40 723 456 789</p>
              </div>
            </div>
            <div className="contact-info-box">
              <i className="fa-solid fa-clock"></i>
              <div>
                <h4>Working Hours:</h4>
                <p>
                  Monday – Friday: 09:00 – 21:00
                  <br />
                  Saturday: 10:00 – 18:00
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* FORMULAR */}
          <form
            className="contact-form"
            id="contactForm"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              maxLength={45}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              maxLength={50}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              maxLength={25}
            />
            <textarea
              name="message"
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              required
              maxLength={600}
            ></textarea>

            <div className="form-button-wrapper" style={{ minHeight: "60px" }}>
              {success ? (
                <div
                  className="success-msg-card"
                  style={{
                    width: "100%",
                    minHeight: "60px",
                    background: "#fff",
                    borderRadius: "18px",
                    boxShadow: "0 6px 36px 0 #e9dcc0a8",
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                    padding: "14px 32px",
                    justifyContent: "flex-start",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      background: "#e2f4dc",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "14px",
                    }}
                  ></div>
                  <div>
                    <div
                      style={{
                        fontWeight: "bold",
                        fontSize: "1.08rem",
                        color: "#24a03c",
                        marginBottom: "0.17em",
                      }}
                    >
                      Message sent!
                    </div>
                    <div
                      style={{
                        color: "#444",
                        fontSize: "1.02rem",
                        fontWeight: 500,
                      }}
                    >
                      Thank you for reaching out.
                    </div>
                  </div>
                </div>
              ) : (
                <button type="submit" id="sendBtn" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              )}

              {error && (
                <div
                  style={{
                    width: "100%",
                    minHeight: "60px",
                    background: "#fff",
                    borderRadius: "18px",
                    boxShadow: "0 6px 36px 0 #e9dcc0a8",
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                    padding: "14px 32px",
                    justifyContent: "flex-start",
                    position: "relative",
                    color: "#c43c3c",
                    marginTop: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      background: "#fde5e3",
                      marginRight: "14px",
                    }}
                  ></div>
                  <div>
                    <div style={{ fontWeight: "bold", fontSize: "1.04rem" }}>
                      {error}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* restul secțiunilor: hartă, call-box etc. */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.3258!2d26.0963!3d44.4268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff5fcbf398e3%3A0x8c607ae531a364a7!2sBulevardul%20Unirii%2C%20Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1625316510000!5m2!1sen!2sro"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="IVURIRO Location"
          ></iframe>
        </div>

        <div className="call-box">
          <p>
            <strong>Prefer to call us?</strong> Call us directly for quick
            appointments:
          </p>
          <strong>+40 723 456 789</strong>
        </div>
      </section>
      <FooterIvuriro />
    </main>
  );
};

export default Contact;
