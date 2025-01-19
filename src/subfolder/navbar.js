import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";
import "../subfolder/Nav.css";
import Logout from "../Assets/log-out.png";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleLogout = () => {
    // Add logout logic here if needed (e.g., clearing tokens, user data, etc.)
    navigate("/HomeP"); // Redirect to HomeP
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" id="logo" />

      {/* Desktop Menu */}
      <div className="desktopmenu">
        <button className="book-now-btn">
          <Link to="/package" className="book-now-link">
            Book Now
          </Link>
        </button>

        <Link to="/homed" className="desktopmenuListitem">Home</Link>
        <Link to="/" className="desktopmenuListitem">Brochure</Link>
        <Link to="/glam" className="desktopmenuListitem">Camping</Link>
        <Link to="/glamG" className="desktopmenuListitem">Glamping</Link>
        <Link to="/aboutus" className="desktopmenuListitem">About Us</Link>
        <Link to="/contact" className="desktopmenuListitem">Contact Us</Link>
        <img
          src={Logout}
          alt="Logout"
          id="logout"
          onClick={handleLogout} // Attach the logout handler
          style={{ cursor: "pointer" }}
        />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="navMenu">
          <Link
            to="/homed"
            className="mobilemenuListitem"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            to="/"
            className="mobilemenuListitem"
            onClick={() => setShowMenu(false)}
          >
            Brochure
          </Link>
          <Link
            to="/glam"
            className="mobilemenuListitem"
            onClick={() => setShowMenu(false)}
          >
            Camping
          </Link>
          <Link
            to="/glamG"
            className="mobilemenuListitem"
            onClick={() => setShowMenu(false)}
          >
            Glamping
          </Link>
          <Link
            to="/aboutus"
            className="mobilemenuListitem"
            onClick={() => setShowMenu(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="mobilemenuListitem"
            onClick={() => setShowMenu(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
