import React from "react";
import "./Footer.css";

const navLinks = [
  { label: "Services", href: "#service" },
  { label: "Works", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skill" },
  { label: "Testimonials", href: "#testimonials" },
];

const Footer = () => (
  <footer className="footer">
    <section className="footer-section">
      <div className="footer-logo">
        <img src={"./myLogo.png"} alt="My website logo" />
      </div>
      <nav className="footer-links" aria-label="Footer navigation">
        <ul className="nav-list">
          {navLinks.map((link) => (
            <li className="nav-item" key={link.label}>
              <a className="nav-link" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="rights">
        <p>© 2024 All Rights Reserved by Hashim</p>
      </div>
    </section>
  </footer>
);

export default Footer;
