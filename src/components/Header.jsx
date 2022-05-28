import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <span className='name'>Hays Bondy</span>
        <span>
          <Link className='link' to="/">About</Link>
          <Link className='link' to="/portfolio">Portfolio</Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
