import React from 'react';
import ProjectCard from '../details/ProjectCard';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className='project-display'>
    <div className='cards'>
      <h1>Projects</h1>
      <ProjectCard name='Admin WYSIWYG' description='A content management system enhancement to provide new preview feature for content developers at Mammoth Media. Utilized HTML, CSS with Material UI, Javascript, Express, NodeJS, and RESTful API.' />
      <ProjectCard name='Dev Finder' description='An application built in React utilizing the GitHub API to allow users to search developer profiles. Deployed on Netlify.' />
      </div>
    </div>
  );
};

export default Portfolio;
