import React from "react";
import "./ChooseAddons.css";

function ChooseAddons(props) {
  return (
    <div>
      <div className="addon-card">
        <img src="../svg/addons.svg" width="50px" />
        <h1>{props.name}</h1>
        <p className="card-price">
          Rs : <span>{props.price}</span>
        </p>
      </div>
    </div>
  );
}

export default ChooseAddons;
