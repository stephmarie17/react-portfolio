import React from 'react';
import Hero from '../details/Hero';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import { Router } from '@reach/router';

const Container = () => {
  return (
    <div>
      <Router>
        <Hero path="/" />
        <About path="/about" />
        <Portfolio path="/portfolio" />
      </Router>
    </div>
  );
};

export default Container;
