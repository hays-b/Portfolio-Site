import React from "react";
import retroSnake from '../images/retro-arcade-snake.png'

const Portfolio = () => {
  return (
    <div>
      <div>
        <p>Retro Arcade Snake</p>
        <img src={retroSnake}
        alt='retro arcade snake'
        style={{width: '25vmin', height:'25vmin'}}/>
      </div>
    </div>
  );
};

export default Portfolio;
