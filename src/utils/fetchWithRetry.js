// src/utils/fetchWithRetry.js

/**
 * Fetch with retry mechanism
 * @param {string} url - API endpoint
 * @param {object} options - fetch options (method, headers, body, etc.)
 * @param {number} retries - number of retry attempts
 * @param {number} delay - delay between retries in ms
 */
export async function fetchWithRetry(url, options = {}, retries = 3, delay = 1000) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (retries > 0) {
      console.warn(`Retrying... attempts left: ${retries}, error: ${error.message}`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return fetchWithRetry(url, options, retries - 1, delay);
    } else {
      console.error('All retries failed:', error);
      throw error; // propagate error after all retries
    }
  }
}
