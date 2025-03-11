import {
  whitelabelTemplates,
  whitelabelCases,
  whitelabelFeatures,
  whitelabelPricing,
  whitelabelFAQ,
  whitelabelManifesto,
  whitelabelGrowthKit,
} from "@/app/data/whitelabel";

import { Hero } from "@/app/components/whitelabel/Hero";
import { Templates } from "@/app/components/whitelabel/Templates";
import { Cases } from "@/app/components/whitelabel/Cases";
import { Features } from "@/app/components/whitelabel/Features";
import { Pricing } from "@/app/components/whitelabel/Pricing";
import { FAQ } from "@/app/components/whitelabel/FAQ";
import { GrowthKit } from "@/app/components/whitelabel/GrowthKit";
import { Manifesto } from "@/app/components/whitelabel/Manifesto";
import { Contact } from "@/app/components/whitelabel/Contact";

export const metadata = {
  title: "Whitelabel - Applications Mobiles en 15 Jours | Th1b4ut",
  description: "Lancez votre application mobile en marque blanche en 15 jours. Flutter, React Native, IA embarquée. Code source propre et performant.",
  openGraph: {
    title: "Whitelabel - Applications Mobiles en 15 Jours | Th1b4ut",
    description: "Lancez votre application mobile en marque blanche en 15 jours. Flutter, React Native, IA embarquée. Code source propre et performant.",
    url: "https://th1b4ut.fr/services/whitelabel",
    siteName: "Th1b4ut",
    images: [
      {
        url: "https://th1b4ut.fr/og/whitelabel.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr-FR",
    type: "website",
  },
};

export default function WhitelabelPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-background">
      <main className="w-full">
        <Hero templates={whitelabelTemplates} />
        <Manifesto manifesto={whitelabelManifesto} />
        <Templates templates={whitelabelTemplates} />
        <Features features={whitelabelFeatures} />
        <Cases cases={whitelabelCases} />
        <Pricing pricing={whitelabelPricing} />
        <FAQ faq={whitelabelFAQ} />
        <GrowthKit growthKit={whitelabelGrowthKit} />
        <Contact />
      </main>
    </div>
  );
} 