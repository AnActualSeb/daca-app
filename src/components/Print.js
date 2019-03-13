import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

class Print extends Component {
  render() {
    return (
      <Container>
        <h1>Let’s print your application</h1>
        <p>
          You’re ready to print and sign your DACA application. We’ll also
          include additional instructions for what you need to do before mailing
          your application to USCIS. We will also email a copy to you so you can
          keep it for reference.
          <br />
          <br /> From all of us at Junto, we wish you a smooth and successful
          DACA application process.{" "}
        </p>

        <Button variant="primary" type="submit" size="lg">
          Download and print
        </Button>
        <br />
        <br />
        <Button variant="light" type="submit" size="lg">
          Back
        </Button>

        <br />
      </Container>
    );
  }
}

export default Print;
