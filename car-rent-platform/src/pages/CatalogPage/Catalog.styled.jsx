import styled from "styled-components";

export const Type = styled.p`
  font-size: 16px;
  margin-top: 14px;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  margin-bottom: 4px;
  color: var(--grey-color);
`;

export const CarDetails = styled.p`
  margin-bottom: 28px;
  color: var(--grey-color);
`;

export const AdvertsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  list-style: none;
  padding: 20px; /* добавлено */
  margin: 0;
`;

export const AdvertItem = styled.li`
  width: 274px;
  height: auto;
  color: var(--black-color);
  display: block;
  margin-bottom: 50px; /* добавлено */
`;

export const AdvertImg = styled.img`
  width: 274px;
  height: 274px;
  object-fit: cover;
  border-radius: 14px;
`;
