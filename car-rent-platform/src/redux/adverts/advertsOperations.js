import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65562ffd84b36e3a431f4fd4.mockapi.io/adverts/';

export const getAllAdverts = createAsyncThunk(
  'adverts/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts/catalogpage');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAdvertById = createAsyncThunk(
  'adverts/advertById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts/${id}`);

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addAdvertToFavorite = createAsyncThunk(
  'adverts/favorite/add/:id',
  async (id, thunkAPI) => {
    try {
      const response = await axios.post(`/adverts/favorite/add/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeAdvert = createAsyncThunk(
  'adverts/favorite/remove/:id',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`adverts/favorite/remove/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const getFavoriteAll = createAsyncThunk(
  'adverts/favorite/all',
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await axios.get(
        `adverts/favorite?page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);