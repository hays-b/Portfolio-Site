import React from "react";
import { Link } from "react-router-dom"
import resume from '../assets/William-Hays-Bondy.pdf'

const NavMenu = ({ setActiveNav, activeNav }) => {

  return (
    <div className={activeNav ? 'nav-menu nav-active': 'nav-menu'} onClick={()=>{setActiveNav(false)}}>
        <div onClick={()=>{setActiveNav(false)}}>X</div>
        <Link className='link' to="/">Home</Link>
          <Link className='link' to="/portfolio">Portfolio</Link>
          <Link className='link' to="/contact">Contact Me</Link>
          <a className='link' href={resume}>Resume</a>
    </div>
  );
};

export default NavMenu;
