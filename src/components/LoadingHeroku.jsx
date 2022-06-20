import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const LoadingHeroku = () => {
  const building = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: building.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/lottie-heroku.json"),
    });
  }, []);

  return (
    <>
    <div className="loading-screen">
        <div className="loading-container">
          <p className="loading-message">
            Giving Heroku.app a moment to warm up...
          </p>
          <div className="loading-animation" ref={building} />
        </div>
    </div>
    </>
  );
};

export default LoadingHeroku;
