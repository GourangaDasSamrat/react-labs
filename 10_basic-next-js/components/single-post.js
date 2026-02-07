import getData from "@/lib/getData";

export default async function SinglePost() {
    const post = await getData(
        "http://localhost:8000/posts/1",
        {
            cache: "no-store",
        },
        3000,
    );

    return <div className="mt-6">{post.body}</div>;
}
