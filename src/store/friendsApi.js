import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const friendsApi = createApi({
  reducerPath: "friendsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://s10.syntradeveloper.be/apif/api/friends",
    mode: "cors",
  }),
  refetchOnReconnect: true,
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getAllFriends: builder.query({
      query: () => ``,
      providesTags: () => ["Friends"],
    }),
    postFriends: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Friends"],
    }),
    deleteFriends: builder.mutation({
      query: (id) => ({
        url: `${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Friends"],
    }),
    changeAgeFriends: builder.mutation({
      query: ({ id, newName, newLastName, newAge }) => ({
        url: `${id}`,
        method: "PUT",
        body: {
          name: newName,
          last_name: newLastName,
          age: newAge,
        },
      }),
      invalidatesTags: ["Friends"],
    }),
  }),
});

export default friendsApi;
