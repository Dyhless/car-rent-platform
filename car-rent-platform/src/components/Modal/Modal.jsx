import React, { useEffect } from "react";
import { ReactComponent as SvgClose } from "../../assets/images/x.svg";
import { createPortal } from "react-dom";
import {
  ModalWindow,
  Overlay,
  Wrapper,
  Title,
  Span,
  Item,
  Description,
  Info,
  ConditionItem,
  ConditionList,
  ConditionSpan,
  SvgCloseStyled,
  CarImg,
  InfoContainer,
  TitleContainer,
  InfoList,
} from "./Modal.styled";
import LearnMoreBtn from "../Buttons/LearnMoreBtn/LearnMoreBtn";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ adverts, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <Wrapper>
          <SvgCloseStyled onClick={onClose}>
            <SvgClose />
          </SvgCloseStyled>
          <CarImg src={adverts.img} alt={adverts.make} />
          <InfoContainer>
            <TitleContainer>
              <Title>
                {adverts.make} <Span>{adverts.model}</Span>, {adverts.year}
              </Title>
            </TitleContainer>
            <InfoList>
              <Item>{adverts.address.split(",")[1]}</Item>
              <Item>{adverts.address.split(",")[2]}</Item>
              <Item>Id: </Item>
              <Item>Year: {adverts.year}</Item>
              <Item>Type: {adverts.type}</Item>
            </InfoList>
            <InfoList>
              <Item>Fuel Consumption: {adverts.fuelConsumption}</Item>
              <Item>Engine Size: {adverts.engineSize}</Item>
            </InfoList>
            <Description>{adverts.description}</Description>
            <Info>Accessories and functionalities:</Info>
            <InfoList>
              {adverts.accessories.map((item) => (
                <Item key={item}>{item}</Item>
              ))}
            </InfoList>
            <InfoList>
              {adverts.functionalities.map((item) => (
                <Item key={item}>{item}</Item>
              ))}
            </InfoList>
            <Info>Rental Conditions:</Info>
            <ConditionList>
              <ConditionItem>
                Minimum age:{" "}
                <ConditionSpan>
                  {new Date().getFullYear() - adverts.year}
                </ConditionSpan>
              </ConditionItem>
              <ConditionItem>
                {adverts.rentalConditions.split("\n")[1]}
              </ConditionItem>
              <ConditionItem>
                {adverts.rentalConditions.split("\n")[2]}
              </ConditionItem>
              <ConditionItem>
                Mileage:{" "}
                <ConditionSpan>
                  {adverts.mileage.toLocaleString("en-US")}
                </ConditionSpan>
              </ConditionItem>
              <ConditionItem>
                Price: <ConditionSpan>{adverts.rentalPrice}</ConditionSpan>
              </ConditionItem>
            </ConditionList>
          </InfoContainer>
          <LearnMoreBtn
            onClick={() => {
              window.location.href = "tel:+380730000000";
            }}
          />
        </Wrapper>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
