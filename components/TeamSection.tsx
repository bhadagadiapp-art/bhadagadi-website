"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const leadership = [
  
  
  {
    name: "Vivek Anand",
    role: "Founder",
    image: "/team/Vivek.PNG",
    description:
      "A key founding member helping shape the vision, direction and growth of Bhadagadi.",
  },
  {
    name: "Gulshan Malhotra",
    role: "Founder",
    image: "/team/gulshan.PNG",
    description:
      "A key founding leader contributing to Bhadagadi's strategy, operations and long-term growth.",
  },
  {
    name: "Siddhant Khanna",
    role: "State Head",
    image: "/team/Siddhant.PNG",
    description:
      "Responsible for supporting state-level operations, coordination and expansion initiatives.",
  },
  {
    name: "Shezar Khatri",
    role: "Managing Director",
    image: "/team/shezar.PNG",
    description:
      "Leading Bhadagadi's overall direction, strategy, innovation and long-term growth as Managing Director.",
  },
  {
    name: "Rajdev Kumar",
    role: "Strategic Partner",
    image: "/team/rajdev.PNG",
    description:
      "Investor & Business Growth Advisor helping support strategic growth, partnerships and long-term business development at Bhadagadi.",
  },
];

const team = [
  {
    name: "Divya Anand",
    role: "Emergency Response & SOS Support Manager",
    image: "/team/divya.PNG",
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
    name: "Ajit Kumar Keshari",
    role: "Product Manager",
    image: "/team/ajit.PNG",
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
    name: "Shivam Roy",
    role: "Product & Operation Lead",
    image: "/team/shivam.PNG",
  },

  {
    name: "Adi Shree",
    role: "Operation & Field Testing Lead",
    image: "/team/adi.PNG",
  },
  
];

const regional = [
  {
    name: "Lokesh Anand",
    role: "Jehanabad Head",
    location: "JEHANABAD",
    image: "/team/lokesh.PNG",
  },
  {
    name: "Kumar Aditya",
    role: "Jharkhand Head",
    location: "JHARKHAND",
    image: "/team/aditya.PNG",
  },
  {
    name: "Amit Sahani",
    role: "Gaya Head",
    location: "GAYA",
    image: "/team/amit.PNG",
  },

  {
    name: "Ravi Kumar",
    role: "Patna Sahib Head",
    location: "Patna Sahib",
    image: "/team/ravi.PNG",
  },
];

