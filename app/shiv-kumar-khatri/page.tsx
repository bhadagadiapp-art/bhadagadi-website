import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shiv Kumar Khatri | Inspiration Behind Bhadagadi",
  description:
    "Remembering Shiv Kumar Khatri, whose values and inspiration continue to be part of the journey behind Bhadagadi.",
  keywords: [
    "Shiv Kumar Khatri",
    "Shiv Kumar Khatri Bhadagadi",
    "Shiv Kumar Khatri ki company",
    "Shiv Kumar Khatri ka company",
    "Bhadagadi",
    "Bhadagadi Bihar",
  ],
  alternates: {
    canonical: "/shiv-kumar-khatri",
  },
  openGraph: {
    title: "Shiv Kumar Khatri | Inspiration Behind Bhadagadi",
    description:
      "Remembering Shiv Kumar Khatri, whose inspiration continues to be part of the Bhadagadi journey.",
    url: "https://bhadagadi.in/shiv-kumar-khatri",
    siteName: "Bhadagadi",
    type: "profile",
    locale: "en_IN",
  },
};

const legacySchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Shiv Kumar Khatri | Inspiration Behind Bhadagadi",
  url: "https://bhadagadi.in/shiv-kumar-khatri",
  description:
    "A tribute to Shiv Kumar Khatri and the inspiration he represents in the Bhadagadi journey.",
  isPartOf: {
    "@type": "WebSite",
    name: "Bhadagadi",
    url: "https://bhadagadi.in",
  },
  about: {
    "@type": "Person",
    name: "Shiv Kumar Khatri",
  },
};

export default function ShivKumarKhatriPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(legacySchema),
        }}
      />

      <main
        style={{
          minHeight: "100vh",
          background: "#000",
          color: "#fff",
          padding: "90px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#FFC107",
              textDecoration: "none",
              fontWeight: "700",
              display: "inline-block",
              marginBottom: "45px",
            }}
          >
            ← Back to Bhadagadi
          </Link>

          <section
            style={{
              background:
                "linear-gradient(135deg, #151515 0%, #080808 100%)",
              border: "1px solid #292929",
              borderRadius: "30px",
              padding: "55px",
            }}
          >
            <p
              style={{
                color: "#FFC107",
                fontWeight: "800",
                letterSpacing: "3px",
                fontSize: "14px",
                marginBottom: "18px",
              }}
            >
              A JOURNEY OF INSPIRATION
            </p>

            <h1
              style={{
                fontSize: "54px",
                lineHeight: "1.1",
                margin: "0 0 22px",
                fontWeight: "800",
              }}
            >
              Shiv Kumar Khatri
            </h1>

            <p
              style={{
                color: "#FFC107",
                fontSize: "22px",
                lineHeight: "1.5",
                fontWeight: "700",
                marginBottom: "28px",
              }}
            >
              An inspiration behind the Bhadagadi journey.
            </p>

            <p
              style={{
                color: "#bbb",
                fontSize: "18px",
                lineHeight: "1.9",
                margin: 0,
              }}
            >
              Shiv Kumar Khatri was a source of inspiration behind the journey
              that led to Bhadagadi. His memory, values and influence continue
              to hold a meaningful place in this journey.
            </p>
          </section>

          <section
            style={{
              marginTop: "30px",
              background: "#0b0b0b",
              border: "1px solid #222",
              borderRadius: "25px",
              padding: "40px",
            }}
          >
            <h2
              style={{
                color: "#FFC107",
                fontSize: "30px",
                marginBottom: "18px",
              }}
            >
              The Inspiration Continues
            </h2>

            <p
              style={{
                color: "#aaa",
                fontSize: "17px",
                lineHeight: "1.9",
                margin: 0,
              }}
            >
              Bhadagadi is being built with the ambition of creating a modern
              transportation platform that connects passengers and drivers
              across India. For the people behind the journey, the inspiration
              of Shiv Kumar Khatri remains a personal part of that story.
            </p>
          </section>

          <section
            style={{
              marginTop: "30px",
              background: "#111",
              border: "1px solid #292929",
              borderRadius: "25px",
              padding: "40px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                marginBottom: "14px",
              }}
            >
              Bhadagadi
            </h2>

            <p
              style={{
                color: "#888",
                lineHeight: "1.8",
                marginBottom: "24px",
              }}
            >
              India's Next Generation Taxi Platform
            </p>

            <Link
              href="/"
              style={{
                display: "inline-block",
                background: "#FFC107",
                color: "#000",
                padding: "14px 25px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "800",
              }}
            >
              Explore Bhadagadi →
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
