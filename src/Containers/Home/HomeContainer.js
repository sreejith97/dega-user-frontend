import React from "react";
import ChoiceList from "../../components/ChoiceList/ChoiceList";
import "./HomeContainer.css";

function HomeContainer() {
  return (
    <div className="home-container">
      <div className="header">
        <h1>My Choice My Price</h1>
      </div>
      <ChoiceList />
    </div>
  );
}

export default HomeContainer;
