import { ArrowRight, Target, Eye, Leaf } from "lucide-react";
import dalila from "@/assets/dalila.png.asset.json";
import { useReveal, revealStyle } from "@/hooks/use-reveal";

const pillars = [
  {
    Icon: Target,
    title: "Missão",
    text: "Oferecer cuidado psicológico ético e acolhedor, respeitando a singularidade de cada pessoa e de suas relações.",
  },
  {
    Icon: Eye,
    title: "Visão",
    text: "Contribuir para uma compreensão mais consciente das relações, emoções e experiências humanas.",
  },
  {
    Icon: Leaf,
    title: "Valores",
    text: "Ética, respeito, acolhimento, empatia, responsabilidade e desenvolvimento contínuo.",
  },
];

/** Edite / confirme esta lista com as formações reais da profissional. */
const formacao = [
  "Graduação em Psicologia",
  "Especialização em Terapia Familiar Sistêmica",
  "Outras formações a confirmar",
  "Cursos e atualizações profissionais",
];

export function About() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section id="sobre" ref={ref} className="overflow-hidden bg-offwhite">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-[35fr_65fr]">
        {/* Cabeçalho no mobile aparece antes da foto */}
        <div className="order-1 px-5 pt-16 sm:px-8 lg:hidden">
          <SectionLabel />
        </div>

        <div
          className="order-2 relative min-h-[22rem] lg:order-1 lg:min-h-[38rem]"
          style={revealStyle(shown)}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, var(--color-ivory) 0%, color-mix(in oklab, var(--color-wood) 40%, var(--color-offwhite)) 100%)",
            }}
            aria-hidden="true"
          />
          <img
            src={dalila.url}
            alt="Dalila Américo, psicóloga"
            width={768}
            height={1344}
            loading="lazy"
            className="relative h-full w-full object-cover object-top"
          />
        </div>

        <div className="order-3 px-5 pb-16 pt-10 sm:px-8 lg:order-2 lg:py-20 lg:pl-16 lg:pr-8">
          <div className="hidden lg:block" style={revealStyle(shown, 120)}>
            <SectionLabel />
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto_16rem] lg:gap-10">
            <div>
              <h2
                className="mt-6 font-serif text-[2.6rem] font-light leading-[1.05] text-graphite sm:text-[3.2rem] lg:text-[3.6rem]"
                style={revealStyle(shown, 180)}
              >
                Dalila Américo
              </h2>
              <p
                className="mt-4 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-gold"
                style={revealStyle(shown, 240)}
              >
                Psicóloga • CRP 04/48200
              </p>
              <div className="mt-6 h-px w-14 bg-gold" aria-hidden="true" />

              <p
                className="mt-7 max-w-[34rem] text-[1.0625rem] leading-[1.8] text-taupe"
                style={revealStyle(shown, 300)}
              >
                Acredito que cada história carrega significados únicos e merece ser acolhida com
                respeito e cuidado. Meu propósito é oferecer um espaço de escuta para que você
                possa compreender melhor suas relações, emoções, escolhas e experiências.
              </p>

            </div>

            <div className="hidden w-px bg-fendi/30 lg:block" aria-hidden="true" />

            <aside style={revealStyle(shown, 460)}>
              <h3 className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-gold">
                Formação e especializações
              </h3>
              <div className="mt-5 h-px w-10 bg-gold/70" aria-hidden="true" />
              <ul className="mt-6 space-y-5">
                {formacao.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.9rem] leading-[1.65] text-taupe">
                    <span className="mt-[0.6em] h-px w-4 shrink-0 bg-fendi" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0">
            {pillars.map(({ Icon, title, text }, i) => (
              <div
                key={title}
                className="sm:border-l sm:border-fendi/30 sm:px-7 sm:first:border-l-0 sm:first:pl-0"
                style={revealStyle(shown, 380 + i * 110)}
              >
                <Icon className="h-6 w-6 text-sage" strokeWidth={1} />
                <h3 className="mt-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold">
                  {title}
                </h3>
                <p className="mt-3 text-[0.875rem] leading-[1.7] text-taupe">{text}</p>
              </div>
            ))}
          </div>

          <a
            href="#atendimento"
            className="group mt-12 inline-flex h-[54px] items-center justify-center gap-3 rounded-[18px] bg-graphite px-8 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-offwhite transition-all duration-300 hover:-translate-y-0.5 hover:bg-graphite/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            style={revealStyle(shown, 720)}
          >
            Conhecer mais sobre mim
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionLabel() {
  return (
    <>
      <p className="text-[0.75rem] tracking-[0.14em] text-gold">02</p>
      <p className="mt-3 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-taupe">
        Sobre mim
      </p>
    </>
  );
}
