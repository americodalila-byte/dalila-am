import dalilaSobre from "@/assets/dalila-sobre.png.asset.json";
import { useReveal, revealStyle } from "@/hooks/use-reveal";

const formacao = [
  "Psicologia",
  "Especialização em Terapia Familiar Sistêmica",
];

export function About() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section id="sobre" ref={ref} className="overflow-hidden bg-offwhite px-4 py-11 sm:px-8 sm:py-12 lg:py-16">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 sm:gap-9 lg:grid-cols-[35fr_65fr] lg:items-start lg:gap-14">
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
            className="aspect-[4/5] h-auto w-full object-cover object-top sm:h-[26rem] sm:aspect-auto lg:h-[34rem]"
          />
        </div>

        <div className="flex flex-col lg:pt-1">
          {/* Bloco 1 — Identidade */}
          <div style={revealStyle(shown, 120)}>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-taupe">
              Sobre mim
            </p>

            <h2 className="balanced-title mt-4 font-serif text-[1.85rem] font-light leading-[1.12] text-graphite sm:mt-5 sm:text-[2.5rem] lg:text-[2.7rem]">
              Dalila Américo
            </h2>

            <p className="mt-2 max-w-[19rem] text-[0.65rem] font-medium uppercase leading-[1.55] tracking-[0.18em] text-gold sm:max-w-none sm:text-[0.68rem] sm:leading-normal sm:tracking-[0.24em]">
              Psicóloga | Terapeuta Familiar Sistêmica • CRP 04/48200
            </p>

            <div className="mt-5 h-px w-14 bg-gold" aria-hidden="true" />
          </div>

          {/* Bloco 2 — Apresentação */}
          <div className="mt-6 max-w-[31rem] space-y-3.5 sm:mt-7 sm:space-y-4" style={revealStyle(shown, 260)}>
            <p className="text-[0.98rem] leading-[1.75] text-graphite sm:text-[1.0625rem]">
              Acredito que nenhuma história começa apenas no momento presente.
            </p>
            <p className="text-[0.98rem] leading-[1.75] text-taupe sm:text-[1.0625rem]">
              Somos construídos também nas relações que vivemos, nos vínculos que estabelecemos e
              nos diferentes contextos que atravessam nossa história.
            </p>
            <p className="text-[0.98rem] leading-[1.75] text-taupe sm:text-[1.0625rem]">
              Por isso, meu olhar terapêutico é também relacional: busco compreender não apenas o
              que você está vivendo, mas como suas experiências, vínculos e contexto se conectam ao
              momento atual.
            </p>
            <p className="text-[0.98rem] leading-[1.75] text-taupe sm:text-[1.0625rem]">
              Meu compromisso é oferecer uma escuta cuidadosa e respeitosa, ajudando cada pessoa,
              casal ou família a ampliar sua compreensão e construir novas possibilidades.
            </p>
          </div>

          {/* Bloco 3 — Formação e especialização */}
          <div
            className="mt-7 max-w-[31rem] border-t border-fendi/15 pt-6"
            style={revealStyle(shown, 380)}
          >
            <h3 className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-gold">
              Formação
            </h3>
            <ul className="mt-4 space-y-2.5">
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
