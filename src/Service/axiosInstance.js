//For Phase7
// src/services/axiosInstance.js
import axios from 'axios';

const API_KEY = "51de32d472994f1da4213b5f69e446a9";

const newsInstance = axios.create({
  baseURL: 'https://newsapi.org/v2',
  timeout: 10000, // 10 seconds timeout
  params: {
    // This automatically appends the API key to EVERY request made with this instance
    apiKey: API_KEY,
  },
});
// Response Interceptor: The "Safety Net"
newsInstance.interceptors.response.use(
  (response) => response, // Pass successful responses through
  (error) => {
    let customError = {
      message: "An unexpected error occurred.",
      status: error.response?.status,
      type: "Unknown"
    };
if (error.response) {
      // The server responded with a status code outside the 2xx range
      switch (error.response.status) {
        case 401:
          customError.message = "Invalid API Key. Please check your credentials.";
          customError.type = "AuthError";
          break;
        case 429:
          customError.message = "Too many requests. You've hit your API limit.";
          customError.type = "RateLimit";
          break;
        case 500:
          customError.message = "The News server is currently down.";
          customError.type = "ServerError";
          break;
        default:
          customError.message = `Error: ${error.response.data.message || "Something went wrong"}`;
      }
    } else if (error.request) {
      // The request was made but no response was received (Network issues)
      customError.message = "No response from server. Check your internet connection.";
      customError.type = "NetworkError";
    }

    // Reject with our clean, consistent error object
    return Promise.reject(customError);
  }
);
export default newsInstance;