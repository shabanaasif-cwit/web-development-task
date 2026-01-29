import Card from "../common/cards";

function PostList({ posts }) {
 return (
    <div className="space-y-8">
      {posts.map((post) => (
        <Card
          key={post.id}               // ✅ CORRECT KEY
          title={post.title}
          subtitle={post.subtitle}
          excerpt={post.excerpt}
          author={post.author}
        />
      ))}
    </div>
  );
}

export default PostList;
