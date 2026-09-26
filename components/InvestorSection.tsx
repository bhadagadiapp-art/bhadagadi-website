"use client";

import { motion } from "framer-motion";

export default function InvestorSection() {
  const cards = [
    {
      icon: "🚀",
      title: "Growing Opportunity",
      text: "Building a scalable mobility platform for emerging markets and growing communities.",
    },
    {
      icon: "📈",
      title: "Technology Driven",
      text: "Technology, data and digital tools are at the core of our transportation ecosystem.",
    },
    {
      icon: "🤝",
      title: "Local Impact",
      text: "Creating opportunities for drivers while improving mobility for passengers and communities.",
    },
  ];

  return (
    <section
      id="investors"
      style={{
        background: "#0b0b0b",
        color: "white",
        padding: "120px 8%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background: "#FFC107",
          filter: "blur(140px)",
          borderRadius: "50%",
          left: "-250px",
          top: "-200px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1150px",
          margin: "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: "center",
            marginBottom: "65px",
          }}
        >
          <p
            style={{
              color: "#FFC107",
              fontWeight: "700",
              letterSpacing: "3px",
              fontSize: "14px",
              marginBottom: "15px",
            }}
          >
            INVEST IN THE FUTURE
          </p>

          <h2
            style={{
              fontSize: "52px",
              lineHeight: "1.1",
              fontWeight: "800",
              margin: "0 0 22px",
            }}
          >
            Be Part of the
            <br />
            <span style={{ color: "#FFC107" }}>
              Bhadagadi Journey.
            </span>
          </h2>

          <p
            style={{
              color: "#999",
              fontSize: "18px",
              lineHeight: "1.8",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Bhadagadi is building a technology-driven transportation platform
            focused on connecting people, drivers and communities across India.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "22px",
            marginBottom: "55px",
          }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                borderColor: "#FFC107",
                boxShadow: "0 18px 45px rgba(255,193,7,0.12)",
              }}
              style={{
                background: "#111",
                border: "1px solid #242424",
                borderRadius: "22px",
                padding: "35px",
                transition:
                  "border-color 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                }}
                transition={{ duration: 0.25 }}
                style={{
                  color: "#FFC107",
                  fontSize: "34px",
                  marginBottom: "20px",
                  display: "inline-block",
                }}
              >
                {card.icon}
              </motion.div>

              <h3
                style={{
                  fontSize: "23px",
                  marginBottom: "12px",
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  color: "#888",
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          whileHover={{
            borderColor: "#444",
            boxShadow: "0 15px 45px rgba(0,0,0,0.35)",
          }}
          className="investor-cta"
          style={{
            background:
              "linear-gradient(135deg, #151515 0%, #0d0d0d 100%)",
            border: "1px solid #2a2a2a",
            borderRadius: "25px",
            padding: "45px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "30px",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "30px",
                margin: "0 0 10px",
              }}
            >
              Interested in partnering with Bhadagadi?
            </h3>

            <p
              style={{
                color: "#888",
                margin: 0,
                lineHeight: "1.6",
              }}
            >
              Connect with our team to learn more about the business and
              partnership opportunities.
            </p>
          </div>

          {/* Contact Button */}
          <motion.button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 35px rgba(255,193,7,0.3)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            style={{
              flexShrink: 0,
              background: "#FFC107",
              color: "#000",
              border: "none",
              padding: "16px 30px",
              borderRadius: "10px",
              fontSize: "15px",
              fontWeight: "800",
              cursor: "pointer",
            }}
          >
            Contact Our Team →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}