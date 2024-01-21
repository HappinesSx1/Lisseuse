import React from "react";
import { projectsData } from "../data/projectsData";
import { NavLink, useParams } from "react-router-dom";

const DisplayPage = () => {
  let { section, chapter } = useParams();
  chapter = parseInt(chapter, 10); // Convertir la chaîne en nombre

  const newData = projectsData.find((data) => data.title === section);

  const chapitreChoose = newData.chapitres[chapter];

  let keys = Object.keys(newData.chapitres);
  let length = keys.length;

  console.log(length);
  console.log(chapter);

  return (
    <>
      <div className="nav-btn">
        <div className="nav-btn-container">
          <div className="btn-back btn">
            <NavLink to={`/${newData.title}`}>Back</NavLink>
          </div>
          <div className="selection-btn">
            <div
              /*className="btn-next btn" */ className={`btn-next btn ${
                chapter === length ? "disabled" : ""
              }`}
            >
              <NavLink to={`/${section}/${chapter + 1}`}>Next</NavLink>
            </div>
            <div
              /*className="btn-prev btn" */ className={`btn-prev btn ${
                chapter === 1 ? "disabled" : ""
              }`}
            >
              <NavLink to={`/${section}/${chapter - 1}`}>Previous</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="list-image">
        <div className="ul-image">
          {chapitreChoose.map((projet, index) => (
            <div className="card" key={index}>
              <img src={projet} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayPage;
