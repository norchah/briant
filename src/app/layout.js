import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Бриант | ювелирная компания",
  description: "Бриант, ювелирная компания, главная",
  icons: {
    icon: [
      { url: "/fav/favicon.ico" },
      { url: "/fav/favicon-96x96.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/fav/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/fav/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
        ${inter.variable} antialiased`}
      >
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
