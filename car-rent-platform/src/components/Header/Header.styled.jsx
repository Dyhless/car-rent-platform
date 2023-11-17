import styled from "styled-components";
import { NavLink } from "react-router-dom";
const transition = "300ms cubic-bezier(0.46, 0.03, 0.52, 0.96)";

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 6px 0;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
  z-index: 10;
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: rgba(0, 2, 2, 0.3);
  }
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 30px;
  margin-right: auto;
  margin-left: auto;
`;

export const Link = styled(NavLink)`
  color: var(--light-blue-color);
  display: inline-block;
  text-decoration: none;
  padding: 14px;
  font-weight: 600;
  font-size: 22px;
  transition: color ${transition}, background-color ${transition},
    border-color ${transition};

  &:hover {
    color: var(--violet-color);
  }
`;
