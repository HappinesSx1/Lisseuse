import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="navigation-container">
        <div className="left-container">
          <div className="logo-container">
            <NavLink to="/">
              <h1>
                MUGUN<span>WHA</span>
              </h1>
            </NavLink>
          </div>
          <div className="quick-section">
            <div className="quick-container">
              <h2>Home</h2>
              <h2>Manwha</h2>
            </div>
          </div>
        </div>
        <div className="research-section">
          <div className="research-container">
            <h2>Q</h2>
            <h2>/</h2>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
