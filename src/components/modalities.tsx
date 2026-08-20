import { ArrowRight, Armchair, Monitor, MapPin } from "lucide-react";
import { useReveal, revealStyle } from "@/hooks/use-reveal";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=R.+Bernardo+Cupertino,+704+-+Martins,+Uberl%C3%A2ndia+-+MG,+38400-444";

const cards = [
  {
    Icon: Armchair,
    title: "Atendimento Presencial",
    text: "Um espaço acolhedor e reservado para o seu bem-estar.",
    href: "#agendar",
    external: false,
  },
  {
    Icon: Monitor,
    title: "Atendimento On-line",
    text: "Praticidade, sigilo e cuidado onde você estiver.",
    href: "#agendar",
    external: false,
  },
  {
    Icon: MapPin,
    title: "Localização",
    highlight: "Uberlândia • MG",
    text: "R. Bernardo Cupertino, 704 Martins",
    href: MAPS_URL,
    external: true,
  },
];

export function Modalities() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section
      id="modalidades"
      ref={ref}
      className="px-5 py-12 sm:px-8 lg:py-16"
      style={{ backgroundColor: "color-mix(in oklab, var(--color-ivory) 55%, var(--color-offwhite))" }}
    >
      <div className="mx-auto max-w-[1440px]">
        <div style={revealStyle(shown)}>
          <h2 className="font-serif text-[1.95rem] font-light uppercase tracking-[0.05em] text-graphite sm:text-[2.4rem] lg:text-[2.7rem]">
            Modalidades de atendimento
          </h2>
          <div className="mt-5 h-px w-14 bg-gold" aria-hidden="true" />
        </div>

        <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ Icon, title, text, highlight, href, external }, i) => (
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
                <p
                  className={`text-[0.85rem] font-medium text-gold ${highlight ? "mt-2" : "sr-only"}`}
                >
                  {highlight ?? ""}
                </p>
                <p className="mt-2 max-w-[16rem] text-[0.9rem] leading-[1.7] text-taupe">{text}</p>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="mt-5 inline-flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-gold transition-colors duration-300 hover:text-wood focus-visible:outline-gold"
                >
                  Saiba mais
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
