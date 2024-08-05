import initTranslations from "@/app/i18n";
import AppointmentButton from "@/components/buttons/AppointmentButton";
import EmployeeCard from "@/components/cards/EmployeeCard";
import PaddedContainer from "@/components/composite/PaddedContainer";
import PageGradient from "@/components/PageGradient";
import { team } from "@/data";

export async function generateMetadata({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["team"]);
  return {
    title: `${t("team:team")} - Mehmet Said İzgi`,
    alternates:{
      canonical: "https://mehmetsaidizgi.com/ekibimiz",
    }
  };
}

export default async function Contact({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["team", "common"]);
  return (
    <main className="w-full animate-fade-in-up relative">
      <div className="relative ">
        <PageGradient
          className={"max-sm:opacity-25"}
          rectangleColor="#F2F7FF"
          firstCircleColor="#85D6FB"
          secondCircleColor="#85D6FB"
        />
        <PaddedContainer>
          <div className="max-sm:mt-[4rem] mt-[3rem] relative z-[10]">
            <h1
              style={{
                lineHeight: "1",
              }}
              className="font-semibold max-sm:text-[3rem] text-[6.4rem] text-[#1B262C]"
            >
              {t("team:team")}
            </h1>

            <p
              style={{
                lineHeight: "1",
              }}
              className="text-[1.2rem] max-sm:mt-[1.2rem] mt-[2.4rem] text-[#52575D] font-semibold"
              dangerouslySetInnerHTML={{
                __html: t("team:mainParagraph"),
              }}
            ></p>
            <AppointmentButton
              text={t("common:button-takeAppointment")}
              className={"!bg-[#F08F8C] mt-[2.6rem] font-bold"}
            />
          </div>
          <section className="mt-[12.5rem] mb-[7.9rem] max-sm:mt-[3rem] grid max-sm:grid-cols-2 grid-cols-4 max-lg:grid-cols-3 max-sm:gap-[1rem] gap-[2rem]">
            {team.map((p) => {
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
          </section>
        </PaddedContainer>
      </div>
    </main>
  );
}
