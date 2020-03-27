import React from 'react';
import './Hero.css';
import { Link } from '@reach/router';

const Hero = () => {
  return (
    <div className="hero">
      <h1>
        <span className="hero-header">
          Welcome{' '}
          <span role="img" aria-label="wave hello">
            👋
          </span>
        </span>
        <p className="hero-text">
          My name is Stephanie. I'm a Frontend Developer. I like to build things
          and make them pretty. Let's make cool stuff together!
        </p>
        <p className="hero-link">
          <span role="img" aria-label="glasses emoji">
            🤓{' '}
          </span>
          <Link to="/about">Learn about me</Link>
        </p>
        <p className="hero-link">
          <span role="img" aria-label="laptop">
            💻‍{' '}
          </span>
          <Link to="/portfolio">Check out my work</Link>
        </p>
        <p className="hero-link">
          <span role="img" aria-label="notepad">
            📝{' '}
          </span>
          <Link to="/blog">Read my tech musings</Link>
        </p>
        <p className="hero-link">
          <span role="img" aria-label="phone">
            ☎️{' '}
          </span>
          <Link to="/contact">Get in touch</Link>
        </p>
      </h1>
    </div>
  );
};

export default Hero;
