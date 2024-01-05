import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import hamburger from "../../icons/menu.png";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisibility(!isDropdownVisible);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisibility(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="nav-container">
        <div className="ootify-logo">
          <img
            className="logo"
            src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/654046e04635d071fc8c9839_OOTify%20logo.svg"
            alt="blue ootify logo"
          />
        </div>
        <div className="anchor-container">
          <div className="anchor-link">Higher Ed</div>
          <div className="anchor-link">Enterprise</div>
          <div className="anchor-link">Hospitals</div>
          <div className="anchor-link">Children's Book</div>
          <div className="anchor-link">Our Story</div>
          <div
            className={`hamburger ${isDropdownVisible ? "active" : ""}`}
            onClick={(e) => {
              toggleDropdown();
              e.stopPropagation();
            }}
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
              ref={dropdownRef}
            >
              <div className="dropdown-link">
                <span>Higher Ed</span>
              </div>
              <div className="dropdown-link">
                <span>Enterprise</span>
              </div>
              <div className="dropdown-link">
                <span>Hospitals</span>
              </div>
              <div className="dropdown-link">
                <span>Children's Book</span>
              </div>
              <div className="dropdown-link">
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
