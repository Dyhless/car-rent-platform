import styled, { keyframes } from "styled-components";

const fireAnimation = keyframes`
  0% {
    color: #FFFFFF;
  }
  25% {
    color: #FFE0B2;
  }
  35% {
    color: #FFB800;
  }
  50% {
    color: #FF9029;
  }
  75% {
    color: #FF7B00;
  }
  100% {
    color: #FF3333;
  }
`;

export const Text = styled.p`
  font-size: 34px;
  font-weight: 600;
  max-width: 280px;
  text-align: center;
  padding-top: 180px;
  position: relative;
  padding-left: 100px;
  animation: ${fireAnimation} 5s infinite alternate;

  @media screen and (min-width: 375px) {
    padding-left: 100px;
  }

  @media screen and (min-width: 768px) {
    font-size: 46px;
    font-weight: 600;
    max-width: 1280px;
    padding-top: 80px;
    padding-left: 20px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 100px;
    font-weight: 600;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 320px;
  }
`;

export const Overlay = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const BgImg = styled.img`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  object-fit: cover;
`;
