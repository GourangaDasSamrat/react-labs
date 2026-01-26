import { useState } from "react";
import Posts from "./components/Posts";

export default function App() {
    const [showPosts, setShowPosts] = useState(true);

    return (
        <div className="w-screen h-full p-10 bg-gray-100 text-slate-700">
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                RTK Query
            </h1>

            <div className="max-w-md mx-auto mt-10 space-y-5">
                <button
                    className="bg-blue-500 text-white px-3 py-2 rounded"
                    onClick={() => setShowPosts((prev) => !prev)}
                >
                    Toggle Posts
                </button>
            </div>
            <div className="max-w-md mx-auto mt-10 space-y-5">
                {showPosts && <Posts />}
            </div>
        </div>
    );
}
