import React, { createContext, useState, useEffect, useContext } from "react";
// MODIFICATION: Importing fetchPosts here instead of in the components/hooks directly
import { fetchPosts } from "../Service/api"; 

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  // MODIFICATION: Lifted states from PostPage and App into this central provider
  // DATA MOVED HERE: These states are no longer local to components
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchPosts();
      setPosts(data);
    } catch (err) {
      setError(err.message || "Failed to fetch news.");
    } finally {
      setLoading(false);
    }
  };


  //run once
  useEffect(() => {
    loadData();
  }, []);

  // MODIFICATION: The value object now shares these variables globally
  const value = {
    posts,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    refresh: loadData
  };

  return (
    <NewsContext.Provider value={value}>
      {children}
    </NewsContext.Provider>
  );
};

// MODIFICATION: Exporting a custom hook for cleaner consumption in components
export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) throw new Error("useNews must be used within a NewsProvider");
  return context;
};
