import React, { useState, Fragment } from "react";
import retroSnake from "../../assets/retro-arcade-snake.png";
import ews from "../../assets/ews.png";
import fitness from "../../assets/fitness-tracker.jpg";

const EliteWebServices = () => {
  const carouselPics = [retroSnake, ews, fitness]; // move to its own file with alts
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === carouselPics.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? carouselPics.length - 1 : current - 1);
  };

  const setSlide = (idx) => {
    setCurrent(idx);
  };

  return (
    <div className="single-view-page">
      <ul className="carousel">
        <button
          className="carousel-btn left"
          onClick={() => {
            prevSlide();
          }}
        >
           {'<'}
        </button>
        <button
          className="carousel-btn right"
          onClick={() => {
            nextSlide();
          }}
        >
          {'>'}
        </button>
        <p className="count">
          {current + 1} of {carouselPics.length}
        </p>
        {carouselPics.map((pic, idx) => {
          return (
            <Fragment key={idx}>
            <div
              className={idx === current ? "slide active" : "slide"}
            >
              <img className="carousel-img" alt="placeholder" src={pic} />
            </div>
            <button className='dot' onClick={() => setSlide(idx)}>
              <div className={idx === current ? "white highlight" : "white"}></div>
            </button>
            </Fragment>
          );
        })}
      </ul>
      <h1 className='single-title'>Elite Web Services</h1>
      <div className='a-ctn'>
      <a
      className='single-link'
        target="_blank"
        rel="noopener noreferrer"
        href="https://elite-web-services.herokuapp.com/"
      >
        See live site
      </a>
      <a
      className='single-link'
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Elite-Web-Services/Elite-Web-Services"
      >
        See source code
      </a>
      </div>
      <p>Lorem ipsum</p>
      <p>Lorem ipsum</p>
      <p>Lorem ipsum</p>
      <p>Lorem ipsum</p>
      <p>Lorem ipsum</p>
      <p>Lorem ipsum</p>
      <p>Lorem ipsum</p>
      <p>Lorem ipsum</p>
      <p>Lorem ipsum</p>
      <p>Last Lorem ipsum</p>
    </div>
  );
};

export default EliteWebServices;
