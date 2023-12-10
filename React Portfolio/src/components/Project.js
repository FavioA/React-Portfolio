// Project.js
import React from 'react';

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <img src={image} alt={`${title} project`} />
      <h3>{title}</h3>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        Deployed Link
      </a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        GitHub Repository
      </a>
    </div>
  );
};

export default Project;
