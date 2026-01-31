import React from "react";

/**
 * PHASE 5: PROP DRILLING DEMONSTRATION
 *  Maintenance Issue : Rigidity in Card Component
 *  If we need to change the 'image' Logic, we must ensure the props passed
 *  throughout the car match exactly what CardHeader expects.
 */


// 1. Sub-component for the Image Section
const CardHeader = ({ image, title, fallbackImage }) => (
  <div className="h-48 w-full overflow-hidden bg-gray-100">
    <img
      src={image && image !== "" ? image : fallbackImage}
      alt={title}
      className="h-full w-full object-cover"
      onError={(e) => { e.target.src = fallbackImage; }}
    />
  </div>
);

/**
 * MAINTENANCE ISSUE 2: Verbosity due to Prop Drilling
 *  This component recieves 3 props just to display them.In real-world app with
 *  20+field, this list if props become massive and hard to read.
 */

// 2. Sub-component for the Text Content
const CardContent = ({ subtitle, title, excerpt }) => (
  <div className="space-y-3">
    <p className="text-xs uppercase tracking-widest text-gray-500">
      {subtitle}
    </p>
    <h2 className="text-xl font-serif font-bold leading-tight text-gray-900">
      {title}
    </h2>
    <p className="text-sm text-gray-700 leading-relaxed text-justify">
      {excerpt}
    </p>
  </div>
);

/**
 * MAINTENANCE ISSUE 3: The Middleman Problem
 * The CardFooter need 'onAction'. IF we want to add a 'share' handler,
 * we have to update PostList, Card, and CardFooter to pass it through.
 */

// 3. Sub-component for the Footer
const CardFooter = ({ author, onAction }) => (
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
);

// Main Component Wrapper
export default function Card({
  title = "Breaking News Headline",
  subtitle = "World · Jan 29, 2026",
  image,
  excerpt = "Summary missing...",
  author = "Staff Reporter",
  onAction,
}) {
  // Logic remains identical to preserve functionality
  const truncatedTitle = title.split(" ").slice(0, 7).join(" ") + (title.split(" ").length > 8 ? "..." : "");
  const truncatedExcerpt = excerpt.split(" ").slice(0, 15).join(" ") + (excerpt.split(" ").length > 16 ? "..." : "");

  const fallbackImage = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1000";
  
  return (

    <article className="max-w-md w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      {/* Maintenance Issue 4: Traceability
          When a bug occurs in CardHeader, you have to trace the prop back through card
          top PostList and finally to the API call to find the source.
      */}
     
      {/* Prop Drilling: Passing data to CardHeader */}
      <CardHeader image={image} title={title} fallbackImage={fallbackImage} />

      <div className="p-5 flex flex-col flex-grow rounded-xl">
        {/* Prop Drilling: Passing data to CardContent */}
        <CardContent 
          subtitle={subtitle} 
          title={truncatedTitle} 
          excerpt={truncatedExcerpt} 
        />

        {/* Prop Drilling: Passing data to CardFooter */}
        <CardFooter author={author} onAction={onAction} />
      </div>
    </article>
  );
}
