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

export const LoadMore = styled.button`
  display: inline-block;
  margin-left: 50%;
  margin-bottom: 28px;
  transform: translateX(-50%);
  min-width: 60px;
  padding: 14px;
  border-radius: 20px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  background-color: var(--light-blue-color);
  color: #fff;
  animation: ${gradientAnimation} 2s linear infinite alternate-reverse;

  &:hover {
    animation-play-state: paused;
    background: linear-gradient(
      45deg,
      var(--white-color),
      var(--light-blue-color),
      var(--dark-blue-color),
      var(--violet-color)
    );
    background-size: 400% 400%;
    animation: ${gradientAnimation} 3s ease infinite;
  }

  &:focus {
    outline: none;
    animation-play-state: paused;
    background: linear-gradient(
      45deg,
      var(--white-color),
      var(--light-blue-color),
      var(--dark-blue-color),
      var(--violet-color)
    );
    background-size: 400% 400%;
    animation: ${gradientAnimation} 3s ease infinite;
  }
`;

// export const LoadMore = styled.button`
//   display: inline-block;
//   margin-left: 50%;
//   margin-top: 100px;
//   margin-bottom: 150px;
//   color: #3470ff;
//   font-family: "Manrope";
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 1.5;
//   text-decoration-line: underline;
//   border: none;
//   background-color: transparent;
//   cursor: pointer;
//   &:hover {
//     color: #0b44cd;
//   }
// `;
