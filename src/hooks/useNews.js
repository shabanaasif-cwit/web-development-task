// src/hooks/useNews.js
import { useState, useEffect } from "react";
import { fetchPosts } from "../Service/api";

export const useNews = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchPosts();
      setPosts(data);
    } catch (err) {
      // Receives the consistent error object from our Axios interceptor
      setError(err.message || "Failed to fetch news.");
    } finally {
      setLoading(false);
    }
  };

  //it should render once
  useEffect(() => {
    getPosts();
  }, []);

  return { posts, loading, error, refresh: getPosts, setPosts };
};


