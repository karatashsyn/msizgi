import { getBlogs } from "@/services/blog";

export default async function sitemap() {
  const blogs = await getBlogs();
  const blogEntries = blogs.map((blog) => ({
    url: `https://DOMAIN.com/${blog.slug}`,
    // lastModified: new Date(blog._updatedAt)
    // changeFreq: "",
    // priority: 0.8
  }));
  return [
    {
      url: "https://DOMAIN.com/",
    },
    ...blogEntries,
  ];
}
