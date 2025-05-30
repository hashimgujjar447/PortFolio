import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMove, setIsMove] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scrolled Y:", window.scrollY); // 🐞 check this
      if (window.scrollY > 400) {
        setIsMove(true);
      } else {
        setIsMove(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${isMove ? "slideShow" : ""}`}>
      <div className="container">
        <div className="logo-section">
          <div className="logo">
            <img
              src="./myLogo.png"
              alt="myLogo"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
            <Link
              to={"/"}
              className="email"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              hashimgujjar4447@gmail.com
            </Link>
          </div>
        </div>

        <nav className={`nav-bar ${menuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a className="nav-link" href="#service">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skill">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="buttons">
          <button className="hire-button">Hire me</button>
          <button
            className={`${menuOpen ? "active" : ""} hamburger`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="hamburger-lines"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
