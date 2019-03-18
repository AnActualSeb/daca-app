import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

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

          <label htmlFor="annualIncome">My current annual income</label>

          <InputGroup as={Col} md="5" style={{ paddingLeft: "0" }}>
            <InputGroup.Prepend>
              <InputGroup.Text id="annualIncomeNum">$</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              id="annualIncome"
              aria-describedby="annualIncomeNum"
            />
          </InputGroup>

          <label htmlFor="annualExpenses">My current annual expenses</label>

          <InputGroup as={Col} md="5" style={{ paddingLeft: "0" }}>
            <InputGroup.Prepend>
              <InputGroup.Text id="annualExpensesNum">$</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              id="annualExpenses"
              aria-describedby="annualExpensesNum"
            />
          </InputGroup>
          <label htmlFor="currentAssets">
            The total current value of my assets
          </label>

          <InputGroup as={Col} md="5" style={{ paddingLeft: "0" }}>
            <InputGroup.Prepend>
              <InputGroup.Text id="currentAssetsNum">$</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              id="currentAssets"
              aria-describedby="currentAssetsNum"
            />
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
            <Link to="gotopay">
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

export default FinancialInfo;
