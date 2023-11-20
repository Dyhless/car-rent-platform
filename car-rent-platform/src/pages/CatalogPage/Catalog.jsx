import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/Loader/Loader";
import LoadMoreBtn from "../../components/Buttons/LoadMoreBtn/LoadMoreBtn";
import AdvertItem from "../../components/AdvertItem/AdvertItem";
import { AdvertsList, WrapperFilter } from "./Catalog.styled";
import Filter from "../../components/Filter/Filter";
import {
  useGetAdvertsQuery,
  useGetAllAdvertsQuery,
} from "../../redux/adverts/advertsSlice";
import {
  setMake,
  setFilteredPrices,
  setMinMileage,
  setMaxMileage,
} from "../../redux/adverts/filterSlice";

const Catalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const {
    data: adverts,
    error,
    isLoading,
    isFetching,
  } = useGetAdvertsQuery(page);
  const { data: allAdverts } = useGetAllAdvertsQuery();

  const filters = useSelector((state) => state.filter);
  const [filteredAdverts, setFilteredAdverts] = useState(null);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    if (page) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (isFiltering && filters && allAdverts) {
      const applyFilters = () => {
        const filteredAdverts = allAdverts.filter((advert) => {
          if (filters.make && advert.make !== filters.make.value) {
            return false;
          }
          if (
            filters.filteredPrices.length > 0 &&
            !filters.filteredPrices.some(
              (priceObj) =>
                priceObj.value === advert.rentalPrice.replace("$", "")
            )
          ) {
            return false;
          }
          if (filters.minMileage && advert.mileage < filters.minMileage) {
            return false;
          }
          if (filters.maxMileage && advert.mileage > filters.maxMileage) {
            return false;
          }
          return true;
        });

        setFilteredAdverts(filteredAdverts.length > 0 ? filteredAdverts : null);
      };

      applyFilters();
    }
  }, [filters, allAdverts, isFiltering]);

  const makes = allAdverts
    ? [...new Set(allAdverts.map((advert) => advert.make))]
    : [];
  const prices = allAdverts
    ? [
        ...new Set(
          allAdverts.map((advert) => advert.rentalPrice.replace("$", ""))
        ),
      ]
    : [];
  const mileage = allAdverts
    ? [...new Set(allAdverts.map((advert) => advert.mileage))]
    : [];
  const minMileage = Math.min(...mileage);
  const maxMileage = Math.max(...mileage);

  return (
    <>
      {error && <p>Ooops... something went wrong</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <WrapperFilter>
            <Filter
              makes={makes}
              prices={prices}
              minMileage={minMileage}
              maxMileage={maxMileage}
              onFilterChange={(newFilters) => {
                dispatch(setMake(newFilters.make));
                dispatch(setFilteredPrices(newFilters.filteredPrices));
                dispatch(setMinMileage(newFilters.minMileage));
                dispatch(setMaxMileage(newFilters.maxMileage));
                setIsFiltering(true);
              }}
              filters={filters}
            />
          </WrapperFilter>
          <AdvertsList>
            {isFiltering ? (
              filteredAdverts !== null && filteredAdverts.length > 0 ? (
                filteredAdverts.map((advert) => (
                  <AdvertItem key={advert.id} advert={advert} />
                ))
              ) : (
                <div>No matches found based on the chosen criteria.</div>
              )
            ) : (
              adverts
                .slice(0, 12)
                .map((advert) => <AdvertItem key={advert.id} advert={advert} />)
            )}
          </AdvertsList>
          {isFetching && <Loader />}
          {adverts.length > 0 && !isFetching && (
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
