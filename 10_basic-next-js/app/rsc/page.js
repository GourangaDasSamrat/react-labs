import PostList from "./post-list";

export const dynamic = "force-dynamic";
export default async function RSCPage() {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">React Server Component</h1>
            <div>
                <PostList />
            </div>
        </div>
    );
}
