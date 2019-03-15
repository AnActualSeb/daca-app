import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

class StartI765 extends Component {
  render() {
    return (
      <Container>
        <h1 className="text-center">Let's fill out your I-765WS</h1>
        <p className="text-center mb-4">
          This is the Worksheet for Employment Authorization.
        </p>
        <Link to="/financialinfo">
          <Button
            variant="primary"
            className="float-right mt-4 mb-4"
            type="submit"
          >
            Continue
          </Button>
        </Link>
      </Container>
    );
  }
}

export default StartI765;
