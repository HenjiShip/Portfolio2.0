import React from "react";
import Avatar from "../assets/Avatar.png";
import { FiArrowUpRight } from "react-icons/fi";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="avatar-container">
          <span>About Me</span>
          <img src={Avatar} alt="avatar image" />
        </div>
        <div className="about-me-container">
          <div className="about-me">
            <span>
              Hi, my name is Henry Li. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </span>
            <button>
              <FiArrowUpRight className="react-icon" />
              More projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
