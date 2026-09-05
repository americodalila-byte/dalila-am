import { ArrowRight, User, HeartHandshake, Home, MapPin } from "lucide-react";
import { useReveal, revealStyle } from "@/hooks/use-reveal";
import { whatsappLink, WA_MESSAGES } from "@/lib/contact";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=R.+Bernardo+Cupertino,+704+-+Martins,+Uberl%C3%A2ndia+-+MG,+38400-444";

const cards = [
  {
    Icon: User,
    waMessage: WA_MESSAGES.individual,
    title: "Atendimento Individual",
    highlight: "Um olhar para você sem desconsiderar a sua história.",
    text: "Um espaço para compreender como experiências, vínculos e contextos atravessam quem você é e a forma como vive hoje.",
  },
  {
    Icon: HeartHandshake,
    waMessage: WA_MESSAGES.casal,
    title: "Terapia de Casal",
    highlight: "Um olhar para a relação, não para encontrar culpados.",
    text: "Um espaço para compreender a dinâmica construída a dois e favorecer novas formas de diálogo, conexão e convivência.",
  },
  {
    Icon: Home,
    waMessage: WA_MESSAGES.familiar,
    title: "Terapia Familiar",
    highlight: "Quando o que acontece com um também atravessa a família.",
    text: "Um espaço para olhar para as relações familiares, reorganizar dinâmicas e favorecer movimentos mais saudáveis entre seus membros.",
  },
];

export function Modalities() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section
      id="atendimento"
      ref={ref}
      className="px-5 py-12 sm:px-8 lg:py-16"
      style={{ backgroundColor: "color-mix(in oklab, var(--color-ivory) 55%, var(--color-offwhite))" }}
    >
      <div className="mx-auto max-w-[1440px]">
        <div style={revealStyle(shown)}>
          <h2 className="balanced-title font-serif text-[1.7rem] font-light uppercase leading-[1.2] tracking-normal text-graphite sm:text-[2rem] lg:text-[2.35rem]">
            Como posso te acompanhar
          </h2>
          <div className="mt-5 h-px w-14 bg-gold" aria-hidden="true" />
        </div>

        <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ Icon, title, text, highlight, waMessage }, i) => (
            <article
              key={title}
              style={revealStyle(shown, 200 + i * 110)}
              className="group flex h-full items-start gap-5 rounded-xl border border-fendi/35 bg-offwhite p-6 transition-all duration-300 hover:-translate-y-[2px] hover:border-fendi/60 hover:shadow-[0_14px_30px_-20px_rgba(47,49,50,0.25)]"
            >
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-ivory/60">
                <Icon className="h-7 w-7 text-taupe" strokeWidth={1.05} />
              </span>

              <div className="grid h-full grid-rows-[auto_auto_1fr_auto] border-l border-fendi/30 pl-5">
                <h3 className="font-serif text-[1.42rem] font-light leading-[1.2] text-graphite">
                  {title}
                </h3>
                <p className="mt-2 text-[0.85rem] font-medium leading-[1.5] text-gold">
                  {highlight}
                </p>
                <p className="mt-3 text-[0.9rem] leading-[1.7] text-taupe">{text}</p>
                <a
                  href={whatsappLink(waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-gold transition-colors duration-300 hover:text-wood focus-visible:outline-gold"
                >
                  Agendar sua sessão
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p
          className="mt-8 flex flex-wrap items-center gap-2 text-[0.95rem] leading-[1.7] text-taupe"
          style={revealStyle(shown, 560)}
        >
          <MapPin className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.2} />
          Atendimento presencial em Uberlândia/MG e on-line.
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.9rem] text-gold underline-offset-4 transition-colors duration-300 hover:text-wood hover:underline"
          >
            R. Bernardo Cupertino, 704 — Martins
          </a>
        </p>
      </div>
    </section>
  );
}
