export function assetUrl(path) {
  if (!path) return "";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("//") ||
    path.startsWith("data:")
  ) {
    return path;
  }
  let finalPath = path;
  // Automatically serve modern WebP for raster images where available
  if (/\.(png|jpe?g)$/i.test(finalPath) && !/micro-texture|og\.jpg/i.test(finalPath)) {
    finalPath = finalPath.replace(/\.(png|jpe?g)$/i, ".webp");
  }
  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  const cleanPath = finalPath.startsWith("/") ? finalPath.slice(1) : finalPath;
  return `${cleanBase}${cleanPath}`;
}
