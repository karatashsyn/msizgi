import HeroSection from "@/views/home/HeroSection";
import SecondSection from "@/views/home/SecondSection";
import ThirdSection from "@/views/home/ThirdSection";
import FourthSection from "@/views/home/FourthSection";
import FifthSection from "@/views/home/FifthSection";
import SixthSection from "@/views/home/SixthSection";

export const metaData = {
  title: "MSI Diş Kliniği",
  description: "MSI Diş Kliniği",
};

export default function Home() {
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
        <HeroSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
      </div>
    </main>
  );
}
