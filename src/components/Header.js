import { Link } from "react-router";
import logo from "../utils/logo.png";
import { useState } from "react";

const Header = () => {

  const [btnName, setbtnName]=useState("LogIn");
  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-item">
        <ul>
          <li className="item"><Link to="/">Home</Link></li>
          <li className="item"><Link to="/contact"> Contracts</Link></li>
          <li className="item"><Link to="/about"> About</Link></li>
          <li className="item">Cart</li>
          <li className="item"><button type="button" className="login-btn" onClick={()=>{
            btnName==="LogIn" ? setbtnName("LogOut"): setbtnName("LogIn")
          }}>{btnName}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
