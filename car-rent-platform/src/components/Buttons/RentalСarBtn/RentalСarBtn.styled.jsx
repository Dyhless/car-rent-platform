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
  display: inline-block;
  position: absolute;
  width: 274px;
  height: 44px;
  padding: 14px;
  line-height: 20px;
  border-radius: 12px;
  border: none;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  background-color: #fa8531;
  color: #fff;
  animation: ${gradientAnimation} 2s linear infinite alternate-reverse;

  margin-top: 10%;
  margin-left: 13%;
  transform: translateX(-50%);

  &:hover,
  &:focus {
    outline: none;
    animation-play-state: paused;
    background: linear-gradient(45deg, #ffc49a, #fa8531, #fa3131);
    background-size: 400% 400%;
    animation: ${gradientAnimation} 2s ease infinite;

    &:focus {
      animation: ${gradientAnimation} 3s ease infinite;
    }
  }
`;
