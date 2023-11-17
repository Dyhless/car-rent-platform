import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const advertsApi = createApi({
  reducerPath: 'adverts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65562ffd84b36e3a431f4fd4.mockapi.io',
  }),
  tagTypes: ["Advert"],
  endpoints: (builder) => ({
    getAdverts: builder.query({
      query: () => '/adverts',
      providesTags: ["Advert"],
    }),
    getAdvertById: builder.query({
      // modal
      query: (id) => `/adverts/${id}`,
      providesTags: ["Advert"],
    }),
    deleteAdvert: builder.mutation({
      // item
      query: (id) => ({
        url: `/adverts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Advert"],
    }),
  }),
});

export const { useGetAdvertsQuery, useDeleteAdvertMutation, useGetAdvertByIdQuery } = advertsApi;