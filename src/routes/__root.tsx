// src/routes/__root.tsx
/// <reference types="vite/client" />

import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import "@fontsource/inter/index.css";
import "@fontsource/montserrat/index.css";
import "@fontsource/oswald/index.css";

// Import the generated route tree
import "@/index.css";
import "@/i18n/config";
import i18n from "@/i18n/config";
import { getCurrentLanguage } from "@/utils/seo";

const BASE_URL =
  typeof window !== "undefined"
    ? window.location.origin
    : import.meta.env.VITE_BASE_URL || "https://continental-mining.vercel.app";

export const Route = createRootRoute({
  head: () => {
    const currentLang = getCurrentLanguage();
    const ogLocale = currentLang === "fr" ? "fr_FR" : "en_US";

    return {
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          title:
            "Mining Logistics Services in Sierra Leone | Continental Mining",
        },
        {
          property: "og:site_name",
          content: "Continental Mining Services",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:locale",
          content: ogLocale,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      links: [
        {
          rel: "alternate",
          hrefLang: "x-default",
          href: BASE_URL,
        },
      ],
    };
  },
  component: RootComponent,
});

function RootComponent() {
  const [lang, setLang] = useState<string>(getCurrentLanguage());

  useEffect(() => {
    const updateLang = () => {
      setLang(getCurrentLanguage());
    };

    updateLang();
    i18n.on("languageChanged", updateLang);

    return () => {
      i18n.off("languageChanged", updateLang);
    };
  }, []);

  return (
    <RootDocument lang={lang}>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({
  children,
  lang,
}: Readonly<{ children: ReactNode; lang: string }>) {
  return (
    <html lang={lang}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
