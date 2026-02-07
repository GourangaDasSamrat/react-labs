import getData from "@/lib/getData";
import Link from "next/link";

export default async function Posts() {
    const posts = await getData("http://localhost:8000/posts", {
        next: {
            revalidate: 10, // time-based revalidation
            // tags: ["getPosts"], // on-demand revalidation
        },
    });

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">Posts page</h1>
            <div>
                <ul className="flex flex-col gap-4 list-image-[url(/checkmark.svg)] m-5">
                    {posts.map((post) => (
                        <Link href={`/isr/posts/${post.id}`} key={post.id}>
                            <li className="pl-2">{post.title}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}
