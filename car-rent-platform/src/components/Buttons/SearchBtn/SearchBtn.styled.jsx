import styled, { keyframes } from "styled-components";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

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
  animation: ${gradientAnimation} 2s linear infinite alternate-reverse;

  &:hover {
    animation-play-state: paused;
    background: linear-gradient(
      45deg,
      var(--light-blue-color),
      var(--dark-blue-color),
      var(--violet-color)
    );
    background-size: 400% 400%;
    animation: ${gradientAnimation} 2s ease infinite;
  }

  &:focus {
    outline: none;
    animation-play-state: paused;
    background: linear-gradient(
      45deg,
      var(--light-blue-color),
      var(--dark-blue-color),
      var(--violet-color)
    );
    background-size: 400% 400%;
    animation: ${gradientAnimation} 3s ease infinite;
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
