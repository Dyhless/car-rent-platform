import styled from "styled-components";

export const Type = styled.p`
  font-size: 16px;
  margin-top: 14px;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  margin-top: 12px;
  margin-bottom: 4px;
  color: var(--grey-color);
`;

export const CarDetails = styled.p`
  margin-top: 12px;
  margin-bottom: 28px;
  color: var(--grey-color);
`;

export const AdvertsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const AdvertItem = styled.li`
  width: 274px:
  height: auto;
  color: var(--black-color);
  display: block;
  gap: 29px;
`;

export const AdvertImg = styled.img`
  width: 274px;
  height: 268px;
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 6px;
`;
