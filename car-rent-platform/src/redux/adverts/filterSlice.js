// filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = {
  make: "",
  rentalPrice: "",
  mileageMin: "",
  mileageMax: "",
  selectedMake: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialFilterState,
  reducers: {
    setFilter(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    selectMake(state, action) {
      state.selectedMake = action.payload;
    },
  },
});

export const { setFilter, selectMake } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
