import React, { Component } from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';

class SocialSecurity extends Component{

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
                <h1 className="ui centered">Social Security</h1>
                <div class="grouped fields">
                    <label for="yesNo">Has the Social Security Administration (SSA) ever officially issued a Social Security card to you?  Why do we ask?</label>
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
                <div class="grouped fields">
                    <label for="yesNo">Would you like the SSA to issue you a Social Security card?</label>
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
                <p> <strong>Consent for disclosure:</strong> I authorize disclosure of information from this application to the SSA as required for the purpose of assigning me a Social Security number and issuing me a Social Security card. </p>
                <div class="grouped fields">
                    <label for="yesNo">You must answer “Yes” to this if you would like a Social Security Card.</label>
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
                <p>SSA requires the following information about your parents.</p>
                <p>Father's name</p>
                <Form.Field>
                    <label>First name (given name)</label>
                    <input
                    onChange={this.props.handleChange('fatherFirstName')}
                    defaultValue={values.fatherFirstName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last name (family name)</label>
                    <input
                    onChange={this.props.handleChange('fatherLastName')}
                    defaultValue={values.fatherLastName}
                    />
                </Form.Field>
                <p>Mother's name</p>
                <Form.Field>
                    <label>First name (given name)</label>
                    <input
                    onChange={this.props.handleChange('motherFirstName')}
                    defaultValue={values.fatherFirstName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last name (family name)</label>
                    <input
                    onChange={this.props.handleChange('motherLastName')}
                    defaultValue={values.fatherLastName}
                    />
                </Form.Field>
                
                
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default SocialSecurity;