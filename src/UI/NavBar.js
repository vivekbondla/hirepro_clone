import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="name">
        <img src="https://static.wixstatic.com/media/c5d8c7_64210ef5598948089634336b2dc3923c~mv2.png/v1/fill/w_348,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1.png" alt="Innogen Logo" className="logo" />
      </div>
      <div className="button_div">
        <button className="button">Find Jobs</button>
      </div>
    </nav>
  );
};

export default NavBar;
