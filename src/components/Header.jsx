import React from "react";
import { Link } from "react-router-dom";
import resume from '../assets/William-Hays-Bondy.pdf'

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <Link className='name' to="/">Hays Bondy</Link>
        <span>
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/portfolio">Portfolio</Link>
          <Link className='link' to="/contact">Contact Me</Link>
          <a className='link' href={resume}>Resume</a>
        </span>
      </div>
    </div>
  );
};

export default Header;
