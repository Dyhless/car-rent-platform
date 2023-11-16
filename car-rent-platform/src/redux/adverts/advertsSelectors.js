import { createSelector } from 'reselect';

const selectAllAdvertsData = (state) => state.adverts.catalogPageAdverts;
const selectIsLoadingData = (state) => state.adverts.isLoading;
const selectAdvertsData = (state) => state.adverts.adverts;
const selectErrorAdvertsData = (state) => state.adverts.error;
const selectFavoriteAdvertsData = (state) => state.adverts.favoriteAdverts;
const selectTotalAdvertsData = (state) => state.adverts.total;

export const selectAllAdverts = createSelector(
  [selectAllAdvertsData],
  (catalogPageAdverts) => catalogPageAdverts
);

export const selectAdvertById = (state) => state.adverts.advertById;

export const selectIsLoading = createSelector(
  [selectIsLoadingData],
  (isLoading) => isLoading
);

export const selectAdverts = createSelector(
  [selectAdvertsData],
  (adverts) => adverts
);

export const selectErrorAdverts = createSelector(
  [selectErrorAdvertsData],
  (error) => error
);

export const selectFavoriteAdverts = createSelector(
  [selectFavoriteAdvertsData],
  (favoriteAdverts) => favoriteAdverts
);

export const selectTotalAdverts = createSelector(
  [selectTotalAdvertsData],
  (total) => total
);

