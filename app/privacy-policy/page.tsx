export default function PrivacyPolicy() {
  return (
    <main
      style={{
        background: "#0b0b0b",
        color: "#ffffff",
        minHeight: "100vh",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            color: "#FFC107",
            fontSize: "42px",
            marginBottom: "12px",
          }}
        >
          Privacy Policy
        </h1>

        <p
          style={{
            color: "#aaa",
            marginBottom: "45px",
          }}
        >
          Last Updated: September 26, 2026
        </p>

        <Section title="1. Introduction">
          Bhadagadi ("we", "our", or "us") respects your privacy and is
          committed to protecting your personal information. This Privacy
          Policy explains how Bhadagadi collects, uses, stores, and protects
          information when you use our website, mobile applications, and
          related services.
        </Section>

        <Section title="2. Information We Collect">
          We may collect information that you provide directly to us, such as
          your name, mobile number, email address, pickup and drop locations,
          account information, and other information required to provide our
          services.
          <br />
          <br />
          We may also collect technical information such as device
          information, IP address, browser type, operating system, and
          information about how you interact with our website or applications.
        </Section>

        <Section title="3. How We Use Your Information">
          We may use collected information to:
          <ul>
            <li>Provide and manage Bhadagadi services.</li>
            <li>Process ride bookings and requests.</li>
            <li>Communicate with users and drivers.</li>
            <li>Improve our website, applications, and services.</li>
            <li>Maintain safety and security.</li>
            <li>Respond to customer support requests.</li>
            <li>Comply with applicable legal requirements.</li>
          </ul>
        </Section>

        <Section title="4. Location Information">
          Bhadagadi may request access to location information when required
          for ride booking, navigation, driver matching, pickup, drop-off,
          safety, or other transportation-related features.
        </Section>

        <Section title="5. Sharing of Information">
          We may share relevant information with drivers, service providers,
          technology providers, payment providers, and other partners when
          necessary to provide our services.
          <br />
          <br />
          We may also disclose information when required by law or when
          necessary to protect the rights, safety, or security of Bhadagadi,
          our users, drivers, or others.
        </Section>

        <Section title="6. Payments">
          If payment services are provided through third-party payment
          providers, payment information may be processed directly by those
          providers according to their respective privacy policies and terms.
        </Section>

        <Section title="7. Data Security">
          We take reasonable technical and organizational measures to protect
          personal information against unauthorized access, alteration,
          disclosure, or destruction. However, no internet-based system can
          be guaranteed to be completely secure.
        </Section>

        <Section title="8. Data Retention">
          We retain information for as long as reasonably necessary to provide
          our services, meet business requirements, resolve disputes, maintain
          security, and comply with applicable laws.
        </Section>

        <Section title="9. Children's Privacy">
          Bhadagadi's services are not intended for children who are not
          legally permitted to use transportation or ride-booking services.
          We do not knowingly collect personal information from children in
          violation of applicable law.
        </Section>

        <Section title="10. Third-Party Services">
          Our website or applications may use third-party services, links, or
          technologies. Their use of information is governed by their own
          privacy policies and terms.
        </Section>

        <Section title="11. Your Rights">
          Depending on applicable law, you may have rights regarding access,
          correction, deletion, or other handling of your personal information.
          You may contact us to request assistance with your information.
        </Section>

        <Section title="12. Changes to This Privacy Policy">
          We may update this Privacy Policy from time to time. Any updated
          version will be published on this page with a revised "Last Updated"
          date.
        </Section>

        <Section title="13. Contact Us">
          If you have questions or concerns about this Privacy Policy, please
          contact Bhadagadi at:
          <br />
          <br />
          <strong>Email:</strong>{" "}
          <a
            href="mailto:bhadagadiapp@gmail.com"
            style={{ color: "#FFC107" }}
          >
            bhadagadiapp@gmail.com
          </a>
        </Section>

        <div
          style={{
            marginTop: "60px",
            paddingTop: "25px",
            borderTop: "1px solid #333",
            color: "#888",
            fontSize: "14px",
          }}
        >
          © 2026 Bhadagadi. All Rights Reserved.
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: "38px" }}>
      <h2
        style={{
          color: "#FFC107",
          fontSize: "25px",
          marginBottom: "14px",
        }}
      >
        {title}
      </h2>

      <div
        style={{
          color: "#d0d0d0",
          fontSize: "16px",
          lineHeight: 1.8,
        }}
      >
        {children}
      </div>
    </section>
  );
}