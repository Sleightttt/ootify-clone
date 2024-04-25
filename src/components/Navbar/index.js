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
          <NavLink className="anchor-link" to="/higher-ed">
            Higher Ed
          </NavLink>
          <NavLink to="/enterprise" className="anchor-link">
            Enterprise
          </NavLink>
          <NavLink to="/hospitals" className="anchor-link">
            Hospitals
          </NavLink>
          <NavLink to="/childrens-book" className="anchor-link">
            Children's Book
          </NavLink>
          <NavLink to="/our-story" className="anchor-link">
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
                <NavLink to="/higher-ed">Higher Ed</NavLink>
              </div>
              <div className="dropdown-link">
                <NavLink to="/enterprise">Enterprise</NavLink>
              </div>
              <div className="dropdown-link">
                <NavLink to="/hospitals">Hospitals</NavLink>
              </div>
              <div className="dropdown-link">
                <NavLink to="/childrens-book">Children's Book</NavLink>
              </div>
              <div className="dropdown-link">
                <NavLink to="/our-story">Our Story</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
