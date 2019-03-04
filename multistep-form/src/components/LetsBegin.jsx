import React, { Component } from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';

class LetsBegin extends Component{

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
            <Form color='green' >
                <h1 className="ui centered">Let's begin with your information</h1>
                <h2>1. Legal name</h2>
                <Form.Field>
                    <label>First Name (given name)</label>
                    <input
                    placeholder='First Name'
                    onChange={this.props.handleChange('firstName')}
                    defaultValue={values.firstName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Middle name</label>
                    <input
                    placeholder='Middle name'
                    onChange={this.props.handleChange('middleName')}
                    defaultValue={values.middleName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name (family name)</label>
                    <input
                    placeholder='Last Name'
                    onChange={this.props.handleChange('lastName')}
                    defaultValue={values.lastName}
                    />
                </Form.Field>
                <div class="grouped fields">
                    <label for="yesNo">I go by, or have gone by another name, alias, maiden name, or nickname.</label>
                    <div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="yesNo" checked="" tabIndex="0" class="hidden"/>
                                <label>Yes</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="yesNo" checked="" tabIndex="0" class="hidden"/>
                                <label>No</label>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>2. Birth information</h2>
                <Form.Field>
                    <label>Date of birth</label>
                    <input
                    placeholder='mm/dd/yyyy'
                    onChange={this.props.handleChange('dateOfBirth')}
                    defaultValue={values.dateOfBirth}
                    />
                </Form.Field>
                <Form.Field>
                    <label>City/town/village of birth</label>
                    <input
                    placeholder='City/town/village of birth'
                    onChange={this.props.handleChange('cityOfBirth')}
                    defaultValue={values.cityOfBirth}
                    />
                </Form.Field>
                <Form.Field>
                    <label>State/province of birth</label>
                    <input
                    placeholder='State/province of birth'
                    onChange={this.props.handleChange('stateOfBirth')}
                    defaultValue={values.cityOfBirth}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Country of birth</label>
                    <input
                    placeholder='Country of birth'
                    onChange={this.props.handleChange('countryOfBirth')}
                    defaultValue={values.cityOfBirth}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Country of citizenship or nationality</label>
                    <input
                    placeholder='Country of citizenship or nationality'
                    onChange={this.props.handleChange('countryOfCitizenship')}
                    defaultValue={values.cityOfBirth}
                    />
                </Form.Field>
                <div class="grouped fields">
                    <label for="yesNo">Are there additional countries where you are currently a citizen or national?</label>
                    <div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="yesNo" checked="" tabIndex="0" class="hidden"/>
                                <label>Yes</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="yesNo" checked="" tabIndex="0" class="hidden"/>
                                <label>No</label>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>3. Contact information</h2>
                <Form.Field>
                    <label>Daytime telephone number</label>
                    <input
                    placeholder='Daytime telephone number'
                    onChange={this.props.handleChange('daytimePhone')}
                    defaultValue={values.daytimePhone}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Mobile telephone number</label>
                    <input
                    placeholder='Mobile telephone number'
                    onChange={this.props.handleChange('mobileNumber')}
                    defaultValue={values.mobileNumber}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email address</label>
                    <input
                    placeholder='Email'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                </Form.Field>
                <h2>4. Other information we need to know</h2>
                <div class="grouped fields">
                    <label for="yesNo">Gender</label>
                    <div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="yesNo" checked="" tabIndex="0" class="hidden"/>
                                <label>Male</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="yesNo" checked="" tabIndex="0" class="hidden"/>
                                <label>Female</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grouped fields">
                    <label for="yesNo">Marital status</label>
                    <div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="yesNo" checked="" tabIndex="0" class="hidden"/>
                                <label>Married</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="yesNo" checked="" tabIndex="0" class="hidden"/>
                                <label>Widowed</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="yesNo" checked="" tabIndex="0" class="hidden"/>
                                <label>Single</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="yesNo" checked="" tabIndex="0" class="hidden"/>
                                <label>Divorced</label>
                            </div>
                        </div>
                    </div>
                </div>

                <Form.Field>
                    <label>Current country of residence</label>
                    <input
                    placeholder='Current country of residence'
                    onChange={this.props.handleChange('currentCountry')}
                    defaultValue={values.currentCountry}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Alien registration number (A-number) (if any) What’s this?</label>
                    <input
                    placeholder='A-'
                    onChange={this.props.handleChange('alienNumber')}
                    defaultValue={values.alienNumber}
                    />
                </Form.Field>
                <Form.Field>
                    <label>USCIS online account number (if any) What’s this?</label>
                    <input
                    placeholder='USCIS online account number (if any) What’s this?'
                    onChange={this.props.handleChange('uscisNumber')}
                    defaultValue={values.uscisNumber}
                    />
                </Form.Field>

                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default LetsBegin;