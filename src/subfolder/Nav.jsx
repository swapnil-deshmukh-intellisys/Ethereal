import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";
import "../subfolder/Nav.css";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Shared dropdown state for both desktop and mobile

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev); // Toggle the dropdown visibility
  };

  const handleLinkClick = () => {
    setShowMenu(false); // Close mobile menu
    setDropdownOpen(false); // Close dropdown on any link click
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" id="logo" />

      <div className="main-nav">
        <div className="desktopbooknow">
          <button className="book-now-btn">
            <NavLink to="/login" className="book-now-link">
              Book Now
            </NavLink>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="desktopmenu">
          <NavLink
            to="/HomeP"
            className={({ isActive }) => (isActive ? "desktopmenuListitem active" : "desktopmenuListitem")}
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "desktopmenuListitem active" : "desktopmenuListitem")}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/aboutus"
            className={({ isActive }) => (isActive ? "desktopmenuListitem active" : "desktopmenuListitem")}
          >
            About Us
          </NavLink>

          {/* Gallery Link with Dropdown */}
          <div
            className="gallery-dropdown"
            onMouseEnter={toggleDropdown} // On mouse hover, toggle dropdown
            onMouseLeave={toggleDropdown} // On mouse leave, toggle dropdown
          >
            <NavLink
              to="/glam"
              className={({ isActive }) =>
                isActive ? "desktopmenuListitem" : "desktopmenuListitem"
              }
            >
              Gallery
              <span className="down-arrow">▼</span>
            </NavLink>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="dropdown-menu">
                <NavLink
                  to="/glam"
                  className={({ isActive }) =>
                    isActive ? "dropdown-item active" : "dropdown-item"
                  }
                  onClick={handleLinkClick} // Close dropdown after clicking link
                >
                  Tent Gallery
                </NavLink>
                <NavLink
                  to="/glamG"
                  className={({ isActive }) =>
                    isActive ? "dropdown-item active" : "dropdown-item"
                  }
                  onClick={handleLinkClick} // Close dropdown after clicking link
                >
                  Glam Gallery
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="navMenu">
          <NavLink
            to="/HomeP"
            className={({ isActive }) => (isActive ? "mobilemenuListitem active" : "mobilemenuListitem")}
            onClick={() => {handleLinkClick(); setShowMenu(false)}} // Close mobile menu after clicking link
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "mobilemenuListitem active" : "mobilemenuListitem")}
            onClick={() => {handleLinkClick(); setShowMenu(false)}} // Close mobile menu after clicking link
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/create-account"
            className={({ isActive }) => (isActive ? "mobilemenuListitem active" : "mobilemenuListitem")}
            onClick={() => {handleLinkClick(); setShowMenu(false)}} // Close mobile menu after clicking link
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/aboutus"
            className={({ isActive }) => (isActive ? "mobilemenuListitem active" : "mobilemenuListitem")}
            onClick={() => {handleLinkClick(); setShowMenu(false)}} // Close mobile menu after clicking link
          >
            About
          </NavLink>

          {/* Mobile Dropdown */}
          <div className="gallery-dropdown" onClick={toggleDropdown}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "desktopmenuListitem" : "desktopmenuListitem"
              }
            >
              Gallery
              <span className="down-arrow">▼</span>
            </NavLink>

            {/* Mobile Dropdown Menu */}
            {dropdownOpen && (
              <div className="dropdown-menu">
                <NavLink
                  to="/glam"
                  className={({ isActive }) =>
                    isActive ? "dropdown-item active" : "dropdown-item"
                  }
                  onClick={() => {handleLinkClick(); setDropdownOpen(false)}} // Close dropdown and menu
                >
                  Tent Gallery
                </NavLink>
                <NavLink
                  to="/glamG"
                  className={({ isActive }) =>
                    isActive ? "dropdown-item active" : "dropdown-item"
                  }
                  onClick={() => {handleLinkClick(); setDropdownOpen(false)}} // Close dropdown and menu
                >
                  Glam Gallery
                </NavLink>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
