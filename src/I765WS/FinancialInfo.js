import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";

class FinancialInfo extends Component {
  render() {
    return (
      <Container>
        <Form>
          <h1>Financial information and Explanantion</h1>
          <p>
            USCIS wants your financial information to determine whether you have
            an economic need to work.
          </p>

          <Form.Label>My current annual income</Form.Label>

          <InputGroup as={Col} md="5" style={{ paddingLeft: "0" }}>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type="text" />
          </InputGroup>

          <Form.Label>My current annual expenses</Form.Label>

          <InputGroup as={Col} md="5" style={{ paddingLeft: "0" }}>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type="text" />
          </InputGroup>
          <Form.Label>The total current value of my assets</Form.Label>

          <InputGroup as={Col} md="5" style={{ paddingLeft: "0" }}>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type="text" />
          </InputGroup>

          <Form.Group
            as={Col}
            md="8"
            style={{ paddingLeft: "0" }}
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>
              If you would like to provide an explanation regarding your current
              financial information or your economic need for employment
              authorization, use the space below.
            </Form.Label>
            <Form.Control as="textarea" rows="4" />
          </Form.Group>
          <div className="bottomNav">
            <Button size="lg" variant="light" type="submit">
              Back
            </Button>

            <Button
              size="lg"
              className="float-right"
              variant="primary"
              type="submit"
            >
              Continue
            </Button>
          </div>
        </Form>
      </Container>
    );
  }
}

export default FinancialInfo;
