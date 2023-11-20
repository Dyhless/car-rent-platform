import styled from "styled-components";

export const StylesButton = styled.button`
  width: 274px;
  height: 44px;
  color: white;
  background-color: #3470ff;
  display: inline-block;
  border-radius: 12px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  cursor: pointer;
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    position: relative;
    top: 3px;
    background-color: #0b44cd;
  }
`;

export const Text = styled.span`
  color: #ffffff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  text-transform: none;
`;
