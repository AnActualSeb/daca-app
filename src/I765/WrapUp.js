import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

class WrapUp extends Component {
  render() {
    return (
      <Container>
        <h1 className="text-center">Great job. Keep going!</h1>
        <p className="text-center mb-4">
          You're nearly there. Two more forms to go!
        </p>
        <Container className="d-flex justify-content-center">
          <Card style={{ width: "50rem" }}>
            <Card.Header className="text-center" as="h3">
              USCIS forms
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                I-821D: Consideration for Deferred Action on Childhood Arrivals
                <Button
                  variant="outline-primary"
                  className="float-right"
                  type="submit"
                >
                  Start
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                I-735: Application for Employment Authorization
                <Button
                  variant="outline-primary"
                  className="float-right"
                  type="submit"
                >
                  Start
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                I-735WS: Application for Employment Authorization Worksheet
                <Button
                  variant="outline-primary"
                  className="float-right"
                  type="submit"
                >
                  Start
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Container>

        <br />

        <Container className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Pick up where I left off
          </Button>
        </Container>

        <br />
      </Container>
    );
  }
}

export default WrapUp;
