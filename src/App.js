import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Home, Footer, Contact, ContactSuccess, Portfolio, EliteWebServices, SingleViewPage } from "./components";
import "./style/App.css";
import portfolioData from "./portfolioData"

const App = () => {
  console.log(portfolioData)
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/success" element={<ContactSuccess />} />
          {/* <Route path="/portfolio/elite-web-services" element={<EliteWebServices />} /> */}
          {}
        {portfolioData.map((project, idx) => {
          return (
          <Route key={'projectRoute' + idx} path={`/portfolio/elitewebservices`} element={<SingleViewPage project={project} />} />
          )
        })}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
