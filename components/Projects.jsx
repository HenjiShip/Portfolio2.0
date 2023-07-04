import React, { useState } from "react";

const Projects = ({ proj }) => {
  const { name, coverImage, coverGIF, images, description } = proj;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="grid-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <img src={coverGIF} alt={name} />
      ) : (
        <img src={coverImage} alt={name} />
      )}
      <div className="overlay-text">{name}</div>
    </div>
  );
};

export default Projects;
