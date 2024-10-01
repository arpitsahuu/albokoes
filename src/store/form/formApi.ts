import { apiSlice } from "../api/apiSlice";

export const formApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    submitContactUs: builder.mutation({
      query: (data) => ({
        url: "/submit",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
    }),
    submitJoinUs: builder.mutation({
      query: (data) => ({
        url: "/submit/joinus",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {
  useSubmitContactUsMutation,
  useSubmitJoinUsMutation,
} = formApi;
