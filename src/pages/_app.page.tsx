import "@/styles/globals.css";

import type { AppProps } from "next/app";

import Layout from "./_layout.page";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
