import React from 'react';
import './Hero.css';
import { Link } from '@reach/router';

const Hero = () => {
  return (
  <div>
    <section class="masthead" role="img" aria-label="Image Description">
      <h1>
        Stephanie Aurelio
      </h1>
      <h2>My name is Stephanie. I'm a Frontend Developer. I like to build things and make them pretty. Let's make cool stuff together!</h2>
      <Link to='/about'>
      <button>
        Learn more
      </button>
      </Link>
    </section>
  </div>
  );
};

export default Hero;
