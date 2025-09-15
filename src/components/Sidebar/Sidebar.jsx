import React from "react";
import "./Sidebar.css";
import sidebar_1 from "../../assets/sidebar_1.svg";
import sidebar_2 from "../../assets/sidebar_2.svg";
import sidebar_3 from "../../assets/sidebar_3.svg";

export default function Sidebar() {
  return (
    <aside className="sidebar" >
      <div className="side-icon"><img src={sidebar_2}></img></div>
      <div className="side-icon"><img src={sidebar_1}></img></div>
      <div className="side-icon"><img src={sidebar_3}></img></div>
    </aside>
  );
}
