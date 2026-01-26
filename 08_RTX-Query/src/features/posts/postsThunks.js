import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts } from "./postsApi";

// asycn thunk function
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const posts = await getPosts();
    return posts;
});
