import dalilaSobre from "@/assets/dalila-sobre.png.asset.json";
import { useReveal, revealStyle } from "@/hooks/use-reveal";

const formacao = [
  "Graduação em Psicologia",
  "Especialização em Terapia Familiar Sistêmica",
];

export function About() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section id="sobre" ref={ref} className="overflow-hidden bg-offwhite px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-[35fr_65fr] lg:items-start lg:gap-16">
        <div
          className="relative mx-auto w-full max-w-[20rem] overflow-hidden rounded-[18px] lg:mx-0 lg:max-w-none"
          style={revealStyle(shown)}
        >
          <img
            src={dalilaSobre.url}
            alt="Dalila Américo, psicóloga"
            width={768}
            height={1344}
            loading="lazy"
            className="h-[22rem] w-full object-cover object-top sm:h-[26rem] lg:h-[34rem]"
          />
        </div>

        <div className="flex flex-col lg:pt-6">
          {/* Bloco 1 — Identidade */}
          <div style={revealStyle(shown, 120)}>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-taupe">
              Sobre mim
            </p>

            <h2 className="mt-7 font-serif text-[2.4rem] font-light leading-[1.05] text-graphite sm:text-[3rem] lg:text-[3.2rem]">
              Dalila Américo
            </h2>

            <p className="mt-2 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-gold">
              Psicóloga • CRP 04/48200
            </p>

            <div className="mt-6 h-px w-14 bg-gold" aria-hidden="true" />
          </div>

          {/* Bloco 2 — Apresentação */}
          <p
            className="mt-10 max-w-[31rem] text-[1.0625rem] leading-[1.75] text-taupe lg:mt-12"
            style={revealStyle(shown, 260)}
          >
            Acredito que cada história carrega significados únicos e merece ser acolhida com
            respeito e cuidado. Meu trabalho busca oferecer um espaço de escuta para compreender
            relações, emoções, escolhas e experiências de maneira singular.
          </p>

          {/* Bloco 3 — Formação e especialização */}
          <div
            className="mt-10 max-w-[31rem] border-t border-fendi/20 pt-10 lg:mt-12"
            style={revealStyle(shown, 380)}
          >
            <h3 className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-gold">
              Formação e especialização
            </h3>
            <ul className="mt-5 space-y-3">
              {formacao.map((item) => (
                <li key={item} className="flex gap-3 text-[0.9375rem] leading-[1.6] text-taupe">
                  <span className="mt-[0.6em] h-px w-4 shrink-0 bg-fendi" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
