import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    /* Added h-full or a large min-height to prevent the footer from jumping up */
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
      <article className="max-w-md w-full bg-white border border-gray-200 rounded-sm shadow-sm p-5 animate-pulse">
        {/* Image placeholder */}
        <div className="h-48 w-full bg-gray-200 mb-5" />

        {/* Subtitle */}
        <div className="h-3 w-1/3 bg-gray-200 mb-3" />

        {/* Title */}
        <div className="h-6 w-3/4 bg-gray-300 mb-4" />
        <div className="h-6 w-2/4 bg-gray-300 mb-4" />

        {/* Excerpt */}
        <div className="space-y-2">
          <div className="h-3 w-full bg-gray-200" />
          <div className="h-3 w-5/6 bg-gray-200" />
          <div className="h-3 w-4/6 bg-gray-200" />
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between">
          <div className="h-3 w-1/4 bg-gray-200" />
          <div className="h-6 w-20 bg-gray-300 rounded" />
        </div>
      </article>
      
      {/* Optional: Spinning icon to show active progress */}
      <Loader2 className="mt-4 animate-spin text-orange-600" />
    </div>
  );
}
