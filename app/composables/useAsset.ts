/**
 * 资源路径自适应解析 Composable
 * 确保静态资源路径在 GitHub Pages 子路径（例如 /berry-medical-nuxt-wpcom/）
 * 与自定义独立域名（例如 /）下均能正确拼接前缀，避免 404
 */
export const withBase = (path?: string): string => {
  if (!path) return "";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("//")
  ) {
    return path;
  }

  const config = useRuntimeConfig();
  const baseURL = config.app.baseURL || "/";
  const cleanBase = baseURL.endsWith("/") ? baseURL : `${baseURL}/`;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  return `${cleanBase}${cleanPath}`;
};

export const useAsset = () => {
  return {
    withBase,
  };
};
