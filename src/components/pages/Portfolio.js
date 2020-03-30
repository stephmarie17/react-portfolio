import React from 'react';
import ProjectCard from '../details/ProjectCard';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="project-display">
      <h1>Projects</h1>
      <div className="cards">
        <ProjectCard
          icon={
            <span role="img" aria-label="iphone">
              📱
            </span>
          }
          name="Admin WYSIWYG"
          description="A content management system enhancement to provide new mobile preview feature for content developers at Mammoth Media. Built with HTML, CSS with Semantic UI, Javascript, Express, NodeJS, and RESTful API."
          code="https://github.com/stephmarie17/project-2"
        />
        <ProjectCard
          icon={
            <span role="img" aria-label="magnifying glass">
              🔎
            </span>
          }
          name="Dev Finder"
          description="An application built in React with the GitHub API to allow users to search developer profiles and view profile details. Deployed on Netlify."
          code="https://github.com/stephmarie17/dev-finder"
          deploy="https://tender-elion-5cc79d.netlify.com/"
        />
        <ProjectCard
          icon={
            <span role="img" aria-label="rainbow">
              🌈
            </span>
          }
          name="Gradient Background Generator"
          description="Create a gradient background easily with this simple generator. Built with HTML, CSS, and Javascript. Hosted on GitHub Pages."
          code="https://github.com/stephmarie17/background-generator"
          deploy="https://stephmarie17.github.io/background-generator/"
        />
        <ProjectCard
          icon={
            <span role="img" aria-label="clipboard">
              📋
            </span>
          }
          name="ContactKeeper"
          description="A full stack MERN application with user registration and login authentication and CRUD functionality. Deployed on Heroku."
          code="https://github.com/stephmarie17/contact-keeper"
          deploy="https://frozen-earth-46999.herokuapp.com/login"
        />
      </div>
    </div>
  );
};

export default Portfolio;
