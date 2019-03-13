import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Review from "./review.png";

class ReviewMe extends Component {
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
              <Image src={Review} fluid alt="example of the check" />
            </Container>
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
          <h1>Review application</h1>
          <h2>
            Typos can be the reason for a denied application. Please review your
            application carefully.
          </h2>

          <Container>
            <Image src={Review} fluid alt="example of the check" />
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
                  </div>
                </div>
              ) : null}
            </div>
          </Container>

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

export default ReviewMe;
