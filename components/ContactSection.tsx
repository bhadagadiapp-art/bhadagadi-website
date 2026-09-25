"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = 'Bhadagadi Website Enquiry from ${name}';

    const body = `Hello Bhadagadi Team,

Name: ${name}
Email: ${email}

Message:
${message}

Regards,
${name}`;

    const mailtoLink = `mailto:bhadagadiapp@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      style={{
        background: "#050505",
        color: "white",
        padding: "110px 8%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.03, 0.07, 0.03],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "#FFC107",
          filter: "blur(140px)",
          borderRadius: "50%",
          right: "-220px",
          top: "-180px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "70px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -55 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p
            style={{
              color: "#FFC107",
              fontWeight: "700",
              letterSpacing: "3px",
              fontSize: "14px",
              marginBottom: "18px",
            }}
          >
            GET IN TOUCH
          </p>

          <h2
            style={{
              fontSize: "50px",
              lineHeight: "1.1",
              fontWeight: "800",
              margin: "0 0 25px",
            }}
          >
            Let's Build the
            <br />
            <span style={{ color: "#FFC107" }}>
              Future Together.
            </span>
          </h2>

          <p
            style={{
              color: "#999",
              fontSize: "17px",
              lineHeight: "1.8",
              maxWidth: "500px",
            }}
          >
            Have a question, partnership idea, driver enquiry or business
            opportunity? Connect with the Bhadagadi team.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{ marginTop: "35px" }}
          >
            <p style={{ color: "#aaa", marginBottom: "12px" }}>
              <strong style={{ color: "#fff" }}>Email:</strong>{" "}
              bhadagadiapp@gmail.com
            </p>

            <p style={{ color: "#aaa", margin: 0 }}>
              <strong style={{ color: "#fff" }}>Platform:</strong>{" "}
              India's Next Generation Taxi Platform
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 55 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{
            borderColor: "#333",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
          }}
          style={{
            background: "#111",
            border: "1px solid #252525",
            borderRadius: "24px",
            padding: "40px",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <h3
            style={{
              fontSize: "28px",
              marginBottom: "25px",
            }}
          >
            Contact Bhadagadi
          </h3>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "grid",
              gap: "16px",
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: "100%",
                boxSizing: "border-box",
                background: "#080808",
                border: "1px solid #333",
                color: "#fff",
                padding: "15px",
                borderRadius: "9px",
                outline: "none",
                fontSize: "15px",
              }}
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                boxSizing: "border-box",
                background: "#080808",
                border: "1px solid #333",
                color: "#fff",
                padding: "15px",
                borderRadius: "9px",
                outline: "none",
                fontSize: "15px",
              }}
            />

            <textarea
              placeholder="Tell us how we can help..."
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              style={{
                width: "100%",
                boxSizing: "border-box",
                background: "#080808",
                border: "1px solid #333",
                color: "#fff",
                padding: "15px",
                borderRadius: "9px",
                outline: "none",
                fontSize: "15px",
                resize: "vertical",
              }}
            />

            <motion.button
              type="submit"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 12px 35px rgba(255,193,7,0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              style={{
                background: "#FFC107",
                color: "#000",
                border: "none",
                padding: "16px",
                borderRadius: "9px",
                fontSize: "15px",
                fontWeight: "800",
                cursor: "pointer",
              }}
            >
              Send Message →
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}