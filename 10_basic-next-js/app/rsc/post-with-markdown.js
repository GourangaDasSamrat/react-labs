import Markdown from "react-markdown";

export default async function PostWithMarkdown({ text }) {
    const markdownText = `## ${text}`;

    return (
        <div className="mt-4 border border-gray-700 p-4">
            <Markdown>{markdownText}</Markdown>
        </div>
    );
}
