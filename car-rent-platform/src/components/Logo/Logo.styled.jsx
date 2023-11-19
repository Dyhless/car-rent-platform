import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as logo_icon } from "../../assets/images/header-icon.svg";

export const LogoLink = styled(Link)`
  text-decoration: none;
  padding-top: 16px;
  display: flex;
  gap: 5px;
  transition: 0.5s;
  width: 133px;
  &:hover,
  &:focus {
    transform: scale(1.2);
  }
  @media screen and (min-width: 768px) {
    width: 151px;
  }
`;

export const LogoIcon = styled(logo_icon)`
  fill: var(--white-color);

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 28px;
  }
`;

export const LogoIconHeader = styled(LogoIcon)`
  fill: var(--white-color);

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 28px;
  }
`;

export const LogoText = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.125;
  padding: 2px 0 2px 0;
  color: var(--white-color);
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.12;
  }
`;

export const LogoTextHeader = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  padding: 2px 0 2px 0;
  color: var(--white-color);
  @media screen and (min-width: 375px) {
    font-size: 16px;
    line-height: 1.125;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.22;
  }
`;
