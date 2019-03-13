import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Link } from "react-router-dom";

const recordNumber = (
  <Popover id="popover-basic" title="Form I-94 arrival-departure record number">
    The Department of Homeland Security issues Form I-94 to individuals who are:{" "}
    <ul>
      <li>Admitted to the U.S.</li>
      <li>Adjusting status while in the U.S.</li>
      <li> Extending their stay.</li>
    </ul>
  </Popover>
);

const exampleStatus = (
  <Popover id="popover-basic" title="Examples of status">
    <ul>
      <li>B-2 visitor</li>
      <li>F-1 student</li>
      <li>No status</li>
    </ul>
  </Popover>
);

const exampleStatusTwo = (
  <Popover id="popover-basic" title="Examples of status">
    <ul>
      <li>B-2 visitor</li>
      <li>F-1 student</li>
      <li>Parolee</li>
      <li>Deferred action</li>
      <li>No status or category</li>
    </ul>
  </Popover>
);

const travelDoc = (
  <Popover id="popover-basic" title="Travel document number">
    This can be you passport number from another country.
  </Popover>
);

const Help = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={recordNumber}>
    <Button className="toolTip" variant="link">
      What's this?
    </Button>
  </OverlayTrigger>
);
const HelpTravel = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={travelDoc}>
    <Button className="toolTip" variant="link">
      What's this?
    </Button>
  </OverlayTrigger>
);

const Example1 = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={exampleStatus}>
    <Button className="toolTip" variant="link">
      Examples
    </Button>
  </OverlayTrigger>
);
const Example2 = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={exampleStatusTwo}>
    <Button className="toolTip" variant="link">
      Examples
    </Button>
  </OverlayTrigger>
);

const Sevis = (
  <Popover id="popover-basic" title="Travel document number">
    This is for nonimmigrant students and exchange visitors admitted to the
    United States with the appropriate F or M nonimmigrant status.
  </Popover>
);

const HelpTravel2 = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={Sevis}>
    <Button className="toolTip" variant="link">
      What's this?
    </Button>
  </OverlayTrigger>
);

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
              Immigration status at your last arrival <Example1 />
            </Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group as={Col} md="5" controlId="formGridPassword">
            <Form.Label>
              Your current immigration status or category <Example2 />
            </Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <h2>3. Document numbers</h2>

          <Form.Group as={Col} md="6" controlId="formGridEmail">
            <Form.Label>
              Form I-94 arrival-departure record number (if any) <Help />
            </Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group as={Col} md="5" controlId="formGridPassword">
            <Form.Label>
              Travel document number (if any) <HelpTravel />
            </Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Label className="ml-3">
            Student and Exchange Visitor Information System (SEVIS) number (if
            any) <HelpTravel2 />
          </Form.Label>

          <InputGroup as={Col} md="5" ml="3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">N - </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type="text" />
          </InputGroup>

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

export default LastArrival;
