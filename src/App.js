import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import YourInfo from "./YourInfo";
import Container from "react-bootstrap/Container";
import SideNavBar from "./SideNavBar";
import FormTest from "./FormTest";
import ReasonFor from "./I765/ReasonFor";
import LastArrival from "./I765/LastArrival";
import EligibilityCat from "./I765/EligibilityCat";
import NoHelpBeforeInterpreter from "./I765/NoHelpBeforeInterpreter";
import NoHelpBeforePreparer from "./I765/NoHelpBeforePreparer";
import Resume from "./Resume";
import SidebarExampleSidebar from "./SidebarExampleSidebar";

// class App extends Component {
//   render() {
//     return (
//       <Container>
//         {/* <FormTest /> */}
//         <SideNavBar />
//         <YourInfo />
//         {/* <ReasonFor /> */}
//         {/* <LastArrival /> */}
//         {/* <EligibilityCat /> */}
//         {/* <NoHelpBeforeInterpreter /> */}
//         {/* <NoHelpBeforePreparer /> */}
//         {/* <Resume /> */}
//       </Container>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div>
        <YourInfo />
      </div>
    );
  }
}

export default App;
