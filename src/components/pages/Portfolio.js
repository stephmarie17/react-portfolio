import React from 'react';
import ProjectCard from '../details/ProjectCard';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="project-display">
      <h1>Development Projects</h1>
      <div className="cards">
        <ProjectCard
          icon={
            <span role="img" aria-label="light bulb">
              💡
            </span>
          }
          name="Learn Zoe"
          description="User interface for Zoe, a program developed by Apelab, for students to learn coding through AR/VR environments. MERN stack application with authentication, RESTful API, and using Context API and Hooks. Deploy is a demo version."
          code="https://github.com/alexandramj92/zoe-project"
          deploy="https://zoe-project.herokuapp.com/"
        />
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
            <span role="img" aria-label="books">
              📚
            </span>
          }
          name="ReadIt"
          description="A frontend application built in React paginating top posts from the Reddit API. Uses Hooks and Axios. Deployed on Netlify."
          code="https://github.com/stephmarie17/readit"
          deploy="https://cocky-swartz-f47a14.netlify.app/"
        />
        <ProjectCard
          icon={
            <span role="img" aria-label="laptop">
              💻
            </span>
          }
          name="Responsive Web Design Template"
          description="Demo web design for a yoga & wellness brand. Fully responsive with animated hamburger menu navigation."
          code="https://github.com/stephmarie17/responsive-layout"
          deploy="https://stephmarie17.github.io/responsive-layout/"
        />
      </div>
      <h1>Technical Writing Samples</h1>
      <div className="cards">
        <ProjectCard
          icon={
            <span role="img" aria-label="pen">
              🖋
            </span>
          }
          name="Writing Samples"
          description="A selection of writing samples and example technical courses."
          code="https://github.com/stephmarie17/writing-samples"
        />

      </div>
    </div>
  );
};

export default Portfolio;
