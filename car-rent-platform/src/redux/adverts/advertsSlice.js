import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const advertsApi = createApi({
  reducerPath: "adverts",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65562ffd84b36e3a431f4fd4.mockapi.io',
  }),
  tagTypes: ["Advert"],
  endpoints: (builder) => ({
    getAdverts: builder.query({
      query: (page = 1, limit = 12) => `/adverts?page=${page}&limit=${limit}`,
      providesTags: ["Advert"],
      onQueryError: (error) => {
        console.error('Error fetching adverts:', error);
      },
    }),
    getFilteredAdverts: builder.query({
      query: ({ make, rentalPrice, mileageFrom, mileageTo }) =>
        `/adverts?make=${make}&rentalPrice=${rentalPrice}&mileageFrom=${mileageFrom}&mileageTo=${mileageTo}`,
      providesTags: ["Advert"],
      onQueryError: (error) => {
        console.error('Error fetching filtered adverts:', error);
      },
    }),
  }),
});

export const { useGetAdvertsQuery, useGetFilteredAdvertsQuery } = advertsApi;