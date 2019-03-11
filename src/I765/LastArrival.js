import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";

class LastArrival extends Component {
  render() {
    return (
      <Container>
        <Form>
          <h1>Information about your last arrival in the U.S.</h1>
          <h2>1. Details</h2>

          <Form.Group as={Col} md="5" controlId="formGridEmail">
            <Form.Label>Place of your last arrival into the U.S.</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group as={Col} md="5" controlId="formGridPassword">
            <Form.Label>
              Date of your last arrival into the U.S. (on or about)
            </Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <h2>2. Status at last arrival</h2>

          <Form.Group as={Col} md="5" controlId="formGridEmail">
            <Form.Label>
              Immigration status at your last arrival Examples
            </Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group as={Col} md="5" controlId="formGridPassword">
            <Form.Label>
              Your current immigration status or category Examples{" "}
            </Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <h2>3. Document numbers</h2>

          <Form.Group as={Col} md="5" controlId="formGridEmail">
            <Form.Label>
              Form I-94 arrival-departure record number (if any) What’s this?
            </Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group as={Col} md="5" controlId="formGridPassword">
            <Form.Label>
              Travel document number (if any) What’s this?
            </Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Label className="ml-3">
            Student and Exchange Visitor Information System (SEVIS) number (if
            any) What’s this?
          </Form.Label>

          <InputGroup as={Col} md="5" ml="3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">N - </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type="text" />
          </InputGroup>

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

export default LastArrival;
