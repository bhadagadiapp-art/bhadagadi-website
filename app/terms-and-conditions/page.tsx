export default function TermsAndConditions() {
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
          Terms & Conditions
        </h1>

        <p
          style={{
            color: "#aaa",
            marginBottom: "45px",
          }}
        >
          Last Updated: September 26, 2026
        </p>

        <Section title="1. Acceptance of Terms">
          By accessing or using the Bhadagadi website, mobile applications,
          and related services, you agree to be bound by these Terms &
          Conditions. If you do not agree with these terms, please do not use
          our services.
        </Section>

        <Section title="2. About Bhadagadi">
          Bhadagadi is a transportation technology platform that connects
          passengers and drivers and facilitates ride-booking and related
          transportation services. Bhadagadi may provide technology and
          platform services while transportation services may be provided by
          independent drivers or service providers.
        </Section>

        <Section title="3. User Eligibility">
          You must provide accurate information and comply with applicable
          laws when using Bhadagadi. Users must meet the minimum age and other
          eligibility requirements applicable to the services they use.
        </Section>

        <Section title="4. User Accounts">
          You are responsible for maintaining the accuracy and security of
          information associated with your account. You should not share your
          account credentials with another person or use another person's
          account without authorization.
        </Section>

        <Section title="5. Ride Bookings">
          Ride details, availability, estimated fares, pickup locations,
          destinations, and other booking information may be displayed through
          the Bhadagadi platform.
          <br />
          <br />
          A booking may be subject to driver availability, service area,
          technical limitations, traffic conditions, weather, and other
          circumstances.
        </Section>

        <Section title="6. Fares and Payments">
          Applicable fares and charges may be displayed before or during a
          booking. Fares may vary depending on vehicle type, distance,
          duration, location, demand, tolls, taxes, or other applicable
          charges.
          <br />
          <br />
          Payments may be processed through third-party payment providers.
          Their respective terms and policies may also apply.
        </Section>

        <Section title="7. Cancellation and Refunds">
          Cancellation charges, refund eligibility, and other booking-related
          charges may depend on the applicable service, booking conditions,
          payment method, and circumstances of cancellation.
        </Section>

        <Section title="8. Driver Responsibilities">
          Drivers using the Bhadagadi platform are responsible for complying
          with applicable transportation laws, maintaining required licences
          and documents, operating vehicles safely, and treating passengers
          respectfully.
        </Section>

        <Section title="9. Passenger Responsibilities">
          Passengers must provide accurate pickup and destination information,
          behave respectfully toward drivers, follow applicable safety
          requirements, and avoid unlawful or dangerous activities.
        </Section>

        <Section title="10. Prohibited Activities">
          Users must not use Bhadagadi for unlawful activities, fraud,
          harassment, threats, abuse, unauthorized commercial activity,
          interference with the platform, or any activity that may compromise
          the safety or security of other users, drivers, or Bhadagadi.
        </Section>

        <Section title="11. Safety">
          Users should follow applicable safety instructions and laws while
          using transportation services. In an emergency, users should contact
          the appropriate emergency services or authorities.
        </Section>

        <Section title="12. Platform Availability">
          We aim to keep Bhadagadi services available and reliable, but we do
          not guarantee that the website, applications, or services will
          always be available, uninterrupted, or error-free.
        </Section>

        <Section title="13. Third-Party Services">
          Bhadagadi may integrate with third-party services, payment
          providers, maps, communication services, or other technologies.
          Third-party services may have separate terms and privacy policies.
        </Section>

        <Section title="14. Intellectual Property">
          The Bhadagadi name, branding, logos, website content, software,
          designs, graphics, and other materials provided by Bhadagadi are
          protected by applicable intellectual property laws. They may not be
          copied, modified, distributed, or used without appropriate
          authorization.
        </Section>

        <Section title="15. Suspension or Termination">
          Bhadagadi may suspend or restrict access to an account or service
          where reasonably necessary for safety, security, fraud prevention,
          legal compliance, violation of these terms, or other legitimate
          operational reasons.
        </Section>

        <Section title="16. Limitation of Liability">
          To the extent permitted by applicable law, Bhadagadi will not be
          responsible for losses arising from circumstances outside its
          reasonable control, including network failures, technical
          interruptions, traffic conditions, weather events, third-party
          services, or actions of independent service providers.
        </Section>

        <Section title="17. Changes to These Terms">
          We may update these Terms & Conditions from time to time. Updated
          terms will be published on this page with a revised "Last Updated"
          date. Continued use of the services after an update may be subject
          to the updated terms.
        </Section>

        <Section title="18. Governing Law">
          These Terms & Conditions are subject to applicable laws of India.
          Any dispute will be handled in accordance with applicable Indian
          law and the jurisdiction legally applicable to the matter.
        </Section>

        <Section title="19. Contact Us">
          If you have questions regarding these Terms & Conditions, contact
          Bhadagadi at:
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