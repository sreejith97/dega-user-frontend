import React, { useEffect, useState } from "react";
import "./AddCarPopup.css";
import axios from '../../axios';
import {useSelector} from 'react-redux'

function AddCarPopup({ closeAddPopup }) {

  const user = useSelector((state)=>state.loggedInReducers.user);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
   
    axios.get('/user/get-all-vehicles',{headers:{"auth-token":(user.token)}}).then((response)=>{
      console.log(response.data);
      if(response.data == "Invalid token"){
        window.location.href ="/users/login"
      }else{
          setVehicles(response.data);
      }
    })
   
  }, [])
  return (
    <div>
      <div onClick={() => closeAddPopup(false)} className="popup-background">
        <div className="popup-container">
          <div className="flex justify-center mb-5">
            <div>
              <h1 className="uppercase font-extrabold text-2xl">Add New Car</h1>
            </div>
          </div>
          <form action="">
            <div className="input-container mb-5">
              <div className="lable">Company Name</div>
              <div>
                <input
                  className=" p-3 focus:border-blue-500 rounded border-2 outline-none "
                  type="text"
                />
              </div>
            </div>
            <div className="input-container mb-5">
              <div className="lable">Model:</div>{" "}
              <div>
                <input
                  className=" p-3 focus:border-blue-500 rounded border-2 outline-none "
                  type="text"
                />
              </div>
            </div>

            <div className="input-container mb-5">
              <div className="lable">Color:</div>{" "}
              <div>
                <input
                  className=" p-3 focus:border-blue-500 rounded border-2 outline-none "
                  type="text"
                />
              </div>
            </div>

            <div className="input-container mb-5">
              <div className="lable">Reg Number:</div>{" "}
              <div>
                <input
                  className=" p-3 focus:border-blue-500 rounded border-2 outline-none "
                  type="text"
                />
              </div>
            </div>

            <div className="input-container mb-5">
              <div className="lable">Parking Slot:</div>{" "}
              <div>
                <input
                  className=" p-3 focus:border-blue-500 rounded border-2 outline-none "
                  type="text"
                />
              </div>
            </div>
            <div className="input-container mb-5">
              <div className="lable">Year:</div>{" "}
              <div>
                <input
                  className=" p-3 focus:border-blue-500 rounded border-2 outline-none "
                  type="text"
                />
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
