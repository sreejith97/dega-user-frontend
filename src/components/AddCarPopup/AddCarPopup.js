import React, { useEffect, useState } from "react";
import "./AddCarPopup.css";
import axios from "../../axios";
import { useSelector } from "react-redux";

function AddCarPopup({ closeAddPopup }) {
  const user = useSelector((state) => state.loggedInReducers.user);
  const [vehicles, setVehicles] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedVehicle, setSelectedVehicle]= useState(null);
  const [celaningTime , setCleaningTime] = useState(null);
  const [registrationNumber, setRegistrationNumber] = useState();
  const [parkingLot, setParkingLot] = useState();
  useEffect(() => {
    axios
      .get("/user/get-all-vehicles", { headers: { "auth-token": user.token } })
      .then((response) => {
        //console.log(response.data);
        if (response.data == "Invalid token") {
          window.location.href = "/users/login";
        } else {
          setVehicles(response.data);
        }
      });
  }, []);
  const formSubmit = (e)=>{
    e.preventDefault();
    if(celaningTime == null){
      window.alert("Please select cleaning time")
      //console.log("hii");
    }else if(selectedVehicle == null){
      window.alert("Please select your vehicle")
    }else{
      axios.post('/user/register-user-vehicle',{"ownerId":user._id,"vehicleId":selectedVehicle,"parkingLot":parkingLot,"registrationNumber":registrationNumber,"cleaningTime":celaningTime},{"headers":{"auth-token":(user.token)}}).then((response)=>{
        console.log(response.data);
        if(response.data.error){
          window.alert(response.data.error)
        }else{
          window.alert(response.data.success);
          closeAddPopup(false);

        }
      })
    }
    //console.log(selectedVehicle, celaningTime, registrationNumber, parkingLot);

  }
  return (
    <div>
      <div  className="popup-background">
        <div className="popup-container">
          <div className="flex justify-center mb-5">
            <div>
              <h1 className="uppercase font-extrabold text-2xl">Add New Car</h1>
              {vehicles == null ? (<><h4>LOADING</h4></>):null}
            </div>
          </div>
          <form action="" onSubmit={formSubmit}>
            <div className="input-container mb-5">
              <div className="lable">Vehicle Name</div>
              <div>
                <select required name="cars" id="cars" onChange={(e)=>{setSelectedVehicle(e.target.value);}}>
                  <option selected disabled>select</option>
                  {vehicles != null ? (<>{vehicles.map(obj => {
                    return (
                        <option value={obj._id}>{obj.vehicleName}</option>
                    )
                  })}</>):(null)}
                  
                </select>
              </div>
            </div>
            <div className="input-container mb-5">
              <div className="lable">Reg Number:</div>{" "}
              <div>
                <input
                  required
                  onChange={(e)=>{setRegistrationNumber(e.target.value)}}
                  className=" p-3 focus:border-blue-500 rounded border-2 outline-none "
                  type="text"
                />
              </div>
            </div>

            <div className="input-container mb-5">
              <div className="lable">Parking Lot:</div>{" "}
              <div>
                <input
                required
                onChange={(e)=>{setParkingLot(e.target.value)}}
                  className=" p-3 focus:border-blue-500 rounded border-2 outline-none "
                  type="text"
                />
              </div>
            </div>
            <div className="input-container mb-5">
              <div className="lable">Cleaning Time:</div>{" "}
              <div>
                <select required onChange={(e)=>setCleaningTime(e.target.value)}>
                  <option selected disabled>select</option>
                  <option  value="1">06:00 am - 08:00 am</option>
                  <option value="2">04:00 pm - 06:00 pm</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between">
              <button className="edit-button">Submit</button>
              <button
                onClick={() => closeAddPopup(false)}
                className="cancel-button"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCarPopup;
