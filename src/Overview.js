import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import { Icon } from "react-icons-kit";

import { numberOne } from "react-icons-kit/metrize/numberOne";

class Overview extends Component {
  render() {
    return (
      <Container>
        <h1 className="text-center">Here's an overview of the process</h1>

        <p className="text-center mt-4 mb-4">
          We’re here to help you through the process of applying for DACA. We’ll
          tell you what documents you need, help you with the forms, and provide
          resources to make the process as streamlined as we can. When you’re
          ready, select “Let’s get started” and we’ll begin.{" "}
        </p>
        <Container className="d-flex justify-content-center">
          <Card style={{ width: "50rem" }}>
            <Card.Header className="text-center" as="h3">
              USCIS forms
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Icon icon={numberOne} size={32} />
                I-821D: Consideration for Deferred Action on Childhood Arrivals
              </ListGroup.Item>
              <ListGroup.Item>
                2. I-735: Application for Employment Authorization
              </ListGroup.Item>
              <ListGroup.Item>
                3. I-735WS: Application for Employment Authorization Worksheet
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Container>

        <Container className="pt-4 mb-4">
          {" "}
          <ListGroup variant="flush">
            <ListGroup.Item>
              Collect documents
              <Button variant="primary" className="float-right" type="submit">
                Start
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              Provide your information{" "}
              <Button variant="primary" className="float-right" type="submit">
                Start
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              USCIS forms{" "}
              <Button variant="primary" className="float-right" type="submit">
                Start
              </Button>
            </ListGroup.Item>

            <ListGroup.Item>
              Prepare payment to USCIS ($495){" "}
              <Button variant="primary" className="float-right" type="submit">
                Start
              </Button>
            </ListGroup.Item>

            <ListGroup.Item>
              Review application{" "}
              <Button variant="primary" className="float-right" type="submit">
                Start
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              Print and mail application{" "}
              <Button variant="primary" className="float-right" type="submit">
                Start
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Container>

        <Container>
          <Button
            variant="primary"
            className="float-right mt-4 mb-4"
            type="submit"
          >
            Start
          </Button>
        </Container>
      </Container>
    );
  }
}

export default Overview;
