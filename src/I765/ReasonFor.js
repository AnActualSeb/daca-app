import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

class ReasonFor extends Component {
  render() {
    return (
      <Container>
        <Form>
          <h1>Reason for applying</h1>

          <Form.Label as="legend">I am applying for</Form.Label>
          <Form.Check
            type="radio"
            label="Initial permission to accept employment."
            name="yesNo"
            id="yesNo7"
          />
          <Form.Check
            type="radio"
            label="Replacement of lost, stolen, or damaged employment authorization document, or correction of my employment authorization document not due to U.S. Citizen and Immigration Services error. Note"
            name="yesNo"
            id="yesNo8"
          />
          <Form.Check
            type="radio"
            label="Renewal of my permission to accept employment. Attach a copy of your previous employment authorization document."
            name="yesNo"
            id="yesNo9"
          />
          <br />
          <Button variant="light" type="submit">
            Back
          </Button>

          <Button className="float-right" variant="primary" type="submit">
            Continue
          </Button>
        </Form>
        <br />
      </Container>
    );
  }
}

export default ReasonFor;
