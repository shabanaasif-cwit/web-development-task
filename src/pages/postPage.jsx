import { useState } from "react";
import Loader from "../components/common/Loader";
import ErrorState from "../components/common/ErrorState";
import EmptyState from "../components/common/EmptyState";
import Cards from '../components/common/cards.jsx';

const mockPosts = [
  { id: 1, title: "First Post" },
  { id: 2, title: "Second Post" },
 
];

function PostPage() {
  const [loading] = useState(false);
  const [error] = useState(false);
  const [posts] = useState(mockPosts);

  if (loading) return <Loader />;
  if (error) return <ErrorState />;
  if (posts.length === 0) return <EmptyState />;

  return (
    <div className="space-y-2">
      {posts.map((post) => (
        <div key={post.id} className="border p-2 rounded">
          {post.title}
          <h1>Hello from Post Page</h1>
        </div>
      ))}
   
    </div>
  );
}

export default PostPage;