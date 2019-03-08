import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainForm from "./components/MainForm";
import { Container } from "semantic-ui-react";
import { RenderItems } from "./RenderItems";
import { AppContainer, Navigation, Body, Title } from "./containers";

class App extends Component {
  render() {
    return (
      // <Container textAlign='left'>
      //   <MainForm />
      // </Container>
      <SideNavBar />
    );
  }
}

export default App;
