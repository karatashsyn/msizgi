/* eslint-disable @next/next/no-img-element */
import initTranslations from "@/app/i18n";
import AppointmentButton from "@/components/buttons/AppointmentButton";
import BlogCard from "@/components/cards/BlogCard";
import BlogCardMobile from "@/components/cards/BlogCardMobile";
import BlogCardSecondary from "@/components/cards/BlogCardSecondary";
import PaddedContainer from "@/components/composite/PaddedContainer";
import PageGradient from "@/components/PageGradient";
import { getBlogs } from "@/services/blog";

const WorkingHoursInfo = ({ day, info }) => {
  return (
    <div className="w-full flex items-center justify-between gap-[4rem]">
      <span className="text-[0.85rem] text-[#F2F7FF] font-normal whitespace-nowrap">
        {" "}
        {day}
      </span>
      <span className="text-[0.85rem] text-[#F2F7FF] font-bold whitespace-nowrap">
        {info}
      </span>
    </div>
  );
};

const DataInfo = ({ count = "", info = "", image, className, infoClass }) => {
  return (
    <div
      style={{
        background: "yellow",
      }}
      className={className + " flex flex-col gap-[0.5rem] relative"}
    >
      <img
        src={image}
        className="absolute inset-0 w-full h-full object-cover "
        alt=""
      />
      <div className="bg-[rgba(238,143,139,0.5)] absolute inset-0"></div>
      <div
        className={
          infoClass +
          " absolute inset-0 flex flex-col justify-center items-center gap-[0.5rem] text-center"
        }
      >
        <span className="leading-none font-extrabold text-white text-[3rem]">
          {"+" + count}
        </span>
        <span className="leading-none text-white font-medium text-[1.2rem]">
          {info}
        </span>
      </div>
    </div>
  );
};

