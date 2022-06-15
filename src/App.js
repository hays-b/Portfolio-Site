import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Home, Footer, Contact, ContactSuccess, Portfolio, EliteWebServices } from "./components";
import "./style/App.css";

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
          <Route path="/portfolio/elite-web-services" element={<EliteWebServices />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
