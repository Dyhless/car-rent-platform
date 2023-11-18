import styled from "styled-components";

export const AdvertItemWrapper = styled.li`
  width: 274px;
  height: 426px;
  color: var(--black-color);
  display: flex; /* Используем flex-контейнер */
  flex-direction: column; /* Располагаем элементы в колонку */
  align-items: center; /* Выравниваем элементы по центру по горизонтали */
  margin-bottom: 50px;
`;

export const Type = styled.p`
  display: flex;
  font-size: 16px;
  margin-top: 14px;
  margin-bottom: 8px;
`;

export const MakeModelYear = styled.span`
  text-align: left;
  padding-right: 87px;
`;

export const Model = styled.span`
  color: var(--dark-blue-color); /* Add this line for color styling */
`;

export const RentalPrice = styled.span`
  text-align: right;
`;

export const Description = styled.p`
  margin-bottom: 4px;
  color: var(--grey-color);
`;

export const CarDetails = styled.p`
  margin-bottom: 28px;
  color: var(--grey-color);
`;

export const AdvertImg = styled.img`
  width: 274px;
  height: 274px;
  object-fit: cover;
  border-radius: 14px;
`;
