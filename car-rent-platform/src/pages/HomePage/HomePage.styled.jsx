import styled from "styled-components";

export const Text = styled.p`
  color: var(--hero-text-color);
  position: absolute;

  z-index: 0;

  @media screen and (min-width: 375px) {
    font-size: 20px;
    max-width: 280px;
    top: 180px;
    left: 40px;
  }

  @media screen and (min-width: 768px) {
    font-size: 34px;
    max-width: 760px;
    top: 80px;
    left: 80px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 44px;
    max-width: 1280px;
    top: 120px;
    left: 120px;
  }
`;

export const OverLay = styled.div`
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
