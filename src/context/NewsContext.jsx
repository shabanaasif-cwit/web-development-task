// src/context/NewsContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";
import { fetchPosts } from "../Service/api"; // Added capital S

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Home");

  const loadData = async (cat) => {
    try {
      setLoading(true);
      setError(null);
      
      // FIX: Map "Home" UI label to "general" API category
      const apiCategory = (cat === "Home") ? "general" : cat;
      
      const data = await fetchPosts(apiCategory);
      setPosts(data);
    } catch (err) {
      setError(err.message || "Failed to fetch news.");
    } finally {
      setLoading(false);
    }
  };

  // Lifecycle: Re-fetch whenever the category changes
  useEffect(() => {
    loadData(selectedCategory);
  }, [selectedCategory]);


  const value = {
    posts,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    refresh: () => loadData(selectedCategory)
  };

  return (
    <NewsContext.Provider value={value}>
      {children}
    </NewsContext.Provider>
  );
};


export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) throw new Error("useNews must be used within a NewsProvider");
  return context;
};
