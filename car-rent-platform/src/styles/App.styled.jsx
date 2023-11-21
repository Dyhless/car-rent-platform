import styled from "styled-components";

const MainContainer = styled.div`
  min-width: 320px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 80px;
  padding-bottom: 80px;
  // outline: 2px solid red;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 80px;
    padding-bottom: 140px;
    // outline: 1px solid blue;
  }

  @media screen and (min-width: 1440px) {
    width: 1185px;
    padding-left: 128px;
    padding-right: 128px;
    padding-top: 120px;
    padding-bottom: 140px;
    // outline: 1px solid tomato;
  }
`;

export { MainContainer };
