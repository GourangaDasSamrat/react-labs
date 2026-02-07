import getData from "@/lib/getData";
import { Suspense } from "react";
import PostCard from "./post-card";
import PostUser from "./post-user";
import PostWithMarkdown from "./post-with-markdown";

export default async function PostList() {
    const posts = await getData(
        "https://jsonplaceholder.typicode.com/posts?_limit=5",
    );

    return (
        <div className="flex flex-col gap-10">
            {posts.map((post) => (
                <PostCard key={post.id} postId={post.id}>
                    <Suspense
                        fallback={
                            <h1 className="text-orange-500">Loading user...</h1>
                        }
                    >
                        <PostUser userId={post.userId} />
                    </Suspense>
                    <PostWithMarkdown text={post.body} />
                </PostCard>
            ))}
        </div>
    );
}
