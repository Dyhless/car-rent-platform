import { createSlice } from '@reduxjs/toolkit';

import {
  getAllAdverts,
  getAdvertById,
  addAdvertToFavorite,
  removeAdvert,
  getFavoriteAll,
} from './advertsOperations';

import { handlePending, handleRejected } from '../../hooks/handlers';

const initialState = {
  catalogPageAdverts: [],
  adverts: [],
  advertById: [],
  favoriteAdverts: [],
  isLoading: false,
  error: null,
  total: 0,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(getAllAdverts.pending, handlePending)
      .addCase(getAllAdverts.fulfilled, (state, action) => {
        state.catalogPageAdverts = action.payload.catalogPageAdverts;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllAdverts.rejected, handleRejected)

      .addCase(getAdvertById.pending, handlePending)
      .addCase(getAdvertById.fulfilled, (state, action) => {
        state.advertById = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAdvertById.rejected, handleRejected)

      .addCase(addAdvertToFavorite.pending, handlePending)
      .addCase(addAdvertToFavorite.fulfilled, (state, action) => {
        state.favoriteAdverts.push(action.payload.result);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addAdvertToFavorite.rejected, handleRejected)
        
      .addCase(removeAdvert.pending, handlePending)
      .addCase(removeAdvert.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.favoriteAdverts.findIndex(
          advert => advert._id === action.payload.result._id
        );
        state.favoriteAdverts.splice(index, 1);
      })
      .addCase(removeAdvert.rejected, handleRejected)

      .addCase(getFavoriteAll.pending, handlePending)
      .addCase(getFavoriteAll.fulfilled, (state, action) => {
        state.favoriteAdverts = action.payload.adverts;
        state.total = action.payload.total;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getFavoriteAll.rejected, handleRejected),
});

export const advertsReducer = advertsSlice.reducer;