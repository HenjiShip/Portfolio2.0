import React, { useEffect } from "react";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { BiDownArrowAlt } from "react-icons/bi";
import { useStateContext } from "../context/StateContext";
import cartSvg from "../assets/cart.svg";
import mongodbSvg from "../assets/mongodb.svg";
import figmaSvg from "../assets/figma.svg";
import javascriptSvg from "../assets/javascript.svg";
import nodejsSvg from "../assets/nodejs.svg";
import reactSvg from "../assets/react.svg";
import trainSvg from "../assets/train.svg";
import gitSvg from "../assets/git.svg";

const Home = () => {
  const { handleProjectScroll, handleContactScroll } = useStateContext();

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
            <button onClick={handleContactScroll}>contact me</button>
          </div>
          <div className="split-skills-projects">
            <div className="skills">
              <div className="skills-inner">
                <div className="skills-slide">
                  <img style={{ height: "100px" }} src={cartSvg} />
                  <img src={gitSvg} />
                  <img src={nodejsSvg} />
                  <img src={mongodbSvg} />
                  <img src={figmaSvg} />
                  <img src={javascriptSvg} />
                  <img src={reactSvg} />
                  <img
                    style={{
                      height: "100px",
                    }}
                    src={trainSvg}
                  />
                </div>
              </div>
            </div>
            <div className="project-button">
              <button className="project-container">
                <span onClick={handleProjectScroll} className="project-text">
                  Projects
                </span>
                <BiDownArrowAlt className="down-arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
