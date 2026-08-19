import { GraduationCap } from "lucide-react";
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
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-[35fr_65fr] lg:gap-16">
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

        <div>
          <p
            className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-taupe"
            style={revealStyle(shown, 120)}
          >
            Sobre mim
          </p>

          <h2
            className="mt-5 font-serif text-[2.4rem] font-light leading-[1.05] text-graphite sm:text-[3rem] lg:text-[3.2rem]"
            style={revealStyle(shown, 180)}
          >
            Dalila Américo
          </h2>

          <p
            className="mt-3 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-gold"
            style={revealStyle(shown, 240)}
          >
            Psicóloga • CRP 04/48200
          </p>

          <div className="mt-5 h-px w-14 bg-gold" aria-hidden="true" />

          <p
            className="mt-7 max-w-[36rem] text-[1.0625rem] leading-[1.8] text-taupe"
            style={revealStyle(shown, 300)}
          >
            Acredito que cada história carrega significados únicos e merece ser acolhida com
            respeito e cuidado. Meu trabalho busca oferecer um espaço de escuta para compreender
            relações, emoções, escolhas e experiências de maneira singular.
          </p>

          <div className="mt-9 max-w-[36rem] border-t border-fendi/30 pt-7" style={revealStyle(shown, 380)}>
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
