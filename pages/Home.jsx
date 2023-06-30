import React, { useEffect } from "react";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { BiDownArrowAlt } from "react-icons/bi";
import { useStateContext } from "../context/StateContext";

const Home = () => {
  const { handleProject, handleContact } = useStateContext();

  // selects all images in skills-slide and applies that sass keyframe animation to them
  useEffect(() => {
    // Generate random animation delays and durations for each image
    const skillsSlides = document.querySelectorAll(".skills-slide img");
    skillsSlides.forEach((slide) => {
      const delay = Math.random() * 1; // Random delay between 0 and 2 seconds
      const duration = 3; // Random duration between 1 and 3 seconds

      slide.style.animationDelay = `${delay}s`;
      slide.style.animationDuration = `${duration}s`;
    });
  }, []);

  return (
    <div className="home">
      <ul>
        <li>
          <LuGithub style={{ paddingTop: "5px" }} />
          <a href="https://github.com/HenjiShip" target="_blank">
            Github
          </a>
        </li>
        <li>
          <CiLinkedin style={{ paddingTop: "5px" }} />
          <a href="https://www.linkedin.com/in/henji/" target="_blank">
            LinkedIn
          </a>
        </li>
      </ul>
      <div className="container">
        <div className="title">
          <div style={{ height: "150px" }}></div>
          <h1>Henry Li</h1>
          <h3>Full Stack Developer</h3>
          <div className="button-container">
            <button onClick={handleContact}>contact me</button>
          </div>
          <div className="skills">
            <div className="skills-inner">
              <div className="skills-slide">
                <img style={{ height: "100px" }} src="../assets/cart.svg" />
                <img src="../assets/figma.svg" />
                <img src="../assets/mongodb.svg" />
                <img src="../assets/nodejs.svg" />
                <img src="../assets/git.svg" />
                <img src="../assets/javascript.svg" />
                <img src="../assets/react.svg" />
                <img
                  style={{
                    height: "100px",
                  }}
                  src="../assets/train.svg"
                />
              </div>
            </div>
          </div>
          <div className="project-button">
            <button className="project-container">
              <span onClick={handleProject} className="project-text">
                Projects
              </span>
              <BiDownArrowAlt style={{ fontSize: "25px" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
