"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Bhadagadi?",
    answer:
      "Bhadagadi is a next-generation taxi platform designed to connect passengers and driver partners through a simple and technology-driven ride experience.",
  },
  {
    question: "Where is Bhadagadi available?",
    answer:
      "Bhadagadi is being built with a strong focus on connecting cities, towns and villages across all the state in India. Availability will depend on the areas where the service has been launched.",
  },
  {
    question: "How can I book a ride?",
    answer:
      "Passengers can use the Bhadagadi mobile app to enter their pickup and destination locations, select a suitable vehicle and request a ride.",
  },
  {
    question: "How can I become a Bhadagadi driver partner?",
    answer:
      "Drivers can register with Bhadagadi and provide the required vehicle and personal details. After the verification process, eligible driver partners can start accepting rides.",
  },
  {
    question: "Can I book an outstation ride in advance?",
    answer:
      "Yes. Bhadagadi is designed to support advance outstation bookings so passengers can plan and lock their rides ahead of time.",
  },
  {
    question: "How can I contact the Bhadagadi team?",
    answer:
      "You can contact the Bhadagadi team through the contact section on this website for general enquiries, partnerships, driver-related questions and business opportunities.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      style={{
        background: "#0b0b0b",
        color: "white",
        padding: "110px 8%",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "55px",
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
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2
            style={{
              fontSize: "50px",
              lineHeight: "1.1",
              fontWeight: "800",
              margin: "0 0 20px",
            }}
          >
            Everything You
            <br />
            <span style={{ color: "#FFC107" }}>Need to Know.</span>
          </h2>

          <p
            style={{
              color: "#888",
              fontSize: "17px",
              lineHeight: "1.7",
              maxWidth: "650px",
              margin: "0 auto",
            }}
          >
            Find quick answers about rides, driver partnerships and the
            Bhadagadi platform.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "14px",
          }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                style={{
                  background: "#111",
                  border: isOpen
                    ? "1px solid #FFC107"
                    : "1px solid #242424",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  style={{
                    width: "100%",
                    background: "transparent",
                    color: "#fff",
                    border: "none",
                    padding: "23px 25px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "left",
                    cursor: "pointer",
                    fontSize: "17px",
                    fontWeight: "700",
                  }}
                >
                  <span>{faq.question}</span>

                  <span
                    style={{
                      color: "#FFC107",
                      fontSize: "25px",
                      marginLeft: "20px",
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 25px 24px",
                      color: "#999",
                      lineHeight: "1.8",
                      fontSize: "15px",
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}