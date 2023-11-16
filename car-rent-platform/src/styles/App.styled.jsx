import styled from "styled-components";

const MainContainer = styled.div`
  width: 100vw;
  margin-right: auto;
  margin-left: auto;
  outline: 2px solid red; 
  outline-offset: -2px;
  }

  @media screen and (min-width: 767px) {
    max-width: 375px;
    margin-bottom: 40px;
    padding-left: 20px;
    padding-right: 20px;
    outline: 1px solid blue;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 40px;
    padding-bottom: 100px;
    outline: 1px solid green;
}

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    display: flex;
    flex-direction: row;
    align-items: start;
    padding-left: 24px;
    padding-right: 24px;
    outline: 1px solid tomato;
  }
`;

export { MainContainer };
