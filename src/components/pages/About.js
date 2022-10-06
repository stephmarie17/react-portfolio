import React from 'react';
import myImage from '../../assets/portfolio-img.jpg';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div class="heading">
        <h1>About Me</h1>
      </div>
      <div className="about-content-main">
        <img src={myImage} alt="Stephanie Aurelio" id="about-img" />
        <div className="about-content-text">
          <p>
            I'm a technical writer with a developer-focus based in Los Angeles, CA. Before working in tech, I was a librarian for four years, with a Master's in Library and Information from San Jose State University.
            However, my love for technology, learning new things, and problem solving led me to development and, in 2019, I pursued a Full-Stack Coding Bootcamp through UCLA. 
            In that program, I completed projects for LA clients such as <em>Mammoth Media</em> and <em>Zoe</em>, earning my certificate in March 2020. 
          </p>
          <p>
            After obtaining my cert, I worked on <a href="https://www.heroforge.com/">Hero Forge</a> at <em>Sky Castle Studios</em> as a frontend developer. As a developer, I worked on
            the user interface using React. Major projects included a UI redesign and documenting the new design system, design updates to static pages using HTML, CSS, and JavaScript, and implementing
            the Hero Forge Pro subscription from wireframes to product launch.
          </p>
          <p>
            Combining my passion for development along with organizing and analyzing information with my library science background, I currently work as a technical writer.
            As a technical writer at <em>Twilio</em>, I have created content for Partner Enablement, including writing onboarding documentation, coding proof-of-concept apps, writing trainings for multiple personas,
            and creating media using tools such as Articulate360. I am passionate about crafting technical content to diverse users, and developing tools and applications rooted in empathy for the end-user.
          </p>
          </div>
      </div>
      <div classname="about-skills">
        <h3>Tech Skills</h3>
        <ul>
          <li>HTML5 & CSS3</li>
          <li>CSS Frameworks</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>NodeJS & Express</li>
          <li>NoSQL & MySQL</li>
          <li>Git Version Control</li>
          <li>User Experience</li>
          <li>Wireframes</li>
          <li>Responsive Design</li>
        </ul>
        <h3>Content Creation Skills</h3>
        <ul>
          <li>Writing</li>
          <li>Editing</li>
          <li>Instructional Design</li>
          <li>SME Management</li>
          <li>Feedback Loop</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
