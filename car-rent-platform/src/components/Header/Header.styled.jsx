import styled from "styled-components";
import { NavLink } from "react-router-dom";
const transition = "300ms cubic-bezier(0.46, 0.03, 0.52, 0.96)";

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-left: 100px;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
  z-index: 10;
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: rgba(0, 2, 2, 0.7);
  }
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 10px;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    height: auto;
    flex-direction: column;
    gap: 2px;
  }
`;

export const Link = styled(NavLink)`
  color: var(--header-text-color);
  display: inline-block;
  text-decoration: none;
  padding: 14px;
  font-weight: 600;
  font-size: 22px;
  transition: color ${transition}, background-color ${transition},
    border-color ${transition};

  &:hover {
    color: var(--white-color);
    transform: scale(1.2);
    transition: 0.5s;
  }
`;
