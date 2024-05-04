/* eslint-disable @next/next/no-img-element */
import React from "react";
import { getBlogs } from "@/services/blog";

export const revalidate = 3600;

export default async function Blog({ searchParams }) {
  const blogs = await getBlogs(searchParams.s);

  return (
    <>
      {/* <div className="w-full flex justify-between  mt-8">
        <form className="w-[50%] max-sm:w-[80%] ">
          <div className=" max-lg:w-full flex h-[48px] max-sm:h-[36px] items-center text-black justify-between p-0 pl-2  border-[0.4px] shadowsm border-neutral-400 rounded-[3px]">
            <input
              defaultValue={searchParams.s}
              name="s"
              className="h-full arial font-medium placeholder:font-normal placeholder:text-gray-600 placeholder:transition-opacity placeholder:duration-200 focus:placeholder:opacity-0 focus:opacity-100 transition-all duration-300 w-[80%] outline-none"
              type="text"
              placeholder="Merak ettiğin konuyu ara..."
            />
            <button
              type="submit"
              className=" bg-gray-100 cursor-pointer rounded-l-none  rounded-sm h-full gap-1 w-24 py-2 flex items-center justify-center"
            >
              <img
                src="/search.svg"
                alt="Search Icon"
                className="w-4 h-4  inline-block opacity-70 "
              />
              <span className="arial text-gray-600">Ara</span>
            </button>
          </div>
        </form>
        <div className="flex gap-4">
          <a
            target="_blank"
            href="https://www.instagram.com/performanslab/"
            className="flex max-sm:h-[36px] max-sm:py-0 max-sm:px-2 cursor-pointer items-center border-[1px] px-4 shadow-sm py-3 rounded-sm gap-2"
          >
            <img width={24} height={30} alt="instagram" src={"/icon2.svg"} />

            <span className="arial text-gray-800 max-sm:hidden">Instagram</span>
          </a>
        </div>
      </div>

      <div
        className={
          "w-full mt-12 grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 gap-3 " +
          Inter.className
        }
      >
        {blogs.map((b, index) => (
          <BlogCard2 key={index} blog={b} />
        ))}
      </div>
      <ContactSection
        titleHidden={true}
        textClass={"text-[#333]"}
        lightMode={true}
      /> */}
    </>
  );
}
