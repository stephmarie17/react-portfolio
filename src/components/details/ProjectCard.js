import React from 'react';
import './ProjectCard.css';

const ProjectCard = props => {
  return (
    <div className="project-card">
      <h3>
        {props.icon}
        {props.name}
      </h3>
      <p>{props.description}</p>
      <a href={props.code} alt="Link to repo" target="_blank" rel="noopener noreferrer">
        <button>Code Repo</button>
      </a>
      {props.deploy ? (
        <a href={props.deploy} alt="Link to deploy" target="_blank" rel="noopener noreferrer">
          <button>Deployed App</button>
        </a>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default ProjectCard;
