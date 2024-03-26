import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Element } from 'react-scroll';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Header />
      <Home />
      <Element name="about"><About /></Element>
      <Element name="experience"><Experience /></Element>
      <Element name="projects"><Projects /></Element>
      <Element name="contacts"><Contacts /></Element>
      <Footer />
    </Router>
  );
};

export default App;
