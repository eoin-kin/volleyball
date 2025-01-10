import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export const TopNav = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/">
          <img src="/logo.webp" style={{ height: "3rem" }} /> University of
          Galway Volleyball Club
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/shop">Shop</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
