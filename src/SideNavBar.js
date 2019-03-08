import React from "react";
import { SideNav, Nav } from "react-sidenav";
import styled from "styled-components";
import {
  AppContainer as BaseAppContainer,
  ExampleNavigation as BaseNavigation,
  ExampleBody as Body
} from "./containers";
import { Icon } from "react-icons-kit";
import { circleO } from "react-icons-kit/fa/circleO";
import { iosHome } from "react-icons-kit/ionicons/iosHome";
import { iosInformation } from "react-icons-kit/ionicons/iosInformation";
import { iosList } from "react-icons-kit/ionicons/iosList";
import { iosCopy } from "react-icons-kit/ionicons/iosCopy";
import { socialUsd } from "react-icons-kit/ionicons/socialUsd";
import { iosCheckmark } from "react-icons-kit/ionicons/iosCheckmark";
import { iosPrinter } from "react-icons-kit/ionicons/iosPrinter";

const AppContainer = styled(BaseAppContainer)`
  height: calc(100vh - 40px);
`;

const Navigation = styled(BaseNavigation)`
  background: #303641;
  color: #8d97ad;
  font-size: 1em;
  letter-spacing: 2px;
  width: 240px;
  line-height: 22px;
`;

const IconCnt = styled.div`
  color: #6a56a5;
  display: flex;
  justify-content: center;
  aligh-items: center;
`;

const theme = {
  selectionColor: "#FFF",
  hoverBgColor: "#181b20"
};

const Text = styled.div`
  padding-left: 8px;
`;

export class SideNavBar extends React.Component {
  state = { selectedPath: "1" };

  onItemSelection = arg => {
    this.setState({ selectedPath: arg.path });
  };

  render() {
    return (
      <AppContainer>
        <Navigation>
          <SideNav
            defaultSelectedPath="1"
            theme={theme}
            onItemSelection={this.onItemSelection}
          >
            <Nav id="1">
              <IconCnt>
                <Icon icon={iosHome} />
              </IconCnt>
              <Text>Dashboard</Text>
            </Nav>
            <Nav id="2">
              <IconCnt>
                <Icon icon={iosCopy} />
              </IconCnt>
              <Text>Collect Documents</Text>
            </Nav>
            <Nav id="3">
              <IconCnt>
                <Icon icon={iosInformation} />
              </IconCnt>
              <Text>Provide Your Information</Text>
            </Nav>
            <Nav id="4">
              <IconCnt>
                <Icon icon={iosList} />
              </IconCnt>
              <Text>Forms</Text>
              {/* Nested Forms here! */}
              <Nav id="1">
                <IconCnt>
                  <Icon icon={circleO} />
                </IconCnt>
                <Text>I-821D</Text>
              </Nav>
              <Nav id="2">
                <IconCnt>
                  <Icon icon={circleO} />
                </IconCnt>
                <Text>I-765</Text>
              </Nav>
              <Nav id="3">
                <IconCnt>
                  <Icon icon={circleO} />
                </IconCnt>
                <Text>I-765WS</Text>
              </Nav>
            </Nav>
            <Nav id="5">
              <IconCnt>
                <Icon icon={socialUsd} />
              </IconCnt>
              <Text>Prepare Payment</Text>
            </Nav>
            <Nav id="6">
              <IconCnt>
                <Icon icon={iosCheckmark} />
              </IconCnt>
              <Text>Review Application</Text>
            </Nav>
            <Nav id="7">
              <IconCnt>
                <Icon icon={iosPrinter} />
              </IconCnt>
              <Text>Print and Mail</Text>
            </Nav>
          </SideNav>
        </Navigation>
        <Body>
          You can render any items as child of Nav element. All items will be
          rendered under a flex container.
        </Body>
      </AppContainer>
    );
  }
}
