import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
 
const NavBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
 
  const handleSearch = (term) => {
    setSearchTerm(term);
    // Call the onSearch prop if it is defined and is a function
    if (onSearch && typeof onSearch === "function") {
      onSearch(term);
    }
  };
 
  return (
    <nav className="navbar">
      <div className="name">
        <Link to="/">
          <img
            src="https://static.wixstatic.com/media/c5d8c7_64210ef5598948089634336b2dc3923c~mv2.png/v1/fill/w_348,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1.png"
            alt="Innogen Logo"
            className="logo"
          />
        </Link>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for jobs..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
        {searchTerm && (
          <div className="search-results">
            {/* <p>Results for: "{searchTerm}"</p> */}
          </div>
        )}
      </div>
    </nav>
  );
};
 
export default NavBar;