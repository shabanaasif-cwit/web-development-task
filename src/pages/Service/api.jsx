// src/services/api.js
const API_KEY = "51de32d472994f1da4213b5f69e446a9"; // Get one at newsapi.org
const BASE_URL = "https://newsapi.org/v2/everything?q=apple&from=2026-01-29&to=2026-01-29&sortBy=popularity&apiKey=51de32d472994f1da4213b5f69e446a9";

export const fetchPosts = async (retries = 3) => {
  try {
    const response = await fetch(`${BASE_URL}&apiKey=${API_KEY}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Map API fields (author, title, description) to your Component props
    return data.articles.map((article, index) => ({
      id: index,
      title: article.title,
      excerpt: article.description || "No summary available.",
      author: article.author || "Staff Reporter"
    }));

  } catch (error) {
    // Phase 3: Retry mechanism
    if (retries > 0) {
      console.warn(`Retrying fetch... Attempts left: ${retries}`);
      return fetchPosts(retries - 1);
    }
    throw error; // If all retries fail, pass error to the Component
  }
};