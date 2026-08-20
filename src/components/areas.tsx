import { ArrowRight, Users, Home, MessagesSquare, Heart, User, Sun } from "lucide-react";
import { BotanicalMark } from "@/components/botanical-mark";
import { useReveal, revealStyle } from "@/hooks/use-reveal";

const cards = [
  {
    Icon: Users,
    title: "Relacionamentos",
    text: "Relações amorosas, interpessoais e padrões que se repetem.",
  },
  {
    Icon: Home,
    title: "Família",
    text: "Dinâmicas familiares, conflitos e vínculos importantes.",
  },
  {
    Icon: MessagesSquare,
    title: "Comunicação",
    text: "Construção de diálogos mais conscientes e compreensão nas relações.",
  },
  {
    Icon: Heart,
    title: "Inteligência Emocional",
    text: "Reconhecimento, compreensão e expressão das emoções.",
  },
  {
    Icon: User,
    title: "Autoconhecimento",
    text: "Compreensão de si, padrões, escolhas e experiências.",
  },
  {
    Icon: Sun,
    title: "Desenvolvimento Pessoal",
    text: "Processos de reflexão, consciência e desenvolvimento contínuo.",
  },
];

export function Areas() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section
      id="areas"
      ref={ref}
      className="px-5 pt-9 pb-12 sm:px-8 lg:pt-10 lg:pb-16"
      style={{ backgroundColor: "color-mix(in oklab, var(--color-ivory) 62%, var(--color-offwhite))" }}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center" style={revealStyle(shown)}>
          <BotanicalMark />
          <h2 className="mt-5 font-serif text-[1.85rem] font-light uppercase tracking-[0.02em] text-graphite sm:text-[2.2rem] lg:text-[2.45rem]">
            Áreas de atuação
          </h2>
          <div className="mx-auto mt-5 h-px w-14 bg-gold" aria-hidden="true" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-[16px]">
          {cards.map(({ Icon, title, text }, i) => (
            <article
              key={title}
              style={revealStyle(shown, 200 + i * 90)}
              className="group grid h-full grid-rows-[auto_auto_auto_1fr_auto] rounded-xl border border-fendi/35 bg-offwhite p-5 shadow-[0_1px_2px_rgba(47,49,50,0.03)] transition-all duration-300 hover:-translate-y-[2px] hover:border-fendi/60 hover:shadow-[0_14px_30px_-18px_rgba(47,49,50,0.25)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory/70">
                <Icon
                  className="h-5 w-5 text-taupe transition-colors duration-300 group-hover:text-gold"
                  strokeWidth={1.15}
                />
              </div>

              <h3 className="mt-4 min-h-[3.2rem] font-serif text-[1.35rem] font-light leading-[1.15] text-graphite">
                {title}
              </h3>

              <div className="mt-1 h-px w-9 bg-gold/70" aria-hidden="true" />

              <p className="mt-4 text-[0.9rem] leading-[1.65] text-taupe">{text}</p>

              <a
                href="#atendimento"
                className="mt-5 inline-flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-gold transition-colors duration-300 hover:text-wood focus-visible:outline-gold"
              >
                Saiba mais
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
