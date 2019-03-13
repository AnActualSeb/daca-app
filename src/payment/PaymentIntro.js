import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default class PaymentIntro extends Component {
  render() {
    return (
      <Container>
        <h1 className="text-center">Let's fill out your I-765WS</h1>
        <p className="text-center mb-4">Prepare payment to USCIS </p>
        <Button
          variant="primary"
          className="float-right mt-4 mb-4"
          type="submit"
        >
          Continue
        </Button>
      </Container>
    );
  }
}
