import React from "react";

export default function Card({
  title = "Breaking News Headline",
  subtitle = "World · Jan 29, 2026",
  image,
  excerpt = "Summary missing...",
  author = "Staff Reporter",
  onAction,
}) {
  return (
    /* MODIFICATION: Added max-w-md to stop stretching and flex-col for internal balance */
    <article className="max-w-md w-full bg-white border border-gray-200 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      {image && (
        <div className="h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover grayscale"
          />
        </div>
      )}

      {/* MODIFICATION: Added flex-grow to push the footer to the bottom */}
      <div className="p-5 space-y-3 flex flex-col flex-grow">
        <p className="text-xs uppercase tracking-widest text-gray-500">
          {subtitle}
        </p>

        <h2 className="text-2xl font-serif font-bold leading-tight text-gray-900">
          {title}
        </h2>

        <p className="text-sm text-gray-700 leading-relaxed text-justify">
          {excerpt}
        </p>

        {/* mt-auto pushes this section to the bottom of the card */}
        <div className="pt-3 mt-auto border-t border-gray-200 flex items-center justify-between">
          <span className="text-xs italic text-gray-600">
            By {author}
          </span>

          <button 
            onClick={onAction}
            className="text-xs font-semibold uppercase tracking-wide text-black hover:underline"
          >
            Read more
          </button>
        </div>
      </div>
    </article>
  );
}
