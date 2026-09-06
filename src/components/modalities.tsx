import { ArrowRight, User, HeartHandshake, Home, MapPin } from "lucide-react";
import { useReveal, revealStyle } from "@/hooks/use-reveal";
import { whatsappLink, WA_MESSAGES } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

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
      className="px-4 py-11 sm:px-8 sm:py-12 lg:py-16"
      style={{ backgroundColor: "color-mix(in oklab, var(--color-ivory) 55%, var(--color-offwhite))" }}
    >
      <div className="mx-auto max-w-[1440px]">
        <div style={revealStyle(shown)}>
          <h2 className="balanced-title font-serif text-[1.52rem] font-light uppercase leading-[1.22] tracking-normal text-graphite sm:text-[2rem] lg:text-[2.35rem]">
            Como posso te acompanhar
          </h2>
          <div className="mt-4 h-px w-12 bg-gold sm:mt-5 sm:w-14" aria-hidden="true" />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-9 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ Icon, title, text, highlight, waMessage }, i) => (
            <article
              key={title}
              style={revealStyle(shown, 200 + i * 110)}
              className="group flex h-full flex-col items-start gap-4 rounded-xl border border-fendi/35 bg-offwhite p-5 transition-all duration-300 hover:-translate-y-[2px] hover:border-fendi/60 hover:shadow-[0_14px_30px_-20px_rgba(47,49,50,0.25)] sm:flex-row sm:gap-5 sm:p-6"
            >
              <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-ivory/60 sm:h-16 sm:w-16">
                <Icon className="h-6 w-6 text-taupe sm:h-7 sm:w-7" strokeWidth={1.05} />
              </span>

              <div className="grid h-full w-full grid-rows-[auto_auto_1fr_auto] border-t border-fendi/30 pt-4 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
                <h3 className="font-serif text-[1.32rem] font-light leading-[1.2] text-graphite sm:text-[1.42rem]">
                  {title}
                </h3>
                <p className="mt-2 text-[0.85rem] font-medium leading-[1.5] text-gold">
                  {highlight}
                </p>
                <p className="mt-3 text-[0.9rem] leading-[1.7] text-taupe">{text}</p>
                <a
                  href={whatsappLink(waMessage)}
                  onClick={() => trackEvent("click_agendar_sessao", { location: "modalidades" })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center gap-2 self-start text-[0.68rem] font-medium uppercase tracking-[0.12em] text-gold transition-colors duration-300 hover:text-wood focus-visible:outline-gold sm:min-h-0 sm:tracking-[0.16em]"
                >
                  Agendar sua sessão
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p
          className="mt-7 grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-3 text-[0.9rem] leading-[1.7] text-taupe sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-2 sm:text-[0.95rem]"
          style={revealStyle(shown, 560)}
        >
          <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold sm:mt-0" strokeWidth={1.2} />
          <span>Atendimento presencial em Uberlândia/MG e on-line.</span>
          <a
            href={MAPS_URL}
            onClick={() => trackEvent("click_localizacao", { location: "modalidades" })}
            target="_blank"
            rel="noopener noreferrer"
            className="col-start-2 mt-1 inline-flex min-h-11 items-center text-[0.88rem] text-gold underline-offset-4 transition-colors duration-300 hover:text-wood hover:underline sm:col-start-auto sm:mt-0 sm:min-h-0 sm:text-[0.9rem]"
          >
            R. Bernardo Cupertino, 704 — Martins
          </a>
        </p>
      </div>
    </section>
  );
}
