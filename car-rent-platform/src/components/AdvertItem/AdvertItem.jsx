import React from "react";
import { useState } from "react";
import {
  AdvertItemWrapper,
  Type,
  MakeModelYear,
  Model,
  RentalPrice,
  Description,
  CarDetails,
  AdvertImg,
} from "./AdvertItem.styled";
import LearnMoreBtn from "../../components/Buttons/LearnMoreBtn/LearnMoreBtn";
import Modal from "../Modal/Modal";

const truncateString = (str, maxLength) =>
  str.length > maxLength ? str.slice(0, maxLength - 3) + "..." : str;

const AddressDetails = ({ address, rentalCompany }) => (
  <Description>
    {address
      .split(",")
      .slice(1)
      .map((part) => part.trim())
      .join(", ")}{" "}
    | {rentalCompany}
  </Description>
);

const CarDetailsInfo = ({ type, model, id, functionality }) => (
  <CarDetails>
    {`${truncateString(type, 15)} | ${truncateString(
      model,
      15
    )} | ${truncateString(id, 10)} | ${truncateString(functionality[0], 8)}`}
  </CarDetails>
);

const AdvertItem = ({ advert }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!advert || !advert.img) {
    return null;
  }

  return (
    <AdvertItemWrapper>
      <AdvertImg src={advert.img} alt="Car" />
      <div>
        <Type>
          <MakeModelYear>
            {advert.make} <Model>{advert.model}</Model>, {advert.year}
          </MakeModelYear>{" "}
          <RentalPrice>{advert.rentalPrice}</RentalPrice>
        </Type>
        <AddressDetails
          address={advert.address}
          rentalCompany={advert.rentalCompany}
        />
        <CarDetailsInfo
          type={advert.type}
          model={advert.model}
          id={advert.id}
          functionality={advert.functionalities}
        />
        <LearnMoreBtn onClick={handleOpen} text="Learn more" />
        {open && <Modal onClose={handleClose} adverts={advert} />}
      </div>
    </AdvertItemWrapper>
  );
};

export default AdvertItem;