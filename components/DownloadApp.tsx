"use client";

import { motion } from "framer-motion";

export default function DownloadApp() {
  return (
    <section
      style={{
        background: "#0b0b0b",
        color: "white",
        padding: "110px 8%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gold Glow */}
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "450px",
          height: "450px",
          background: "#FFC107",
          filter: "blur(130px)",
          borderRadius: "50%",
          left: "-180px",
          top: "-150px",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          maxWidth: "1050px",
          margin: "auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
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
          EXPERIENCE BHADAGADI
        </motion.p>

        <h2
          style={{
            fontSize: "52px",
            lineHeight: "1.1",
            fontWeight: "800",
            margin: "0 0 25px",
          }}
        >
          India's Ride.
          <br />
          <span style={{ color: "#FFC107" }}>
            Right at Your Fingertips.
          </span>
        </h2>

        <p
          style={{
            color: "#999",
            fontSize: "18px",
            lineHeight: "1.8",
            maxWidth: "700px",
            margin: "0 auto 38px",
          }}
        >
          Download the Bhadagadi app and experience a smarter, safer and more
          convenient way to travel.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          {/* Download App Button */}
          <motion.button
            onClick={() => {
              // Play Store link will be added here once the app is live.
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
            }}
          >
            Download Bhadagadi App →
          </motion.button>

          {/* Become Driver Button */}
          <motion.button
            onClick={() => {
              document
                .getElementById("drivers")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{
              scale: 1.05,
              background: "#fff",
              color: "#000",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            style={{
              background: "transparent",
              color: "#fff",
              border: "1px solid #444",
              padding: "16px 32px",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Become a Driver →
          </motion.button>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{
            marginTop: "55px",
            display: "flex",
            justifyContent: "center",
            gap: "45px",
            flexWrap: "wrap",
            color: "#777",
            fontSize: "14px",
          }}
        >
          {[
            "✓ Easy Booking",
            "✓ Live Tracking",
            "✓ Trusted Drivers",
            "✓ Transparent Pricing",
          ].map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.3 + index * 0.08,
              }}
              whileHover={{
                color: "#FFC107",
                y: -3,
              }}
              style={{
                cursor: "default",
                transition: "color 0.2s ease",
              }}
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}