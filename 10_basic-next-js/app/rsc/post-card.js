"use client";

export default function PostCard({ children, postId }) {
    return (
        <div className="flex flex-col border border-gray-700 p-4">
            {children}

            <div className="mt-6">
                <button
                    onClick={() => console.log(`You liked post id: ${postId}`)}
                    className="mx-0 px-3 py-2 bg-blue-600"
                >
                    Like
                </button>
            </div>
        </div>
    );
}
