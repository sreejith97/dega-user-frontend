import React from "react";
import "./ChooseCarCard.css";
function ChooseCarCard(props) {
  return (
    <div>
      <div className="car-choose-card">
        <img src="../svg/hatchbackcar.svg" width="50px" />
        <h1>{props.name}</h1>
      </div>
    </div>
  );
}

export default ChooseCarCard;
