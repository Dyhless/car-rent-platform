import styled from "styled-components";

export const Text = styled.p`
  color: var(--hero-text-color);
  z-index: 0;

  @media screen and (min-width: 375px) {
    font-size: 20px;
    max-width: 280px;
    padding-top: 180px;
  }

  @media screen and (min-width: 768px) {
    font-size: 30px;
    max-width: 1280px;
    padding-top: 80px;
    padding-left: 100px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 44px;
    padding-top: 100px;
    padding-left: 100px;
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
