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

export const LearnMore = styled.button`
  display: inline-block;
  position: absolute;
  transform: translateX(-50%);
  width: 274px;
  height: 44px;
  padding: 14px;
  line-height: 20px;
  border-radius: 12px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  background-color: var(--light-blue-color);
  color: #fff;
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
