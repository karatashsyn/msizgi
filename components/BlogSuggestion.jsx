import { getBlogs } from "@/services/blog";
import { shuffleArray } from "@/util";
import React from "react";
import BlogCard from "./cards/BlogCard";
import PaddedContainer from "./composite/PaddedContainer";
import BlogCardSecondary from "./cards/BlogCardSecondary";

export const revalidate = 36000;

export default async function BlogSuggestion({ recentBlogsText }) {
  const blogs = shuffleArray(await getBlogs()).slice(0, 3);
  return (
    <div className="mt-[7rem] mb-[7rem]">
      <PaddedContainer className={"flex justify-center"}>
        <div className="max-sm:min-w-full">
          <h3 className="#1B262C text-[2rem] font-bold mb-[1rem]">
            {recentBlogsText}
          </h3>
          <div className=" max-sm:hidden flex-nowrap flex gap-[1rem]">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
          <div className="sm:hidden flex flex-col gap-[1rem]">
            {blogs.map((blog) => (
              <BlogCardSecondary
                className={"min-w-full"}
                key={blog?.slug}
                blog={blog}
              />
            ))}
          </div>
        </div>
      </PaddedContainer>
    </div>
  );
}
