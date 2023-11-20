import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    make: '',
    filteredPrices: [],
    minMileage: '',
    maxMileage: '',
  },
  reducers: {
    setMake: (state, action) => {
      state.make = action.payload;
    },
    setFilteredPrices: (state, action) => {
      state.filteredPrices = action.payload;
    },
    setMinMileage: (state, action) => {
      state.minMileage = action.payload;
    },
    setMaxMileage: (state, action) => {
      state.maxMileage = action.payload;
    },
  },
});

export const { setMake, setFilteredPrices, setMinMileage, setMaxMileage } = filterSlice.actions;
export default filterSlice.reducer;
