// src/context/NewsContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";
import { fetchPosts } from "../Service/api"; 





const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Home");

  // --- NEW: THEME STATE ---
  // We check localStorage first so the user's preference persists
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // --- NEW: THEME EFFECT ---
  // This physically adds/removes the "dark" class to your HTML tag
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // Save preference for next visit
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const loadData = async (cat) => {
    try {
      setLoading(true);
      setError(null);

      const apiCategory = (cat === "Home") ? "general" : cat;

      const data = await fetchPosts(apiCategory);
      setPosts(data);
    } catch (err) {
      setError(err.message || "Failed to fetch news.");
    } finally {
      setLoading(false);
    }
  };

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
    // --- ADDED TO MASTER KEY ---
    theme,
    toggleTheme,
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

