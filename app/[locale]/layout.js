import "./../globals.css";
import Navbar from "@/components/composite/Navbar";
import Footer from "@/components/composite/Footer";
import initTranslations from "../i18n";
import TranslationProvider from "@/components/TranslationProvider";

export const metadata = {
  title: "MSI Diş Kliniği",
  description: "Selamlar",
  twitter: {
    card: "summary_large_image",
  },
};

export default async function RootLayout({ children, params: { locale } }) {
  const { t, resources } = await initTranslations(locale, ["common"]);
  return (
    <html lang="tr">
      <body>
        <header>
          <TranslationProvider
            locale={locale}
            namespaces={["common"]}
            resources={resources}
          >
            <Navbar />
          </TranslationProvider>
        </header>
        <div className="!min-h-[100vh]">{children}</div>
        <TranslationProvider
          namespaces={["common"]}
          locale={locale}
          resources={resources}
        >
          <Footer />
        </TranslationProvider>
      </body>
    </html>
  );
}
