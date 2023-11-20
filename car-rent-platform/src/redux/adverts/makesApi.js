import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const makesApi = createApi({
  reducerPath: 'makes',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65562ffd84b36e3a431f4fd4.mockapi.io', 
  }),
  endpoints: (builder) => ({
    getMakes: builder.query({
      query: () => '/makes',
      providesTags: ['Makes'],
    }),
  }),
});

export const { useGetMakesQuery } = makesApi;