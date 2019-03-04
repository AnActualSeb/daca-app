import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";

class BootstrapDemo extends Component{

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

            

            <Button variant="primary" type="submit" onClick={this.saveAndContinue}>
              Submit
            </Button>
          </Form>
          </Container>
            
        )
    }
}

export default BootstrapDemo;