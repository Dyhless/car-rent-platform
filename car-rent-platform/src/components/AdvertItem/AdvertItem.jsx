import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  AdvertItemWrapper,
  Type,
  MakeModelYear,
  Model,
  RentalPrice,
  Description,
  CarDetails,
  AdvertImg,
  LearnMoreWrapper,
  RegularIcon,
  IconWrapper,
  FavoriteIcon,
} from "./AdvertItem.styled";
import LearnMoreBtn from "../../components/Buttons/LearnMoreBtn/LearnMoreBtn";
import Modal from "../Modal/Modal";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/adverts/favoritesSlice";

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
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const isCarFavorite = favorites.some((item) => item.id === advert.id);

  const addToFavorite = () => {
    if (isCarFavorite) {
      dispatch(removeFavorite(advert));
    } else {
      dispatch(addFavorite(advert));
    }
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!advert || !advert.img) {
    return null;
  }

  return (
    <AdvertItemWrapper>
      <AdvertImg src={advert.img} alt="Car" />
      <IconWrapper onClick={addToFavorite}>
        {isCarFavorite ? <FavoriteIcon /> : <RegularIcon />}
      </IconWrapper>
      <div>
        <Type>
          {advert.make && (
            <MakeModelYear>
              {advert.make} <Model>{advert.model}</Model>, {advert.year}
            </MakeModelYear>
          )}{" "}
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
      </div>
      <LearnMoreWrapper>
        <LearnMoreBtn onClick={handleOpen} text="Learn more" />
        {open && <Modal onClose={handleClose} adverts={advert} />}
      </LearnMoreWrapper>
    </AdvertItemWrapper>
  );
};

export default AdvertItem;
