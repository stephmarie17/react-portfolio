import React from 'react';
import './Footer.css';

const setYear = () => {
  let currentYear = new Date().getFullYear();
  return currentYear;
};

const Footer = () => {
  return (
    <footer>
      <p>
        © Stephanie Aurelio | <span id="year">{setYear()}</span>
      </p>
    </footer>
  );
};

export default Footer;
