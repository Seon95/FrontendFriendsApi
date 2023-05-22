import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cocktailsApi = createApi({
  reducerPath: "cocktailsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.thecocktaildb.com/api/json/v1/1/",
  }),
  refetchOnReconnect: true,
  refetchOnFocus: true,

  endpoints: (builder) => ({
    getAllCocktails: builder.query({
      query: ({ ingredient, selectedValue }) => {
        const params = {
          i: ingredient,
        };

        if (selectedValue) {
          params.a = selectedValue;
        }

        const queryString = Object.entries(params)
          .map(
            ([key, value]) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
          )
          .join("&");

        return {
          url: `filter.php?${queryString}`,
        };
      },
      providesTags: () => ["Cocktails"],
    }),
  }),
});

export default cocktailsApi;
