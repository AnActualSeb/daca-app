import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import { Icon } from "react-icons-kit";

import { iosInformationOutline } from "react-icons-kit/ionicons/iosInformationOutline";
import { iosListOutline } from "react-icons-kit/ionicons/iosListOutline";
import { iosContactOutline } from "react-icons-kit/ionicons/iosContactOutline";
import { socialUsdOutline } from "react-icons-kit/ionicons/socialUsdOutline";
import { iosCheckmarkOutline } from "react-icons-kit/ionicons/iosCheckmarkOutline";
import { iosPrinterOutline } from "react-icons-kit/ionicons/iosPrinterOutline";

class Overview extends Component {
  render() {
    return (
      <Container>
        <h1 className="text-center">Here's an overview of the process</h1>

        <p className="text-center mt-4 mb-4">
          We’re here to help you through the process of applying for DACA. We’ll
          tell you what documents you need, help you with the forms, and provide
          resources to make the process as streamlined as we can. When you’re
          ready, select “Let’s get started” and we’ll begin.
        </p>

        <Container className="pt-4 mb-4">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Icon
                icon={iosInformationOutline}
                size={32}
                style={{ paddingRight: "16px" }}
              />
              Collect documents
              <Button variant="primary" className="float-right" type="submit">
                Let's get started
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <Icon
                icon={iosListOutline}
                size={32}
                style={{ paddingRight: "16px" }}
              />
              Provide your information{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              <Icon
                icon={iosContactOutline}
                size={32}
                style={{ paddingRight: "16px" }}
              />
              USCIS forms{" "}
            </ListGroup.Item>

            <ListGroup.Item>
              <Icon
                icon={socialUsdOutline}
                size={32}
                style={{ paddingRight: "16px" }}
              />
              Prepare payment to USCIS ($495){" "}
            </ListGroup.Item>

            <ListGroup.Item>
              <Icon
                icon={iosCheckmarkOutline}
                size={32}
                style={{ paddingRight: "16px" }}
              />
              Review application{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              <Icon
                icon={iosPrinterOutline}
                size={32}
                style={{ paddingRight: "16px" }}
              />
              Print and mail application{" "}
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </Container>
    );
  }
}

export default Overview;
