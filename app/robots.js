export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/sd-admin"],
      },
    ],
    sitemap: "https://DOMAIN.com/sitemap.xml",
  };
}
