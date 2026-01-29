import React from 'react';

const EmptyState = ({ title, message, onAction, actionLabel }) => {
  return (
    /* MODIFICATION: Added max-width and mx-auto to keep the box centered and small */
    <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center p-12 text-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
      
      <div className="bg-gray-100 p-4 rounded-full mb-4">
        <svg 
          /* MODIFICATION: Forced dimensions to prevent the 'giant' scaling issue */
          className="w-12 h-12 text-gray-400" 
          style={{ width: '48px', height: '48px' }} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title || "No data found"}</h3>
      <p className="text-gray-500 max-w-xs mb-6">
        {message || "Try adjusting your filters or adding a new item to get started."}
      </p>

      {onAction && (
        <button
          onClick={onAction}
          className="btn-primary" 
        >
          {actionLabel || "Add New Item"}
        </button>
      )}
    </div>
  );
};

export default EmptyState;