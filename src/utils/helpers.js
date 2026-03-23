// Helper function to get correct image path for GitHub Pages
export const getImagePath = (path) => {
  const base = import.meta.env.BASE_URL;
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};
