import { useState, useEffect, useRef } from "react";
import "./header.css";
import PDF from "../assets/resume.pdf"

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className={sticky ? "header sticky" : "header"}>
      <div className="nav-container">
        <div className="logo">N</div>
 
        <ul className="nav-links">
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("education")}>Educations</li>
          <li onClick={() => scrollToSection("experience")}>Experience</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>

        <a href={PDF} download className="resume-button">
          Resume
        </a> 

        <div className="menu-icon" onClick={() => setMenuOpen(true)}>
          ☰
        </div>
      </div>
 
      {menuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu" ref={menuRef}>
            <span className="close-btn" onClick={() => setMenuOpen(false)}>
              ✕
            </span>

            <ul>
              <li onClick={() => scrollToSection("home")}>Home</li>
              <li onClick={() => scrollToSection("about")}>About</li>
              <li onClick={() => scrollToSection("projects")}>Projects</li>
              <li onClick={() => scrollToSection("experience")}>Experience</li>
              <li onClick={() => scrollToSection("contact")}>Contact</li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
