import styled from "styled-components";
import { BiHeart, BiSolidHeart } from "react-icons/bi";

export const IconWrapper = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover {
    transform: scale(1.5);
  }
`;

export const RegularIcon = styled(BiHeart)`
  fill: var(--white-color);
  width: 100%;
  height: 100%;
  font-size: 2em;
`;

export const FavoriteIcon = styled(BiSolidHeart)`
  color: var(--dark-blue-color);
  width: 100%;
  height: 100%;
  font-size: 2em;
`;

export const AdvertItemWrapper = styled.li`
  position: relative;
  width: 274px;
  height: 426px;
  color: var(--black-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  margin-top: auto;
`;

export const LearnMoreWrapper = styled.div`
  margin-top: auto;
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
  color: var(--dark-blue-color);
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
  min-height: 274px;
  max-height: 274px;
`;
