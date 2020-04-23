import React from 'react';
import Hero from '../details/Hero';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import FormSuccess from '../pages/FormSuccess';
import { Router } from '@reach/router';

const Container = () => {
  return (
    <div>
      <Router>
        <Hero path="/" />
        <About path="/about" />
        <Portfolio path="/portfolio" />
        <Blog path="/blog" />
        <Contact path="/contact" />
        <FormSuccess path="/success" />
      </Router>
    </div>
  );
};

export default Container;
