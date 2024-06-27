import { Head, Html, Main, NextScript } from "next/document";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />

        <link rel="shortcut icon" href="favicon.svg" sizes="any" />
      </Head>
      <body
        className={`min-h-screen mx-auto max-w-7xl px-8 lg:px-16 font-body leading-[160%] bg-gray relative`}
      >
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
