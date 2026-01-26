import { useState } from "react";
import { useGetPostsQuery } from "../features/api/apiSlice";
import AddPost from "./AddPost";
import Post from "./Post";

export default function Posts() {
    const [currentPostId, setCurrentPostId] = useState(null);

    const {
        data: posts,
        isLoading,
        isError,
        error,
        refetch,
    } = useGetPostsQuery(10);

    let content;

    if (isLoading && !isError) {
        content = <h1>Loading posts...</h1>;
    }
    if (!isLoading && isError) {
        content = <h1 className="text-red-500">{error}</h1>;
    }
    if (!isLoading && !isError) {
        if (posts.length > 0) {
            content = (
                <ul>
                    {posts.map((post) => (
                        <li
                            key={post.id}
                            style={{
                                listStyleType: "square",
                            }}
                            onClick={() => setCurrentPostId(post.id)}
                        >
                            {post.title}
                        </li>
                    ))}
                </ul>
            );
        } else {
            content = <h1>No posts found</h1>;
        }
    }

    return (
        <div className="p-10 h-auto flex flex-col justify-center space-y-5 bg-white rounded shadow">
            {content}
            <button
                className="bg-green-500 text-white px-3 py-2 rounded"
                onClick={refetch}
            >
                Refetch
            </button>

            {currentPostId && <Post id={currentPostId} />}

            <AddPost />
        </div>
    );
}