export default async function Contact({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["about", "common"]);
  const blogs = await getBlogs("");
  if (!blogs.length) {
    notFound();
  } else {
  }
  return (
    <div className="greenGradient">
      <PaddedContainer className={"overflow-hidden"}>
        <h1 className="max-sm:text-[3.75rem] text-[6.4rem] max-sm:text-[#FFFFFF]  font-semibold">
          {t("about:aboutUs")}
        </h1>
        <p className="max-sm:mt-[1.95rem] mt-[2.9rem] max-sm:text-[#FFFFFF] text-[1.2rem] max-sm:text-[1.4rem] mb-[8.7rem]">
          {t("about:firstParagraph")}
        </p>
        <div className="flex justify-between gap-[3.4rem] max-sm:flex-col">
          <img
            src="/images/about1.png"
            className="sm:w-[24rem] sm:h-[35rem] max-sm:min-w-full object-cover object-center max-sm:max-h-[15.9rem] max-sm:rounded-[1.17rem]"
            alt="#"
          />
          <div>
            <div>
              <h2
                className="max-sm:whitespace-nowrap max-sm:text-[2.5rem] text-[3rem] font-semibold"
                dangerouslySetInnerHTML={{
                  __html: t("about:secondTitle"),
                }}
              ></h2>
              <p className="mt-[0.85rem] max-sm:text-[1.4rem] ">
                {t("about:secondParagraph")}
              </p>
            </div>
            <div className="mt-[3.55rem] max-sm:hidden">
              <h3 className="font-bold text-[1.6rem]">
                {t("about:thirdTitle")}
              </h3>
              <p className="mt-[1.95rem] text-[1rem]">
                {t("about:thirdParagraph")}
              </p>
            </div>
          </div>
        </div>
      </PaddedContainer>
      <div className="relative h-[45rem] w-full flex mt-[5.3rem] max-sm:hidden">
        <img
          src="/images/about2.png"
          className="absolute object-cover inset-0 h-full"
          alt=""
        />
        <div className="mt-[4.65rem]">
          <div className="relative z-[10] w-full max-lg:pl-[9rem] px-[17.9rem]">
            <div
              className="whitespace-nowrap text-[rgb(255,242,242)] "
              dangerouslySetInnerHTML={{
                __html: t("about:yourSmileImportant"),
              }}
            ></div>
          </div>
          <div className="mt-[2.95rem] relative max-lg:px-[9rem] pl-[17.9rem] max-w-[80rem] text-[1.2rem] text-white ">
            {t("about:fourthParagraph")}
          </div>
        </div>
      </div>
      <div className="flex w-full max-lg:justify-center lg:px-[17.9rem] lg:justify-end items-end translate-y-[-16.75rem]  mb-[-16.75rem] max-sm:hidden">
        <img
          src="/images/clinic4.webp"
          className="max-w-[19rem] object-cover h-[20rem] translate-x-[3.9rem]"
          alt=""
        />
        <div className="max-w-[29rem] h-[30rem] px-[5.7rem] py-[3rem] bg-[#85D6FB]">
          <h3 className="text-[2rem] leading-[1.3] font-extrabold text-white text-center whitespace-nowrap">
            {t("about:workingHours")}
          </h3>
          <div className="mb-[1.5rem]">
            <div className="mt-[0.5rem] text-center leading-[1.3rem] text-white">
              <span className="text-[0.85rem]">
                {t("about:workingHoursParagraph")}
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col gap-[0.75rem]">
            <WorkingHoursInfo
              day={t("common:day-sunday")}
              info={t("about:closed")}
            />
            <WorkingHoursInfo
              day={t("common:day-monday")}
              info="09:00 - 18:00"
            />
            <WorkingHoursInfo
              day={t("common:day-tuesday")}
              info="09:00 - 18:00"
            />
            <WorkingHoursInfo
              day={t("common:day-wednesday")}
              info="09:00 - 18:00"
            />
            <WorkingHoursInfo
              day={t("common:day-thursday")}
              info="09:00 - 18:00"
            />
            <WorkingHoursInfo
              day={t("common:day-friday")}
              info="09:00 - 18:00"
            />
            <WorkingHoursInfo
              day={t("common:day-saturday")}
              info="09:00 - 18:00"
            />
          </div>
        </div>
      </div>
      <PaddedContainer className={"mt-[2.35rem]"}>
        <section>
          <div className="max-sm:mb-[1.75rem] ">
            <h2 className="text-[#1B262C] font-bold text-[4.8rem] max-sm:text-[3.75rem]">
              {t("about:ourClinic")}
            </h2>
            <span className="text-[#52575D] sm:hidden w-full max-sm:text-[1.25rem]">
              {t("about:clinicParagraph")}
            </span>
          </div>
          <div className="max-sm:flex gap-[1.17rem] overflow-x-scroll">
            <div className="sm:mt-[1.75rem] max-sm:gap-[1.17rem] flex max-sm:flex-row max-lg:flex-col justify-between gap-[2.05rem] mb-[3.15rem] max-sm:h-[12.8rem]">
              <div className="flex sm:flex-col justify-between max-sm:h-full">
                <span className="text-[#52575D] max-sm:hidden w-full max-sm:text-[1.25rem]">
                  {t("about:clinicParagraph")}
                </span>
                <img
                  className="sm:mt-[0.85rem] max-sm:rounded-[1.17rem] max-sm:max-w-[18.4rem] max-sm:h-full sm:min-w-[30rem] object-cover sm:h-[32.8rem]"
                  src="/images/clinic2.webp"
                  alt=""
                />
              </div>
              <img
                src="/images/clinic1.webp"
                className="sm:max-h-[38rem] mt-auto max-sm:h-full max-sm:rounded-[1.17rem] max-sm:max-w-[18.4rem]"
                alt=""
              />
            </div>
            <div className="w-full h-[23.1rem]  max-sm:gap-[1.17rem] max-sm:flex-row max-lg:flex-col flex gap-[2.2rem] max-sm:h-[12.8rem]">
              <img
                src="/images/clinic3.webp"
                className="basis-full h-full max-lg:w-full max-sm:rounded-[1.17rem] max-sm:max-w-[18.4rem]"
                alt=""
              />
              <img
                src="/images/clinic4.webp"
                className="basis-full h-full max-sm:rounded-[1.17rem] max-sm:max-w-[18.4rem]"
                alt=""
              />
            </div>
          </div>
        </section>
      </PaddedContainer>
      <div className="w-full max-h-[15.8rem] flex bg-red-500 !aspect-[192/31] mt-[6.65rem] max-sm:hidden">
        <DataInfo
          key={1}
          count="1500"
          info={t("about:perfectSmile") + "."}
          image="/images/aboutt1.png"
          className={"min-w-[35%]"}
        />
        <DataInfo
          className={"min-w-[22.9%]"}
          key={2}
          count="1500"
          info={t("about:expertDoctor") + "."}
          image="/images/aboutt2.png"
        />
        <DataInfo
          className={"basis-full"}
          key={3}
          count="1500"
          info={t("about:yearsOfExperience") + "."}
          image="/images/aboutt3.png"
        />
      </div>
      <section>
        <PaddedContainer className={"md:pr-0  sm:mt-[4.2rem] mb-[8.2rem]"}>
          <h2
            className="text-[3.2rem] leading-[3.7rem] font-extrabold text-[#1B262C] mb-[2rem] max-sm:hidden"
            dangerouslySetInnerHTML={{
              __html: t("about:blogsTitle"),
            }}
          ></h2>
          <h2
            className="text-[#1B262C] font-bold text-[2.5rem] mb-[1.40rem] sm:hidden"
            dangerouslySetInnerHTML={{
              __html: t("about:blogsTitleMobile"),
            }}
          ></h2>
          <div className="flex overflow-x-scroll pb-[2rem] sm:hidden">
            <BlogCardMobile
              date={"12.12.2021"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
              }
              title={"Lorem ipsum dolor sit amet"}
            />
          </div>
          <div className="flex justify-between gap-[1rem] max-sm:hidden">
            <div className="flex gap-[1rem] basis-[50%]">
              {blogs.slice(0, 4).map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-[1rem] basis-[50%]">
              {blogs.slice(4, 10).map((blog) => (
                <BlogCardSecondary key={blog.slug} blog={blog} />
              ))}
            </div>
          </div>
        </PaddedContainer>
      </section>
    </div>
  );
}
