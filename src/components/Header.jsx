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
          className='hamburger'
          onClick={() => {
            activeNav ? setActiveNav(false) : setActiveNav(true);
          }}
        >
          <div className={activeNav ? "line one" : "line"} />
          <div className={activeNav ? "line two" : "line"} />
          <div className={activeNav ? "line three" : "line"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
