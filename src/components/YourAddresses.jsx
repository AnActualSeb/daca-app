import React, { Component } from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';

class YourAddresses extends Component{

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
                <h1 className="ui centered">Your address(es)</h1>
                <p>Please enter your current mailing address</p>
                <Form.Field>
                    <label>In care of name (if any) What’s this?</label>
                    <input
                    onChange={this.props.handleChange('careOfName')}
                    defaultValue={values.careOfName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Street and name number</label>
                    <input
                    onChange={this.props.handleChange('street')}
                    defaultValue={values.street}
                    />
                </Form.Field>
                <div class="grouped fields">
                    <div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="yesNo" checked="" tabIndex="0" class="hidden"/>
                                <label>Apartment</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="yesNo" checked="" tabIndex="0" class="hidden"/>
                                <label>Suite</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="yesNo" checked="" tabIndex="0" class="hidden"/>
                                <label>Floor</label>
                            </div>
                        </div>
                    </div>
                </div>
                <Form.Field>
                    <label>City or town</label>
                    <input
                    onChange={this.props.handleChange('city')}
                    defaultValue={values.city}
                    />
                </Form.Field>
                <Form.Field>
                    <label>State</label>
                    <input
                    onChange={this.props.handleChange('state')}
                    defaultValue={values.state}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Zip code</label>
                    <input
                    onChange={this.props.handleChange('zip')}
                    defaultValue={values.zip}
                    />
                </Form.Field>
                <div class="grouped fields">
                    <label for="yesNo">Is your current mailing address the same as your physical address?</label>
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
                <p>Please enter your current physical address</p>
                <Form.Field>
                    <label>Street and name number</label>
                    <input
                    onChange={this.props.handleChange('street')}
                    defaultValue={values.street}
                    />
                </Form.Field>
                <div class="grouped fields">
                    <div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="yesNo" checked="" tabIndex="0" class="hidden"/>
                                <label>Apartment</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="yesNo" checked="" tabIndex="0" class="hidden"/>
                                <label>Suite</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="yesNo" checked="" tabIndex="0" class="hidden"/>
                                <label>Floor</label>
                            </div>
                        </div>
                    </div>
                </div>
                <Form.Field>
                    <label>City or town</label>
                    <input
                    onChange={this.props.handleChange('city')}
                    defaultValue={values.city}
                    />
                </Form.Field>
                <Form.Field>
                    <label>State</label>
                    <input
                    onChange={this.props.handleChange('state')}
                    defaultValue={values.state}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Zip code</label>
                    <input
                    onChange={this.props.handleChange('zip')}
                    defaultValue={values.zip}
                    />
                </Form.Field>
                
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default YourAddresses;