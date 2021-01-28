import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home" className="link-btn">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="link-btn">
              About Me
            </a>
          </li>
          <li>
            <a href="#education" className="link-btn">
              Education
            </a>
          </li>
          <li>
            <a href="#events" className="link-btn">
              Events
            </a>
          </li>
          <li>
            <a href="#contact" className="link-btn last-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
