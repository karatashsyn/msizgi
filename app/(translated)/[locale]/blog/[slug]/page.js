/* eslint-disable @next/next/no-img-element */
import React from "react";
import { getBlogBySlug, getBlogs } from "@/services/blog";
import BlogText from "@/components/BlogText";
import { notFound } from "next/navigation";
import BlogSuggestion from "@/components/BlogSuggestion";
import { getFormattedDate } from "@/util";
import initTranslations from "@/app/i18n";
import { ArticleFont } from "@/app/(translated)/layout";
import PaddedContainer from "@/components/composite/PaddedContainer";

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
    metadataBase: new URL("https://mehmetsaidizgi.com"),
    description: blog?.description
      ? blog?.description
      : blog?.content.filter(
          (item) => item._type === "block" && item.children[0]?.text
        )[0].children[0].text,

    modifiedTime: blog?.date ? blog?.date : "",
    alternates: {
      canonical: "https://mehmetsaidizgi.com/blog/" + blog?.slug,
    },
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    name: blog?.title,
    author: {
      "@type": "Person",
      name: "Mehmet Said İzgi",
    },
    dateModified: blog?.date,
    image: blog?.img,
    description: blog?.description,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div
        style={{
          fontFamily: ArticleFont.fontFamily,
        }}
        className={" flex w-full  justify-center "}
      >
        <div className="prose min-w-full w-full">
          <div className="w-full flex justify-center">
            <img
              className=" !w-full my-0 max-h-[24rem] object-cover "
              src={blog?.img}
              alt={blog?.imageAlt}
            />
          </div>
          <PaddedContainer>
            <article className="">
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
            </article>
          </PaddedContainer>
        </div>
      </div>
      <BlogSuggestion recentBlogsText={recentBlogsText} />
    </main>
  );
}
