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
      githubLink: "https://github.com/HenjiShip/Ecommerce",
      liveDemo: "https://drizco.netlify.app",
      technologies:
        "Javascript, Sanity CMS, NextJS, React, Stripe, JSONWebToken, Express, NodeJS, Axios, Google OAuth",
      images: ["image1", "image2", "image3"],
      description: "I hate mustard",
    },
    {
      name: "Stickstock",
      coverImage: drizco,
      coverGIF: drizcoGIF,
      githubLink: "https://github.com/HenjiShip/StickStock",
      liveDemo: "https://stickstock.netlify.app",
      technologies:
        "Javascript, NodeJS, ExpressJS, MongoDB, Cloudinary CDN, Redux, Axios, Google OAuth, MaterialUI, JSONWebToken",
      images: ["image1", "image2", "image3"],
      description: "I hate mustard too",
    },
    {
      name: "Chateth",
      coverImage: drizco,
      coverGIF: drizcoGIF,
      githubLink: "https://github.com/HenjiShip/Chateth",
      liveDemo: "https://chateth.netlify.app",
      technologies: "Vite, Javascript, SASS, React, Firebase",
      images: ["image1", "image2", "image3"],
      description: "I hate mustard also",
    },
    {
      name: "Gluetube",
      coverImage: drizco,
      coverGIF: drizcoGIF,
      githubLink: "https://github.com/HenjiShip/Youtube-Clone",
      liveDemo: "https://gluetube.netlify.app",
      technologies: "React, Javascript, CSS, RapidAPI, Axios",
      images: ["image1", "image2", "image3"],
      description: "I hate mustard also",
    },
    {
      name: "Portfolio v1.0",
      coverImage: drizco,
      coverGIF: drizcoGIF,
      githubLink: "https://github.com/HenjiShip/Portfolio",
      liveDemo: "https://app.netlify.com/sites/henji/overview",
      technologies: "React, Javascript, CSS",
      images: ["image1", "image2", "image3"],
      description: "I hate mustard also",
    },
    {
      name: "Snake Game",
      coverImage: drizco,
      coverGIF: drizcoGIF,
      githubLink: "https://github.com/HenjiShip/worm-game",
      liveDemo: "https://sesameworm.netlify.app",
      technologies: "Phaser 3",
      images: ["image1", "image2", "image3"],
      description: "I hate mustard also",
    },
  ];
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
