import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from './Header.module.css';

const Header = () => {
  return (
    <Navbar collapseOnSelect={false} expand="lg" className="container bg-body-tertiary" style={{ height: '80px' }}>
      <Container>
        <Navbar.Brand href="#home">Prasanth Muthupandi</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className={`justify-content-end ${styles.link}`}>
          <Nav>
            <Nav.Link as={ScrollLink} to="about" spy smooth duration={500}>About</Nav.Link>
            <Nav.Link as={ScrollLink} to="experience" spy smooth duration={500}>Experience</Nav.Link>
            <Nav.Link as={ScrollLink} to="projects" spy smooth duration={500}>Projects</Nav.Link>
            <Nav.Link as={ScrollLink} to="contact" spy smooth duration={500}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
