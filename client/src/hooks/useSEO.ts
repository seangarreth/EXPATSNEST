import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

const SITE_NAME = "EXPAT'SNEST";
const BASE_URL = "https://expatsnests.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

function setMeta(name: string, content: string, property = false) {
  const attr = property ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  twitterCard = "summary_large_image",
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    setMeta("description", description);
    setMeta("robots", "index, follow");

    if (canonical) {
      setLink("canonical", `${BASE_URL}${canonical}`);
    }

    setMeta("og:title", ogTitle || title, true);
    setMeta("og:description", ogDescription || description, true);
    setMeta("og:image", ogImage, true);
    setMeta("og:type", ogType, true);
    setMeta("og:site_name", SITE_NAME, true);
    setMeta("og:url", canonical ? `${BASE_URL}${canonical}` : BASE_URL, true);

    setMeta("twitter:card", twitterCard);
    setMeta("twitter:title", ogTitle || title);
    setMeta("twitter:description", ogDescription || description);
    setMeta("twitter:image", ogImage);
    setMeta("twitter:site", "@expatsnest");
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, ogType, twitterCard]);
}
