import React from "react";
import { Link } from "react-router-dom"
import resume from '../assets/William-Hays-Bondy.pdf'

const NavMenu = ({ setActiveNav, activeNav }) => {

  return (
    <div className={activeNav ? 'nav-menu nav-active': 'nav-menu'} onClick={()=>{setActiveNav(false)}}>
        <div className='nav-menu-links'>
            <Link className='nav-menu-link' to="/">Home</Link>
         <Link className='nav-menu-link' to="/portfolio">Portfolio</Link>
          <Link className='nav-menu-link' to="/contact">Contact Me</Link>
          <a className='nav-menu-link' href={resume}>Resume</a>
        </div>
    </div>
  );
};

export default NavMenu;
