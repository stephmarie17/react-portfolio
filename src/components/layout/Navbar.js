import React from 'react';
import { Link } from '@reach/router';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
      <h1>
        <Link to="/" className="icon-link">
          {`<SA/>`}{' '}
        </Link>
      </h1>
      <ul>
        <Link to="/about" className="styled-link">
          <li>About</li>
        </Link>
        <Link to="/portfolio" className="styled-link">
          <li>Portfolio</li>
        </Link>
        <Link to="/blog" className="styled-link">
          <li>Blog</li>
        </Link>
        <Link to="/contact" className="styled-link">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
