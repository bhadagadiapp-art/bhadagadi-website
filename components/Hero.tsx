"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 8%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Gold Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{
          duration: 6,
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
          right: "-180px",
          top: "10%",
          pointerEvents: "none",
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.04, 0.09, 0.04],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "#FFC107",
          filter: "blur(130px)",
          left: "-180px",
          bottom: "5%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
          maxWidth: "1300px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            style={{
              color: "#FFC107",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            INDIA'S NEXT GENERATION TAXI PLATFORM
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: "easeOut",
            }}
            style={{
              fontSize: "68px",
              lineHeight: "1.1",
              margin: "20px 0",
              fontWeight: "800",
            }}
          >
            Ride Smarter
            <br />
            Drive Better
            <br />
            Earn More.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            style={{
              color: "#bbb",
              fontSize: "18px",
              lineHeight: "30px",
            }}
          >
            Bhadagadi connects passengers and drivers with a modern,
            affordable and premium ride experience across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.55,
            }}
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "20px",
            }}
          >
            {/* Download Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 35px rgba(255,193,7,0.35)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              style={{
                background: "#FFC107",
                color: "#000",
                padding: "15px 30px",
                borderRadius: "10px",
                border: "none",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Download App
            </motion.button>

            {/* Driver Button */}
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
                padding: "15px 30px",
                borderRadius: "10px",
                border: "2px solid white",
                cursor: "pointer",
              }}
            >
              Become Driver
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
          }}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* Floating Phone */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 0.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "relative",
              width: "320px",
              height: "620px",
              borderRadius: "40px",
              border: "8px solid #FFC107",
              overflow: "hidden",
              boxShadow: "0 0 40px rgba(255,193,7,0.4)",
            }}
          >
            <Image
              src="/images/Apps.png"
              alt="Bhadagadi App"
              width={300}
              height={560}
              priority
              style={{
                width: "300px",
                height: "590px",
                objectFit: "cover",
                borderRadius: "52px",
                boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}