import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  width: 100%;
  padding-left: 0px;
  margin-left: 0px;
`;

export const container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 0px;
  margin-right: auto;
  margin-left: 0px;
`;

export const Navigation = styled.div`
  width: 220px;
  flex-shrink: 0;
  background: #fff;
  height: 100vh;
  border-right: 1px solid rgba(0, 0, 0, 0.125);
`;
export const Body = styled.div`
  padding: 12px;
  padding-left: 0px;
  justify-content: stretch;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

export const ExampleContainer = styled.div`
  width: 100%;
  background: #fff;
  border: 1px solid #e5e5e5;
  padding-left: 0px;
  margin-left: 0px;
`;

export const ExampleNavigation = styled(Navigation)`
  margin-right: 4px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-left: 0px;
`;

export const ExampleBody = styled.div`
  background: #fff;
  padding: 12px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding-left: 0px;
  margin-left: 0px;
`;
