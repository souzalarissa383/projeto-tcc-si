import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const header = () => {
  return (
   
    <Navbar bg="light" expand="lg">
      
      <LinkContainer to="/">
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0 "
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <LinkContainer to="/login">
            <Nav.Link>Para você</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/empresa">
            <Nav.Link>Para empresas</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
};

export default header;
