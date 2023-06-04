import React from "react";
import "./Navbar.css";
import {FaAirbnb} from "react-icons/fa";
import {GiHamburgerMenu} from 'react-icons/gi'
import earth from "../assets/earth.svg";
import {BiUserCircle} from 'react-icons/bi'
import {ImEarth} from 'react-icons/im'
export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="fs">
        <FaAirbnb style={{marginRight: "10px", backgroundColor:"#131420"}} color="#ff385c" size={'30px'}  />
        <p style={{background :'#131420', color:"#ff385c"}}>airbnb</p>
      </div>
      
      <div className="ss">
        <button className="primary-button ">Airbnb your home</button>
        <ImEarth className="earth-logo" color="#131420" />
        <button className="loginBtn">
        <GiHamburgerMenu style={{backgroundColor:"#131420", marginRight:"10px"}} size={"20px"} />
          <BiUserCircle style={{backgroundColor:"#131420"}} size={"30px"} />
        </button>
      </div>
    </div>
  );
};
