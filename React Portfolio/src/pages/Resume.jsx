import React from 'react';

const Resume = () => {
  return (
    <div>
      <h2>Resume</h2>
      <p>
        Download my resume:{' '}
        <a href="path/to/your-resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume.pdf
        </a>
      </p>
      <h3>Proficiencies</h3>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </div>
  );
};

export default Resume;
