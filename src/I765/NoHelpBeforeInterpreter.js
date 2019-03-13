import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";

class NoHelpBeforeInterpreter extends Component {
  render() {
    return (
      <Container>
        <Form>
          <h1>Were you assisted by an interpreter to fill out your I-765?</h1>
          <p>
            USCIS wants to know if anyone helped you translate as you were
            filling out your form.
          </p>
          <Form.Check type="radio" label="Yes" name="yesNo" id="yesNo1" />
          <Form.Check type="radio" label="No" name="yesNo" id="yesNo2" />
          <h2>Please have your interpreter fill out the following section </h2>
          <h3>1. Interpreter's full name</h3>
          <Form.Row>
            <Form.Group as={Col} md="5" controlId="formGridEmail">
              <Form.Label>First name (given name)</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} md="5" controlId="formGridPassword">
              <Form.Label>Last name (family name)</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} md="5" controlId="formGridPassword">
              <Form.Label>
                Interpreter’s business or organization name (if any)
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>
          <h3>2. Interpreter's mailing address</h3>
          <Form.Row>
            <Form.Group as={Col} md="5" controlId="formGridEmail">
              <Form.Label>Street number and name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <InputGroup as={Col} md="3">
              <InputGroup.Prepend>
                <InputGroup.Radio
                  aria-label="Radio button for following text input"
                  name="address"
                />
                <InputGroup.Text>Apartment</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Text input with radio button"
                name="address"
              />
            </InputGroup>
          </Form.Row>
          <Form.Row>
            <InputGroup as={Col} md="3">
              <InputGroup.Prepend>
                <InputGroup.Radio
                  aria-label="Radio button for following text input"
                  name="address"
                />
                <InputGroup.Text>Suite</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Text input with radio button"
                name="address"
              />
            </InputGroup>
          </Form.Row>
          <Form.Row>
            <InputGroup as={Col} md="3" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Radio
                  aria-label="Radio button for following text input"
                  name="address"
                />
                <InputGroup.Text>Floor</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Text input with radio button" />
            </InputGroup>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="4" controlId="formGridEmail">
              <Form.Label>City or town</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="formGridPassword">
              <Form.Label>State</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="formGridPassword">
              <Form.Label>Zip code</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="5" controlId="formGridEmail">
              <Form.Label>Province</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} md="5" controlId="formGridPassword">
              <Form.Label>Postal code</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} md="5" controlId="formGridPassword">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <h3>3. Interpreter's contact information</h3>
          <Form.Row>
            <Form.Group as={Col} md="5" controlId="formGridEmail">
              <Form.Label>Interpreter's daytime telephone number</Form.Label>
              <Form.Control type="tel" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="5" controlId="formGridEmail">
              <Form.Label>Interpreter’s email address</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
          </Form.Row>

          <h3>4. Interpreted language</h3>
          <Form.Row>
            <Form.Group as={Col} md="5" controlId="formGridEmail">
              <Form.Label>
                What language were you translating into for the requestor?
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <div className="bottomNav">
            <Button size="lg" variant="light" type="submit">
              Back
            </Button>
            <Link to="/starti765ws">
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

export default NoHelpBeforeInterpreter;
