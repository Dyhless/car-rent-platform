export const getFavorites = (state) => state.favorites;

// import { createSelector } from '@reduxjs/toolkit';

// export const selectCars = state => state.adverts.items;
// export const selectFilter = state => state.filter;
// export const selectAmountCars = state => state.adverts.items.length;

// export const selectFilteredCars = createSelector(
//   [selectCars, selectFilter],
//   (adverts, { make, mileageFrom, mileageTo, rentalPrice }) => {
//     return adverts
//       .filter((advert) => advert.make && advert.make.toLowerCase().includes(make.toLowerCase()))
//       .filter((advert) => (rentalPrice > 0 ? Number(advert.rentalPrice.split('$')[1]) === rentalPrice : true))
//       .filter((advert) => (mileageFrom > 0 ? advert.mileage >= mileageFrom : true))
//       .filter((advert) => (mileageFrom > 0 && mileageTo > 0 ? advert.mileage <= mileageTo : true))
//       .filter((advert) => (mileageFrom === 0 && mileageTo > 0 ? advert.mileage <= mileageTo : true));
//   }
// );

