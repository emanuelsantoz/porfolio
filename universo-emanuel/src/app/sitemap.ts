import type { MetadataRoute } from "next";
import { PERSONAS } from "@/core/personas/personas";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now },
    { url: `${siteUrl}/study-dev`, lastModified: now },
    { url: `${siteUrl}/webkits`, lastModified: now },
    { url: `${siteUrl}/webkits/cpf-cnpj`, lastModified: now },
    { url: `${siteUrl}/webkits/json-yaml`, lastModified: now },
    { url: `${siteUrl}/webkits/lorem`, lastModified: now },
    { url: `${siteUrl}/badges`, lastModified: now },
  ];

  const personaRoutes: MetadataRoute.Sitemap = PERSONAS.filter((p) => p.id === "ux-ui").map((p) => ({
    url: `${siteUrl}/p/${p.id}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...personaRoutes];
}

