import getData from "@/lib/getData";

// export const dynamic = "force-dynamic";

export default async function Static() {
    // data fetch
    const posts = await getData("http://localhost:8000/posts");

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">Static Page</h1>
            <div>
                <ul className="flex flex-col gap-4 list-image-[url(/checkmark.svg)] m-5">
                    {posts.map((post) => (
                        <li key={post.id} className="pl-2">
                            {post.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
