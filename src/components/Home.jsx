import React from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";
import resume from "../assets/William-Hays-Bondy.pdf";

const Home = () => {
  return (
    <div className="home-page">
      {/* <p>This is the home page 4.0</p> */}
      <div className="HB-ctn">
        <div className="circle" />
        <p className="initial H">H</p>
        <p className="initial B">B</p>
      </div>
      <div className="routes-ctn">
        <Link className="routes-link portfolio" to="/portfolio">
          Portfolio
        </Link>
        <Link className="routes-link contact" to="/contact">
          Contact Me
        </Link>
        <a className="routes-link resume" href={resume}>
          Resume
        </a>
      </div>
      <div className="bio-ctn">
      <p className="bio-title">Hi, I'm Hays Bondy</p>
        <p className="bio">I'm a software developer, particularly interested in front-end web design.  </p>
      </div>
    </div>
  );
};

export default Home;
