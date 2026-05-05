/**
 * Fixes image URLs that might have been saved with "localhost:3800" in the database.
 * Replaces localhost with the actual production API URL if we are in production.
 */
export const getCleanImageUrl = (url) => {
  if (!url) return "https://via.placeholder.com/400x260";
  
  // If the URL is already a full external URL (like Cloudinary), return it as is
  if (url.startsWith("http") && !url.includes("localhost:3800")) {
    return url;
  }

  const productionBackendUrl = import.meta.env.VITE_API_URL;

  // If the URL contains localhost:3800, replace it with the production URL
  if (url.includes("localhost:3800")) {
    if (productionBackendUrl) {
      // Replace with or without protocol
      return url.replace(/https?:\/\/localhost:3800/g, productionBackendUrl)
                .replace(/localhost:3800/g, productionBackendUrl.replace(/^https?:\/\//, ""));
    }
  }

  // If it's a relative path (e.g. /uploads/...), prepend the base URL
  if (!url.startsWith("http")) {
    const baseUrl = productionBackendUrl || "http://localhost:3800";
    return `${baseUrl}${url.startsWith("/") ? "" : "/"}${url}`;
  }

  return url;
};
