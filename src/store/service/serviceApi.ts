import { apiSlice } from "../api/apiSlice";

export const serviceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/services",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
} = serviceApi;
