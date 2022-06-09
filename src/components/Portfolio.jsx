import React from "react";
import retroSnake from "../assets/retro-arcade-snake.png";
import ews from '../assets/ews.png'
import fitness from '../assets/fitness-tracker.jpg'

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <div className="portfolio-card">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://elite-web-services.herokuapp.com/"
        >
          <img
            className="portfolio-image"
            src={ews}
            alt="Elite Web Services"
          />
        </a>
        <p>Elite Web Services</p>
      </div>
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
      </div>
      <div className="portfolio-card">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://retro-arcade-snake.herokuapp.com/"
        >
          <img
            className="portfolio-image"
            src={fitness}
            alt="Fitness Tracker"
          />
        </a>
        <p>Fitness Tracker</p>
      </div>
    </div>
  );
};

export default Portfolio;
