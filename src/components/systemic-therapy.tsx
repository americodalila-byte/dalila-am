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
    text: "Os vínculos possuem significados próprios e fazem parte das diferentes experiências relacionais.",
  },
];

export function SystemicTherapy() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section
      id="terapia-sistemica"
      ref={ref}
      className="px-5 py-16 sm:px-8 lg:py-20"
      style={{ backgroundColor: "color-mix(in oklab, var(--color-ivory) 30%, var(--color-offwhite))" }}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 lg:grid-cols-[48fr_52fr] lg:gap-16">
        {/* Left */}
        <div style={revealStyle(shown)}>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-gold">
            Terapia Familiar Sistêmica
          </p>

          <div className="mt-4 h-px w-10 bg-gold/70" aria-hidden="true" />

          <h2
            className="mt-8 font-serif text-[2.4rem] font-light leading-[1.08] text-graphite sm:text-[3rem] lg:text-[3.6rem]"
            style={revealStyle(shown, 120)}
          >
            Compreender o todo
            <br />
            para compreender as
            <br />
            relações.
          </h2>

          {/* decorative detail */}
          <div className="mt-8 flex items-center gap-3 text-gold" aria-hidden="true">
            <span className="h-px w-12 bg-gold/70" />
            <span className="h-2 w-2 rotate-45 border border-gold/80" />
            <span className="h-px w-12 bg-gold/70" />
          </div>

          <p
            className="mt-10 max-w-[32rem] text-[1.0625rem] leading-[1.8] text-taupe"
            style={revealStyle(shown, 200)}
          >
            A Terapia Familiar Sistêmica considera que cada pessoa faz parte de diferentes
            contextos e relações. Esse olhar busca compreender como histórias, vínculos, padrões
            de interação e comunicação se conectam e influenciam as experiências individuais e
            familiares.
          </p>
        </div>

        {/* Right — 2x2 grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {cards.map(({ Icon, title, text }, i) => (
            <article
              key={title}
              style={revealStyle(shown, 240 + i * 90)}
              className="group rounded-[22px] border border-fendi/35 bg-offwhite/70 p-8 transition-all duration-300 hover:-translate-y-[3px] hover:border-fendi/60 sm:p-9 lg:p-10"
            >
              <Icon
                className="h-8 w-8 text-gold transition-colors duration-300 group-hover:text-wood"
                strokeWidth={1}
              />

              <div className="mt-7 h-px w-8 bg-gold/70" aria-hidden="true" />

              <h3 className="mt-5 font-serif text-[1.75rem] font-light leading-[1.15] text-graphite lg:text-[1.95rem]">
                {title}
              </h3>

              <p className="mt-4 text-[0.9375rem] leading-[1.75] text-taupe">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
