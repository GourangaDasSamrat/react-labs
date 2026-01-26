import { useGetPostQuery } from "../features/api/apiSlice";

export default function Post({ id }) {
    const { data: post, isLoading, isError, error } = useGetPostQuery(id);

    let content;

    if (isLoading && !isError) {
        content = <h1>Loading post...</h1>;
    }
    if (!isLoading && isError) {
        content = <h1 className="text-red-500">{error}</h1>;
    }
    if (!isLoading && !isError) {
        if (post.id) {
            content = <p>{post.body}</p>;
        } else {
            content = <h1>No post found</h1>;
        }
    }

    return (
        <div className="p-10 h-auto flex flex-col justify-center space-y-5 bg-white rounded shadow">
            {content}
        </div>
    );
}
