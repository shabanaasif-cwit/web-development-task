import React, { useState, useEffect } from "react";
import PostList from "../components/posts/postList";
import EmptyState from "../components/common/EmptyState";
import { fetchPosts } from "../pages/Service/api"; // Import the service

function PostPage({ searchQuery, setSearchQuery }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        setError("Failed to fetch news. Please check your connection.");
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="w-full bg-white">
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-[#121417] flex flex-col">
            Latest Updates
            <span className="h-1 w-24 bg-orange-600 mt-2"></span>
          </h2>
        </div>

        <section>
          {/* 1. Handling Loading State */}
          {loading && <div className="text-center py-10">Loading News...</div>}

          {/* 2. Handling Error State */}
          {error && <div className="text-red-600 text-center py-10">{error}</div>}

          {/* 3. Handling Success/Empty State */}
          {!loading && !error && (
            filteredPosts.length === 0 ? (
              <EmptyState onAction={() => setSearchQuery("")} />
            ) : (
              <PostList posts={filteredPosts} />
            )
          )}
        </section>
      </main>
    </div>
  );
}

export default PostPage;









/*import PostList from "../components/posts/postList";
import EmptyState from "../components/common/EmptyState";


const mockPosts = [
  { id: 1, title: "First Post", excerpt: "Summary of the first article." },
  { id: 2, title: "Second Post", excerpt: "Summary of the second article." },
  { id: 3, title: "Third Post", excerpt: "Summary of the third article." },
  { id: 4, title: "Fourth Post", excerpt: "Summary of the fourth article." },
  { id: 5, title: "Fifth Post", excerpt: "Summary of the fifth article." },
  { id: 6, title: "Sixth Post", excerpt: "Summary of the sixth article." },
  { id: 7, title: "Another News Update", excerpt: "Summary of another news update." },
  { id: 8, title: "Tech Trends 2024", excerpt: "Summary of tech trends." },
  { id: 9, title: "Health and Wellness Tips", excerpt: "Summary of health tips." },
  { id: 10, title: "Travel Destinations to Explore", excerpt: "Summary of travel destinations." },
  { id: 11, title: "Breaking News Headline", excerpt: "Summary missing..." },
];

function PostPage({ searchQuery, setSearchQuery }) {
  // Filters posts based on the search typed in the Header
  const filteredPosts = mockPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="w-full bg-white">
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-[#121417] flex flex-col">
            Latest Updates
            <span className="h-1 w-24 bg-orange-600 mt-2"></span>
          </h2>
        </div>

        <section>
          {filteredPosts.length === 0 ? (
            <EmptyState onAction={() => setSearchQuery("")} />
          ) : (
            <PostList posts={filteredPosts} />
          )}
        </section>
      </main>
    </div>
  );
}

export default PostPage;
/*/