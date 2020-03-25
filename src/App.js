import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/container/Container';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container></Container>
      <Footer />
    </div>
  );
}

export default App;
