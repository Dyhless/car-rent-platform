import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { advertsApi } from './adverts/advertsSlice'
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { favoriteReducer } from "../redux/adverts/favoritesSlice";

const reducers = combineReducers({
  [advertsApi.reducerPath]: advertsApi.reducer,
  favorites: favoriteReducer,
});

const persistConfig = {
  key: "favorites",
  version: 1,
  storage,
  whitelist: ["favorites"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(advertsApi.middleware),
});

export const persistor = persistStore(store);
