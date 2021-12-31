import "./App.css";
import { BeakerIcon, TrendingDown } from "@heroicons/react/solid";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Credentials from "./pages/Credentials/Credentials";
import { useEffect, useState } from "react";
import axios from './axios'

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    //setToken((localStorage.getItem("userId")));
    //setAuth(1);
    axios.get('/user/get-user',{headers:{"auth-token":(localStorage.getItem("userId"))}}).then((response) => {
      console.log(response);
      if( response.data.error || response.data == "Invalid token") {

        navigate("/users/login");
        setAuth(-1);
        //console.log("hi");
        exit();
      }else{
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