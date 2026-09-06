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
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/contact";

const SITE_URL = "https://dalila-am.lovable.app";
const OG_IMAGE = `${SITE_URL}/og-dalila-americo.jpg`;

const title =
  "Dalila Américo | Psicóloga e Terapeuta Familiar Sistêmica em Uberlândia";
const description =
  "Psicoterapia individual, de casal e familiar com Dalila Américo, psicóloga e terapeuta familiar sistêmica em Uberlândia/MG. Atendimento presencial e on-line.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: "Dalila Américo",
  description,
  url: SITE_URL,
  image: OG_IMAGE,
  areaServed: "Uberlândia, MG, Brasil",
  availableService: [
    { "@type": "Service", name: "Psicoterapia individual" },
    { "@type": "Service", name: "Terapia de casal" },
    { "@type": "Service", name: "Terapia familiar sistêmica" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Bernardo Cupertino, 704 — Martins",
    addressLocality: "Uberlândia",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  sameAs: [INSTAGRAM_URL, WHATSAPP_URL].filter(Boolean),
  knowsLanguage: "pt-BR",
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Registro profissional",
    identifier: "CRP 04/48200",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
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
