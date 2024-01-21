import React from "react";
import { projectsData } from "../data/projectsData";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="hero-container">
      {projectsData.map((projet, index) => (
        <div className="card-header" key={index}>
          <NavLink to={`/${projet.title}`}>
            <img src={projet.littleimg} alt="" />
            <p>{projet.title}</p>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Header;
