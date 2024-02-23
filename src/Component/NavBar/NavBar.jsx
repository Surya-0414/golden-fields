import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavImage from './assets/Image/Logo.png';
import './assets/style.css';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <Navbar
      expand="lg"
      className={`bg-body-tertiary nav-back ${scrolled ? 'scrolled' : ''}`}
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img className="nav-image" src={NavImage} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className={`mx-auto my-2 my-lg-0 nav-f-all ${scrolled ? 'text-white' : ''}`}
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="mx-2" href="#action1">
              Home
            </Nav.Link>
            <Nav.Link className="mx-2" href="#action2">
              Link
            </Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item className="mx-2" href="#action3">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="mx-2" href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
