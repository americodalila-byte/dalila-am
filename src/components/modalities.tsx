import { ArrowRight, Armchair, Monitor, MapPin } from "lucide-react";
import { useReveal, revealStyle } from "@/hooks/use-reveal";

const cards = [
  {
    Icon: Armchair,
    title: "Atendimento Presencial",
    text: "Um espaço acolhedor e reservado para o seu bem-estar.",
    link: true,
  },
  {
    Icon: Monitor,
    title: "Atendimento On-line",
    text: "Praticidade, sigilo e cuidado onde você estiver.",
    link: true,
  },
  {
    Icon: MapPin,
    title: "Localização",
    highlight: "Belo Horizonte • MG",
    text: "Fácil acesso e ambiente pensado para o seu conforto.",
    link: false,
  },
];

export function Modalities() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section
      id="modalidades"
      ref={ref}
      className="px-5 py-16 sm:px-8 lg:py-20"
      style={{ backgroundColor: "color-mix(in oklab, var(--color-ivory) 55%, var(--color-offwhite))" }}
    >
      <div className="mx-auto max-w-[1440px]">
        <div style={revealStyle(shown)}>
          <p className="text-[0.75rem] tracking-[0.14em] text-gold">05</p>
          <h2 className="mt-4 font-serif text-[2.1rem] font-light uppercase tracking-[0.05em] text-graphite sm:text-[2.6rem] lg:text-[3rem]">
            Modalidades de atendimento
          </h2>
          <div className="mt-6 h-px w-14 bg-gold" aria-hidden="true" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ Icon, title, text, highlight, link }, i) => (
            <article
              key={title}
              style={revealStyle(shown, 200 + i * 110)}
              className="group flex items-start gap-6 rounded-xl border border-fendi/35 bg-offwhite p-8 transition-all duration-300 hover:-translate-y-[3px] hover:border-fendi/60 hover:shadow-[0_14px_30px_-20px_rgba(47,49,50,0.25)]"
            >
              <span className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-full bg-ivory/60">
                <Icon className="h-8 w-8 text-sage" strokeWidth={1} />
              </span>

              <div className="border-l border-fendi/30 pl-6">
                <h3 className="font-serif text-[1.5rem] font-light leading-[1.2] text-graphite">
                  {title}
                </h3>
                {highlight && (
                  <p className="mt-3 text-[0.9rem] font-medium text-gold">{highlight}</p>
                )}
                <p className="mt-3 max-w-[16rem] text-[0.9375rem] leading-[1.7] text-taupe">
                  {text}
                </p>
                {link && (
                  <a
                    href="#atendimento"
                    className="mt-6 inline-flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-gold transition-colors duration-300 hover:text-wood"
                  >
                    Saiba mais
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
