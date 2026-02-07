import Link from "next/link";

const Posts = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`,
  );
  const posts = await res.json();

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
