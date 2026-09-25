"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  {
    name: "Gulshan Malhotra",
    role: "Founder & Chief Executive Officer",
    image: "/team/gulshan.PNG",
  },
  {
    name: "Suriyansh Kumar",
    role: "Chief Business Operations Manager",
    image: "/team/suriyansh.PNG",
  },
  {
    name: "Pawan Kumar",
    role: "Head of Safety & Emergency Response",
    image: "/team/pawan.PNG",
  },
  {
    name: "Gaurav Kumar Pal",
    role: "Customer Relations & Complaint Resolution Manager",
    image: "/team/gaurav.PNG",
  },
  {
    name: "Suraj Raj",
    role: "Training & Inventory Operations Manager",
    image: "/team/suraj.PNG",
  },
  {
    name: "Saurav Raj",
    role: "Training & Learning Development Manager",
    image: "/team/saurav.PNG",
  },
  {
    name: "Ajit Kumar Keshari",
    role: "Product Manager",
    image: "/team/ajit.PNG",
  },
  {
    name: "Vivek Anand-x",
    role: "Owner",
    image: "/team/vivek.PNG",
  },
];

export default function TeamSection() {
  return (
    <section
      style={{
        background: "#000",
        color: "#fff",
        padding: "100px 8%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.07, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "550px",
          height: "550px",
          background: "#FFC107",
          filter: "blur(150px)",
          borderRadius: "50%",
          left: "50%",
          top: "5%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <h4
          style={{
            color: "#FFC107",
            textAlign: "center",
            letterSpacing: "2px",
            marginBottom: "15px",
          }}
        >
          OUR LEADERSHIP
        </h4>

        <h2
          style={{
            fontSize: "52px",
            textAlign: "center",
            fontWeight: "800",
            marginBottom: "70px",
          }}
        >
          Meet The Team
        </h2>
      </motion.div>

      {/* Team Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "35px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            whileHover={{
              y: -12,
              scale: 1.02,
              boxShadow: "0 20px 50px rgba(255,193,7,0.25)",
            }}
            style={{
              background: "#111",
              border: "1px solid #FFC107",
              borderRadius: "20px",
              overflow: "hidden",
              textAlign: "center",
              transition: "box-shadow 0.3s ease",
            }}
          >
            {/* Photo */}
            <div
              style={{
                overflow: "hidden",
                position: "relative",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={500}
                  style={{
                    width: "100%",
                    height: "340px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </motion.div>

              {/* Gold overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.12 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "#FFC107",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Details */}
            <div style={{ padding: "25px" }}>
              <h3
                style={{
                  fontSize: "26px",
                  marginBottom: "10px",
                }}
              >
                {member.name}
              </h3>

              <p
                style={{
                  color: "#FFC107",
                  fontSize: "16px",
                  lineHeight: "28px",
                  margin: 0,
                }}
              >
                {member.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}