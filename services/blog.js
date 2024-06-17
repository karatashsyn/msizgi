import sanityClient, { imgUrlBuilder } from "@/lib/sanityClient";
import { cache } from "react";
export const getBlogs = cache(async (searchKey = "") => {
  const res = await sanityClient.fetch(
    `*[_type=='blog' && categories[] == null || !('performans-testi' in categories[]->value) ]  | order(orderRank asc) {
          title, description, "img": image.asset->url,"slug":slug.current, 'categories': categories[]->{title, value}, 'date':_updatedAt, orderRank, imageAlt
        }`
  );
  return res
    .filter((b) => {
      return b.title.toLowerCase().includes(searchKey.toLowerCase());
    })
    .reverse();
});

export const getBlogBySlug = cache(async (slug) => {
  if (!slug) return null;
  const res = await sanityClient.fetch(
    `*[_type=='blog' && slug.current == $slug] {
            title,description,"img": image.asset->url, imageAlt, 'date':_updatedAt, "slug":slug.current,"content":content[]{
                ...,
                _type == 'image' => {
                "url": asset->url
                }
            }
            }`,
    { slug }
  );
  return res[0];
});
