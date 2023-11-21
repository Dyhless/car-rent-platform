import styled from "styled-components";

export const Text = styled.p`
  color: white;
  font-size: 24px;
  width: 360px;
  position: absolute;
  top: 220px;
  left: 80px;
`;

export const FavoritesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 22px;
  list-style: none;
  padding-top: 80px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding-top: 20px;
    padding-left: 40px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 0px;
    margin: 0;
  }
`;
