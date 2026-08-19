import { Users, Home, MessageCircle, Heart } from "lucide-react";
import { useReveal, revealStyle } from "@/hooks/use-reveal";

const pillars = [
  {
    n: "01",
    Icon: Users,
    title: "Relações",
    text: "Observamos como as relações e os vínculos fazem parte da experiência de cada pessoa.",
  },
  {
    n: "02",
    Icon: Home,
    title: "Contexto",
    text: "Histórias, experiências e contextos também fazem parte da compreensão psicológica.",
  },
  {
    n: "03",
    Icon: MessageCircle,
    title: "Comunicação",
    text: "A forma como nos comunicamos influencia a construção e a manutenção das relações.",
  },
  {
    n: "04",
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
      style={{ backgroundColor: "color-mix(in oklab, var(--color-ivory) 45%, var(--color-offwhite))" }}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[45fr_55fr] lg:gap-20">
          <div style={revealStyle(shown)}>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-gold">
              Terapia Familiar Sistêmica
            </p>

            <h2
              className="mt-7 font-serif text-[2.2rem] font-light leading-[1.1] text-graphite sm:text-[2.8rem] lg:text-[3.2rem]"
              style={revealStyle(shown, 140)}
            >
              Compreender o todo
              <br />
              para compreender as relações.
            </h2>

            <div className="mt-7 h-px w-14 bg-gold" aria-hidden="true" />

            <p
              className="mt-7 max-w-[34rem] text-[1.0625rem] leading-[1.8] text-taupe"
              style={revealStyle(shown, 220)}
            >
              A Terapia Familiar Sistêmica considera que cada pessoa faz parte de diferentes
              contextos e relações. Esse olhar busca compreender como histórias, vínculos, padrões
              de interação e comunicação se conectam e influenciam as experiências individuais e
              familiares.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-y-12 lg:grid-cols-4 lg:gap-y-0">
            {pillars.map(({ n, Icon, title, text }, i) => (
              <li
                key={n}
                className="flex flex-col items-center px-4 text-center lg:border-l lg:border-fendi/30 lg:first:border-l-0"
                style={revealStyle(shown, 260 + i * 100)}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ivory/70">
                  <Icon className="h-5 w-5 text-sage" strokeWidth={1} />
                </div>
                <p className="mt-5 text-[0.7rem] tracking-[0.14em] text-gold">{n}</p>
                <h3 className="mt-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-taupe">
                  {title}
                </h3>
                <p className="mt-4 text-[0.85rem] leading-[1.7] text-graphite">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <svg
          className="mt-12 h-12 w-full text-gold"
          viewBox="0 0 1440 60"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 30C180 30 260 46 440 46s260-32 460-32 240 26 540 26"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
          />
          <circle cx="900" cy="14" r="4" fill="currentColor" opacity="0.7" />
        </svg>
      </div>
    </section>
  );
}
