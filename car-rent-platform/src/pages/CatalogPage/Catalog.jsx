import React, { useState, useEffect } from "react";
import { useGetAdvertsQuery } from "../../redux/adverts/advertsSlice";
import Loader from "../../components/Loader/Loader";
import { AdvertsList } from "./Catalog.styled";
import LoadMoreBtn from "../../components/Buttons/LoadMoreBtn/LoadMoreBtn";
import AdvertItem from "../../components/AdvertItem/AdvertItem";

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

  const hasMoreCars = adverts ? adverts.length > 0 : false;
  const itemsPerPage = 12;

  const isLastPage =
    !isFetching && (!hasMoreCars || adverts.length < itemsPerPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <>
      {error && <p>Ooops... something went wrong</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <AdvertsList>
            {adverts.slice(0, 12).map((advert) => (
              <AdvertItem key={advert.id} advert={advert} />
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
