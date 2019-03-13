import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import YourInfo from "./YourInfo";
import Container from "react-bootstrap/Container";
import SideNavBar from "./SideNavBar";
import TodoList from "./TodoList";
import FormTest from "./FormTest";
import ReasonFor from "./I765/ReasonFor";
import LastArrival from "./I765/LastArrival";
import EligibilityCat from "./I765/EligibilityCat";
import NoHelpBeforeInterpreter from "./I765/NoHelpBeforeInterpreter";
import NoHelpBeforePreparer from "./I765/NoHelpBeforePreparer";
import Resume from "./Resume";
import WrapUp from "./I765/WrapUp";
import Overview from "./Overview";
import StartI765 from "./I765/StartI765";
import FinancialInfo from "./I765WS/FinancialInfo";
import StartI765Ws from "./I765WS/StartI765Ws";
import Print from "./Print";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="mainContent">
            <SideNavBar className="sidebar" />
            <Switch>
              <Route exact path="/" component={TodoList} />
              <Route path="/yourinfo" component={YourInfo} />
              <Route path="/overview" component={Overview} />
              <Route path="/I765/eligibility" component={EligibilityCat} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
