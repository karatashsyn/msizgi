import Navbar from "@/components/composite/Navbar";
import Footer from "@/components/composite/Footer";
import initTranslations from "../i18n";
import TranslationProvider from "@/components/TranslationProvider";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./../globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "MSI Diş Kliniği",
  metadataBase: new URL("https://mehmetsaidizgi.com"),
  openGraph: {
    siteName: "MSI - Diş Kliniği",
    locale: "tr_TR",
    type: "website",
    title: "MSI - Diş Kliniği",
    description: "Diş Tedavisi ve Sağlık",
    card: "summary_large_image",
    url: "https://mehmetsaidizgi.com",
    images: [
      {
        url: "https://mehmetsaidizgi.com/opengraph-image.png",
        width: 800,
        height: 600,
        alt: "MSI - Diş Kliniği",
      },
    ],
  },
};

export const ArticleFont = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default async function RootLayout({ children, params: { locale } }) {
  const { t, resources } = await initTranslations(locale, ["common"]);

  return (
    <html lang="tr">
      <body>
        <Script type="text/javascript" id="show-banner">
          {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6648c1889a809f19fb329962/1hu63800h';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`}
        </Script>
        <header>
          <TranslationProvider
            locale={locale}
            namespaces={["common"]}
            resources={resources}
          >
            <Navbar />
          </TranslationProvider>
        </header>
        <div className="!min-h-[100vh]">{<>{children}</>}</div>
        <TranslationProvider
          namespaces={["common"]}
          locale={locale}
          resources={resources}
        >
          <Footer />
        </TranslationProvider>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5NHC71DKFQ"
        ></Script>
        <Script id="gAnalyticsScripts" strategy="afterInteractive">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5NHC71DKFQ');
  `}
        </Script>
        <Analytics />
      </body>
    </html>
  );
}
