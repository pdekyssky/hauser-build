import type { NextConfig } from "next";

/**
 * Base path for GitHub Pages project sites: /{repo-name}
 * Leave empty for local development or custom domain at site root.
 *
 * Set via BASE_PATH or NEXT_PUBLIC_BASE_PATH (e.g. "/Tonhauser").
 */
function resolveBasePath(): string {
  const raw =
    process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.BASE_PATH ?? "";
  if (!raw || raw === "/") return "";
  const withSlash = raw.startsWith("/") ? raw : `/${raw}`;
  return withSlash.replace(/\/$/, "");
}

const basePath = resolveBasePath();

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  // Custom loader (required for static export) also applies GitHub Pages basePath
  images: {
    loader: "custom",
    loaderFile: "./lib/imageLoader.ts",
  },
};

export default nextConfig;
