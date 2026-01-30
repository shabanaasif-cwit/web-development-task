import Card from "../common/cards";

//functional component to render list of posts
//({ posts }) as props
function PostList({ posts }) {
 return (
    /* Changed 'space-y-8' to a grid layout */
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        //card is a component that takes post details as props
        <Card
          key={post.id}
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
