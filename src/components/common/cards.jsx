import React from "react";

/**
 * Card Component for Daily News
 * Features: Hover lifting, image scaling, and color transitions.
 */
export default function Card({
  title = "Breaking News Headline",
  subtitle = "World · Jan 29, 2026",
  image,
  excerpt = "Summary missing...",
  author = "Staff Reporter",
  onAction,
}) {
  
  // --- LOGIC: TEXT TRUNCATION ---
  // Limits title and excerpt length to keep the grid uniform even with long text
  const truncatedTitle = title.split(" ").slice(0, 7).join(" ") + (title.split(" ").length > 8 ? "..." : "");
  const truncatedExcerpt = excerpt.split(" ").slice(0, 15).join(" ") + (excerpt.split(" ").length > 16 ? "..." : "");

  // Fallback image if the API returns null or an empty string
  const fallbackImage = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1000";

  return (
    <article 
      // 'group': Essential to let child elements (like <h2>) react when the mouse is over this container
      // 'hover:-translate-y-2': Moves the card up slightly on hover
      // 'hover:shadow-lg': Creates a shadow to give a "lifted" 3D effect
      className="group max-w-md w-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-500 flex flex-col h-full hover:shadow-lg hover:-translate-y-2 cursor-pointer"
      onClick={onAction}
    >
      {/* --- IMAGE SECTION --- */}
      <div className="h-48 w-full overflow-hidden bg-gray-100">
        <img
        
          src={image && image !== "" ? image : fallbackImage}
          alt={title}
          // 'group-hover:scale-110': Zooms put the image  when the mouse enters the card
          // 'duration-700': Makes the zoom effect slow and elegant
          //If the scale (size) of this image changes, don't just snap to the new size—animate it smoothly."
          //duration-700 group-hove:scale-110 10% larger than actual
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          onError={(e) => { e.target.src = fallbackImage; }}
        />
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="p-5 space-y-3 flex flex-col flex-grow">
        {/* Category Label: Turns orange on hover to match the brand */}
        <p className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-orange-600 transition-colors duration-300">
          {subtitle}
        </p>

        {/* Title: Uses serif font for a traditional newspaper feel */}
        <h2 className="text-xl font-serif font-bold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-orange-600">
          {truncatedTitle}
        </h2>

        {/* Excerpt: Justified text for a clean, professional look */}
        <p className="text-sm text-gray-700 leading-relaxed text-justify">
          {truncatedExcerpt}
        </p>

        {/* --- FOOTER SECTION --- */}
        <div className="pt-3 mt-auto border-t border-gray-200 flex items-center justify-between gap-4">
          <span className="text-[10px] sm:text-xs italic text-gray-600 line-clamp-2 flex-1">
            By {author}
          </span>

          <button 
            onClick={(e) => {
              e.stopPropagation(); // Stops the click from triggering the parent article's onClick twice
              onAction();
            }}
            // 'active:scale-95': Provides a "button press" physical feedback px: horizontal & py: vertical
            // 'hover:bg-black': Contrasts against the orange for a premium feel
            className="shrink-0 bg-orange-600 text-white px-4 py-2 text-xs font-bold uppercase tracking-wide rounded-sm hover:bg-black transition-all duration-300 transform active:scale-95 shadow-md"
          >
            Read more
          </button>
        </div>
      </div>
    </article>
  );
}

