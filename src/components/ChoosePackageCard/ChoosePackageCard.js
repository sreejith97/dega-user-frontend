import React from "react";
import "./ChoosePackageCard.css";

function ChoosePackageCard(props) {
  return (
    <div>
      <div className="package-card">
        {" "}
        <img src="../svg/package.svg" width="50px" />
        <p>{props.name}</p>
        <p className="card-price">
          Rs : <span>{props.price}</span>
        </p>
      </div>
    </div>
  );
}

export default ChoosePackageCard;
