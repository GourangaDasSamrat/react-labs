import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000",
    }),
    // keepUnusedDataFor: 5,
    // refetchOnFocus: true,
    // refetchOnReconnect: true,
    // refetchOnMountOrArgChange: true,
    tagTypes: ["posts", "post"],
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: (limit) => `/posts?_limit=${limit}`,
            // keepUnusedDataFor: 50
            providesTags: ["posts"],
        }),
        getPost: builder.query({
            query: (id) => `/posts/${id}`,
            providesTags: (result, error, arg) => [{ type: "post", id: arg }],
        }),
        addPost: builder.mutation({
            query: (data) => ({
                url: "/posts",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["posts"],
        }),
        editPost: builder.mutation({
            query: ({ id, data }) => ({
                url: `/posts/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: (result, error, arg) => [
                { type: "post", id: arg.id },
                "posts",
            ],
        }),
    }),
});

export const {
    useGetPostsQuery,
    useAddPostMutation,
    useGetPostQuery,
    useEditPostMutation,
} = apiSlice;
