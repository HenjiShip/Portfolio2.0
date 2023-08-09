import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { AiFillCloud } from "react-icons/ai";

const Modal = ({ proj, CV, setOpenModal }) => {
  const {
    name,
    features,
    images,
    description,
    technologies,
    githubLink,
    liveDemo,
  } = proj || {};

  const [mainImage, setMainImage] = useState(
    images && images.length > 0 ? images[0] : null
  );

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="modal-container">
      <div className="close-container">
        <button className="close-button" onClick={() => setOpenModal(false)}>
          X
        </button>
      </div>
      {proj ? (
        <div className="inner-container">
          <img className="main-image" src={mainImage} alt={name} />
          <div className="image-grid">
            {images.map((image, i) => {
              return (
                <img
                  key={i}
                  src={image}
                  onClick={() => {
                    setMainImage(image);
                    setSelectedImageIndex(i);
                  }}
                  className={i === selectedImageIndex ? "selected-image" : ""}
                />
              );
            })}
          </div>
          <h1>{name}</h1>
          <div className="code-demo-container">
            <button className="code-button">
              <a href={githubLink} target="_blank">
                <div className="button-content">
                  Source Code <FaGithub size="20px" color="white" />
                </div>
              </a>
            </button>
            <button className="demo-button">
              <a href={liveDemo} target="_blank">
                <div className="button-content">
                  Live Demo <AiFillCloud size="20px" />
                </div>
              </a>
            </button>
          </div>
          <div className="description">
            <span style={{ fontWeight: "bold" }}>Description: </span>
            <br />
            <span>{description}</span>
          </div>
          <br />
          <span style={{ fontWeight: "bold" }}>Features: </span>
          <div style={{ padding: "6px 0px 0px 25px" }}>
            <ul>
              {features.map((feature) => {
                return <li>{feature}</li>;
              })}
            </ul>
          </div>
          <div className="technologies">
            <span>{technologies}</span>
          </div>
        </div>
      ) : (
        <div style={{ height: "92%", width: "99%" }}>
          <iframe src={CV} title="Henry Li CV" width="100%" height="100%" />
        </div>
      )}
    </div>
  );
};

export default Modal;
