import styled from "styled-components";

export const AdvertsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 22px;
  list-style: none;

  @media screen and (max-width: 767px) {
    padding-top: 180px;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding-left: 40px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);

    padding: 0px;
    margin: 0;
  }
`;
