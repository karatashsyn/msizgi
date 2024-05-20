export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/sd-admin"],
      },
    ],
    sitemap: "https://www.mehmetsaidizgi.com/sitemap.xml",
  };
}
