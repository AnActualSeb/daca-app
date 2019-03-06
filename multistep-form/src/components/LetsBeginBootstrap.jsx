import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import FormCheck from "react-bootstrap/FormCheck";

class LetsBeginBootstrap extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    render(){
        const { values } = this.props;
        return(
          <Container>
            <Form>
              <h1>Let's begin with your information</h1>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                onChange={this.props.handleChange('email')}
                defaultValue={values.email}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          
            <Form.Group controlId="lastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="surname" 
                onChange={this.props.handleChange('lastName')}
                defaultValue={values.lastName}
                />
            </Form.Group>
            
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

              <Form.Check
                type="radio"
                label="first radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="second radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="third radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />


            <Button variant="primary" type="submit" onClick={this.saveAndContinue}>
              Submit
            </Button>
          </Form>
          </Container>
            
        )
    }
}

export default LetsBeginBootstrap;