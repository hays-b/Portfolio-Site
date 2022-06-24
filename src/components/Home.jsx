import React from "react";
import "../style/Home.css";
import { Link } from 'react-router-dom'
import resume from "../assets/William-Hays-Bondy.pdf";

const Home = () => {
  return (
    <div className="home-page">
      {/* <p>This is the home page 4.0</p> */}
      <div className="HB-ctn">
        <p className="initial H">H</p>
        <p className="initial B">B</p>
      </div>
      <div className="routes-ctn">
        <Link className='link portfolio' to="/portfolio">Portfolio</Link>
        <Link className='link contact' to="/contact">Contact Me</Link>
        <a className='link resume' href={resume}>Resume</a>
      </div>
    </div>
  );
};

export default Home;
