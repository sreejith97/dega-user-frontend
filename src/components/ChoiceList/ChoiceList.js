import React from "react";
import ChooseAddons from "../ChooseAddons/ChooseAddons";
import ChoiceCarCard from "../ChooseCarCard/ChooseCarCard";
import ChoosePackageCard from "../ChoosePackageCard/ChoosePackageCard";
import "./ChoiceList.css";

function ChoiceList() {
  let cardDetails = [
    {
      name: "Mahindra XUV 500",
    },
    {
      name: "Hyundai Verna",
    },
    {
      name: "Hyundai Verna",
    },
    {
      name: "Hyundai Verna",
    },
    {
      name: "Hyundai Verna",
    },
    {
      name: "Hyundai Verna",
    },
    {
      name: "Hyundai Verna",
    },
  ];

  let packageDetails = [
    {
      name: "Package 1",
      price: "300",
    },
    {
      name: "Package 2",
      price: "2200",
    },
    {
      name: "Package 3",
      price: "400",
    },
    {
      name: "Package 4",
      price: "800",
    },
    {
      name: "Package 5",
      price: "1000",
    },
  ];

  let addonsDetails = [
    {
      name: "Addon 1",
      price: "600",
    },
    {
      name: "Addon 2",
      price: "400",
    },
    {
      name: "Addon 3",
      price: "300",
    },
    {
      name: "Addon 4",
      price: "1000",
    },
    {
      name: "Addon 5",
      price: "800",
    },
    {
      name: "Addon 6",
      price: "700",
    },
  ];
  return (
    <div className="choose-list">
      <div className="car-choices-container">
        <h1 className="sub-heading">Choose Car</h1>
        <div className="car-card-container">
          {cardDetails.map((items) => (
            <ChoiceCarCard name={items.name} />
          ))}
        </div>
        <hr className="rounded"></hr>
        <h1 className="sub-heading">Choose package</h1>
        <div className="car-card-container">
          {packageDetails.map((items) => (
            <ChoosePackageCard name={items.name} price={items.price} />
          ))}
        </div>

        <hr className="rounded"></hr>

        <h1 className="sub-heading">Choose Addons</h1>
        <div className="car-card-container">
          {addonsDetails.map((items) => (
            <ChooseAddons name={items.name} price={items.price} />
          ))}
        </div>
        <div className="choose-button">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default ChoiceList;
