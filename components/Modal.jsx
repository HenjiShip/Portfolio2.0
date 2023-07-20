import React from "react";

// used in Projectsjsx
const Modal = ({ proj, setOpenModal }) => {
  const { name, images, description, technologies, githubLink, liveDemo } =
    proj;
  return (
    <div className="modal-container">
      <button onClick={() => setOpenModal(false)}>X</button>
      <h1>{name}</h1>
      {images.map((image) => {
        return <span>{image}</span>;
      })}
      <div>
        <a href={githubLink} target="_blank">
          Source Code
        </a>
        <a href={liveDemo} target="_blank">
          Live Demo
        </a>
      </div>
      <div>
        <span>{description}</span>
      </div>
      <div>
        <span>{technologies}</span>
      </div>
    </div>
  );
};

export default Modal;
