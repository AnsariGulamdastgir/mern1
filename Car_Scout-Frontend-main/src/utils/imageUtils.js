/**
 * Resolves image URLs for both local development and production.
 *
 * WHY THIS IS NEEDED:
 * Images uploaded via the app are stored in MongoDB with full URLs.
 * Depending on when/where they were uploaded, they may contain:
 *   - "https://mern1-car-scout-backend-main.onrender.com/uploads/..." (uploaded on Render)
 *   - "http://localhost:3800/uploads/..."  (uploaded locally)
 *   - "https://res.cloudinary.com/..."    (Cloudinary CDN)
 *   - "/uploads/filename.jpg"             (relative path)
 *
 * RULES:
 *   - Cloudinary / other CDN → return as-is
 *   - Render onrender.com URL → return as-is (file lives on Render's disk)
 *   - localhost:3800 URL in PRODUCTION → replace with production backend URL
 *   - Relative path → prepend correct base URL
 */

const PRODUCTION_BACKEND = "https://mern1-car-scout-backend-main.onrender.com";
const LOCAL_BACKEND = "http://localhost:3800";

export const getCleanImageUrl = (url) => {
  if (!url) return "https://via.placeholder.com/400x260";

  const apiUrl = import.meta.env.VITE_API_URL || LOCAL_BACKEND;
  const isDev = apiUrl === LOCAL_BACKEND;

  // 1. Cloudinary or external CDN → always return as-is
  if (
    url.startsWith("http") &&
    !url.includes("localhost:3800") &&
    !url.includes("onrender.com")
  ) {
    return url;
  }

  // 2. Render/onrender.com URL → return as-is in ALL environments
  //    (the file physically lives on Render's server)
  if (url.includes("onrender.com")) {
    return url;
  }

  // 3. localhost URL in PRODUCTION → replace with production backend URL
  if (!isDev && url.includes("localhost:3800")) {
    return url.replace(LOCAL_BACKEND, apiUrl);
  }

  // 4. Relative path (e.g. /uploads/xyz.jpg) → prepend correct base URL
  if (!url.startsWith("http")) {
    return `${apiUrl}${url.startsWith("/") ? "" : "/"}${url}`;
  }

  // 5. localhost URL in local dev → serve from local backend
  return url;
};
