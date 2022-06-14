import React from "react";
import ews from '../../assets/ews.png'

const EliteWebServices = () => {
  return (
    <div>
              <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://elite-web-services.herokuapp.com/"
        >
      <div className="portfolio-card">
          <img
            className="portfolio-image"
            src={ews}
            alt="Elite Web Services"
          />
        <p>Elite Web Services</p>
      </div>
        </a>
    </div>
  );
};

export default EliteWebServices;