import React, { useState, useEffect } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import LoadMoreBtn from "../../components/Buttons/LoadMoreBtn/LoadMoreBtn";
import { AdvertsList } from "./Catalog.styled";
import AdvertItem from "../../components/AdvertItem/AdvertItem";
import Filter from "../../components/Filter/Filter";
import { NotFound } from "../../components/NotFound/NotFound";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/adverts/filterSlice";
import {
  useGetAdvertsQuery,
  useGetAllAdvertsQuery,
} from "../../redux/adverts/advertsSlice";
import { getFilter } from "../../redux/adverts/Selectors";

const Catalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const {
    data: adverts,
    error,
    isLoading,
    isFetching,
  } = useGetAdvertsQuery(page);

  if (error) {
    console.error("Error fetching adverts:", error);
  }

  const { data: allAdverts } = useGetAllAdvertsQuery();

  const filter = useSelector(getFilter);

  const itemsPerPage = 12;

  useEffect(() => {
    if (page) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [page]);

  const filteredCars =
    (allAdverts || []).filter((advert) => {
      const makeCondition =
        !filter ||
        !filter.selectedMake ||
        advert.make === filter.selectedMake.value;

      const priceCondition =
        !filter.rentalPrice ||
        (parseFloat(advert.rentalPrice.replace("$", "")) >=
          parseFloat(filter.rentalPrice) &&
          parseFloat(advert.rentalPrice.replace("$", "")) <
            parseFloat(filter.rentalPrice) + 10);

      return makeCondition && priceCondition;
    }) || [];

  const totalFilteredCars = filteredCars.length;

  const slicedFilteredCars = filteredCars.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <NotFound />;
  }

  if (!slicedFilteredCars || slicedFilteredCars.length === 0) {
    toast.error(`No cars found`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1500,
    });
  }

  const hasMoreCars = adverts ? adverts.length > 0 : false;
  const isLastPage =
    !isFetching && (!hasMoreCars || slicedFilteredCars.length < itemsPerPage);
  const showLoadMoreButton =
    filter.selectedMake || filter.rentalPrice
      ? totalFilteredCars > page * itemsPerPage
      : hasMoreCars;

  const makes = allAdverts
    ? [...new Set(allAdverts.map((advert) => advert.make))]
    : [];
  const prices = allAdverts
    ? [
        ...new Set(
          allAdverts.map((advert) =>
            parseFloat(advert.rentalPrice.replace("$", ""))
          )
        ),
      ]
    : [];

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      {error && <NotFound />}{" "}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            <ToastContainer transition={Slide} />
            <Filter
              makes={makes}
              prices={prices}
              onFilterChange={(newFilters) => {
                setPage(1);
                dispatch(setFilter(newFilters));
              }}
              filter={filter}
            />
            <AdvertsList>
              {slicedFilteredCars.map((advert) => (
                <AdvertItem key={advert.id} advert={advert} />
              ))}
            </AdvertsList>
            {isFetching && <Loader />}
            {showLoadMoreButton && !isLastPage && (
              <LoadMoreBtn
                onClick={handleLoadMore}
                disabled={isFetching}
                text="Load more"
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Catalog;
