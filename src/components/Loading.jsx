import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { useLocation } from "react-router-dom";

const Loading = () => {
  const location = useLocation();
  const building = useRef(null);
  const email = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: building.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/heroku-lottie.json"),
    });
  }, []);

  useEffect(() => {
    lottie.loadAnimation({
      container: email.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/email-lottie.json"),
    });
  }, []);

  return (
    <div className="loading-screen">
      {location.pathname === "/contact" ? (
          <div className="loading-animation" ref={email} />
      ) : (
        <div className="loading-container">
          <p className="loading-message">
            Giving Heroku.app a moment to warm up...
          </p>
          <div className="loading-animation" ref={building} />
        </div>
      )}
    </div>
  );
};

export default Loading;
