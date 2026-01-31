import React from "react";

export default function Card({
  title = "Breaking News Headline",
  subtitle = "World · Jan 29, 2026",
  image,
  excerpt = "Summary missing...",
  author = "Staff Reporter",
  onAction,
}) {
  // Logic to calculate word limits
  const truncatedTitle = title.split(" ").slice(0, 7).join(" ") + (title.split(" ").length > 8 ? "..." : "");
  const truncatedExcerpt = excerpt.split(" ").slice(0, 15).join(" ") + (excerpt.split(" ").length > 16 ? "..." : "");

  // Define a high-quality fallback image URL
  const fallbackImage = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1000";

  return (
    
    <article className="max-w-md w-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      <div className="h-48 w-full overflow-hidden bg-gray-100">
        <img
          // Use the article image if it exists, otherwise use the fallback
          src={image && image !== "" ? image : fallbackImage}
          alt={title}
          // Remove 'grayscale' here if you want color images
          className="h-full w-full object-cover"
          // Handle cases where the URL itself is broken
          onError={(e) => { e.target.src = fallbackImage; }}
        />
      </div>

      <div className="p-5 space-y-3 flex flex-col flex-grow">
        <p className="text-xs uppercase tracking-widest text-gray-500">
          {subtitle}
        </p>

        <h2 className="text-xl font-serif font-bold leading-tight text-gray-900">
          {truncatedTitle}
        </h2>

        <p className="text-sm text-gray-700 leading-relaxed text-justify">
          {truncatedExcerpt}
        </p>

        <div className="pt-3 mt-auto border-t border-gray-200 flex items-center justify-between gap-4">
          <span className="text-[10px] sm:text-xs italic text-gray-600 line-clamp-2 flex-1">
            By {author}
          </span>

          <button 
            onClick={onAction}
            className="shrink-0 bg-[#FF6600] text-white px-4 py-2 text-xs font-bold uppercase tracking-wide rounded-sm hover:bg-black transition-colors"
          >
            Read more
          </button>
        </div>
      </div>
    </article>
  );
}
