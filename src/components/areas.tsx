import { ArrowRight, Users, Home, MessagesSquare, Heart, User, Sun } from "lucide-react";
import { BotanicalMark } from "@/components/botanical-mark";
import { useReveal, revealStyle } from "@/hooks/use-reveal";

const cards = [
  {
    n: "01",
    Icon: Users,
    title: "Relacionamentos",
    text: "Relações amorosas, interpessoais e padrões que se repetem.",
  },
  {
    n: "02",
    Icon: Home,
    title: "Família",
    text: "Dinâmicas familiares, conflitos e vínculos importantes.",
  },
  {
    n: "03",
    Icon: MessagesSquare,
    title: "Comunicação",
    text: "Construção de diálogos mais conscientes e compreensão nas relações.",
  },
  {
    n: "04",
    Icon: Heart,
    title: "Inteligência Emocional",
    text: "Reconhecimento, compreensão e expressão das emoções.",
  },
  {
    n: "05",
    Icon: User,
    title: "Autoconhecimento",
    text: "Compreensão de si, padrões, escolhas e experiências.",
  },
  {
    n: "06",
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
      className="px-5 py-24 sm:px-8 lg:py-28"
      style={{ backgroundColor: "color-mix(in oklab, var(--color-ivory) 62%, var(--color-offwhite))" }}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center" style={revealStyle(shown)}>
          <BotanicalMark />
          <h2 className="mt-6 font-serif text-[2rem] font-light uppercase tracking-[0.02em] text-graphite sm:text-[2.4rem] lg:text-[2.7rem]">
            Áreas de atuação
          </h2>
          <div className="mx-auto mt-6 h-px w-14 bg-gold" aria-hidden="true" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6 lg:gap-[18px]">
          {cards.map(({ n, Icon, title, text }, i) => (
            <article
              key={n}
              style={revealStyle(shown, 200 + i * 90)}
              className="group flex h-full flex-col rounded-xl border border-fendi/35 bg-offwhite p-7 shadow-[0_1px_2px_rgba(47,49,50,0.03)] transition-all duration-300 hover:-translate-y-[3px] hover:border-fendi/60 hover:shadow-[0_14px_30px_-18px_rgba(47,49,50,0.25)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ivory/70">
                <Icon
                  className="h-5 w-5 text-taupe transition-colors duration-300 group-hover:text-gold"
                  strokeWidth={1.1}
                />
              </div>

              <p className="mt-8 text-[0.75rem] tracking-[0.14em] text-gold">{n}</p>

              <h3 className="mt-3 font-serif text-[1.45rem] font-light leading-[1.15] text-graphite">
                {title}
              </h3>

              <div className="mt-4 h-px w-9 bg-gold/70" aria-hidden="true" />

              <p className="mt-4 text-[0.9375rem] leading-[1.7] text-taupe">{text}</p>

              <a
                href="#atendimento"
                className="mt-auto pt-8 inline-flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-gold transition-colors duration-300 hover:text-wood"
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
