import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap/";

const StyledNavbar = styled(Navbar)`
  width: 100%;
  padding-left: 0px;
  margin-left: 0px;
  display: hidden;
`;

export default class Home extends Component {
  render() {
    return (
      <div>
        <StyledNavbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </StyledNavbar>
        <Container />
      </div>
    );
  }
}
