import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <Project
        title="Project 1"
        image="path/to/project1-image.jpg"
        deployedLink="https://example.com/project1"
        githubLink="https://github.com/your-username/project1"
      />
      {/* Repeat the above Project component for each project */}
    </div>
  );
};

export default Portfolio;
