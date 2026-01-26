import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsThunks";

const initialState = {
    isLoading: false,
    isError: false,
    posts: [],
    error: null,
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message || "An error occured";
            });
    },
});

export default postsSlice.reducer;
