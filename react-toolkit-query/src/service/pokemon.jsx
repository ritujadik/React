import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fakestoreApi = createApi({
  reducerPath: "fakestoreApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getfakestoreByName: builder.query({
      query: (name) => `${name}`,
    }),
  }),
});
export const { useGetfakestoreByNameQuery } = fakestoreApi;
