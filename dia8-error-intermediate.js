const fetchWithRetry = async (url, maxRetries = 3) => {
  let lastError;
  
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      console.log(`Attempt ${attempt + 1} of ${maxRetries}`);
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      
      // Success! Return immediately
      return await response.json();
      
    } catch (error) {
      lastError = error;
      console.log(`Failed: ${error.message}`);
      
      // If not last attempt, wait before retry
      if (attempt < maxRetries - 1) {
        console.log("Waiting 1 second before retry...");
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }
  
  // All retries failed
  throw new Error(`Failed after ${maxRetries} attempts: ${lastError.message}`);
};


const testUrl = "https://jsonplaceholder.typicode.com/posts/9999";

try {
  const data = await fetchWithRetry(testUrl, 3);
  console.log("Success:", data);
} catch (error) {
  console.error("All retries failed:", error.message);
}