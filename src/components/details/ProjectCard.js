import React from 'react';
import './ProjectCard.css';

const ProjectCard = props => {
  return (
    <div className="project-card">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default ProjectCard;
