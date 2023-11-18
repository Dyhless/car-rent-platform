import React, { useState } from "react";
import {
  useGetAdvertsQuery,
  useGetMoreAdvertsQuery,
} from "../../redux/adverts/advertsSlice";
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

  const { data: moreAdverts, isFetching: isMoreAdvertsFetching } =
    useGetMoreAdvertsQuery({ page: page + 1, perPage: 12 });

  const allAdverts = adverts ? [...adverts] : [];
  if (moreAdverts) {
    allAdverts.push(...moreAdverts);
  }

  const itemsPerPage = 12;

  const isLastPage =
    !isFetching && (!moreAdverts || moreAdverts.length < itemsPerPage);

  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.slice(0, maxLength - 3) + "...";
    }
    return str;
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      {error && <p>Ooops... something went wrong</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <AdvertsList>
            {allAdverts.slice(0, itemsPerPage).map((advert) => (
              <AdvertItem key={advert.id}>
                <AdvertImg src={advert.img} alt="Car" />
                <div>
                  <Type>
                    <MakeModelYear>
                      {advert.make} {advert.model}, {advert.year}
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
          {!isLastPage && (
            <LoadMoreBtn
              onClick={handleLoadMore}
              disabled={isFetching || isMoreAdvertsFetching}
              text="Load more"
            />
          )}
        </>
      )}
    </>
  );
};

export default Catalog;