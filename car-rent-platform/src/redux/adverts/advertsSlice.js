import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const advertsApi = createApi({
  reducerPath: "adverts",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65562ffd84b36e3a431f4fd4.mockapi.io',
  }),
  tagTypes: ["Advert"],
  endpoints: (builder) => ({
    getAdverts: builder.query({
      query: (page = 1, perPage = 12) => `/adverts?page=${page}&perPage=${perPage}`,
      providesTags: ["Advert"],
      onQueryError: (error) => {
        console.error('Error fetching adverts:', error);
      },
    }),

    getAdvertById: builder.query({
      query: (id) => `/adverts/${id}`,
      providesTags: ["Advert"],
    }),

    deleteAdvert: builder.mutation({
      query: (id) => ({
        url: `/adverts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Advert"],
    }),
  }),
});

export const { 
  useGetAdvertsQuery, 
  useDeleteAdvertMutation, 
  useGetAdvertByIdQuery,
} = advertsApi;
