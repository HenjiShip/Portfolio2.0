import React from "react";
import Projects from "../components/Projects";
import projects from "../constants/portfolioProjects";
import { useStateContext } from "../context/StateContext";

const Portfolio = () => {
  const { projectScroll } = useStateContext();

  return (
    <div className="portfolio">
      <div ref={projectScroll} className="container">
        <div className="grid-container">
          {projects.map((proj) => {
            return <Projects key={proj.name} proj={proj} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
