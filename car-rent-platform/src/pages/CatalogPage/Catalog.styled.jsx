import styled from "styled-components";

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

export const AdvertItem = styled.li`
  width: 274px;
  height: 426px;
  color: var(--black-color);
  display: flex; /* Используем flex-контейнер */
  flex-direction: column; /* Располагаем элементы в колонку */
  align-items: center; /* Выравниваем элементы по центру по горизонтали */
  margin-bottom: 50px;
`;

export const AdvertImg = styled.img`
  width: 274px;
  height: 274px;
  object-fit: cover;
  border-radius: 14px;
`;
