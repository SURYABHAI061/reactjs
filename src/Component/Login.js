import React, { useState } from "react";
import '../StyleMain/LoginPage.css'
import User_icon from '../Loginmaterial/person.png'
import email_icon from '../Loginmaterial/email.png'
import password_icon from '../Loginmaterial/password.png'
function Login() {
    const[action,setAction]=useState("Login");
  return (
   
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
            <img src={User_icon} alt="" />
            <input type="text" placeholder="Entert name" />
          </div>}
          
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Enter Email" />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Enter Password" />
          </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password" >
            Lost Password?<span> Click Here</span>
          </div>}
          
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}} >Sign up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
      </div>

  );
}

export default Login;
