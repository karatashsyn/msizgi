import { getBlogs } from "@/services/blog";
const DOMAIN = "https://www.mehmetsaidizgi.com";
export default async function sitemap() {
  const blogs = await getBlogs();
  const blogEntries = blogs.map((blog) => ({
    url: `${DOMAIN}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    priority: 0.8,
    changeFrequency: "monthly",
  }));
  return [
    {
      url: `${DOMAIN}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${DOMAIN}/iletisim`,
      lastModified: new Date(),
      priority: 0.85,
    },
    {
      url: `${DOMAIN}/hakkimizda`,
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: `${DOMAIN}/blog`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${DOMAIN}/tedaviler`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${DOMAIN}/en`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${DOMAIN}/en/iletisim`,
      lastModified: new Date(),
      priority: 0.85,
    },
    {
      url: `${DOMAIN}/en/hakkimizda`,
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: `${DOMAIN}/en/blog`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${DOMAIN}/en/tedaviler`,
      lastModified: new Date(),
      priority: 0.8,
    },
    ...blogEntries,
  ];
}
