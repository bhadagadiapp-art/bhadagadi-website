"use client";

import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Instant Booking",
      description:
        "Get a ride within seconds anywhere across India.",
    },
    {
      icon: "🛡️",
      title: "Safe Rides",
      description:
        "Verified drivers with live tracking and secure trips.",
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description:
        "Premium rides at prices designed for every passenger.",
    },
  ];

  return (
    <section
      id="features"
      style={{
        background: "#0b0b0b",
        color: "white",
        padding: "120px 8%",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background glow */}
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
          borderRadius: "50%",
          background: "#FFC107",
          filter: "blur(150px)",
          left: "50%",
          top: "20%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            color: "#FFC107",
            fontWeight: "bold",
            letterSpacing: "3px",
            marginBottom: "15px",
          }}
        >
          WHY BHADAGADI
        </p>

        <h2
          style={{
            fontSize: "52px",
            fontWeight: "800",
            marginBottom: "70px",
          }}
        >
          Why Choose Bhadagadi?
        </h2>
      </motion.div>

      {/* Feature Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "35px",
          maxWidth: "1200px",
          margin: "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            whileHover={{
              y: -12,
              scale: 1.02,
              borderColor: "#FFC107",
              boxShadow: "0 20px 55px rgba(255,193,7,0.14)",
            }}
            style={{
              background: "#111",
              border: "1px solid #222",
              borderRadius: "25px",
              padding: "45px",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              cursor: "default",
            }}
          >
            {/* Icon */}
            <motion.div
              whileHover={{
                scale: 1.15,
                rotate: [0, -5, 5, 0],
              }}
              transition={{ duration: 0.35 }}
              style={{
                fontSize: "55px",
                display: "inline-block",
              }}
            >
              {feature.icon}
            </motion.div>

            <h3
              style={{
                marginTop: "20px",
                fontSize: "28px",
              }}
            >
              {feature.title}
            </h3>

            <p
              style={{
                color: "#999",
                lineHeight: "28px",
              }}
            >
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}