import React from "react";
import { Link } from 'react-router-dom'
import retroSnake from "../assets/retro-arcade-snake.png";
import ews from '../assets/ews.png'
import fitness from '../assets/fitness-tracker.jpg'

const Portfolio = () => {
  return (
    <div className="portfolio-page">
        <Link to='/portfolio/elite-web-services' className="portfolio-card">
          <img
            className="portfolio-image"
            src={ews}
            alt="Elite Web Services"
          />
        <p>Elite Web Services</p>
        <p className='gray'>Click for more details</p>
      </Link>
      <div className="portfolio-card">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://retro-arcade-snake.herokuapp.com/"
        >
          <img
            className="portfolio-image"
            src={retroSnake}
            alt="Retro Arcade Snake"
          />
        </a>
        <p>Retro Arcade Snake</p>
        <p className='gray'>Click for more details</p>
      </div>
      <div className="portfolio-card">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://fitness-tracker-react-app.herokuapp.com/"
        >
          <img
            className="portfolio-image"
            src={fitness}
            alt="Fitness Tracker"
          />
        </a>
        <p>Fitness Tracker</p>
        <p className='gray'>Click for more details</p>
      </div>
    </div>
  );
};

export default Portfolio;
