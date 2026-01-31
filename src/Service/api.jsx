// src/services/api.js
import newsInstance from './axiosInstance';

export const fetchPosts = async (retries = 3) => {
  try {
    const response = await newsInstance.get('/everything', {
      params: {
        q: 'apple',
        from: '2026-01-29',
        to: '2026-01-29',
        sortBy: 'popularity'
      }
    });
    
    return response.data.articles.map((article, index) => ({
      id: index,
      title: article.title,
      excerpt: article.description || "No summary available.",
      author: article.author || "Staff Reporter",
      image: article.urlToImage || "",
      url: article.url,
      publishedAt: article.publishedAt,
      subtitle: `World · ${new Date(article.publishedAt).toLocaleDateString()}`
    }));
      
  } catch (error) {
    // If it's a network error or server error, we retry
    if (retries > 0 && (error.type === "NetworkError" || error.status >= 500)) {
      console.warn(`Retrying... ${retries} attempts left`);
      return fetchPosts(retries - 1);
    }
    
    // Throw the clean error message from our interceptor
    throw error; 
  }
};
