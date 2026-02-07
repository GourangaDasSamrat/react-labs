import getData from "@/lib/getData";

export default async function Dynamic() {
    // data fetch
    const posts = await getData("http://localhost:8000/posts", {
        cache: "no-store", // default: "force-cache"
    });

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">Dynamic Page</h1>
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
