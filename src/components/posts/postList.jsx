import Card from "../common/cards";


function PostList({ posts }) {
 return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        
        <Card
          key={post.id}
          title={post.title}
          subtitle={post.subtitle}
          image={post.image}   // Pass thumbnail image
          excerpt={post.excerpt}
          author={post.author}
          onAction={() => window.open(post.url, "_blank")} // Opens news URL
        />
      ))}
    </div>
  );
}

export default PostList;
