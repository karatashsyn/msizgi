/* eslint-disable @next/next/no-img-element */
import initTranslations from "@/app/i18n";
import BlogCardSecondary from "@/components/cards/BlogCardSecondary";
import EmployeeCard from "@/components/cards/EmployeeCard";
import PaddedContainer from "@/components/composite/PaddedContainer";
import { team } from "@/data";
import { getBlogs } from "@/services/blog";
import Link from "next/link";

export const revalidate = 3600;

export async function generateMetadata({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["info"]);
  return {
    title: `${t("info:service2-title").split("<")[0]} - Mehmet Said İzgi`,
    description:'Eksik dişleriniz için kalıcı bir çözüm: Dental implantlar ile doğal görünüm ve işlevselliği geri kazanın. Fiyat ve detaylar için bizimle iletişime geçin.',
    alternates:{
      canonical: "https://mehmetsaidizgi.com/hizmetler/implant",
    }
  };
}

export default async function Pedodonti({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["blog", "common", "info"]);

  const blogs = await getBlogs("");

  return (
    <main className="animate-fade-in-up mb-[7rem]">
      <div
        style={{
          aspectRatio: 19 / 6,
        }}
        className="img-container relative w-full "
      >
        <img
          src="/images/info/implant/2.webp"
          alt="Diş implantı"
          className="absolute inset-0 max-h-full w-full object-cover"
        />
        <div className="w-full h-full absolute left-0 top-0 bg-black opacity-30"></div>

        <div
          className="
          flex
          justify-center
          items-center
          absolute inset-0 w-full h-full"
        >
          <h1
            className="max-lg:text-[3rem] max-sm:text-[1.7rem] max-sm:leading-[1.7rem] max-md:leading-[2rem] max-md:text-[2rem] text-[3.5rem] leading-[3.5rem] text-white text-center font-bold"
            dangerouslySetInnerHTML={{ __html: t("info:service2-title") }}
          ></h1>
        </div>
      </div>
      <PaddedContainer className={"mt-[5rem]"}>
        <div className="flex max-sm:flex-col max-md:gap-[1rem] gap-[4.15rem]">
          <div className="max-sm:hidden sm:min-w-[14rem] md:min-w-[19rem]">
            <h6 className="text-[1.2rem] leading-[1.5rem] font-bold text-[#85D6FB]">
              {t("info:our-services")}
            </h6>
            <ul className="flex flex-col mt-[1rem] gap-[0.5rem]">
              <li>
                <Link
                  className="text-[#52575D] text-[0.85rem]"
                  href={"/hizmetler/pedodonti"}
                >
                  {t("info:service1")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#52575D] text-[0.85rem]"
                  href={"/hizmetler/implant"}
                >
                  {t("info:service2")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#52575D] text-[0.85rem]"
                  href={"/hizmetler/dis-beyazlatma"}
                >
                  {t("info:service3")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#52575D] text-[0.85rem]"
                  href={"/hizmetler/ortodonti"}
                >
                  {t("info:service4")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#52575D] text-[0.85rem]"
                  href={"/hizmetler/kanal-tedavisi"}
                >
                  {t("info:service5")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#52575D] text-[0.85rem]"
                  href={"/hizmetler/restoratif-dis-hekimligi"}
                >
                  {t("info:service6")}
                </Link>
              </li>
            </ul>
            <div className="mt-[3.75rem]">
              <h6 className="text-black text-[1.2rem] font-semibold">
                {t("common:blog-updates-mobile")}
              </h6>
              <div className="flex flex-col mt-[1rem] gap-[1rem]">
                {blogs.map((blog) => (
                  <BlogCardSecondary key={blog?.slug} blog={blog} />
                ))}
              </div>
            </div>
          </div>
          <div className="info-article text-[#52575D] leading-[1.3rem]">
            <article>
              <p>{t("info:service2-paragraph1")}</p>
              <div className="flex max-lg:flex-col gap-[1.25rem]">
                <img
                  alt="Diş implantı"
                  className="max-lg:max-w-full max-lg:w-full max-w-[19rem] max-sm:hidden max-h-[24rem] object-cover"
                  src="/images/info/implant/8.webp"
                />
                <p>{t("info:service2-paragraph2")}</p>
              </div>
              <p>{t("info:service2-paragraph3")}</p>
              <p>{t("info:service2-paragraph4")}</p>
              <p>{t("info:service2-paragraph5")}</p>
              <img
                alt="Diş implantı"
                className="w-full max-h-[24rem] object-cover"
                src="/images/info/implant/7.webp"
              />
              <div className=" flex mt-[1rem] max-w-full gap-[1rem]">
                {/* 5images from i22.webp to i26.webp */}
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    alt="Diş implantı"
                    className="overflow-hidden object-cover"
                    src={`/images/info/implant/${i + 1}.webp`}
                  />
                ))}
              </div>
            </article>
            <div className="mt-[4.5rem]">
              <h4 className="text-[2rem] text-[#1B262C] font-extrabold">
                {t("info:our-doctors") + "."}
              </h4>
              <div className="flex gap-[1.1rem] mt-[3rem]">
                {team.slice(0, 3).map((p) => {
                  const position = t("common:" + p.title);
                  return (
                    <EmployeeCard
                      key={p.image}
                      className={"max-w-[12.9rem] w-full min-w-0"}
                      yearWord={t("common:year")}
                      name={p.name}
                      experience={p.experience}
                      position={position}
                      image={p.image}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="sm:hidden sm:min-w-[19rem]">
            <h6 className="text-[1.2rem] leading-[1.5rem] font-bold text-[#85D6FB]">
              {t("info:our-services")}
            </h6>
            <ul className="flex flex-col mt-[1rem] gap-[0.5rem]">
              <li>
                <Link
                  className="text-[#52575D] text-[0.85rem]"
                  href={"/hizmetler/pedodonti"}
                >
                  {t("info:service1")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#52575D] text-[0.85rem]"
                  href={"/hizmetler/implant"}
                >
                  {t("info:service2")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#52575D] text-[0.85rem]"
                  href={"/hizmetler/dis-beyazlatma"}
                >
                  {t("info:service3")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#52575D] text-[0.85rem]"
                  href={"/hizmetler/ortodonti"}
                >
                  {t("info:service4")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#52575D] text-[0.85rem]"
                  href={"/hizmetler/kanal-tedavisi"}
                >
                  {t("info:service5")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#52575D] text-[0.85rem]"
                  href={"/hizmetler/restoratif-dis-hekimligi"}
                >
                  {t("info:service6")}
                </Link>
              </li>
            </ul>
            <div className="mt-[3.75rem]">
              <h6 className="text-black text-[1.2rem] font-semibold">
                {t("common:blog-updates-mobile")}
              </h6>
              <div className="flex flex-col mt-[1rem] gap-[1rem]">
                {blogs.map((blog) => (
                  <BlogCardSecondary key={blog?.slug} blog={blog} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </PaddedContainer>
    </main>
  );
}
