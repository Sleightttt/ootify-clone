import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import hamburger from "../../icons/menu.png";
import { NavLink } from "react-router-dom";

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
        <NavLink to="/" className="ootify-logo">
          <img
            className="logo"
            src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/654046e04635d071fc8c9839_OOTify%20logo.svg"
            alt="blue ootify logo"
          />
        </NavLink>
        <div className="anchor-container">
          <NavLink className="anchor-link" to="/HigherEd">
            Higher Ed
          </NavLink>
          <NavLink to="Enterprise" className="anchor-link">
            Enterprise
          </NavLink>
          <NavLink to="Hospitals" className="anchor-link">
            Hospitals
          </NavLink>
          <NavLink to="ChildrensBook" className="anchor-link">
            Children's Book
          </NavLink>
          <NavLink to="OurStory" className="anchor-link">
            Our Story
          </NavLink>
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
