import React, { useState } from "react";
import "./Login.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import axios from '../../axios';
import {useDispatch} from 'react-redux';
import { setLoggedInCredentials } from '../../redux/actions/generalActions'

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const formSubmit = (e)=>{
    e.preventDefault();
    //console.log(email, password);
    setLoading(true);
    axios.post('/user/user-login',{email:email,password:password}).then((response)=>{
      setLoading(false);
      //console.log(response.data);
      if(response.data.error){
        setError(response.data.error);
      }else{

        dispatch(setLoggedInCredentials(response.data));
        localStorage.setItem('userId',response.data.token);
        navigate('/user')
        

      }

    })
    

  }
  return (
    <div>
      <div className="login-container">
        <div className="login-form-logo-container">
          <div>
            <img src="../assets/DegaLogo.png" alt="" />
          </div>
          <div className="logo-container-heading">
            <h1>Premium Car Care</h1>
            <p>Delivering Clean Mean Machines</p>
          </div>
        </div>
        <div className="login-form-container">
          <div className="login-form-heading">
            
            <h1>Login</h1>
            {error ? (<><h4>{error}</h4></>):(null)}
            {loading ? (<h1>LOADING</h1>):(null)}
          </div>
          <div className="login-form-profile-img">
            <img src="../svg/avatar.svg" alt="" />
          </div>

          <form onSubmit={formSubmit} className="login-form">
            <div className="inputname w-full px-8">
              <label htmlFor="">Email</label>
              <input
              required
                type="email"
                autoComplete="off"
                className="mb-5 p-3 focus:border-blue-500 rounded border-2 outline-none w-full"
                placeholder="@example.com"
                onChange={(e)=>{setEmail(e.target.value); setError(false);}}
              />
            </div>
            <div className="inputpassword w-full px-8">
              <label htmlFor="">Password</label>
              <input
               required
                className="mb-5 p-3 focus:border-blue-500 rounded border-2 outline-none w-full"
                type="password"
                autoComplete="off"
                placeholder="**********"
                onChange={(e)=>{setPassword(e.target.value); setError(false);}}
              />
            </div>
            <div className="forgot-container">
              <p className="mb-2">
                Forgot Password?{" "}
                <span>
                  <Link to="/users/signup">Signup</Link>
                </span>
              </p>
            </div>
            <button className="bg-blue-500">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
