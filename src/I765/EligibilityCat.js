import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

class EligibilityCat extends Component {
  render() {
    return (
      <Container>
        <Form>
          <h1>Your eligibility category</h1>
          <p>
            There are a number of eligibility categories for filing an I-765.
            Since we are concerned with renewing your DACA, we have auto-filled
            this category to (c)(33), which is for DACA (Consideration of
            Deferred Action for Childhood Arrivals category).
          </p>
          <p>
            Unless you know you are filing under a different category, you don't
            need to change this and can continue.
          </p>
          <Form.Row>
            <Form.Group as={Col} md="1" controlId="formGridEmail">
              <Form.Control type="text" placeholder="(C)" />
            </Form.Group>
            <Form.Group as={Col} md="1" controlId="formGridPassword">
              <Form.Control type="text" placeholder="(33)" />
            </Form.Group>
            <Form.Group as={Col} md="1" controlId="formGridEmail">
              <Form.Control type="text" placeholder="—" />
            </Form.Group>
          </Form.Row>

          <div className="bottomNav">
            <Button size="lg" variant="light" type="submit">
              Back
            </Button>
            <Link to="/nohelpbeforeinterpreter">
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
        </Form>
      </Container>
    );
  }
}

export default EligibilityCat;
