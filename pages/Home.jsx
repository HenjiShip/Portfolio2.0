import React from "react";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { BiDownArrowAlt } from "react-icons/bi";
import { useStateContext } from "../context/StateContext";

const Home = () => {
  const { handleProject, handleContact } = useStateContext();
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
          <div className="skills">Skills</div>
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
