import initTranslations from "@/app/i18n";
import AppointmentButton from "@/components/buttons/AppointmentButton";
import BlogCard from "@/components/cards/BlogCard";
import BlogCardSecondary from "@/components/cards/BlogCardSecondary";
import PaddedContainer from "@/components/composite/PaddedContainer";
import PageGradient from "@/components/PageGradient";
import { getBlogs } from "@/services/blog";

export const revalidate = 3600;

export async function generateMetadata({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["blog"]);
  return {
    title: `${t("blog:blog")} - Mehmet Said İzgi`,
    alternates:{
      canonical: "https://mehmetsaidizgi.com/blog",
    }
  };
}

export default async function Blog({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["blog", "common"]);

  const blogs = await getBlogs("");
  if (!blogs.length) {
    notFound();
  } else {
  }

  return (
    <main>
      <div className="animate-fade-in-up relative">
        <div className="relative ">
          <PageGradient
            className={"max-sm:opacity-25"}
            rectangleColor="#009944"
            firstCircleColor="#009944"
            secondCircleColor="#009944"
          />
          <PaddedContainer>
            <div className="max-sm:mt-[4rem] mt-[3rem] relative z-[10]">
              <h1
                style={{
                  lineHeight: "1",
                }}
                className="font-semibold max-sm:text-[3rem]  text-[6.4rem] text-[#1B262C]"
              >
                {t("blog:blog")}
              </h1>

              <p
                style={{
                  lineHeight: "1",
                }}
                className="text-[1.2rem] max-sm:mt-[1.2rem] mt-[2.4rem]  text-[#52575D] font-semibold"
                dangerouslySetInnerHTML={{
                  __html: t("blog:mainParagraph"),
                }}
              ></p>
              <AppointmentButton
                text={t("common:button-takeAppointment")}
                className={"!bg-[#009944] mt-[2.6rem] font-bold"}
              />
            </div>
          </PaddedContainer>
        </div>
      </div>
      <section className="mt-[9.75rem] max-sm:mt-[3rem] mb-[5rem]">
        <div className="w-full flex max-sm:px-6 max-lg:px-9 max-xl:px-16 px-24 gap-[3rem] max-sm:grid-cols-2 justify-center items-start">
          <div
            className="grid grid-cols-3 max-sm:grid-cols-2 max-lg:grid-cols-2 gap-[1rem] max-md:grid-cols-3 basis-[0.64] max-md:basis-[1]"
            style={{
              rowGap: "2rem",
            }}
          >
            {blogs.slice(0, 12).map((blog) => (
              <BlogCard
                blog={blog}
                key={blog?.slug}
                title={blog?.title}
                date={blog?.date}
                description={blog?.description}
                img={blog?.titleImage}
                slug={blog?.slug}
              />
            ))}
          </div>
          <div className=" basis-[36%] max-md:hidden">
            <h3 className="text-[1.2rem] font-bold mb-[1.5rem] text-[#85D6FB]">
              {t("blog:otherBlogs")}
            </h3>
            <div className="grid grid-cols-1 gap-[0.45rem]">
              {blogs.slice(12, blogs.length).map((blog) => (
                <BlogCardSecondary
                  className={"max-w-none"}
                  key={blog?.slug}
                  blog={blog}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
