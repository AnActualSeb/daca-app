import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Link } from "react-router-dom";
import YourInfo from "./yourInfo/YourInfo";
import Container from "react-bootstrap/Container";
import SideNavBar from "./layout/SideNavBar";
import TodoList from "./components/TodoList";
import ReasonFor from "./I765/ReasonFor";
import LastArrival from "./I765/LastArrival";
import EligibilityCat from "./I765/EligibilityCat";
import NoHelpBeforeInterpreter from "./I765/NoHelpBeforeInterpreter";
import NoHelpBeforePreparer from "./I765/NoHelpBeforePreparer";
import Resume from "./components/Resume";
import WrapUp from "./I765/WrapUp";
import Overview from "./components/Overview";
import StartI765 from "./I765/StartI765";
import FinancialInfo from "./I765WS/FinancialInfo";
import StartI765Ws from "./I765WS/StartI765Ws";
import Print from "./components/Print";
import Home from "./components/Home";
import PaymentIntro from "./payment/PaymentIntro";
import SidebarProvider from "./SidebarProvider";

class App extends Component {
  constructor(props) {
    super(props);
    SidebarProvider.delegate = this;
    this.state = {
      showSidebar: false
    };
  }

  setSidebarShow = show => {
    this.setState({ showSidebar: true });
  };

  render() {
    return (
      <div>
        <Router>
          <div className="mainContent">
            {this.state.showSidebar && <SideNavBar />}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/overview" component={Overview} />
              <Route path="/resume" component={Resume} />
              <Route path="/todolist" component={TodoList} />
              <Route path="/yourinfo" component={YourInfo} />
              <Route path="/I765/lastarrival" component={LastArrival} />
              <Route path="components/print" component={Print} />
              <Route path="/startpayment" component={PaymentIntro} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
