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
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#education" className="link-btn">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
