import type { Metadata } from "next";
import { siteConfig } from "./site";

type PageSeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

/** Nahradí placeholder [LOKALITA] hodnotou zo siteConfig.locality */
export function withLocality(text: string): string {
  return text.replaceAll("[LOKALITA]", siteConfig.locality);
}

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}

export function createMetadata({
  title,
  description,
  path = "/",
  image = "/images/placeholders/og-default.svg",
  noIndex = false,
}: PageSeoInput): Metadata {
  const resolvedTitle = withLocality(title);
  const resolvedDescription = withLocality(description);
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url,
      siteName: siteConfig.legalName,
      locale: "sk_SK",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: resolvedTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function localBusinessJsonLd() {
  const sameAs = [siteConfig.social.facebook, siteConfig.social.instagram].filter(
    (v): v is string => Boolean(v)
  );

  const address: Record<string, string> = {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.addressLocality,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.addressCountry,
  };

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phoneHref,
    email: siteConfig.email,
    address,
    image: absoluteUrl("/images/placeholders/og-default.svg"),
  };

  if (sameAs.length > 0) {
    data.sameAs = sameAs;
  }

  if (siteConfig.openingHours && siteConfig.openingHours.length > 0) {
    data.openingHours = siteConfig.openingHours;
  }

  if (siteConfig.ico) {
    data.taxID = siteConfig.ico;
  }

  return data;
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: input.url,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: siteConfig.legalName,
      url: siteConfig.url,
      telephone: siteConfig.phoneHref,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.streetAddress,
        addressLocality: siteConfig.address.addressLocality,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.addressCountry,
      },
    },
  };
}
