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
      <Link to="/about" className="styled-link">
        About
      </Link>{' '}
      <Link to="/portfolio" className="styled-link">
        Portfolio
      </Link>{' '}
      <Link to="/blog" className="styled-link">
        Blog
      </Link>{' '}
      <Link to="/contact" className="styled-link">
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
