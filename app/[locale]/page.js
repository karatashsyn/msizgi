/* eslint-disable @next/next/no-img-element */
import initTranslations from "../i18n";
import AppointmentButton from "@/components/buttons/AppointmentButton";
import PaddedContainer from "@/components/composite/PaddedContainer";
import ServiceCard from "@/components/cards/ServiceCard";
import EmployeeCard from "@/components/cards/EmployeeCard";
import InfoBox from "@/components/InfoBox";

export const metaData = {
  title: "MSI Diş Kliniği",
  description: "MSI Diş Kliniği",
};

export default async function Home({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["home"]);
  return (
    <main className="animate-fade-in-up relative">
      <div
        className="absolute top-0 left-0 h-[100%] right-0 z-[]"
        style={{
          background:
            "linear-gradient(180deg, #85D6FB 0%, rgba(255,255,255,0) 150vh)",
          height: "100%",
        }}
      ></div>
      <div className="relative ">
        <PaddedContainer
          containerClassName={
            "bg-[rgba(248,248,248,0.21)] relative pb-[7.3rem]"
          }
        >
          <section id="hero-section">
            <img
              className="absolute top-[5rem] right-0 z-[2] h-[22rem]"
              src={"/svg/owl.svg"}
              alt="MSI Diş Kliniği Logo"
            />
            <svg
              className="absolute top-0 left-0 right-0 -translate-y-36 w-[100vw]"
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

            <div className="mt-[5rem] relative">
              <h1
                style={{
                  fontSize: "6.4rem",
                  fontWeight: "bold",
                  lineHeight: "1",
                  color: "white",
                }}
                dangerouslySetInnerHTML={{
                  __html: t("hero-title"),
                }}
              ></h1>
              <p
                className="mt-[2.7rem]"
                style={{
                  fontSize: "1.2rem",
                  width: "60%",
                  color: "white",
                }}
                dangerouslySetInnerHTML={{
                  __html: t("hero-text"),
                }}
              ></p>
              <AppointmentButton
                className={"!mt-[4.3rem] bg-[#F08F8C]"}
                text={t("hero-takeAppointment")}
              />
              <div className="mt-[3.9rem] flex  items-center gap-[1rem]">
                <div className="px-[1.8rem] pt-[2rem] lg:rounded-tl-[30px] h-[8.3rem] w-[14rem] lg:rounded-br-[30px] bg-white">
                  <h3 className="mb-[1.2rem] leading-[0] font-semibold text-[1.2rem]">
                    {t("hero-ourAddress")}
                  </h3>
                  <span className="text-[0.85rem] leading-[0] text-[#52575D]">
                    {t("hero-ourAddressInfo")}
                  </span>
                </div>
                <div className="px-[1.8rem] pt-[2rem] lg:rounded-tl-[30px] h-[8.3rem] w-[14rem] lg:rounded-br-[30px] bg-white">
                  <div className="mb-[1.2rem] ">
                    <h3 className="leading-[0] font-semibold text-[1.2rem]">
                      {t("hero-workingHours")}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-[0.85rem]   text-[#52575D]">
                      {t("hero-daysInfo")}
                    </span>

                    <span className="text-[0.85rem] leading-[0] text-[#52575D]">
                      {t("hero-hoursInfo")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </PaddedContainer>
        <PaddedContainer containerClassName={""}>
          <section id="second-section">
            <div className="w-full flex space-between items-center gap-[4.65rem] pt-[7.5rem] pb-[5.65rem]">
              <div className="mt-[5rem] basis-[32%]">
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
              <div className="flex items-center">
                <img
                  style={{
                    boxShadow: "0px 0px 20px 0px rgba(0, 40, 255, 0.15)",
                  }}
                  src="/images/second-teeth.png"
                  className="w-[27rem] h-[41.9rem]"
                  alt=""
                />
                <img
                  src="/images/second-instrument.png"
                  className="w-[13.5rem] max-h-[32rem]"
                  alt=""
                />
              </div>
            </div>
          </section>
        </PaddedContainer>
        <section
          id="third-section"
          className="w-screen mb-[3.45rem]"
          style={{
            backgroundImage: "url('/images/third-bg.jpg')",
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <PaddedContainer containerClassName={"!overflow-visible"}>
            <div className="w-full flex space-between items-center gap-[4.65rem] pt-[6rem]">
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
                      src="/images/dental-prosthesis.png"
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
        <PaddedContainer containerClassName={"pt-[7.9rem] pb-12"}>
          <section id="fourth-section">
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
                  title={t("fourth-service1")}
                  image={"/images/s1-min.png"}
                  description={t("fourth-description1")}
                />
              </div>
              <div className="flex gap-[2.5rem]">
                <div className="flex flex-col gap-[2.8rem]">
                  <ServiceCard
                    color="#FFEF89"
                    title={t("fourth-service2")}
                    image={"/images/s1-min.png"}
                    description={t("fourth-description2")}
                  />
                  <ServiceCard
                    color="#85D6FB"
                    title={t("fourth-service3")}
                    image={"/images/s1-min.png"}
                    description={t("fourth-description3")}
                  />
                </div>
                <div className="flex flex-col translate-y-4 gap-[2.8rem]">
                  <ServiceCard
                    color="#85D6FB"
                    title={t("fourth-service4")}
                    image={"/images/s1-min.png"}
                    description={t("fourth-description4")}
                  />
                  <ServiceCard
                    color="#FFEF89"
                    title={t("fourth-service5")}
                    image={"/images/s1-min.png"}
                    description={t("fourth-description5")}
                  />
                </div>
              </div>
            </div>
          </section>
        </PaddedContainer>
        <PaddedContainer>
          <section id="fifth-section">
            <div className="w-full">
              <div>
                <h3
                  style={{
                    lineHeight: "3.2rem",
                  }}
                  className="font-extrabold text-[3rem] text-[#1B262C]"
                  dangerouslySetInnerHTML={{
                    __html:
                      "Profesyonel <br style='line-height:0;'/> <span class='font-extrabold leading-0' style='color:#009944; font-size:inherit;font-weight: inherit; line-height:0;'>Ekibimiz</span>",
                  }}
                ></h3>
              </div>
              <div className="overflow-x-scroll flex gap-[1.5rem] mt-[2rem]">
                <EmployeeCard
                  image="/images/tmp1.png"
                  name="John Doe"
                  position="Ortodonti Uzmanı"
                  experience={10}
                />
                <EmployeeCard
                  image="/images/tm2.png"
                  name="John Doe"
                  position="Ortodonti Uzmanı"
                  experience={10}
                />
                <EmployeeCard
                  image="/images/tmp3.png"
                  name="John Doe"
                  position="Ortodonti Uzmanı"
                  experience={10}
                />
                <EmployeeCard
                  image="/images/tmp4.png"
                  name="John Doe"
                  position="Ortodonti Uzmanı"
                  experience={10}
                />
                <EmployeeCard
                  image="/images/tmp4.png"
                  name="John Doe"
                  position="Ortodonti Uzmanı"
                  experience={10}
                />
              </div>
            </div>
          </section>
        </PaddedContainer>
        <section id="sixth-section " className="mt-[20rem] mb-[6rem]">
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
                  <div className="flex justify-centr gap-[1rem]">
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
                src="/images/mapImage.png"
                className="h-[40rem] w-full object-cover object-center"
                alt=""
              />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