export default function TeamSection() {
  const [activeView, setActiveView] = useState<
    "leadership" | "team" | "regional"
  >("leadership");

  const activeMembers =
    activeView === "leadership"
      ? leadership
      : activeView === "team"
      ? team
      : regional;

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
      {/* =========================
          BACKGROUND GOLD GLOW
      ========================= */}
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

      {/* =========================
          MAIN HEADING
      ========================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <h4
          style={{
            color: "#FFC107",
            letterSpacing: "3px",
            marginBottom: "15px",
            fontSize: "14px",
            fontWeight: "700",
          }}
        >
          PEOPLE • PASSION • PROGRESS
        </h4>

        <h2
          style={{
            fontSize: "52px",
            fontWeight: "800",
            margin: "0 0 18px",
          }}
        >
          Meet <span style={{ color: "#FFC107" }}>Bhadagadi</span>
        </h2>

        <p
          style={{
            color: "#aaa",
            fontSize: "18px",
            maxWidth: "700px",
            margin: "0 auto 55px",
            lineHeight: "1.7",
          }}
        >
          Meet the people behind Bhadagadi — the leadership and
          team working together to build India's next generation
          taxi platform.
        </p>
      </motion.div>

      {/* =========================
          THREE MAIN OPTIONS
      ========================= */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(3, minmax(250px, 1fr))",
          gap: "24px",
          maxWidth: "1200px",
          margin: "0 auto 55px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* =========================
            LEADERSHIP CARD
        ========================= */}
        <motion.button
          type="button"
          onClick={() => setActiveView("leadership")}
          whileHover={{
            y: -8,
            scale: 1.01,
          }}
          whileTap={{
            scale: 0.98,
          }}
          style={{
            textAlign: "left",
            cursor: "pointer",
            padding: "32px",
            minHeight: "190px",
            borderRadius: "24px",
            border:
              activeView === "leadership"
                ? "2px solid #FFC107"
                : "1px solid #333",
            background:
              activeView === "leadership"
                ? "linear-gradient(135deg, #1b1605, #0c0c0c)"
                : "linear-gradient(135deg, #111, #090909)",
            color: "#fff",
            boxShadow:
              activeView === "leadership"
                ? "0 20px 55px rgba(255,193,7,0.18)"
                : "0 10px 35px rgba(0,0,0,0.35)",
            transition: "all 0.3s ease",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,193,7,0.12)",
              border: "1px solid rgba(255,193,7,0.45)",
              color: "#FFC107",
              fontSize: "25px",
              marginBottom: "20px",
            }}
          >
            👔
          </div>

          <h3
            style={{
              color: "#FFC107",
              fontSize: "27px",
              margin: "0 0 10px",
              fontWeight: "800",
            }}
          >
            Leadership & Company
          </h3>

          <p
            style={{
              color: "#aaa",
              fontSize: "15px",
              lineHeight: "1.6",
              margin: 0,
              maxWidth: "470px",
            }}
          >
            Meet the founders and key leadership responsible for
            shaping the vision, direction and growth of Bhadagadi.
          </p>

          <div
            style={{
              color: "#FFC107",
              marginTop: "20px",
              fontWeight: "700",
              fontSize: "14px",
              letterSpacing: "0.3px",
            }}
          >
            Explore Leadership →
          </div>
        </motion.button>

        {/* =========================
            TEAM CARD
        ========================= */}
        <motion.button
          type="button"
          onClick={() => setActiveView("team")}
          whileHover={{
            y: -8,
            scale: 1.01,
          }}
          whileTap={{
            scale: 0.98,
          }}
          style={{
            textAlign: "left",
            cursor: "pointer",
            padding: "32px",
            minHeight: "190px",
            borderRadius: "24px",
            border:
              activeView === "team"
                ? "2px solid #FFC107"
                : "1px solid #333",
            background:
              activeView === "team"
                ? "linear-gradient(135deg, #1b1605, #0c0c0c)"
                : "linear-gradient(135deg, #111, #090909)",
            color: "#fff",
            boxShadow:
              activeView === "team"
                ? "0 20px 55px rgba(255,193,7,0.18)"
                : "0 10px 35px rgba(0,0,0,0.35)",
            transition: "all 0.3s ease",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,193,7,0.12)",
              border: "1px solid rgba(255,193,7,0.45)",
              color: "#FFC107",
              fontSize: "25px",
              marginBottom: "20px",
            }}
          >
            👥
          </div>

          <h3
            style={{
              color: "#FFC107",
              fontSize: "27px",
              margin: "0 0 10px",
              fontWeight: "800",
            }}
          >
            Meet the Team
          </h3>

          <p
            style={{
              color: "#aaa",
              fontSize: "15px",
              lineHeight: "1.6",
              margin: 0,
              maxWidth: "470px",
            }}
          >
            Meet the people working across operations, safety,
            customer relations, training and product.
          </p>

          <div
            style={{
              color: "#FFC107",
              marginTop: "20px",
              fontWeight: "700",
              fontSize: "14px",
              letterSpacing: "0.3px",
            }}
          >
            Meet Our Team →
          </div>
        </motion.button>

        {/* =========================
            REGIONAL CARD
        ========================= */}
        <motion.button
          type="button"
          onClick={() => setActiveView("regional")}
          whileHover={{
            y: -8,
            scale: 1.01,
          }}
          whileTap={{
            scale: 0.98,
          }}
          style={{
            textAlign: "left",
            cursor: "pointer",
            padding: "32px",
            minHeight: "190px",
            borderRadius: "24px",
            border:
              activeView === "regional"
                ? "2px solid #FFC107"
                : "1px solid #333",
            background:
              activeView === "regional"
                ? "linear-gradient(135deg, #1b1605, #0c0c0c)"
                : "linear-gradient(135deg, #111, #090909)",
            color: "#fff",
            boxShadow:
              activeView === "regional"
                ? "0 20px 55px rgba(255,193,7,0.18)"
                : "0 10px 35px rgba(0,0,0,0.35)",
            transition: "all 0.3s ease",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,193,7,0.12)",
              border: "1px solid rgba(255,193,7,0.45)",
              color: "#FFC107",
              fontSize: "25px",
              marginBottom: "20px",
            }}
          >
            🏢
          </div>

          <h3
            style={{
              color: "#FFC107",
              fontSize: "27px",
              margin: "0 0 10px",
              fontWeight: "800",
            }}
          >
            Regional & Office Leadership
          </h3>

          <p
            style={{
              color: "#aaa",
              fontSize: "15px",
              lineHeight: "1.6",
              margin: 0,
              maxWidth: "470px",
            }}
          >
            Meet the people managing Bhadagadi operations,
            offices and regional presence across different
            locations.
          </p>

          <div
            style={{
              color: "#FFC107",
              marginTop: "20px",
              fontWeight: "700",
              fontSize: "14px",
              letterSpacing: "0.3px",
            }}
          >
            Explore Regional Leadership →
          </div>
        </motion.button>
      </motion.div>

      {/* =========================
          ACTIVE SECTION HEADING
      ========================= */}
      <motion.div
        key={activeView}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.45,
        }}
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          marginBottom: "35px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 18px",
            borderRadius: "999px",
            border: "1px solid rgba(255,193,7,0.35)",
            background: "rgba(255,193,7,0.07)",
            color: "#FFC107",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "15px",
          }}
        >
          {activeView === "leadership"
            ? "Leadership"
            : activeView === "team"
            ? "Our People"
            : "Regional Leadership"}
        </div>

        <h3
          style={{
            fontSize: "38px",
            fontWeight: "800",
            margin: 0,
          }}
        >
          {activeView === "leadership"
            ? "Leadership & Company"
            : activeView === "team"
            ? "Meet the Team"
            : "Regional & Office Leadership"}
        </h3>

        <p
          style={{
            color: "#999",
            marginTop: "10px",
            fontSize: "16px",
          }}
        >
          {activeView === "leadership"
            ? "The people shaping the vision and direction of Bhadagadi."
            : activeView === "team"
            ? "The people working every day to build Bhadagadi."
            : "The people managing Bhadagadi operations across different regions and offices."}
        </p>
      </motion.div>

      {/* =========================
          PROFILE GRID
      ========================= */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeView}
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.5,
          }}
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3, minmax(260px, 1fr))",
            gap: "35px",
            position: "relative",
            zIndex: 1,
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {activeMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
                boxShadow:
                  "0 20px 50px rgba(255,193,7,0.25)",
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
              {/* =========================
                  REGIONAL LOCATION BADGE
              ========================= */}
              {activeView === "regional" && (
                <div
                  style={{
                    padding: "18px 20px 0",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      padding: "7px 14px",
                      borderRadius: "999px",
                      background: "rgba(255,193,7,0.10)",
                      border:
                        "1px solid rgba(255,193,7,0.35)",
                      color: "#FFC107",
                      fontSize: "12px",
                      fontWeight: "800",
                      letterSpacing: "1.5px",
                    }}
                  >
                    🏢 {activeView === "regional" ? (member as (typeof regional)[number]).location : ""}
                  </span>
                </div>
              )}

              {/* =========================
                  PHOTO
              ========================= */}
              <div
                style={{
                  overflow: "hidden",
                  position: "relative",
                  marginTop:
                    activeView === "regional"
                      ? "15px"
                      : "0",
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.08,
                  }}
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
                      height: "360px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </motion.div>

                {/* Gold Hover Overlay */}
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: 0.12,
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "#FFC107",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* =========================
                  PROFILE DETAILS
              ========================= */}
              <div
                style={{
                  padding: "25px",
                }}
              >
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
                    fontWeight: "600",
                  }}
                >
                  {member.role}
                </p>

                {"description" in member && (
                  <p
                    style={{
                      color: "#aaa",
                      fontSize: "14px",
                      lineHeight: "1.7",
                      marginTop: "14px",
                    }}
                  >
                    {activeView === "leadership"
  ? (member as (typeof leadership)[number]).description
  : ""}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}