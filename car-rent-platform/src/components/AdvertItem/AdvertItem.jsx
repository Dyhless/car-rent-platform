import React from "react";
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

const AdvertItem = ({ advert }) => {
  const truncateString = (str, maxLength) =>
    str.length > maxLength ? str.slice(0, maxLength - 3) + "..." : str;

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
        <Description>
          {advert.address
            .split(",")
            .slice(1)
            .map((part) => part.trim())
            .join(", ")}{" "}
          | {advert.rentalCompany}
        </Description>
        <CarDetails>
          {`${truncateString(advert.type, 15)} | ${truncateString(
            advert.model,
            15
          )} | ${truncateString(advert.id, 10)} | ${truncateString(
            advert.functionalities[0],
            8
          )}`}
        </CarDetails>
        <LearnMoreBtn
          // onClick={handleLearnMore}
          // disabled={isFetching}
          text="Learn more"
        />
      </div>
    </AdvertItemWrapper>
  );
};

export default AdvertItem;
