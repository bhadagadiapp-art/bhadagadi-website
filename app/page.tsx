import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import DriverSection from "../components/DriverSection";
import InvestorSection from "../components/InvestorSection";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";
import DownloadApp from "../components/DownloadApp";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HOME */}
      <section id="home" style={{ scrollMarginTop: "90px" }}>
        <Hero />
      </section>

      {/* FEATURES */}
      <section id="features" style={{ scrollMarginTop: "90px" }}>
        <Features />
      </section>

      {/* DRIVERS */}
      <section id="drivers" style={{ scrollMarginTop: "90px" }}>
        <DriverSection />
      </section>

      {/* INVESTORS */}
      <section id="investors" style={{ scrollMarginTop: "90px" }}>
        <InvestorSection />
      </section>

      {/* DOWNLOAD APP */}
      <DownloadApp />

      {/* CONTACT */}
      <section id="contact" style={{ scrollMarginTop: "90px" }}>
        <ContactSection />
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* TEAM */}
      <TeamSection />

      <Footer />
    </>
  );
}