import SinglePost from "@/components/single-post";
import getData from "@/lib/getData";
import { Suspense } from "react";

export default async function Hybrid() {
    // data fetch
    const posts = await getData("http://localhost:8000/posts");

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">Hybrid Page</h1>
            <div>
                <ul className="flex flex-col gap-4 list-image-[url(/checkmark.svg)] m-5">
                    {posts.map((post) => (
                        <li key={post.id} className="pl-2">
                            {post.title}
                        </li>
                    ))}
                </ul>
            </div>
            <hr />

            <Suspense fallback={<h1>Loading post...</h1>}>
                <SinglePost />
            </Suspense>
        </div>
    );
}
