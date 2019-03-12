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
          You're almost done with all the forms—just one more left.{" "}
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
                  variant="outline-success"
                  className="float-right"
                  type="submit"
                >
                  Review
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                I-735: Application for Employment Authorization
                <Button
                  variant="outline-success"
                  className="float-right"
                  type="submit"
                >
                  Review
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                I-735WS: Application for Employment Authorization Worksheet
                <Button variant="primary" className="float-right" type="submit">
                  Start
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Container>
      </Container>
    );
  }
}

export default WrapUp;
