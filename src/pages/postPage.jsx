import React, { useState, useCallback, useMemo, useEffect } from "react";
// MODIFICATION: Import useParams to listen to the URL category
import { useParams } from "react-router-dom"; 
import PostList from "../components/posts/postList";
import EmptyState from "../components/common/EmptyState";
import { useNews } from "../context/NewsContext"; 

function PostPage() {
  // MODIFICATION: Grab the dynamic 'category' from the URL path
  const { category } = useParams(); 
  const { posts, loading, error, searchQuery, setSearchQuery, setSelectedCategory } = useNews();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState("newest");
  const postsPerPage = 15; 

  // MODIFICATION: Sync the Context state with the URL category
  useEffect(() => {
    if (category) {
      // Capitalize for consistent state naming (e.g., 'business' -> 'Business')
      const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
      setSelectedCategory(formattedCategory);
      // Reset to first page when category changes
      setCurrentPage(1); 
    }
  }, [category, setSelectedCategory]);



  const sortedPosts = useMemo(() => {
    const filtered = posts.filter((post) => {
      const hasContent = post.excerpt && 
                         post.excerpt !== "No summary available." && 
                         post.excerpt.trim() !== "";
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
      return hasContent && matchesSearch;
    });

    return [...filtered].sort((a, b) => {
      if (sortType === "az") return a.title.localeCompare(b.title);
      if (sortType === "za") return b.title.localeCompare(a.title);
      if (sortType === "newest") return new Date(b.publishedAt) - new Date(a.publishedAt);
      if (sortType === "oldest") return new Date(a.publishedAt) - new Date(b.publishedAt);
      return 0;
    });
  }, [posts, searchQuery, sortType]);

  const totalResults = sortedPosts.length;
  //2 (currentPage) * 15 (postsPerPage) = 30
  const indexOfLastPost = currentPage * postsPerPage;
  //30 (LastPost) - 15 (postsPerPage) = 15
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  //ignores posts 0-14 and 31-100. It only gives your PostList the 15 articles meant for Page 2.
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  //Rounds up to 7
  const totalPages = Math.ceil(totalResults / postsPerPage);

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
              {/* MODIFICATION: Dynamic Title based on URL category */}
              {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Updates` : "Latest Updates"}
              <span className="h-1 w-24 bg-orange-600 mt-2"></span>
            </h2>

            {!loading && !error && totalResults > 0 && (
              <p className="text-sm text-gray-500 mt-4 font-medium italic">
                Showing <span className="text-black font-bold">{startRange}-{endRange}</span> of <span className="text-black font-bold">{totalResults}</span> results
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="post-sort-select" className="text-sm font-bold text-gray-500 uppercase tracking-tighter">
              Sort By:
            </label>
            <select 
              id="post-sort-select" 
              name="sortType" 
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
          {loading && <div className="text-center py-10">Loading {category} News...</div>}
          {error && <div className="text-red-600 text-center py-10">{error}</div>}

          {!loading && !error && (
            <>
              {totalResults === 0 ? (
                <EmptyState onAction={() => setSearchQuery("")} />
              ) : (
                <>
                  <PostList posts={currentPosts} onReadMore={handleReadMore} />
                  <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-100">
                    <button
                      onClick={goToPrev}
                      disabled={currentPage === 1}
                      className={`px-6 py-2 border rounded-sm font-semibold transition-all ${
                        currentPage === 1 ? "text-gray-300 border-gray-100 cursor-not-allowed" : "text-black border-black hover:bg-black hover:text-white"
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
                        currentPage === totalPages || totalPages === 0 ? "text-gray-300 border-gray-100 cursor-not-allowed" : "text-black border-black hover:bg-black hover:text-white"
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
