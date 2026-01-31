// src/services/api.js
import newsInstance from './axiosInstance';

export const fetchPosts = async (category = 'general', retries = 3) => {
  try {
    // We use top-headlines as it's designed for category-based filtering
    const response = await newsInstance.get('/top-headlines', {
      params: {
        category: category.toLowerCase(), 
        country: 'us' 
      }
    });
    
    return response.data.articles.map((article, index) => ({
      id: index,
      title: article.title || "No Title",
      excerpt: article.description || "No summary available.",
      author: article.author || "Staff Reporter",
      image: article.urlToImage || "",
      url: article.url,
      publishedAt: article.publishedAt,
      subtitle: `${category.charAt(0).toUpperCase() + category.slice(1)} · ${new Date(article.publishedAt).toLocaleDateString()}`
    }));
      
  } catch (error) {
    if (retries > 0 && (error.type === "NetworkError" || error.status >= 500)) {
      return fetchPosts(category, retries - 1);
    }
    throw error; 
  }
};
