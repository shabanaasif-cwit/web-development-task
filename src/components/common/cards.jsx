import React from "react";

export default function Card({
  title = "Breaking News Headline",
  subtitle = "World · Jan 29, 2026",
  image,
  excerpt = "This is a short summary of the article. It should feel like a newspaper intro — concise, informative, and inviting enough to read more.",
  author = "Staff Reporter",
}) {
  return (
    <article className="max-w-md bg-white border border-gray-200 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      {image && (
        <div className="h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover grayscale"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-5 space-y-3">
        <p className="text-xs uppercase tracking-widest text-gray-500">
          {subtitle}
        </p>

        <h2 className="text-2xl font-serif font-bold leading-tight text-gray-900">
          {title}
        </h2>

        <p className="text-sm text-gray-700 leading-relaxed">
          {excerpt}
        </p>

        <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
          <span className="text-xs italic text-gray-600">
            By {author}
          </span>

          <button className="text-xs font-semibold uppercase tracking-wide text-black hover:underline">
            Read more
          </button>
        </div>
      </div>
    </article>
  );
}
