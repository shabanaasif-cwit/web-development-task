// src/services/api.js
const API_KEY = "51de32d472994f1da4213b5f69e446a9"; 
const BASE_URL = "https://newsapi.org/v2/everything?q=apple&from=2026-01-29&to=2026-01-29&sortBy=popularity&apiKey=51de32d472994f1da4213b5f69e446a9";

export const fetchPosts = async (retries = 3) => {
  try {
    const response = await fetch(BASE_URL); // Removed duplicate apiKey string
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const data = await response.json();
    
    return data.articles.map((article, index) => ({
      id: index,
      title: article.title,
      excerpt: article.description || "No summary available.",
      author: article.author || "Staff Reporter",
      image: article.urlToImage || "", // Map thumbnail
      url: article.url,               // Map source link for "Read More"
      publishedAt: article.publishedAt, // Required for sorting
      subtitle: `World · ${new Date(article.publishedAt).toLocaleDateString()}`
    }));
      
  } catch (error) {
    if (retries > 0) return fetchPosts(retries - 1);
    throw error;
  }
};
