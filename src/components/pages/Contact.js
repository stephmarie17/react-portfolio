import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <p>
          <span role="img" aria-label="email me">
            📨
          </span>{' '}
          <a
            href="mailto:stephanie.m.aurelio@gmail.com?subject=Message via Portfolio"
            alt="Email"
          >
            Email Me
          </a>
        </p>
        <p>
          <span role="img" aria-label="tweet at me">
            💬
          </span>{' '}
          <a href="https://twitter.com/magicofcode" alt="Twitter">
            Tweet Me
          </a>
        </p>
      </div>
    </div>
  );
};
export default Contact;
