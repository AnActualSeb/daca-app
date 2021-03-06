import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { documentText } from "react-icons-kit/ionicons/documentText";
import { Link } from "react-router-dom";

import { Icon } from "react-icons-kit";

import { iosInformationOutline } from "react-icons-kit/ionicons/iosInformationOutline";
import { iosListOutline } from "react-icons-kit/ionicons/iosListOutline";
import { iosContactOutline } from "react-icons-kit/ionicons/iosContactOutline";
import { socialUsdOutline } from "react-icons-kit/ionicons/socialUsdOutline";
import { iosCheckmarkOutline } from "react-icons-kit/ionicons/iosCheckmarkOutline";
import { iosPrinterOutline } from "react-icons-kit/ionicons/iosPrinterOutline";

class GoToPay extends Component {
  render() {
    return (
      <Container>
        <h1 className="text-center">Great! Let's keep going.</h1>
        <p className="text-center mb-4">
          When you're ready to start, select "Start."
        </p>

        <Container className="d-flex justify-content-center mt-4">
          <Card style={{ width: "50rem" }}>
            {/* Wave considers the following line bad semantics. It thinks that the header is an h3, but bootstrap uses as="h3" only to style the header as an h3. */}
            <Card.Header className="text-center" as="h3">
              Your to-do list
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item variant="success">
                <Icon
                  icon={iosInformationOutline}
                  size={32}
                  style={{ paddingRight: "16px" }}
                />
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
                <Icon
                  icon={iosListOutline}
                  size={32}
                  style={{ paddingRight: "16px" }}
                />
                Provide your information
                <Button
                  variant="outline-success"
                  className="float-right"
                  type="submit"
                >
                  Review
                </Button>
              </ListGroup.Item>
              <ListGroup.Item variant="success">
                <Icon
                  icon={iosContactOutline}
                  size={32}
                  style={{ paddingRight: "16px" }}
                />
                USCIS Forms
                <Button
                  variant="outline-success"
                  className="float-right"
                  type="submit"
                >
                  Review
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <Icon
                  icon={socialUsdOutline}
                  size={32}
                  style={{ paddingRight: "16px" }}
                />
                Prepare payment to USCIS ($495)
                <Link to="paymentintro">
                  <Button
                    variant="primary"
                    className="float-right"
                    type="submit"
                  >
                    Start
                  </Button>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <Icon
                  icon={iosCheckmarkOutline}
                  size={32}
                  style={{ paddingRight: "16px" }}
                />
                Review application
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <Icon
                  icon={iosPrinterOutline}
                  size={32}
                  style={{ paddingRight: "16px" }}
                />
                Print and mail application
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Container>
      </Container>
    );
  }
}

export default GoToPay;
