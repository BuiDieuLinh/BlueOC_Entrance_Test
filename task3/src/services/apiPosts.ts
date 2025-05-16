import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_DOMAIN = process.env.REACT_APP_API_URL;

export const apiPost = createApi({
  reducerPath: "apiPost",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_DOMAIN}` }),
  tagTypes: ["Posts"], 
  endpoints: (builder) => ({
    // API tạo user
    createPost: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Posts"], 
    }),

    getAllPosts: builder.query({
      query: () => "/",
      providesTags: ["Posts"],
    })
  }),
});

export const {
    useGetAllPostsQuery,
    useCreatePostMutation
} = apiPost;
