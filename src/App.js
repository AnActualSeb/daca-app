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
import WrapUp from "./I765/WrapUp";
import Overview from "./Overview";
import StartI765 from "./I765/StartI765";
import FinancialInfo from "./I765WS/FinancialInfo";

class App extends Component {
  render() {
    return (
      <Container>
        {/* <FormTest /> */}
        {/* <YourInfo /> */}
        {/* <ReasonFor /> */}
        {/* <LastArrival /> */}
        {/* <EligibilityCat /> */}
        {/* <NoHelpBeforeInterpreter /> */}
        {/* <NoHelpBeforePreparer /> */}
        {/* <Resume /> */}
        {/* <WrapUp /> */}
        {/* <Overview /> */}
        {/* <StartI765 /> */}
        <FinancialInfo />
      </Container>
    );
  }
}

export default App;
