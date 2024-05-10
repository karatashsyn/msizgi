import initTranslations from "@/app/i18n";
import AppointmentButton from "@/components/buttons/AppointmentButton";
import EmployeeCard from "@/components/cards/EmployeeCard";
import PaddedContainer from "@/components/composite/PaddedContainer";
import PageGradient from "@/components/PageGradient";

export default async function Contact({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["team", "common"]);
  return (
    <div className="animate-fade-in-up relative">
      <div className="relative ">
        <PageGradient
          rectangleColor="#F2F7FF"
          firstCircleColor="#85D6FB"
          secondCircleColor="#85D6FB"
        />
        <PaddedContainer>
          <div className="mt-[3rem] relative z-[10]">
            <h1
              style={{
                lineHeight: "1",
              }}
              className="font-semibold text-[6.4rem] text-[#1B262C]"
            >
              {t("team:team")}
            </h1>

            <p
              style={{
                lineHeight: "1",
              }}
              className="text-[1.2rem] mt-[2.4rem] text-[#52575D] font-semibold"
              dangerouslySetInnerHTML={{
                __html: t("team:mainParagraph"),
              }}
            ></p>
            <AppointmentButton
              text={t("common:button-takeAppointment")}
              className={"!bg-[#F08F8C] mt-[2.6rem] font-bold"}
            />
          </div>
          <section
            className="mt-[21.5rem] mb-[7.9rem] grid grid-cols-4"
            style={{
              rowGap: "5rem",
            }}
          >
            <EmployeeCard
              yearWord={t("common:year")}
              name="Dr. Cemil Kaya"
              experience={5}
              position="Diş Hekimi"
              image="/images/tmp1.png"
            />
            <EmployeeCard
              yearWord={t("common:year")}
              name="Dr. Cemil Kaya"
              experience={5}
              position="Diş Hekimi"
              image="/images/tmp1.png"
            />
            <EmployeeCard
              yearWord={t("common:year")}
              name="Dr. Cemil Kaya"
              experience={5}
              position="Diş Hekimi"
              image="/images/tmp1.png"
            />
            <EmployeeCard
              yearWord={t("common:year")}
              name="Dr. Cemil Kaya"
              experience={5}
              position="Diş Hekimi"
              image="/images/tmp1.png"
            />
            <EmployeeCard
              yearWord={t("common:year")}
              name="Dr. Cemil Kaya"
              experience={5}
              position="Diş Hekimi"
              image="/images/tmp1.png"
            />
            <EmployeeCard
              yearWord={t("common:year")}
              name="Dr. Cemil Kaya"
              experience={5}
              position="Diş Hekimi"
              image="/images/tmp1.png"
            />
            <EmployeeCard
              yearWord={t("common:year")}
              name="Dr. Cemil Kaya"
              experience={5}
              position="Diş Hekimi"
              image="/images/tmp1.png"
            />
            <EmployeeCard
              yearWord={t("common:year")}
              name="Dr. Cemil Kaya"
              experience={5}
              position="Diş Hekimi"
              image="/images/tmp1.png"
            />
          </section>
        </PaddedContainer>
      </div>
    </div>
  );
}
