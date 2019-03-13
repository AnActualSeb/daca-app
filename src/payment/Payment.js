import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import check from "./check.png";
import { Link } from "react-router-dom";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anotherName: null,
      anotherCountry: null,
      count: 0,
      count1: 0
    };
  }

  setAnotherName = e => {
    this.setState({
      anotherName: e.target.value
    });
  };

  setAnotherCountry = e => {
    this.setState({
      anotherCountry: e.target.value
    });
  };

  inputViews = () => {
    var views = [];
    for (var i = 0; i < this.state.count; i++) {
      views.push(
        <div>
          <Container>
            <p>
              Please be aware that if your check is returned as unpayable, USCIS
              will resubmit the payment one time. If it is returned as unpayable
              a second time, your filing will be rejected and you will be
              charged a $30 returned check fee.
            </p>
            <br />
            <br />
            <Container>
              <Image src={check} fluid alt="example of the check" />
            </Container>
            <p>Example check</p>
            <p>
              Make your check payable to U.S. Department of Homeland Security.{" "}
              <strong>NOTE:</strong> Spell out U.S. Department of Homeland
              Security; do not use the initials “USDHS” or “DHS.”{" "}
            </p>
          </Container>
        </div>
      );
    }
    return views;
  };

  render() {
    return (
      <Container>
        <Form>
          <h1>Prepare payment</h1>
          <h2>You can pay the USCIS fee by either check or money order</h2>

          <Form.Label as="legend" className="mt-4">
            What form of payment will you use?
          </Form.Label>

          <div onChange={this.setAnotherName}>
            <Form.Check
              type="radio"
              label="Check"
              name="yesNo1"
              id="yesNo1"
              value="yes"
              checked={this.state.anotherName == "yes"}
            />

            <Form.Check
              type="radio"
              label="Money order"
              name="yesNo2"
              id="yesNo2"
              value="no"
              checked={this.state.anotherName == "no"}
            />
          </div>
          <div>{this.inputViews()}</div>
          <Container>
            <div>
              {this.state.anotherName == "yes" ? (
                <div>
                  <Container>
                    <p>
                      Please be aware that if your check is returned as
                      unpayable, USCIS will resubmit the payment one time. If it
                      is returned as unpayable a second time, your filing will
                      be rejected and you will be charged a $30 returned check
                      fee.
                    </p>
                    <br />
                    <Container>
                      <Image src={check} fluid alt="example of the check" />
                      <p>Example check</p>
                    </Container>

                    <p>
                      Make your check payable to U.S. Department of Homeland
                      Security. <strong>NOTE:</strong> Spell out U.S. Department
                      of Homeland Security; do not use the initials “USDHS” or
                      “DHS.”{" "}
                    </p>
                  </Container>
                </div>
              ) : null}
            </div>
          </Container>

          <Container>
            <div>
              {this.state.anotherCountry == "yes" ? (
                <div>
                  <p>
                    Provide all other countries where you have citizenship or
                    nationality.
                  </p>
                  <Form.Row>
                    <Form.Group as={Col} md="5" controlId="country">
                      <Form.Label>
                        Country of citizenship or nationality
                      </Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Form.Row>

                  <div>
                    <div class="Container">{this.inputViews1()}</div>
                    <Button
                      variant="outline-primary"
                      onClick={() =>
                        this.setState({ count1: this.state.count1 + 1 })
                      }
                    >
                      Add another country
                    </Button>
                  </div>
                </div>
              ) : null}
            </div>
          </Container>

          <div className="bottomNav">
            <Button size="lg" variant="light" type="submit">
              Back
            </Button>
            <Link to="/review">
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

export default Payment;
