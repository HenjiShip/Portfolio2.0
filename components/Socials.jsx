import React from "react";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";

const Socials = ({ float }) => {
  return (
    <div className="socials">
      <ul>
        <li className={float}>
          <LuGithub style={{ paddingTop: "5px" }} />
          <a href="https://github.com/HenjiShip" target="_blank">
            Github
          </a>
        </li>
        <li className={float}>
          <CiLinkedin style={{ paddingTop: "5px" }} />
          <a href="https://www.linkedin.com/in/henji/" target="_blank">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
