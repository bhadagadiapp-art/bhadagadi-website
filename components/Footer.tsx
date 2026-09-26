export default function Footer() {
  return (
    <footer
      style={{
        background: "#000",
        color: "#fff",
        padding: "40px",
        textAlign: "center",
        marginTop: "80px",
      }}
    >
      <h2 style={{ color: "#FFC107" }}>BHADAGADI</h2>

      <p>©️ 2026 Bhadagadi. All Rights Reserved.</p>

      <p>INDIA'S NEXT GENERATION TAXI PLATFORM</p>

      <div
        style={{
          marginTop: "18px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "18px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="/privacy-policy"
          style={{
            color: "#FFC107",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: "600",
          }}
        >
          Privacy Policy
        </a>

        <span style={{ color: "#555" }}>|</span>

        <a
          href="/terms-and-conditions"
          style={{
            color: "#FFC107",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: "600",
          }}
        >
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
}