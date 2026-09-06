import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { Moments } from "@/components/moments";
import { Areas } from "@/components/areas";
import { About } from "@/components/about";
import { SystemicTherapy } from "@/components/systemic-therapy";
import { HowItWorks } from "@/components/how-it-works";
import { Modalities } from "@/components/modalities";
import { Commitment } from "@/components/commitment";
import { Reflections } from "@/components/reflections";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { SiteFooter } from "@/components/site-footer";

const title = "Dalila Américo | Psicóloga CRP 04/48200";
const description =
  "Psicoterapia com acolhimento e escuta para relações mais saudáveis. Agende sua consulta com a psicóloga Dalila Américo.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-offwhite font-sans antialiased">
      <SiteHeader />
      <Hero />
      <Manifesto />
      <Moments />
      <Areas />
      <About />
      <SystemicTherapy />
      <HowItWorks />
      <Modalities />
      <Commitment />
      <Reflections />
      <Faq />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}
