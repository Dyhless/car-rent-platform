import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 6px 0;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.8);
  z-index: 10;
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 30px;
`;

export const Link = styled(NavLink)`
  color: var(--dark-blue-color);
  display: inline-block;
  text-decoration: none;
  padding: 14px;
  font-weight: 600;
  font-size: 22px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #f85900;
  }
`;
