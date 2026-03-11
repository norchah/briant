import {Inter, Geist_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";

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
      {url: "/fav/favicon.ico"},
      {url: "/fav/favicon-96x96.png", sizes: "16x16", type: "image/png"},
    ],
    apple: [
      {url: "/fav/apple-touch-icon.png", sizes: "180x180"},
    ],
  },
  manifest: "/fav/site.webmanifest",

};

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <head>
      {/* Яндекс.Метрика */}
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {
                  if(document.scripts[j].src === r){ return; }
                }
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=107267780','ym');

              ym(107267780, 'init', {
                ssr:true,
                webvisor:true,
                clickmap:true,
                ecommerce:"dataLayer",
                referrer: document.referrer,
                url: location.href,
                accurateTrackBounce:true,
                trackLinks:true
              });
            `,
        }}
      />
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/107267780"
            style={{position: 'absolute', left: '-9999px'}}
            alt=""
          />
        </div>
      </noscript>
    </head>
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
