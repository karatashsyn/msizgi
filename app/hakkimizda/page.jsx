/* eslint-disable @next/next/no-img-element */
import AppointmentButton from "@/components/buttons/AppointmentButton";
import BlogCard from "@/components/cards/BlogCard";
import BlogCardSecondary from "@/components/cards/BlogCardSecondary";
import PaddedContainer from "@/components/composite/PaddedContainer";
import PageGradient from "@/components/PageGradient";

const WorkingHoursInfo = ({ day, info }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <span className="text-[0.85rem] text-[#F2F7FF] font-normal"> {day}</span>
      <span className="text-[0.85rem] text-[#F2F7FF] font-bold">{info}</span>
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

export default function Contact() {
  return (
    <>
      <PaddedContainer>
        <h1 className="text-[6.4rem] font-semibold">Hakkımızda</h1>
        <p className="mt-[2.9rem] text-[1.2rem] mb-[8.7rem]">
          Keşfet, Özgürleş, Gülümse. Her gülümsemenin bir hikayesi olduğuna
          inanıyoruz. Uzm. Dt. Mehmet Said İzgi liderliğindeki ekibimizle, son
          teknoloji araçları kullanarak sizlere özel tedavi planları sunuyoruz.
          Sağlıklı ve etkileyici gülüşler yaratma yolculuğunuzda, profesyonel ve
          dinamik ekibimizle yanınızdayız.
        </p>
        <div className="flex justify-between gap-[3.4rem]">
          <img
            src="/images/about1.png"
            className="w-[24rem] h-[35rem]"
            alt="#"
          />
          <div>
            <div>
              <h2 className="text-[3rem] font-semibold">
                Tercih Değil,{" "}
                <span className="text-[3rem] font-extrabold">Zorunluluk.</span>
              </h2>
              <p className="mt-[0.85rem] ">
                Sağlıklı bir gülüş, yalnızca estetik bir tercih değil, genel
                sağlığımız için de kesin bir zorunluluktur. Diş sağlığı,
                vücudumuzun genel işleyişi üzerinde doğrudan etkiye sahiptir;
                dolayısıyla düzenli diş kontrolü, ihmal edilemeyecek bir sağlık
                uygulamasıdır. Diş ve diş eti hastalıkları, sadece ağız içindeki
                problemlerle sınırlı kalmayıp, kalp hastalıkları, diyabet ve
                solunum yolu hastalıkları gibi ciddi sağlık sorunlarına yol
                açabilir. Bu sebeple, diş sağlığını korumak ve potansiyel
                problemleri erkenden tespit etmek, genel sağlığımızı korumanın
                temel bir parçasıdır.
              </p>
            </div>
            <div className="mt-[3.55rem] ">
              <h3 className="font-bold text-[1.6rem]">
                Sağlıklı Gülüşler, Sağlıklı Yarınlar
              </h3>
              <p className="mt-[1.95rem] text-[1rem]">
                Diş sağlığınız, genel sağlığınızın aynasıdır. Düzenli diş
                kontrolleri ve ağız bakımı, sadece ağrı ve rahatsızlıkları
                önlemekle kalmaz, aynı zamanda daha büyük sağlık sorunlarının
                önüne geçer. Bu yüzden, diş sağlığınıza yatırım yapmak,
                geleceğinize yapılan bir yatırımdır. Her ziyaretiniz, diş
                hekiminizin erken teşhis koymasına ve tedavi etmesine olanak
                tanır. Bu, uzun vadede zaman, para ve sağlık maliyetlerinden
                tasarruf anlamına gelir. Ayrıca, düzenli ağız bakımı ve
                profesyonel temizlikler, diş eti hastalıkları gibi yaygın
                sorunların önlenmesine yardımcı olur.
              </p>
            </div>
          </div>
        </div>
      </PaddedContainer>
      <div className="relative h-[45rem] w-full flex mt-[5.3rem]">
        <img
          src="/images/about2.png"
          className="absolute inset-0 h-full"
          alt=""
        />
        <div className="mt-[4.65rem]">
          <div className="relative z-[10] w-full px-[17.9rem]">
            <h3 className="text-[rgb(255,242,242)] text-[3rem] leading-none font-extrabold">
              Gülüşünüz <br />
              <span className="text-[#85D6FB] text-[3rem] leading-none font-extrabold">
                bizim için önemli.
              </span>
            </h3>
            <div className="mt-[2.95rem] text-[1.2rem] text-white ">
              Gülüşünüz, sizin mutluluğunuzun ve memnuniyetinizin en güzel
              ifadesidir. Bu yüzden biz, her bir müşterimizin gülümsemesini
              parlak ve sağlıklı tutmak için çaba gösteriyoruz. Siz
              güldüğünüzde, biz de mutlu oluyoruz. Bu nedenle, sizlere en iyi
              hizmeti sunmak ve gülüşünüzü daha da güzelleştirmek bizim için
              birincil önceliktir.
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full px-[17.9rem] justify-end items-end translate-y-[-16.75rem]  mb-[-16.75rem]">
        <img
          src="/images/about3.png"
          className="w-[19rem] h-[20rem] translate-x-[3.9rem]"
          alt=""
        />
        <div className="max-w-[29rem] h-[30rem] px-[5.7rem] py-[3rem] bg-[#85D6FB]">
          <h3 className="text-[2rem] font-extrabold text-white text-center">
            Çalışma Saatleri
          </h3>
          <div className="mb-[1.5rem]">
            <div className="mt-[0.5rem] text-center leading-[1.3rem] text-white">
              <span className="text-[0.85rem]">
                Gülümsemenizi kusursuz hale getirmek için yanınızdayız.
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col gap-[0.75rem]">
            <WorkingHoursInfo day="Pazar" info="Kapalı" />
            <WorkingHoursInfo day="Pazartesi" info="09:00 - 18:00" />
            <WorkingHoursInfo day="Salı" info="09:00 - 18:00" />
            <WorkingHoursInfo day="Çarşamba" info="09:00 - 18:00" />
            <WorkingHoursInfo day="Perşembe" info="09:00 - 18:00" />
            <WorkingHoursInfo day="Cuma" info="09:00 - 18:00" />
            <WorkingHoursInfo day="Cumartesi" info="09:00 - 18:00" />
          </div>
        </div>
      </div>
      <PaddedContainer className={"mt-[2.35rem]"}>
        <section>
          <h2 className="text-[#1B262C] font-bold text-[4.8rem]">Kliniğimiz</h2>
          <div className="mt-[1.75rem] flex justify-between gap-[2.05rem] mb-[3.15rem]">
            <div className="flex flex-col justify-between">
              <span className="text-[#52575D] w-full ">
                Modern ve huzurlu ortamımızda, en yüksek standartlarda diş
                sağlığı hizmetlerini keşfedin. Her detayı sizin konforunuz için
                tasarlandı.
              </span>
              <img
                className="mt-[0.85rem] min-w-[30rem] h-[20.8rem]"
                src="/images/about4.png"
                alt=""
              />
            </div>
            <img
              src="/images/about4.png"
              className="h-full basis-full"
              alt=""
            />
          </div>
          <div className="w-full h-[23.1rem] flex gap-[2.2rem]">
            <img
              src="/images/about4.png"
              className="basis-full h-full"
              alt=""
            />
            <img
              src="/images/about4.png"
              className="basis-full h-full"
              alt=""
            />
          </div>
        </section>
      </PaddedContainer>
      <div className="w-full max-h-[15.8rem] flex bg-red-500 !aspect-[192/31] mt-[6.65rem]">
        <DataInfo
          key={1}
          count="1500"
          info="Kusursuz Gülüş"
          image="/images/aboutt1.png"
          className={"min-w-[35%]"}
        />
        <DataInfo
          className={"min-w-[22.9%]"}
          key={2}
          count="1500"
          info="Kusursuz Gülüş"
          image="/images/aboutt2.png"
        />
        <DataInfo
          className={"basis-full"}
          key={3}
          count="1500"
          info="Kusursuz Gülüş"
          image="/images/aboutt3.png"
        />
      </div>
      <section>
        <PaddedContainer className={"md:pr-0  mt-[4.2rem] mb-[8.2rem]"}>
          <h2 className="text-[3.2rem] leading-[3.7rem] font-extrabold text-[#1B262C] mb-[2rem]">
            Blog ve Son <br /> Gelişmeler.
          </h2>
          <div className="flex justify-between gap-[1rem]">
            <div className="flex gap-[1rem] basis-[50%]">
              <BlogCard
                title="Pedodonti Nedir?"
                date="15 Nisan 2024"
                description="Pedodonti, çocuk diş hekimliği olarak da bilinir. Çocukların
              diş ve ağız sağlığı sorunlarına odaklanan bir diş hekimliği
              dalıdır."
              />
              <BlogCard
                title="Pedodonti Nedir?"
                date="15 Nisan 2024"
                description="Pedodonti, çocuk diş hekimliği olarak da bilinir. Çocukların
              diş ve ağız sağlığı sorunlarına odaklanan bir diş hekimliği
              dalıdır."
              />
            </div>
            <div className="grid grid-cols-2 gap-[1rem] basis-[50%]">
              <BlogCardSecondary
                date="15 Nisan 2024"
                title="Kanal Tedavisinde dikkat edilmesi gerekenler nedir?"
              />
              <BlogCardSecondary
                date="15 Nisan 2024"
                title="Kanal Tedavisinde dikkat edilmesi gerekenler nedir?"
              />
              <BlogCardSecondary
                date="15 Nisan 2024"
                title="Ortodonti Nedir?"
              />
              <BlogCardSecondary
                date="15 Nisan 2024"
                title="Ortodonti Nedir?"
              />
              <BlogCardSecondary
                date="15 Nisan 2024"
                title="Kanal Tedavisinde dikkat edilmesi gerekenler nedir?"
              />
              <BlogCardSecondary
                date="15 Nisan 2024"
                title="Kanal Tedavisinde dikkat edilmesi gerekenler nedir?"
              />
            </div>
          </div>
        </PaddedContainer>
      </section>
    </>
  );
}
