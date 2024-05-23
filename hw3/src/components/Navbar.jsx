import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const nav = () => (
  <Navbar>
    <Container>
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar1" />
      <Navbar.Collapse id="navbar2">
        <Nav className="ml-auto">
          <LinkContainer to="/Home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/List">
            <Nav.Link>List</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Population">
            <Nav.Link>Population</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Custom">
            <Nav.Link>Custom Route</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default nav;