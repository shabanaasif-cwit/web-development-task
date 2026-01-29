import PostList from "../components/posts/postList";
import EmptyState from "../components/common/EmptyState";


const mockPosts = [
  { id: 1, title: "First Post", excerpt: "Summary of the first article." },
  { id: 2, title: "Second Post", excerpt: "Summary of the second article." },
  { id: 3, title: "Third Post", excerpt: "Summary of the third article." },
  { id: 4, title: "Breaking News Headline", excerpt: "Summary missing..." },
];

function PostPage({ searchQuery, setSearchQuery }) {
  // Filters posts based on the search typed in the Header
  const filteredPosts = mockPosts.filter((post) =>
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
