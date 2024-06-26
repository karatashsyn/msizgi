/* eslint-disable @next/next/no-img-element */
import { getFormattedDate } from "@/util";
import Link from "next/link";
import React from "react";

export default function BlogCard({ blog, className }) {
  return (
    <Link
      href={`/blog/${blog?.slug}`}
      className={`${className} max-w-[19rem] cursor-pointer`}
    >
      <img
        className="object-center  object-cover rounded-tl-[1.8rem] rounded-br-[1.8rem] w-full mb-[0.75rem] !aspect-[3/2]"
        src={blog?.img}
        alt={blog?.imageAlt}
        width={304}
        height={202}
      />
      <div className="max-w-full">
        <div className="mt-[0.75rem] mb-[0.25rem]"></div>
        <span className="text-[#062D92] font-light text-[0.85rem]">
          {getFormattedDate(blog?.date)}
        </span>
        <h4 className="text-[#1B262C] font-bold text-[1.2rem] mb-[0.5rem]">
          {blog?.title}
        </h4>
        <p className="text-[#52575D] text-[0.85rem]">{blog?.description}</p>
      </div>
    </Link>
  );
}
