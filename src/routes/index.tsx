import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";

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
    </main>
  );
}
