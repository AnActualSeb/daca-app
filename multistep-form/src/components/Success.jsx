import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Success extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    render(){
        return(
            <div>
                <h1 className="ui centered">Details Successfully Saved</h1>     
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </div>
        )
    }
}

export default Success;