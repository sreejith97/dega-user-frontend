import "./App.css";
import { BeakerIcon, TrendingDown } from "@heroicons/react/solid";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Credentials from "./pages/Credentials/Credentials";
import { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import {setLoggedInCredentials} from './redux/actions/generalActions'
import axios from './axios'

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
   
    axios.get('/user/get-user',{headers:{"auth-token":(localStorage.getItem("userId"))}}).then((response) => {
     // console.log(response);
      if( response.data.error || response.data == "Invalid token") {

        navigate("/users/login");
        setAuth(-1);
        //console.log("hi");
        exit();
      }else{
        response.data.token=localStorage.getItem("userId");
        dispatch(setLoggedInCredentials(response.data))
        setAuth(1)
      }
    })
    
  }, [])
  const [auth, setAuth] = useState(0);
  const  [token,setToken] = useState(null);
 
  //console.log("token",token);
 // {token ? setAuth(1):setAuth(-1)}
  return (
    <div className="App">
      {auth == 0 ? (<>LOADING</>):(<><Routes>
        <Route path="/*" element={<Dashboard auth={auth} />}></Route>
        <Route path="/users/*" element={<Credentials auth={auth} />}></Route>
      </Routes></>)}
      
    </div>
  );
}

export default App;