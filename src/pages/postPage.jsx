import React, { useState, useEffect } from "react";
import PostList from "../components/posts/postList";
import EmptyState from "../components/common/EmptyState";
import { fetchPosts } from "../pages/Service/api"; 

function PostPage({ searchQuery, setSearchQuery }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState("newest");
  const postsPerPage = 15; 

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

  // src/pages/PostPage.jsx

// 1. Logic chain: Remove empty content -> Filter by search -> Sort -> Calculate Counts -> Paginate
const filteredPosts = posts.filter((post) => {
  // Check if the post has actual content and isn't the fallback string
  const hasContent = post.excerpt && 
                     post.excerpt !== "No summary available." && 
                     post.excerpt.trim() !== "";
  
  // Check if it matches the user's search query
  const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());

  // Only return posts that pass BOTH checks
  return hasContent && matchesSearch;
});

// The sortedPosts logic now only runs on items with valid content
const sortedPosts = [...filteredPosts].sort((a, b) => {
  if (sortType === "az") return a.title.localeCompare(b.title);
  if (sortType === "za") return b.title.localeCompare(a.title);
  if (sortType === "newest") return new Date(b.publishedAt) - new Date(a.publishedAt);
  if (sortType === "oldest") return new Date(a.publishedAt) - new Date(b.publishedAt);
  return 0;
});

  // 2. MODIFICATION: Item Count Calculations
  const totalResults = sortedPosts.length;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(totalResults / postsPerPage);

  // Calculate the visible range (e.g., 1-15)
  const startRange = totalResults === 0 ? 0 : indexOfFirstPost + 1;
  const endRange = Math.min(indexOfLastPost, totalResults);

  const goToNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="w-full bg-white">
      <main className="max-w-6xl mx-auto px-4 py-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-[#121417] flex flex-col">
              Latest Updates
              <span className="h-1 w-24 bg-orange-600 mt-2"></span>
            </h2>
            
            {/* 3. MODIFICATION: Display Item Counts */}
            {!loading && !error && totalResults > 0 && (
              <p className="text-sm text-gray-500 mt-4 font-medium italic">
                Showing <span className="text-black font-bold">{startRange}-{endRange}</span> of <span className="text-black font-bold">{totalResults}</span> results
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm font-bold text-gray-500 uppercase tracking-tighter">Sort By:</label>
            <select 
              value={sortType}
              onChange={(e) => {
                setSortType(e.target.value);
                setCurrentPage(1); 
              }}
              className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-sm focus:ring-orange-500 focus:border-orange-500 block p-2 outline-none"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="az">Title (A-Z)</option>
              <option value="za">Title (Z-A)</option>
            </select>
          </div>
        </div>

        <section>
          {loading && <div className="text-center py-10">Loading News...</div>}

          {error && <div className="text-red-600 text-center py-10">{error}</div>}

          {!loading && !error && (

            <>
              {totalResults === 0 ? (
                <EmptyState onAction={() => setSearchQuery("")} />
              ) : (
                <>
                  <PostList posts={currentPosts} />

                  <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-100">
                    <button
                      onClick={goToPrev}
                      disabled={currentPage === 1}
                      className={`px-6 py-2 border rounded-sm font-semibold transition-all ${
                        currentPage === 1 
                        ? "text-gray-300 border-gray-100 cursor-not-allowed" 
                        : "text-black border-black hover:bg-black hover:text-white"
                      }`}
                    >
                      ← Prev
                    </button>

                    <span className="text-sm font-medium text-gray-500">
                      Page {currentPage} of {totalPages || 1}
                    </span>

                    <button
                      onClick={goToNext}
                      disabled={currentPage === totalPages || totalPages === 0}
                      className={`px-6 py-2 border rounded-sm font-semibold transition-all ${
                        currentPage === totalPages || totalPages === 0
                        ? "text-gray-300 border-gray-100 cursor-not-allowed" 
                        : "text-black border-black hover:bg-black hover:text-white"
                      }`}
                    >
                      Next →
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </section>
      </main>
    </div>
  );
}

export default PostPage;
