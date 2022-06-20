import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Header,
  Home,
  Footer,
  Contact,
  ContactSuccess,
  Portfolio,
  SingleViewPage,
} from "./components";
import "./style/App.css";
import portfolioData from "./portfolioData";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/success" element={<ContactSuccess />} />
          {portfolioData.map((project, idx) => {
            return (
              <Route
                key={"projectRoute" + idx}
                path={`/portfolio/${project.route}`}
                element={<SingleViewPage project={project} />}
              />
            );
          })}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
