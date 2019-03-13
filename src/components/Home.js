import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Jumbotron
} from "react-bootstrap/";

export default class Home extends Component {
  render() {
    return (
      <div style={{ style: "none" }}>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Maravilla</Navbar.Brand>
            <Form inline>
              <div className="homeButtons">
                <SignInButton />
                <SignUpButton />
              </div>
            </Form>
          </Container>
        </Navbar>
        <Container />
        <Jumbotron>
          <h1>Complicated forms made easy</h1>
          <p>
            This is a site that helps you apply to DACA. It saves your progress
            as you complete your DACA application, without any of the confusing
            jargon.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}
