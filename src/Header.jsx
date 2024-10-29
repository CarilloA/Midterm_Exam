import React from 'react';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import logo from './assets/BakeLogo.png';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="py-3 fixed-top">
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img src={logo} alt="Sweet Bakery Logo" height="40" className="me-2" />
          <span className="logo-text">
            Sweet<span className="text-primary">Bakery</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" className="me-3">Home</Nav.Link>
            <Nav.Link href="#" className="me-3">Menu</Nav.Link>
            <Nav.Link href="#" className="me-3">About Us</Nav.Link>
            <Nav.Link href="#" className="me-3">Contact</Nav.Link>
            <Button variant="primary">Order Online</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
