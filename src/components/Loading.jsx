import React from "react";
import loadingWheel from '../assets/loading-lottie.json'

const Loading = () => {
  return (
    <div className="loading">
      <h2 className="message">Searching...</h2>
      {/* <div>{loadingWheel}</div> */}
    </div>
  );
};

export default Loading;