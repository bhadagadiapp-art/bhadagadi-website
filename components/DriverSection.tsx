"use client";

import { motion } from "framer-motion";

export default function DriverSection() {
  const cards = [
    {
      icon: "💰",
      title: "Better Earnings",
      text: "More ride opportunities and transparent earning.",
    },
    {
      icon: "📍",
      title: "Live Ride Tracking",
      text: "Track rides and trips directly through the app.",
    },
    {
      icon: "🛡️",
      title: "Safety Support",
      text: "Dedicated support for safer and smoother operations.",
    },
    {
      icon: "📱",
      title: "Easy Technology",
      text: "Manage rides, trips and earnings from your phone.",
    },
  ];

  return (
    <section
      id="drivers"
      style={{
        background: "#050505",
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
          opacity: [0.05, 0.1, 0.05],
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
          filter: "blur(120px)",
          borderRadius: "50%",
          right: "-150px",
          top: "-100px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              color: "#FFC107",
              fontWeight: "700",
              letterSpacing: "3px",
              fontSize: "14px",
              marginBottom: "18px",
            }}
          >
            DRIVE WITH BHADAGADI
          </motion.p>

          <h2
            style={{
              fontSize: "52px",
              lineHeight: "1.1",
              fontWeight: "800",
              margin: "0 0 25px",
            }}
          >
            Your Vehicle.
            <br />
            <span style={{ color: "#FFC107" }}>Your Earnings.</span>
          </h2>

          <p
            style={{
              color: "#aaa",
              fontSize: "18px",
              lineHeight: "1.8",
              maxWidth: "550px",
              marginBottom: "35px",
            }}
          >
            Turn your vehicle into a reliable source of income with Bhadagadi.
            Get access to customers, transparent rides and technology designed
            to help driver partners grow.
          </p>

          {/* Become Driver Partner */}
          <motion.button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 40px rgba(255,193,7,0.3)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            style={{
              background: "#FFC107",
              color: "#000",
              border: "none",
              padding: "16px 32px",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "800",
              cursor: "pointer",
              boxShadow: "0 10px 35px rgba(255,193,7,0.18)",
            }}
          >
            Become a Driver Partner →
          </motion.button>
        </motion.div>

        {/* RIGHT */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "18px",
          }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
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
                border: "1px solid #222",
                borderRadius: "22px",
                padding: "35px 25px",
                transition:
                  "border-color 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ duration: 0.25 }}
                style={{
                  fontSize: "38px",
                  marginBottom: "18px",
                  display: "inline-block",
                }}
              >
                {card.icon}
              </motion.div>

              <h3
                style={{
                  fontSize: "22px",
                  marginBottom: "10px",
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
      </div>
    </section>
  );
}