import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const paths = [
  "/",
  "/interierove-omietky/",
  "/exterierove-omietky/",
  "/dekorativne-omietky/",
  "/realizacie/",
  "/o-nas/",
  "/kontakt/",
  "/ochrana-osobnych-udajov/",
] as const;

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${siteConfig.url}${path === "/" ? "/" : path}`,
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path.includes("omietky") ? 0.9 : 0.6,
  }));
}
