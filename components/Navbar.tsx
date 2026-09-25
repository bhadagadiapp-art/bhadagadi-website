"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Drivers", href: "#drivers" },
    { name: "Investors", href: "#investors" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    const navbarOffset = 85;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });

    window.history.replaceState(null, "", href);
  };

  // Handle direct URLs such as /#features
  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) {
      return;
    }

    const scrollToHash = () => {
      const target = document.querySelector(hash);

      if (!target) {
        return;
      }

      const navbarOffset = 85;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        navbarOffset;

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "auto",
      });
    };

    // Wait until the page has finished rendering.
    const timer = window.setTimeout(scrollToHash, 150);

    return () => window.clearTimeout(timer);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    setOpen(false);

    // Give React a moment to close the mobile menu.
    window.setTimeout(() => {
      scrollToSection(href);
    }, 50);
  };

  return (
    <nav
      style={{
        position: "relative",
        zIndex: 1000,
        background: "#111",
        color: "#fff",
        padding: "20px 6%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #222",
      }}
    >
      {/* Logo */}
      <div
        style={{
          color: "#FFC107",
          fontSize: "24px",
          fontWeight: "900",
          letterSpacing: "2px",
        }}
      >
        BHADAGADI
      </div>

      {/* Desktop Navigation */}
      <div
        className="desktop-nav"
        style={{
          display: "flex",
          gap: "28px",
          alignItems: "center",
        }}
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        style={{
          display: "none",
          background: "transparent",
          border: "1px solid #444",
          color: "#FFC107",
          fontSize: "24px",
          width: "44px",
          height: "44px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        {open ? "×" : "☰"}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div
          className="mobile-menu"
          style={{
            position: "absolute",
            top: "84px",
            left: "0",
            right: "0",
            background: "#111",
            borderTop: "1px solid #222",
            padding: "20px",
          }}
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                display: "block",
                color: "#fff",
                textDecoration: "none",
                padding: "14px 10px",
                fontWeight: "600",
                borderBottom: "1px solid #222",
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}