import React, { Component } from "react";
import "./App.css";
import YourInfo from "./YourInfo";
import Container from "react-bootstrap/Container";

import FormTest from "./FormTest";
import ReasonFor from "./I765/ReasonFor";
import LastArrival from "./I765/LastArrival";
import EligibilityCat from "./I765/EligibilityCat";
import NoHelpBeforeInterpreter from "./I765/NoHelpBeforeInterpreter";
import NoHelpBeforePreparer from "./I765/NoHelpBeforePreparer";
import Resume from "./Resume";

class App extends Component {
  render() {
    return (
      <Container>
        {/* <FormTest /> */}
        <YourInfo />
        {/* <ReasonFor /> */}
        {/* <LastArrival /> */}
        {/* <EligibilityCat /> */}
        {/* <NoHelpBeforeInterpreter /> */}
        {/* <NoHelpBeforePreparer /> */}
        {/* <Resume /> */}
      </Container>
    );
  }
}

export default App;
