import React from "react";
import { useStateContext } from "../context/StateContext";

const Portfolio = () => {
  const {project} = useStateContext()
  return (
    <div className="portfolio">
      <div ref={project} className="container">Portfolio</div>
    </div>
  );
};

export default Portfolio;
