import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { documentText } from "react-icons-kit/ionicons/documentText";

class Resume extends Component {
  render() {
    return (
      <Container>
        <h1 className="text-center">Welcome back [name]. Keep going!</h1>
        <p className="text-center mb-4">
          We've saved all your information and progress so you can pick up right
          where you left off.
        </p>
        <Container className="d-flex justify-content-center">
          <Button variant="primary" type="submit" className="mb-4 mt-4">
            Pick up where I left off
          </Button>
        </Container>
        <Container className="d-flex justify-content-center mt-4">
          <Card style={{ width: "50rem" }}>
            <Card.Header className="text-center" as="h3">
              Your to-do list
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item variant="success">
                Collect documents
                <Button
                  variant="outline-success"
                  className="float-right"
                  type="submit"
                >
                  Review
                </Button>
              </ListGroup.Item>
              <ListGroup.Item variant="success">
                Your information
                <Button
                  variant="outline-success"
                  className="float-right"
                  type="submit"
                >
                  Review
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                USCIS Forms
                <Button
                  variant="outline-primary"
                  className="float-right"
                  type="submit"
                >
                  Resume
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                Review application
                <Button
                  variant="outline-primary"
                  className="float-right"
                  type="submit"
                >
                  Start
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                Print and mail application
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

        <br />
      </Container>
    );
  }
}

export default Resume;
