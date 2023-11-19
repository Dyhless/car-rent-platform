import React, { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import LoadMoreBtn from "../../components/Buttons/LoadMoreBtn/LoadMoreBtn";
import AdvertItem from "../../components/AdvertItem/AdvertItem";
// import { useSelector } from "react-redux";
import { AdvertsList } from "./Catalog.styled";
import { useGetAdvertsQuery } from "../../redux/adverts/advertsSlice";
// import { NotFound } from "../../components/NotFound/NotFound";
// import { useGetFilteredAdvertsQuery } from "../../redux/adverts/advertsSlice";
// import { CarsList } from "../../components/CarsList/CarsList";
// import { SearchForm } from "../../components/SearchForm/SearchForm";
// import { selectFilteredCars } from "../../redux/adverts/Selectors";

const Catalog = () => {
  const [page, setPage] = useState(1);
  // const filteredCars = useSelector(selectFilteredCars);

  const {
    data: adverts,
    error,
    isLoading,
    isFetching,
  } = useGetAdvertsQuery(page);
  // } = useGetFilteredAdvertsQuery({
  //   page,
  //   make: filteredCars.make,
  //   rentalPrice: filteredCars.rentalPrice,
  //   mileageFrom: filteredCars.mileageFrom,
  //   mileageTo: filteredCars.mileageTo,
  // });

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

  // useEffect(() => {
  //   setPage(1);
  // }, [filteredCars]);

  return (
    <>
      {error && <p>Ooops... something went wrong</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* <SearchForm />
          {Array.isArray(filteredCars) && filteredCars.length > 0 && (
            <CarsList cars={filteredCars} />
          )}
          {Array.isArray(filteredCars) &&
            filteredCars.length === 0 &&
            !isLoading && <NotFound />} */}
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
