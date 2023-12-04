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

export const RentalСar = styled.button`
  width: 274px;
  height: 44px;
  padding: 14px;
  line-height: 20px;
  border-radius: 12px;
  border: none;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  background-color: var(--light-blue-color);
  color: #fff;
  animation: ${gradientAnimation} 2s linear infinite alternate-reverse;
  transform: translateX(-50%);
  margin-left: 50%;
  position: relative;

  &:hover,
  &:focus {
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
`;
