/* eslint-disable @next/next/no-img-element */
import React from "react";
import { getBlogBySlug, getBlogs } from "@/services/blog";
import BlogText from "@/components/BlogText";
import { notFound } from "next/navigation";
import { ArticleFont } from "../../layout";
import BlogSuggestion from "@/components/BlogSuggestion";
import { getFormattedDate } from "@/util";
import initTranslations from "@/app/i18n";

export const revalidate = 3600;

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => blog?.slug);
}

export async function generateMetadata({ params }) {
  const blog = await getBlogBySlug(params.slug);
  const paragraphs = blog?.content.filter(
    (item) => item._type === "block" && item.children[0]?.text
  );

  return {
    title: blog ? blog?.title : "MSI - Diş Kliniği",
    description: blog?.description
      ? blog?.description
      : blog?.content.filter(
          (item) => item._type === "block" && item.children[0]?.text
        )[0].children[0].text,

    modifiedTime: blog?.date ? blog?.date : "",
    openGraph: {
      metadataBase: new URL("https://mehmetsaidizgi.com"),
      siteName: "MSI - Diş Kliniği",
      locale: "tr_TR",
      type: "article",
      title: blog ? blog?.title : "MSI - Diş Kliniği",
      description: blog ? blog?.description : "Diş Tedavisi ve Sağlık",
      url: "https://mehmetsaidizgi.com/blog/" + blog?.slug,
      modifiedTime: blog?.date ? blog?.date : "",
      article: {
        modifiedTime: blog?.date ? blog?.date : "",
      },
      images: [
        {
          url: blog?.img
            ? blog?.img
            : "https://mehmetsaidizgi.com/opengraph-image.png",
          width: 800,
          height: 600,
          alt: blog?.title ? blog?.title : "MSI - Diş Kliniği",
        },
      ],
    },
    article: {
      modifiedTime: blog?.date ? blog?.date : "",
    },
  };
}

export default async function BlogDetail({ params }) {
  const blog = await getBlogBySlug(params.slug);
  const { t } = await initTranslations(params.locale, ["blog"]);
  const recentBlogsText = t("blog:recent-blogs");
  if (!blog) {
    notFound();
  }
  return (
    <>
      <div
        style={{
          fontFamily: ArticleFont.fontFamily,
        }}
        className={" flex w-full  justify-center "}
      >
        <div className="prose min-w-full w-full">
          <div className="w-full flex justify-center">
            <img
              className=" !w-full my-0 max-h-[24rem] object-cover rounded-md"
              src={blog?.img}
              alt="blog-topic"
            />
          </div>

          <div className="max-md:px-[3rem] max-lg:px-[4rem] px-[7.5rem]">
            <h1 className="!mt-[6rem] mb-[0.6rem] leading-none text-[3.5rem] font-bold">
              {blog?.title}
            </h1>
            <span className="text-[#062D92] font-light text-[0.85rem]">
              {getFormattedDate(blog?.date)}
            </span>
            <div
              className={
                "text-[1rem] w-full blog-content " + ArticleFont.className
              }
            >
              <BlogText blog={blog} />
            </div>
          </div>
        </div>
      </div>
      <BlogSuggestion recentBlogsText={recentBlogsText} />
    </>
  );
}
