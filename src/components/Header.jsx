import React from "react";
import { Link } from "react-router-dom";
import resume from '../assets/William-Hays-Bondy.pdf'

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <span className='name'>Hays Bondy</span>
        <span>
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/portfolio">Portfolio</Link>
          <a className='link' href={resume}>Resume</a>
        </span>
      </div>
    </div>
  );
};

export default Header;
