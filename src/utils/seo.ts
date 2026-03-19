import i18n from "@/i18n/config";

const SITE_NAME = "Continental Mining Services";
const BASE_URL =
  typeof window !== "undefined"
    ? window.location.origin
    : import.meta.env.VITE_BASE_URL || "https://continental-mining.vercel.app";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

type Locale = "en" | "fr";

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  path: string;
  ogImage?: string;
}

export function getSEOData(config: SEOConfig) {
  const currentLang = (i18n.language || "en") as Locale;

  const canonicalUrl = `${BASE_URL}${config.path}`;
  const ogImage = config.ogImage || DEFAULT_OG_IMAGE;
  const ogLocale = currentLang === "fr" ? "fr_FR" : "en_US";

  return {
    title: config.title,
    meta: [
      {
        name: "description",
        content: config.description,
      },
      ...(config.keywords
        ? [
            {
              name: "keywords",
              content: config.keywords,
            },
          ]
        : []),
      {
        property: "og:title",
        content: config.title,
      },
      {
        property: "og:description",
        content: config.description,
      },
      {
        property: "og:url",
        content: canonicalUrl,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:image",
        content: ogImage,
      },
      {
        property: "og:locale",
        content: ogLocale,
      },
      {
        property: "og:site_name",
        content: SITE_NAME,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: config.title,
      },
      {
        name: "twitter:description",
        content: config.description,
      },
      {
        name: "twitter:image",
        content: ogImage,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: canonicalUrl,
      },
      {
        rel: "alternate",
        hrefLang: "x-default",
        href: canonicalUrl,
      },
    ],
  };
}

export function getCurrentLanguage(): Locale {
  return (i18n.language || "en") as Locale;
}
