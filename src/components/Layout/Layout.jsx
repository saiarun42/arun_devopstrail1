import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout-root">
      <Navbar />
      <div className="layout-body">
        <Sidebar />
        <div className="layout-content">
          {children}
        </div>
      </div> 
    </div>
  );
}
