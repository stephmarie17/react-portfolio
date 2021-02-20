import React from 'react';
import './Hero.css';
import { Link } from '@reach/router';
import laptop from '../../assets/techgirl.png';

const Hero = () => {
  return (
    <div>
      <section className="masthead">
        <section className="text-top">
          <h1>Hi, I'm Stephanie Aurelio</h1>
          <h2>
            You can call me Steph. I'm a software developer specializing in
            frontend user interfaces. I like to build things and make them
            pretty.
          </h2>
        </section>
        <section className="text-bottom">
          <img
            id="hero-graphic"
            src={laptop}
            alt="Lavender laptop with cute hearts"
            height="400"
          />
          <Link to="/about">
            <button>Learn more</button>
          </Link>
        </section>
      </section>
    </div>
  );
};

export default Hero;
