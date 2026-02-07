const PostDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <div>
      <h2>Post Details page of {post.id}</h2>
      <p>Title - {post.title}</p>
      <p>Body - {post.body}</p>
    </div>
  );
};

export const generateStaticParams = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`,
  );
  const posts = await res.json();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
};

export default PostDetails;
