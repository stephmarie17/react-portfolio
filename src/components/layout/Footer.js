import React from 'react';
import './Footer.css';

const setYear = () => {
  let currentYear = new Date().getFullYear();
  return currentYear;
};

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://github.com/stephmarie17" alt="git hub">
          <i className="fab fa-github-square" />
        </a>{' '}
        <a
          href="https://www.linkedin.com/in/stephaniemaurelio/"
          alt="linked in"
        >
          <i className="fab fa-linkedin" />
        </a>{' '}
        <a href="https://twitter.com/magicofcode" alt="twitter">
          <i className="fab fa-twitter-square" />
        </a>{' '}
        <a href="https://www.instagram.com/steph.aurelio/" alt="instagram">
          <i className="fab fa-instagram-square" />
        </a>
      </div>
      <p id='photo-credit'>
        Photo by <a href="https://unsplash.com/@fezbot2000?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" alt="Fezbot2000">Fezbot2000</a> on <a href="https://unsplash.com/" alt="unsplash">Unsplash</a>.
      </p>
      <p>
        © Stephanie Aurelio | <span id="year">{setYear()}</span>
      </p>
    </footer>
  );
};

export default Footer;
