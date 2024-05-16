/* eslint-disable @next/next/no-img-element */
import initTranslations from "../i18n";
import AppointmentButton from "@/components/buttons/AppointmentButton";
import PaddedContainer from "@/components/composite/PaddedContainer";
import ServiceCard from "@/components/cards/ServiceCard";
import EmployeeCard from "@/components/cards/EmployeeCard";
import InfoBox from "@/components/InfoBox";
import ServiceCardMobile from "@/components/cards/ServiceCardMobile";
import BlogCard from "@/components/cards/BlogCard";
import BlogCardMobile from "@/components/cards/BlogCardMobile";
import { team } from "@/data";

export const metaData = {
  title: "MSI Diş Kliniği",
  description: "MSI Diş Kliniği",
};

export default async function Home({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["home", "services", "common"]);
  return (
    <main className="animate-fade-in-up relative ">
      <div
        className="absolute max-sm:hidden top-0 left-0 h-[100%] right-0 z-[]"
        style={{
          background:
            "linear-gradient(180deg, #85D6FB 0%, rgba(255,255,255,0) 150vh)",
          height: "100%",
        }}
      ></div>
      <div className="relative ">
        <section id="hero-section" className="max-sm:bg-[#85D6FB]">
          <PaddedContainer
            className={"!pr-0 max-w-none"}
            containerClassName={
              "sm:bg-[rgba(248,248,248,0.21)] relative pb-[7.3rem]"
            }
          >
            <svg
              className="max-sm:hidden absolute top-0 left-0 right-0 -translate-y-36 w-[100vw] max-h-full"
              width="1920"
              height="853"
              viewBox="0 0 1920 853"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_0_218)">
                <ellipse
                  cx="953.5"
                  cy="111.5"
                  rx="1331.5"
                  ry="605.5"
                  fill="#85D6FB"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_0_218"
                  x="-513.914"
                  y="-629.914"
                  width="2934.83"
                  height="1482.83"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="67.957"
                    result="effect1_foregroundBlur_0_218"
                  />
                </filter>
              </defs>
            </svg>

            <div className="mt-[5rem]  flex justify-between relative">
              <div className="flex flex-col">
                <h1
                  className="text-[2.34rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.8rem] xl:text-[6.4rem]"
                  style={{
                    fontWeight: "bold",
                    lineHeight: "1",
                    color: "white",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: t("hero-title"),
                  }}
                ></h1>
                <p
                  className="max-sm:hidden sm:mt-[2.7rem] sm:w-[60%] text-[1.2rem]"
                  style={{
                    color: "white",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: t("hero-text"),
                  }}
                ></p>
                <p
                  className="sm:hidden mt-[0.7rem] sm:w-[60%] text-[1.4rem]"
                  style={{
                    color: "white",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: t("hero-text-mobile"),
                  }}
                ></p>
              </div>

              <img
                className="z-[2] h-[9rem] sm:h-[12rem] md:h-[16rem] lg:h-[20rem] xl:h-[22rem]"
                src={"/svg/owl.svg"}
                alt="MSI Diş Kliniği Logo"
              />
            </div>
            <div className="max-sm:pr-6">
              <AppointmentButton
                className={
                  "!mt-[4.3rem] relative max-sm:text-[1.4rem] max-sm:font-bold bg-[#F08F8C] max-sm:w-full max-sm:h-[4.84rem]"
                }
                text={t("hero-takeAppointment")}
              />
            </div>
            <div className="max-sm:flex max-sm:justify-center max-sm:w-full max-sm:pr-6">
              <div
                className="mt-[3.9rem] max-sm:rounded-br-[2.5rem] max-sm:rounded-tl-[2.5rem] max-sm:overflow-hidden flex max-sm:items-center max-sm:w-full  
            items-center gap-[1rem] max-sm:max-h-[8rem] max-sm:bg-white max-sm:justify-between max-sm:px-[1.95rem]"
              >
                <div className="px-[1.8rem] max-sm:basis-full  pt-[2rem] max-sm:p-0 rounded-tl-[30px] h-[8.3rem] sm:w-[14rem] rounded-br-[30px] bg-white max-sm:items-center max-sm:flex">
                  <div>
                    <h3 className="mb-[1.2rem] max-sm:text-[1.09rem] leading-[0] font-semibold text-[1.2rem]">
                      {t("hero-ourAddress")}
                    </h3>
                    <span className="text-[0.85rem] max-sm:text-[1.09rem] leading-[0] text-[#52575D]">
                      {t("hero-ourAddressInfo")}
                    </span>
                  </div>
                </div>
                <div className="h-[6.32rem] sm:hidden my-auto w-[0.1rem] bg-[#D9D9D9]"></div>
                <div className="px-[1.8rem] max-sm:basis-full  pt-[2rem] max-sm:p-0 rounded-tl-[30px] h-[8.3rem] sm:w-[14rem] rounded-br-[30px] bg-white max-sm:items-center max-sm:flex">
                  <div>
                    <div className="mb-[1.2rem] ">
                      <h3 className="leading-[0] max-sm:text-[1.09rem] max-sm:whitespace-nowrap font-semibold text-[1.2rem]">
                        {t("hero-workingHours")}
                      </h3>
                    </div>
                    <div className="flex flex-col gap-3">
                      <span className="text-[0.85rem] max-sm:text-[1.09rem]  text-[#52575D]">
                        {t("hero-daysInfo")}
                      </span>
                      <span className="text-[0.85rem] max-sm:text-[1.09rem] leading-[0] text-[#52575D]">
                        {t("hero-hoursInfo")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PaddedContainer>
        </section>
        <PaddedContainer className={"!px-0"}>
          <section id="second-section">
            <div className="w-full sm:flex sm:space-between items-center gap-[4.65rem] sm:pt-[7.5rem] max-sm:pb-[2.34rem] sm:pb-[5.65rem]">
              <div className="mt-[5rem] pl-12 lg:basis-[32%] basis-[44%] max-sm:hidden">
                <h2
                  className="font-bold"
                  style={{
                    fontSize: "2rem",
                    lineHeight: "1",
                    color: "#1B262C",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: t("second-main"),
                  }}
                ></h2>
                <p
                  className="mt-[2.55rem]"
                  style={{
                    fontSize: "1rem",
                    color: "#52575D",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: t("second-secondary"),
                  }}
                ></p>
              </div>
              <div className="flex items-center max-sm:min-w-full max-sm:max-h-[26rem]  max-sm:overflow-hidden">
                <img
                  style={{
                    boxShadow: "0px 0px 20px 0px rgba(0, 40, 255, 0.15)",
                  }}
                  src="/images/second-teeth.webp"
                  className="max-sm:basis-[68%] object-cover object-center max-sm:h-full w-[18rem] h-[28rem] lg:w-[27rem] lg:h-[41.9rem] max-sm:shadow-none"
                  alt=""
                />
                <img
                  src="/images/second-instrument.webp"
                  className="max-sm:basis-[32%] object-cover object-center max-sm:min-h-[26rem] w-[9rem] max-h-[22.6rem] lg:w-[13.5rem] lg:max-h-[32rem]"
                  alt=""
                />
              </div>
            </div>
            <PaddedContainer className={"mb-[4.14rem]"}>
              <div className="sm:mt-[5rem] sm:hidden ">
                <h2
                  className="font-bold text-[2.31rem]"
                  style={{
                    lineHeight: "1",
                    color: "#1B262C",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: t("second-main"),
                  }}
                ></h2>
                <p
                  className="mt-[1.87rem] text-[1.56rem] max-sm:border-b-[1px] max-sm:border-b-[#52575d53] max-sm:pb-[2rem]"
                  style={{
                    color: "#52575D",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: t("second-secondary"),
                  }}
                ></p>
              </div>
            </PaddedContainer>
          </section>
        </PaddedContainer>
        <section
          id="third-section"
          className="w-screen mb-[3.45rem] max-sm:hidden"
          style={{
            backgroundImage: "url('/images/third-bg.jpg')",
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <PaddedContainer containerClassName={"!overflow-visible"}>
            <div className="w-full flex space-between items-center gap-[4.65rem] pt-[6rem] ">
              <div>
                <h2
                  style={{
                    letterSpacing: "-0.10rem",
                  }}
                  className="text-white text-[3rem] leading-[3.7rem] font-extrabold "
                  dangerouslySetInnerHTML={{
                    __html: t("third-header"),
                  }}
                ></h2>
                <p
                  className="mt-[1rem] text-[0.85rem] w-[24rem] font-bold text-white leading-[1.3rem]"
                  dangerouslySetInnerHTML={{
                    __html: t("third-secondary"),
                  }}
                ></p>

                <AppointmentButton
                  text={t("hero-takeAppointment")}
                  className="mt-[1.75rem]"
                />
                <div className="mt-[1.55rem] flex items-end">
                  <div
                    style={{
                      boxShadow: "0px 0px 20px 0px rgba(0, 40, 255, 0.15)",
                    }}
                    className="h-[19rem] transition-shadow duration-300 w-[19rem] overflow-hidden cursor-pointer translate-y-[3.45rem] relative"
                  >
                    <img
                      className={`hover:scale-105 transition-all duration-300 w-full h-full`}
                      src="/images/dental-prosthesis.webp"
                      alt=""
                    />
                    <div className="bg-primary rounded-full w-[2.5rem] h-[2.5rem] flex absolute left-[2rem] bottom-[5.45rem] items-center justify-center">
                      <img
                        src="/svg/forward.svg"
                        alt=""
                        className="max-w-[25%] ml-1"
                      />
                    </div>
                  </div>
                  <div className="h-[12.1rem] w-[15rem] px-[1.5rem] flex items-center justify-center bg-primary">
                    <p
                      className="text-white font-semibold"
                      dangerouslySetInnerHTML={{
                        __html: t("third-tertiary"),
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </PaddedContainer>
        </section>
        <section id="fourth-section ">
          <PaddedContainer
            containerClassName={"pt-[7.9rem] pb-12 max-sm:hidden"}
          >
            <div className="flex gap-[2.8rem] items-center">
              <div className="max-w-min pb-[2rem]">
                <h2 className="text-[#1B262C] font-extrabold text-[3rem] mb-[1.05rem]">
                  {t("fourth-primary")}
                </h2>
                <p className="text-[0.85rem] text-[#52575D] mb-[2.15rem]">
                  {t("fourth-secondary")}
                </p>
                <ServiceCard
                  color="#EF8689"
                  title={t("services:serviceTitle1")}
                  image={"/images/service1.webp"}
                  description={t("services:serviceDescription1")}
                />
              </div>

              <div className="flex gap-[2.5rem]">
                <div className="flex flex-col gap-[2.8rem]">
                  <ServiceCard
                    color="#FFEF89"
                    title={t("services:serviceTitle2")}
                    image={"/images/service2.webp"}
                    description={t("services:serviceDescription2")}
                  />
                  <ServiceCard
                    color="#85D6FB"
                    title={t("services:serviceTitle3")}
                    image={"/images/service4.webp"}
                    description={t("services:serviceDescription3")}
                  />
                </div>
                <div className="flex flex-col translate-y-4 gap-[2.8rem]">
                  <ServiceCard
                    color="#85D6FB"
                    title={t("services:serviceTitle4")}
                    image={"/images/service3.webp"}
                    description={t("services:serviceDescription4")}
                  />
                  <ServiceCard
                    color="#FFEF89"
                    title={t("services:serviceTitle5")}
                    image={"/images/service5.webp"}
                    description={t("services:serviceDescription5")}
                  />
                </div>
              </div>
            </div>
          </PaddedContainer>
          <div>
            <PaddedContainer className={"sm:hidden"}>
              <h2 className=" text-[#1B262C] font-extrabold text-[2.031rem] mb-[0.64rem]">
                {t("fourth-primary")}
              </h2>
              <p className="text-[1.32rem] font-semibold text-[#52575D] mb-[2.34rem]">
                {t("fourth-secondary")}
              </p>
            </PaddedContainer>

            <div className="flex gap-[2.18rem] sm:hidden overflow-x-scroll pb-[1.875rem]">
              <ServiceCardMobile
                className="ml-6"
                color="#EF8689"
                title={t("services:serviceTitle1")}
                image={"/images/s1-min.png"}
                description={t("services:serviceDescription1")}
              />
              <ServiceCardMobile
                color="#85D6FB"
                title={t("services:serviceTitle2")}
                image={"/images/s2-min.png"}
                description={t("services:serviceDescription2")}
              />
              <ServiceCardMobile
                color="#FFEF89"
                title={t("services:serviceTitle3")}
                image={"/images/s3-min.png"}
                description={t("services:serviceDescription3")}
              />
              <ServiceCardMobile
                color="#EF8689"
                title={t("services:serviceTitle4")}
                image={"/images/s4-min.png"}
                description={t("services:serviceDescription4")}
                className="mr-6"
              />
            </div>
          </div>
        </section>
        <section id="fifth-section">
          <div className="w-full max-sm:mt-8">
            <PaddedContainer>
              <h3
                style={{
                  lineHeight: "3.2rem",
                }}
                className="max-sm:hidden font-extrabold text-[3rem] text-[#1B262C]"
                dangerouslySetInnerHTML={{
                  __html: t("fifth-primary"),
                }}
              ></h3>
              <h3
                style={{
                  lineHeight: "3.2rem",
                }}
                className="sm:hidden font-bold text-[2.3rem] text-[#1B262C]"
                dangerouslySetInnerHTML={{
                  __html: t("fifth-primary-mobile"),
                }}
              ></h3>
            </PaddedContainer>
            <PaddedContainer className="">
              <div className="flex overflow-x-scroll gap-[1.5rem] mt-[2rem] pb-[2.3rem]">
                {team.map((e) => {
                  const position = t(`common:${e.title}`);
                  return (
                    <EmployeeCard
                      key={e.name}
                      className={"max-md:min-w-[12rem] min-w-[13rem]"}
                      yearWord={t("fifth-year")}
                      image={e.image}
                      name={e.name}
                      position={position}
                      experience={e.experience}
                    />
                  );
                })}
              </div>
            </PaddedContainer>
          </div>
        </section>
        <section
          id="sixth-section "
          className="mt-[20rem] mb-[6rem] max-sm:hidden "
        >
          <div className="w-full relative">
            <PaddedContainer className={"absolute top-[-38%]"}>
              <div className="w-full">
                <div
                  className="py-[6rem] px-[5.25rem] rounded-bl-[5rem] rounded-tr-[5rem] w-full relative"
                  style={{
                    background:
                      "linear-gradient(45deg, #2BBCFE 0%, #85D6FB 100%)",
                  }}
                >
                  <div className="mb-[2.2rem]">
                    <h2 className="text-[3rem] text-white font-extrabold">
                      {t("sixth-primary")}
                    </h2>
                  </div>
                  <div className="flex max-lg:flex-col max-lg:gap-[3rem] justify-center lg:gap-[1rem]">
                    <InfoBox
                      number={1}
                      title={t("sixth-title1")}
                      description={t("sixth-description1")}
                    />
                    <InfoBox
                      number={2}
                      title={t("sixth-title2")}
                      description={t("sixth-description2")}
                    />
                    <InfoBox
                      number={3}
                      title={t("sixth-title3")}
                      description={t("sixth-description3")}
                      noLine={true}
                    />
                  </div>
                </div>
              </div>
            </PaddedContainer>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Mehmet+Said+%C4%B0ZG%C4%B0+Di%C5%9F+Klini%C4%9Fi/@40.9926593,28.8451086,17z/data=!3m1!4b1!4m6!3m5!1s0x14cabb959e47b669:0xb4d1b2ae2db02431!8m2!3d40.9926593!4d28.8476835!16s%2Fg%2F11hz2jp71b?entry=ttu"
            >
              <img
                src="/images/home_map.png"
                className="h-[40rem] w-full object-cover object-center"
                alt=""
              />
            </a>
          </div>
        </section>
      </div>
      <section className="sm:hidden mb-8">
        <PaddedContainer>
          <h2 className="text-[#1B262C] font-bold text-[2.5rem] mb-[1.40rem]">
            {t("blog")}
          </h2>
          <div className="flex overflow-x-scroll pb-[2rem]">
            <BlogCardMobile
              date={"12.12.2021"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
              }
              title={"Lorem ipsum dolor sit amet"}
            />
          </div>
        </PaddedContainer>
      </section>
    </main>
  );
}
