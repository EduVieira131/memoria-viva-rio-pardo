import Head from "next/head";

import { HistoryCitySection } from "./components/sections/city-history";
import { DiscoverySection } from "./components/sections/discovery";
import { FaqSection } from "./components/sections/faq";
import { FeedbackSection } from "./components/sections/feedback";
import { HeroSection } from "./components/sections/hero";
import { PricingSection } from "./components/sections/pricing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Memória Viva Rio Pardo</title>
      </Head>

      <main>
        <HeroSection />
        <FeedbackSection />
        <DiscoverySection />
        <HistoryCitySection />
        <PricingSection />
        <FaqSection />
      </main>
    </>
  );
}
