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
} from "./Catalog.styled";
import LoadMoreBtn from "../../components/Buttons/LoadMoreBtn/LoadMoreBtn";

const Catalog = () => {
  const [page, setPage] = useState(1);
  const {
    data: adverts,
    error,
    isLoading,
    isFetching,
  } = useGetAdvertsQuery(page);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const hasMoreAdverts = adverts ? adverts.length > 0 : false;
  const itemsPerPage = 12;

  const isLastPage =
    !isFetching && (!hasMoreAdverts || adverts.length < itemsPerPage);

  return (
    <>
      {error && <p>Ooops... something went wrong</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <AdvertsList>
            {adverts.map((advert) => (
              <AdvertItem key={advert.id}>
                <AdvertImg src={advert.img} alt="Car" />
                <>
                  <Type>
                    {advert.make} {advert.model}, {advert.year}{" "}
                    {advert.rentalPrice}
                  </Type>
                  <Description>
                    {advert.address} | {advert.rentalCompany}
                  </Description>
                  <CarDetails>
                    {advert.type} | {advert.model} | {advert.id} |{" "}
                    {advert.functionalities[0]}
                  </CarDetails>
                </>
              </AdvertItem>
            ))}
          </AdvertsList>
          {isFetching && <Loader />}
          {hasMoreAdverts && !isLastPage && (
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
