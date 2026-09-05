import { Users, Home, MessageCircle, GitBranch } from "lucide-react";
import { useReveal, revealStyle } from "@/hooks/use-reveal";

const cards = [
  {
    Icon: Users,
    title: "Relações",
    text: "A maneira como nos relacionamos revela aprendizados, experiências e formas de estar com o outro.",
  },
  {
    Icon: Home,
    title: "Contexto",
    text: "Família, trabalho, cultura e diferentes fases da vida também participam da construção de quem somos.",
  },
  {
    Icon: GitBranch,
    title: "Aspectos Geracionais",
    text: "Valores, lealdades, padrões de interação e limites podem atravessar gerações e permanecer presentes na forma como vivemos e nos relacionamos.",
  },
  {
    Icon: MessageCircle,
    title: "Comunicação",
    text: "Comunicar vai além das palavras. O que dizemos, o que silenciamos e a forma como interpretamos o outro influenciam nossas relações e conexões.",
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
            className="balanced-title mt-6 font-serif text-[1.9rem] font-light leading-[1.12] text-graphite sm:text-[2.35rem] lg:text-[2.75rem]"
            style={revealStyle(shown, 120)}
          >
            Compreender o todo
            <br />
            para compreender
            <br />
            você.
          </h2>

          {/* decorative detail */}
          <div className="mt-6 flex items-center gap-2.5 text-gold" aria-hidden="true">
            <span className="h-px w-9 bg-gold/70" />
            <span className="h-1.5 w-1.5 rotate-45 border border-gold/80" />
            <span className="h-px w-9 bg-gold/70" />
          </div>

          <div className="mt-7 max-w-[30rem] space-y-4" style={revealStyle(shown, 200)}>
            <p className="text-[1rem] leading-[1.75] text-taupe">
              Nenhuma pessoa existe de forma isolada. Somos atravessados por nossa história, pelas
              relações que construímos, pelos contextos em que vivemos e também pelas gerações que
              vieram antes de nós.
            </p>
            <p className="text-[1rem] leading-[1.75] text-taupe">
              Na Terapia Familiar Sistêmica, o olhar vai além da dificuldade apresentada. Buscamos
              compreender como diferentes aspectos da vida se conectam e influenciam a maneira de
              sentir, agir e se posicionar no mundo.
            </p>
          </div>
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
