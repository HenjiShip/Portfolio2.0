import React, { useState } from "react";
import Avatar from "../assets/Avatar.png";
import { FiArrowUpRight } from "react-icons/fi";
import Modal from "../components/Modal";
import CV from "../assets/CV.pdf";

const About = () => {
  const [openModal, setOpenModal] = useState(false);
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
              Hi, my name is Henry Li. I'm a full stack developer focusing on Javascript and cloud related technologies. Check out my resume or contact me for more information.
            </span>
            <button onClick={() => setOpenModal(true)}>
              <FiArrowUpRight className="react-icon" />
              Resume
            </button>
            {openModal && (
              <>
                <div
                  onClick={() => setOpenModal(false)}
                  className="modal-gray-background"
                ></div>
                <Modal CV={CV} setOpenModal={setOpenModal} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
