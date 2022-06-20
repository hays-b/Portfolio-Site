import React, { useState, Fragment } from "react";
import LoadingHeroku from "./LoadingHeroku";

const SingleViewPage = ({ project }) => {
  const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (isLoading) {
//       setIsLoading(false);
//     }
//     // eslint-disable-next-line
//   }, [window.location]);

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === project.carousel.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? project.carousel.length - 1 : current - 1);
  };

  const setSlide = (idx) => {
    setCurrent(idx);
  };

  return (
    <>
      {isLoading ? <LoadingHeroku /> : null}
      <div className="single-view-page">
        <ul className="carousel">
          <button
            className="carousel-btn left"
            onClick={() => {
              prevSlide();
            }}
          >
            {"<"}
          </button>
          <button
            className="carousel-btn right"
            onClick={() => {
              nextSlide();
            }}
          >
            {">"}
          </button>
          <p className="count">
            {current + 1} of {project.carousel.length}
          </p>
          {project.carousel.map((pic, idx) => {
            return (
              <Fragment key={"carousel" + idx}>
                <div className={idx === current ? "slide active" : "slide"}>
                  <img className="carousel-img" alt={pic.alt} src={pic.src} />
                </div>
                <button className="dot" onClick={() => setSlide(idx)}>
                  <div
                    className={idx === current ? "white highlight" : "white"}
                  ></div>
                </button>
              </Fragment>
            );
          })}
        </ul>
        <h1 className="single-title">{project.title}</h1>
        <div className="a-ctn">
          <a
            className="single-link"
            href={project.siteUrl}
            onClick={() => {
              setIsLoading(true);
            }}
          >
            See live site
          </a>
          <a className="single-link" href={project.codeUrl}>
            See source code
          </a>
        </div>
        {project.description.map((paragraph, idx) => {
          return <p key={"description" + idx}>{paragraph}</p>;
        })}
      </div>
    </>
  );
};

export default SingleViewPage;
