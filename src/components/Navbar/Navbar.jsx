import React from "react";
import "./Navbar.css";
import Frame13 from "../../assets/Frame 13.svg";
import Navbar_1 from "../../assets/Navbar_1.svg";
import Navbar_2 from "../../assets/Navbar_2.svg";
import Navbar_3 from "../../assets/Navbar_3.svg";
import Navbar_4 from "../../assets/Navbar_4.svg";
import Navbar_5 from "../../assets/Navbar_5.svg";
import Frame2 from "../../assets/Frame 2.svg";
import Frame19 from "../../assets/Frame 19.svg";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="logo-box"><img src={Frame13}></img></div>
        <div className="logo-box_1"><img src={Frame2 }></img></div>
        <div className="logo-box_2"><img src={Frame19}></img></div>
        <div className="app-title">Executive Overview Dashboard</div>
      </div>
      <div className="navbar-right">
        <button className="nav-icon"><img src={Navbar_1}></img></button>
        <button className="nav-icon"><img src={Navbar_2}></img></button>
        <button className="nav-icon"><img src={Navbar_3}></img></button>
        <button className="nav-icon"><img src={Navbar_4}></img></button>
        <div className="avatar"><img src={Navbar_5}></img></div>

      </div>
    </header>
  );
}
