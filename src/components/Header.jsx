import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Header = ({ activeNav, setActiveNav }) => {
  return (
    <div className="header">
      <div className="nav">
        <Link className="name" to="/">
          Hays Bondy
        </Link>
        <span className="nav-links">
          <NavLinks />
        </span>
        <div
          className="hamburger"
          onClick={() => {
            activeNav ? setActiveNav(false) : setActiveNav(true);
          }}
        >
          Hamburger
        </div>
      </div>
    </div>
  );
};

export default Header;
