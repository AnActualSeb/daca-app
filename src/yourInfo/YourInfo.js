import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

class YourInfo extends Component {
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
          <Form.Row>
            <Form.Group as={Col} md="5" controlId="firstName">
              <Form.Label>First name (given name)</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="midName">
              <Form.Label>Middle name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} md="5" controlId="lastName">
              <Form.Label>Last name (family name)</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <div>
              <Button
                className="float-right"
                variant="outline-danger"
                onClick={() => this.setState({ count: this.state.count - 1 })}
              >
                Delete
              </Button>
            </div>
          </Form.Row>
        </div>
      );
    }
    return views;
  };
  inputViews1 = () => {
    var views = [];
    for (var i = 0; i < this.state.count1; i++) {
      views.push(
        <div>
          <Form.Row>
            <Form.Group as={Col} md="5" controlId="legalName">
              <Form.Label>Country of citizenship or nationality</Form.Label>
              <Form.Control type="text" />{" "}
              <div className="pull-right">
                <Button
                  variant="outline-danger"
                  onClick={() =>
                    this.setState({ count1: this.state.count1 - 1 })
                  }
                >
                  Delete
                </Button>
              </div>
            </Form.Group>
          </Form.Row>
        </div>
      );
    }
    return views;
  };

  render() {
    return (
      <Container>
        <Form>
          <h1>Let's begin with your information</h1>
          <h2>1. Legal name</h2>

          <Form.Row>
            <Form.Group as={Col} md="5" controlId="givenName">
              <Form.Label>First name (given name)</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="middleName">
              <Form.Label>Middle name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} md="5" controlId="familyName">
              <Form.Label>Last name (family name)</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Label as="legend">
            I go by, or have gone by another name, alias, maiden name, or
            nickname.
          </Form.Label>

          <div onChange={this.setAnotherName}>
            <Form.Check
              type="radio"
              label="Yes"
              name="yesNo1"
              id="yesNo1"
              value="yes"
              checked={this.state.anotherName == "yes"}
            />

            <Form.Check
              type="radio"
              label="No"
              name="yesNo2"
              id="yesNo2"
              value="no"
              checked={this.state.anotherName == "no"}
            />
          </div>

          <Container>
            <div>
              {this.state.anotherName == "yes" ? (
                <div>
                  <p>
                    Provide all other names you have ever used, including
                    aliases, maiden name, or nicknames.
                  </p>
                  <Form.Row>
                    <Form.Group as={Col} md="5" controlId="addFirstName">
                      <Form.Label>First name (given name)</Form.Label>
                      <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="addMidName">
                      <Form.Label>Middle name</Form.Label>
                      <Form.Control type="password" />
                    </Form.Group>
                    <Form.Group as={Col} md="5" controlId="addLastName">
                      <Form.Label>Last name (family name)</Form.Label>
                      <Form.Control type="password" />
                    </Form.Group>
                    <div>
                      <div>{this.inputViews()}</div>
                      <Button
                        variant="outline-primary"
                        onClick={() =>
                          this.setState({ count: this.state.count + 1 })
                        }
                      >
                        Add another name
                      </Button>
                    </div>
                  </Form.Row>
                </div>
              ) : null}
            </div>
          </Container>

          <h2>2. Birth information</h2>
          <Form.Row>
            <Form.Group as={Col} md="5" controlId="dateOfBirth">
              <Form.Label>Date of birth</Form.Label>
              <Form.Control as="input" type="date" />
              <Form.Text className="text-muted">mm/dd/yyyy </Form.Text>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="5" controlId="stateOfBirth">
              <Form.Label>State/province of birth</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} md="5" controlId="countryOfBirth">
              <Form.Label>Country of birth</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="5" controlId="citizenshipCountry">
              <Form.Label>Country of citizenship or nationality</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Label as="legend">
            Are there additional countries where you are currently a citizen or
            national?
          </Form.Label>
          <div onChange={this.setAnotherCountry}>
            <Form.Check
              type="radio"
              label="Yes"
              name="yesNo3"
              id="yesNo3"
              value="yes"
              checked={this.state.anotherCountry == "yes"}
            />
            <Form.Check
              type="radio"
              label="No"
              name="yesNo5"
              id="yesNo5"
              value="no"
              checked={this.state.anotherCountry == "no"}
            />
          </div>
          <Container>
            <div>
              {this.state.anotherCountry == "yes" ? (
                <div>
                  <p>
                    Provide all other countries where you have citizenship or
                    nationality.
                  </p>
                  <Form.Row>
                    <Form.Group as={Col} md="5" controlId="addCountry">
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

          <h2>3. Contact information</h2>

          <Form.Row>
            <Form.Group as={Col} md="5" controlId="tel">
              <Form.Label>Daytime telephone number</Form.Label>
              <Form.Control as="input" type="tel" />
            </Form.Group>
            <Form.Group as={Col} md="5" controlId="mobile">
              <Form.Label>Mobile telephone number</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="5" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <h2>4. Other information we need to know</h2>
          <Form.Label as="legend">Gender</Form.Label>
          <Form.Check type="radio" label="Male" name="mF1" id="mF1" />
          <Form.Check type="radio" label="Female" name="mF1" id="mF2" />
          <br />
          <Form.Label as="legend">Marital status</Form.Label>
          <Form.Check type="radio" label="Married" name="yesNo" id="yesNo7" />
          <Form.Check type="radio" label="Widowed" name="yesNo" id="yesNo8" />
          <Form.Check type="radio" label="Single" name="yesNo" id="yesNo9" />
          <Form.Check type="radio" label="Divorced" name="yesNo" id="yesNo10" />
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

export default YourInfo;
