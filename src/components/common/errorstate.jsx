import React from "react";
import { AlertTriangle } from "lucide-react";

export default function ErrorState({
  title = "Something went wrong",
  message = "We couldn't load the news right now. Please try again.",
  onRetry,
}) {
  return (
    <div className="max-w-md bg-white border border-red-200 rounded-sm shadow-sm p-6 text-center space-y-4">
      <div className="text-red-500 text-4xl">
        <AlertTriangle className="text-red-500 w-12 h-12 animate-pulse" />
      </div>

      <h2 className="text-lg font-semibold text-gray-900">
        {title}
      </h2>

      <p className="text-sm text-gray-600">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-2 px-4 py-2 text-sm font-medium bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Try again
        </button>
      )}
    </div>
  );
}
