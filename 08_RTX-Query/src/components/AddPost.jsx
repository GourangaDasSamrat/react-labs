import { useState } from "react";
import { useAddPostMutation } from "../features/api/apiSlice";

export default function AddPost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [addPost, { data, isLoading, isError, isSuccess }] =
        useAddPostMutation();

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost({ title, body });

        setTitle("");
        setBody("");
    };

    return (
        <div className="p-10 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <form
                className="flex flex-col gap-6 w-full"
                onSubmit={handleSubmit}
            >
                <input
                    className="border border-gray-300 px-4 py-2 rounded w-full"
                    type="text"
                    placeholder="Enter post title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Enter post content"
                    className="border border-gray-300 px-4 py-2 rounded w-full"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <button
                    type="submit"
                    className="bg-indigo-500 text-white px-4 py-2 rounded w-full"
                    disabled={isLoading}
                >
                    Save Post
                </button>
            </form>

            {isError && <h1 className="text-red-600">An error occured</h1>}
            {isSuccess && (
                <h1 className="text-green-600">
                    Post ID: {data.id} was created successfully!
                </h1>
            )}
        </div>
    );
}
