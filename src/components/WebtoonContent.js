import React from "react";
import { projectsData } from "../data/projectsData";
import { NavLink, useParams } from "react-router-dom";

const WebtoonContent = () => {
  let { section } = useParams();
  const projet = projectsData.find((data) => data.title === section);

  console.log(projet);

  console.log(section);
  return (
    <section>
      <div className="webtoon-content">
        <div className="chap-title">Chapitres :</div>
        <div className="chapter-container">
          {projet &&
            projet.chapitres &&
            Object.keys(projet.chapitres).map((chapitre, index) => (
              // <div className="card-number" key={index}>
              <NavLink to={`/${section}/${chapitre}`} key={index}>
                Chapitre {chapitre}
              </NavLink>
              // </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WebtoonContent;
