import React, { Component } from 'react';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirmation from './Confirmation';
import Success from './Success';

import LetsBegin from "./LetsBegin"
import YourAddresses from "./YourAddresses"
import SocialSecurity from "./SocialSecurity"

class MainForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        middleName: '',
        email: '',
        age: '',
        city: '',
        country: '',
        dateOfBirth:'',
        cityOfBirth:"",
        stateOfBirth:"",
        countryOfBirth:"",
        countryOfCitizenship:""

    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }
    
    render(){
        const {step} = this.state;
        const { firstName, middleName, lastName, email, age, city, country } = this.state;
        const values = { firstName, middleName, lastName, email, age, city, country };
        switch(step) {
        case 1:
            return <UserDetails 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <PersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <Confirmation 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
        case 4:
            return <Success
                     nextStep={this.nextStep}
                    />
        case 5:
            return <LetsBegin 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 6:
            return <YourAddresses 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 7:
            return <SocialSecurity 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        }
    }
}

export default MainForm;