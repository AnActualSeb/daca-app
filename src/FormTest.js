import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default class FormTest extends Component {
  constructor(props) {
    super(props);
    this.state = { values: [] };
  }

  createUI() {
    return this.state.values.map((el, i) => (
      <div>
        <Form.Row>
          <Form.Group as={Col} md="5" controlId="formGridEmail">
            <Form.Label>First name (given name)</Form.Label>
            <Form.Control
              type="text"
              value={el || ""}
              onChange={this.handleChange.bind(this, i)}
            />
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="formGridPassword">
            <Form.Label>Middle name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group as={Col} md="5" controlId="formGridPassword">
            <Form.Label>Last name (family name)</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Form.Row>

        <Button
          as="input"
          type="button"
          value="remove"
          variant="outline-danger"
          onClick={this.removeClick.bind(this, i)}
        />
      </div>
    ));
  }

  handleChange(i, event) {
    let values = [...this.state.values];
    values[i] = event.target.value;
    this.setState({ values });
  }

  addClick() {
    this.setState(prevState => ({ values: [...prevState.values, ""] }));
  }

  removeClick(i) {
    let values = [...this.state.values];
    values.splice(i, 1);
    this.setState({ values });
  }

  //   handleSubmit(event) {
  //     alert("A name was submitted: " + this.state.values.join(","));
  //     event.preventDefault();
  //   }

  render() {
    return (
      <div>
        <h1>Hey Sebastian!!</h1>
        {/* <Form onSubmit={this.handleSubmit}> */}
        <Form>
          {this.createUI()}
          <Button
            as="input"
            type="button"
            value="Add More"
            onClick={this.addClick.bind(this)}
          />
          {/* <Button as="input" type="submit" value="Submit" /> */}
        </Form>
      </div>
    );
  }
}
