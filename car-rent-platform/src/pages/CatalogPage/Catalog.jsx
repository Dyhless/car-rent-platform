import React, { useState } from "react";
import { useGetAdvertsQuery } from "../../redux/adverts/advertsSlice";
import Loader from "../../components/Loader/Loader";
import {
  Type,
  Description,
  AdvertsList,
  AdvertItem,
  AdvertImg,
  CarDetails,
  MakeModelYear,
  RentalPrice,
  Model,
} from "./Catalog.styled";
import LoadMoreBtn from "../../components/Buttons/LoadMoreBtn/LoadMoreBtn";
import LearnMoreBtn from "../../components/Buttons/LearnMoreBtn/LearnMoreBtn";

const Catalog = () => {
  const [page, setPage] = useState(1);

  const {
    data: adverts,
    error,
    isLoading,
    isFetching,
  } = useGetAdvertsQuery({ page, perPage: 12 });

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const truncateString = (str, maxLength) =>
    str.length > maxLength ? str.slice(0, maxLength - 3) + "..." : str;

  // Check if adverts is defined before using slice
  const displayedAdverts = adverts ? adverts.slice(0, 12) : [];

  const hasMoreCars = adverts ? adverts.length > 0 : false;
  const itemsPerPage = 12;

  const isLastPage =
    !isFetching && (!hasMoreCars || (adverts && adverts.length < itemsPerPage));

  return (
    <>
      {error && <p>Ooops... something went wrong</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <AdvertsList>
            {displayedAdverts.map((advert) => (
              <AdvertItem key={advert.id}>
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
              </AdvertItem>
            ))}
          </AdvertsList>
          {isFetching && <Loader />}
          {hasMoreCars && !isLastPage && (
            <LoadMoreBtn
              onClick={handleLoadMore}
              disabled={isFetching}
              text="Load more"
            />
          )}
        </>
      )}
    </>
  );
};

export default Catalog;
