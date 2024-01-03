import React, { useState } from "react";
import "./navbar.css";
import hamburger from "../../icons/menu.png";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisibility(!isDropdownVisible);
  };

  return (
    <>
      <div className="nav-container">
        <div className="logo">OOTify</div>
        <div className="anchor-container">
          <div className="anchor-link">Higher Ed</div>
          <div className="anchor-link">Enterprise</div>
          <div className="anchor-link">Hospitals</div>
          <div className="anchor-link">Children's Book</div>
          <div className="anchor-link">Our Story</div>
          <div
            className={`hamburger ${isDropdownVisible ? "active" : ""}`}
            onClick={toggleDropdown}
          >
            <img
              className="hamburger-icon"
              alt="nav-hamburger"
              src={hamburger}
            />
            <div
              className={`dropdown ${
                isDropdownVisible ? "slideInFromTop" : "slideOutToTop"
              }`}
            >
              <div className="dropdown-link">
                <span>Higher Ed</span>
              </div>
              <div className="dropdown-link">
                {" "}
                <span>Enterprise</span>
              </div>
              <div className="dropdown-link">
                {" "}
                <span>Hospitals</span>
              </div>
              <div className="dropdown-link">
                {" "}
                <span>Children's Book</span>
              </div>
              <div className="dropdown-link">
                {" "}
                <span>Our Story</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
