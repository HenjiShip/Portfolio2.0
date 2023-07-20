import React, { useState } from "react";
import Modal from "./Modal";

// Used in portfolio
const Projects = ({ proj }) => {
  const { name, coverImage, coverGIF } = proj;
  const [isHovered, setIsHovered] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div
        className="grid-item"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setOpenModal(true)}
      >
        {isHovered ? (
          <img src={coverGIF} alt={name} />
        ) : (
          <img src={coverImage} alt={name} />
        )}
        <div className="overlay-text">{name}</div>
      </div>

      {openModal && (
        <>
          <div
            onClick={() => setOpenModal(false)}
            className="modal-gray-background"
          ></div>
          <Modal
            proj={proj}
            setOpenModal={setOpenModal}
          />
        </>
      )}
    </div>
  );
};

export default Projects;
