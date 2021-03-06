import React from "react";
import { SideNav, Nav } from "react-sidenav";
import styled from "styled-components";
import {
  AppContainer as BaseAppContainer,
  ExampleNavigation as BaseNavigation
} from "./containers";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { documentText } from "react-icons-kit/ionicons/documentText";
import { grid } from "react-icons-kit/ionicons/grid";
import { iosInformation } from "react-icons-kit/ionicons/iosInformation";
import { iosList } from "react-icons-kit/ionicons/iosList";
import { iosCopy } from "react-icons-kit/ionicons/iosCopy";
import { socialUsd } from "react-icons-kit/ionicons/socialUsd";
import { iosCheckmark } from "react-icons-kit/ionicons/iosCheckmark";
import { iosPrinter } from "react-icons-kit/ionicons/iosPrinter";
import { iosRainy } from "react-icons-kit/ionicons/iosRainy";

const AppContainer = styled(BaseAppContainer)`
  height: 100%;
  padding-left: 0px;
  margin-left: 0px;
  display: hidden;
  max-width: 10rem;
`;

const Navigation = styled(BaseNavigation)`
  background: #323234;
  color: #8d97ad;
  font-size: 1em;
  letter-spacing: 2px;
  width: 100%;
  line-height: 22px;
  margin-left: 0px;
`;

const IconCnt = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const theme = {
  selectionColor: "#FFF",
  hoverBgColor: "#181b20"
};

const Text = styled.div`
  padding-left: 8px;
`;

export default class SideNavBar extends React.Component {
  state = { selectedPath: "1" };

  onItemSelection = arg => {
    this.setState({ selectedPath: arg.path });
  };

  render() {
    return (
      <AppContainer style={{ marginLeft: "0px" }}>
        <Navigation style={{ marginLeft: "0px" }}>
          <SideNav
            defaultSelectedPath="1"
            theme={theme}
            onItemSelection={this.onItemSelection}
          >
            <Link to="/resume" className="navLink">
              <Nav vertical id="1">
                <IconCnt>
                  <Icon size={22} icon={grid} />
                </IconCnt>
                <Text>Dashboard</Text>
              </Nav>
            </Link>
            <Nav vertical id="2">
              <IconCnt>
                <Icon size={22} icon={iosCopy} />
              </IconCnt>
              <Text>Collect Documents</Text>
            </Nav>
            <Link to="/yourinfo" className="navLink">
              <Nav id="3">
                <IconCnt>
                  <Icon size={22} icon={iosInformation} />
                </IconCnt>
                <Text>Provide Your Information</Text>
              </Nav>
            </Link>
            <Nav id="4">
              <IconCnt>
                <Icon size={22} icon={iosList} />
              </IconCnt>
              <Text>Forms</Text>
              {/* Nested Forms here! */}
              <Nav id="1">
                <IconCnt>
                  <Icon size={22} icon={documentText} />
                </IconCnt>
                <Text>I-821D</Text>
              </Nav>
              <Nav id="2">
                <IconCnt>
                  <Icon size={22} icon={documentText} />
                </IconCnt>
                <Text>I-765</Text>
              </Nav>
              <Nav id="3">
                <IconCnt>
                  <Icon size={22} icon={documentText} />
                </IconCnt>
                <Text>I-765WS</Text>
              </Nav>
            </Nav>
            <Link to="/gotopay" className="navLink">
              <Nav id="5">
                <IconCnt>
                  <Icon size={22} icon={socialUsd} />
                </IconCnt>
                <Text>Prepare Payment</Text>
              </Nav>
            </Link>
            <Link to="/review" className="navLink">
              <Nav id="6">
                <IconCnt>
                  <Icon size={22} icon={iosCheckmark} />
                </IconCnt>
                <Text>Review Application</Text>
              </Nav>
            </Link>
            <Nav id="7">
              <IconCnt>
                <Icon size={22} icon={iosPrinter} />
              </IconCnt>
              <Text>Print and Mail</Text>
            </Nav>
          </SideNav>
        </Navigation>
        {/* <Body /> */}
      </AppContainer>
    );
  }
}
