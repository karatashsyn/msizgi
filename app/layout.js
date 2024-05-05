import "./globals.css";
import Navbar from "@/components/composite/Navbar";
import Footer from "@/components/composite/Footer";

export const metadata = {
  title: "MSI Diş Kliniği",
  description: "Selamlar",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <header>
          <Navbar transparent={true} />
        </header>
        <div className="!min-h-[100vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
