import React from "react";
import { projectsData } from "../data/projectsData";
import { useParams } from "react-router-dom";

const Summary = () => {
  let { section } = useParams();

  const projet = projectsData.find((data) => data.title === section);

  return (
    <>
      <header>
        <div className="header-summary">
          <img src={projet.littleimg} alt="" />
          <div className="summary-content">
            <div className="post-content">
              <h1>Sorcery Tales: Yokai Harem</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                non quaerat, molestiae necessitatibus ullam beatae.
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Summary;
