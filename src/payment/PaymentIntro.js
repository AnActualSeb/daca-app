import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import money from "./money.png";
import { Link } from "react-router-dom";

export default class PaymentIntro extends Component {
  render() {
    return (
      <Container>
        <h1 className="text-center">Prepare payment to USCIS</h1>
        <Container className="text-center">
          <Image src={money} width={500} fluid alt="money" />
        </Container>

        <h2 className="text-center mb-4">
          A filing fee of $495 is required to submit your DACA application
        </h2>
        <p className="text-center">
          Whenever you’re ready, select “Continue” and we’ll explain your
          options.
        </p>
        <div className="bottomNav">
          <Link to="/payment">
            <Button
              size="lg"
              className="float-right"
              variant="primary"
              type="submit"
            >
              Continue
            </Button>
          </Link>
        </div>
      </Container>
    );
  }
}
