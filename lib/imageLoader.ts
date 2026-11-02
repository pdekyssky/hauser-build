type ImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

/**
 * Custom loader so next/image works with static export + GitHub Pages basePath.
 * Returns the public asset path prefixed with BASE_PATH when set.
 */
export default function imageLoader({ src }: ImageLoaderProps): string {
  if (/^https?:\/\//.test(src)) return src;

  const base =
    process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ||
    process.env.BASE_PATH?.replace(/\/$/, "") ||
    "";

  const path = src.startsWith("/") ? src : `/${src}`;
  return `${base}${path}`;
}
