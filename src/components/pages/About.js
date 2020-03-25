import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>
        I'm based in{' '}
        <span role="img" aria-label="palm tree">
          🌴
        </span>{' '}
        Los Angeles, CA. I was a{' '}
        <span role="img" aria-label="books">
          📚
        </span>{' '}
        librarian for four years after earning a Master's in Library and
        Information Science from SJSU. Many people aren't sure what a librarian
        does; basically, we find, curate, and organize information for people in
        a systematic way.
      </p>
      <p>
        My love for problem solving, data management, and organization led me to
        discovering a passion for{' '}
        <span role="img" aria-label="laptop">
          💻
        </span>{' '}
        coding. To grow my skills, I quit my library job to learn to code
        full-time. In March 2020, I obtained a Full-Stack Coding Certificate
        from{' '}
        <span role="img" aria-label="graduation cap">
          🎓
        </span>{' '}
        UCLA.
      </p>
      <p>
        Besides coding, I spend my time reading, practicing yoga, and hanging
        out with my dog. I'm currently learning how to{' '}
        <span role="img" aria-label="skateboard">
          🛹
        </span>{' '}
        skateboard.
      </p>

      <ul>
        <h3>Tech Skills</h3>
        <li>✔︎ HTML5 & CSS3</li>
        <li>✔︎ JavaScript & jQuery</li>
        <li>✔︎ ReactJS</li>
        <li>✔︎ NodeJS & Express</li>
        <li>✔︎ MongoDB</li>
        <li>✔︎ Git</li>
      </ul>
    </div>
  );
};

export default About;
