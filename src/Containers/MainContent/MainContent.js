import React from "react";
import HomeContainer from "../Home/HomeContainer";

import { Routes, Route, Link } from "react-router-dom";
import "./MainContent.css";
import Cars from "../Cars/Cars";
import ServiceHistory from "../ServiceHistory/ServiceHistory";
function MainContent() {
  return (
    <main>
      <Routes>
        <Route path="home" element={<HomeContainer />} />
        <Route path="cars" element={<Cars />} />
        <Route path="service_history" element={<ServiceHistory />} />
      </Routes>
    </main>
  );
}

export default MainContent;
