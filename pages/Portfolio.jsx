import React from "react";
import Projects from "../components/Projects";
import { useStateContext } from "../context/StateContext";
import drizco from "../assets/drizco.png";
import drizcoGIF from "../assets/drizco.gif";

const Portfolio = () => {
  const { projectScroll } = useStateContext();
  const projects = [
    {
      name: "Drizco",
      coverImage: drizco,
      coverGIF: drizcoGIF,
      images: ["image1", "image2", "image3"],
      description: "I hate mustard",
    },
    {
      name: "Stickstock",
      coverImage: drizco,
      coverGIF: drizcoGIF,
      images: ["image1", "image2", "image3"],
      description: "I hate mustard too",
    },
    {
      name: "Chateth",
      coverImage: drizco,
      coverGIF: drizcoGIF,
      images: ["image1", "image2", "image3"],
      description: "I hate mustard also",
    },
    {
      name: "Gluetube",
      coverImage: drizco,
      coverGIF: drizcoGIF,
      images: ["image1", "image2", "image3"],
      description: "I hate mustard also",
    },
    {
      name: "Portfolio v1.0",
      coverImage: drizco,
      coverGIF: drizcoGIF,
      images: ["image1", "image2", "image3"],
      description: "I hate mustard also",
    },
    {
      name: "Movie Search App",
      coverImage: drizco,
      coverGIF: drizcoGIF,
      images: ["image1", "image2", "image3"],
      description: "I hate mustard also",
    },
  ];
  return (
    <div className="portfolio">
      <div ref={projectScroll} className="container">
        <div className="grid-container">
          {projects.map((proj) => {
            return <Projects proj={proj} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
