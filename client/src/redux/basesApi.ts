// baseApi.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery(),

  /* //* don't axios belowe code -----
 baseQuery: fetchBaseQuery({
 baseUrl: "ldkafjla"
credentials : "include" 
})
*/
  endpoints: () => ({}),
});
