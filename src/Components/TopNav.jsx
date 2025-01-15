import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./TopNav.css";
export const TopNav = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="light">
      <Container>
        <Navbar.Brand href="/" className="brand-text">
          <img src="/logo.webp" style={{ height: "10vh" }} /> University of
          Galway Volleyball
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
