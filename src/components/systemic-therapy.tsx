import { Users, Home, MessageCircle, Heart } from "lucide-react";
import { useReveal, revealStyle } from "@/hooks/use-reveal";

const cards = [
  {
    Icon: Users,
    title: "Relações",
    text: "Observamos como as relações e os vínculos fazem parte da experiência de cada pessoa.",
  },
  {
    Icon: Home,
    title: "Contexto",
    text: "Histórias, experiências e contextos também fazem parte da compreensão psicológica.",
  },
  {
    Icon: MessageCircle,
    title: "Comunicação",
    text: "A forma como nos comunicamos influencia a construção e a manutenção das relações.",
  },
  {
    Icon: Heart,
    title: "Vínculos",
    text: "Os vínculos possuem significados próprios e fazem parte das experiências relacionais.",
  },
];

export function SystemicTherapy() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section
      id="terapia-sistemica"
      ref={ref}
      className="px-5 py-12 sm:px-8 lg:py-16"
      style={{ backgroundColor: "color-mix(in oklab, var(--color-ivory) 30%, var(--color-offwhite))" }}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-11 lg:grid-cols-[48fr_52fr] lg:gap-14">
        {/* Left */}
        <div style={revealStyle(shown)}>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-gold">
            Terapia Familiar Sistêmica
          </p>

          <div className="mt-4 h-px w-10 bg-gold/70" aria-hidden="true" />

          <h2
            className="mt-6 font-serif text-[2.1rem] font-light leading-[1.08] text-graphite sm:text-[2.6rem] lg:text-[3.1rem]"
            style={revealStyle(shown, 120)}
          >
            Compreender o todo
            <br />
            para compreender as
            <br />
            relações.
          </h2>

          {/* decorative detail */}
          <div className="mt-6 flex items-center gap-2.5 text-gold" aria-hidden="true">
            <span className="h-px w-9 bg-gold/70" />
            <span className="h-1.5 w-1.5 rotate-45 border border-gold/80" />
            <span className="h-px w-9 bg-gold/70" />
          </div>

          <p
            className="mt-7 max-w-[30rem] text-[1rem] leading-[1.75] text-taupe"
            style={revealStyle(shown, 200)}
          >
            A Terapia Familiar Sistêmica considera que cada pessoa faz parte de diferentes
            contextos e relações. Esse olhar busca compreender como histórias, vínculos, padrões
            de interação e comunicação se conectam e influenciam as experiências individuais e
            familiares.
          </p>
        </div>

        {/* Right — 2x2 grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {cards.map(({ Icon, title, text }, i) => (
            <article
              key={title}
              style={revealStyle(shown, 240 + i * 90)}
              className="group grid h-full grid-rows-[auto_auto_auto_1fr] rounded-[20px] border border-fendi/35 bg-offwhite/70 p-5 transition-all duration-300 hover:-translate-y-[2px] hover:border-fendi/60 sm:p-6"
            >
              <Icon
                className="h-6 w-6 text-gold transition-colors duration-300 group-hover:text-wood"
                strokeWidth={1}
              />

              <div className="mt-4 h-px w-7 bg-gold/70" aria-hidden="true" />

              <h3 className="mt-3 font-serif text-[1.2rem] font-light leading-[1.15] text-graphite lg:text-[1.32rem]">
                {title}
              </h3>

              <p className="mt-2.5 text-[0.82rem] leading-[1.65] text-taupe">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
