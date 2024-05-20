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
      priority: 0.5,
    },
    {
      url: `${DOMAIN}/blog`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${DOMAIN}/tedaviler`,
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: `${DOMAIN}/hizmetler/implant`,
      lastModified: new Date(),
      priority: 0.75,
    },
    {
      url: `${DOMAIN}/hizmetler/pedodonti`,
      lastModified: new Date(),
      priority: 0.75,
    },
    {
      url: `${DOMAIN}/hizmetler/dis-beyazlatma`,
      lastModified: new Date(),
      priority: 0.75,
    },
    {
      url: `${DOMAIN}/hizmetler/kanal-tedavisi`,
      lastModified: new Date(),
      priority: 0.75,
    },
    {
      url: `${DOMAIN}/hizmetler/ortodonti`,
      lastModified: new Date(),
      priority: 0.75,
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
    {
      url: `${DOMAIN}/en/services/implant`,
      lastModified: new Date(),
      priority: 0.75,
    },
    {
      url: `${DOMAIN}/en/services/pedodontics`,
      lastModified: new Date(),
      priority: 0.75,
    },
    {
      url: `${DOMAIN}/en/services/teeth-whitening`,
      lastModified: new Date(),
      priority: 0.75,
    },
    {
      url: `${DOMAIN}/en/services/root-canal-treatment`,
      lastModified: new Date(),
      priority: 0.75,
    },
    {
      url: `${DOMAIN}/en/services/orthodontics`,
      lastModified: new Date(),
      priority: 0.75,
    },

    ...blogEntries,
  ];
}
