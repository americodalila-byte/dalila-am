import { ArrowRight } from "lucide-react";
import { useReveal, revealStyle } from "@/hooks/use-reveal";
import { INSTAGRAM_URL } from "@/lib/contact";
import img1 from "@/assets/reflexao-1.jpg";
import img2 from "@/assets/reflexao-2.jpg";
import img3 from "@/assets/reflexao-3.jpg";

const posts = [
  {
    image: img1,
    category: "Comunicação",
    title: "Por que algumas conversas sempre terminam em conflito?",
  },
  {
    image: img2,
    category: "Relacionamentos",
    title: "Quando amar não resolve todos os conflitos da relação.",
  },
  {
    image: img3,
    category: "Autoconhecimento",
    title: "O que compreender sobre si pode revelar sobre suas relações?",
  },
];

export function Reflections() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section
      id="reflexoes"
      ref={ref}
      className="px-4 py-11 sm:px-8 sm:py-12 lg:py-14"
      style={{ backgroundColor: "color-mix(in oklab, var(--color-ivory) 45%, var(--color-offwhite))" }}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-14">
        <div style={revealStyle(shown)}>
          <h2 className="balanced-title font-serif text-[1.52rem] font-light uppercase leading-[1.22] tracking-normal text-graphite sm:text-[2rem] lg:text-[2.35rem]">
            Reflexões sobre
            <br className="hidden lg:block" /> relacionamentos
          </h2>
          <div className="mt-4 h-px w-12 bg-gold sm:mt-5 sm:w-14" aria-hidden="true" />

          <p className="mt-5 max-w-[26rem] text-[0.92rem] leading-[1.75] text-taupe sm:mt-6 sm:text-[0.9375rem] sm:leading-[1.8]">
            Conteúdos sobre relacionamentos, vínculos, comunicação, emoções e autoconhecimento
            para ampliar reflexões sobre a vida e as relações.
          </p>

          {INSTAGRAM_URL && (
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex min-h-11 flex-col items-start justify-center gap-1.5 focus-visible:outline-gold sm:mt-7 sm:min-h-0"
            >
              <span className="inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-gold transition-colors duration-300 group-hover:text-taupe">
                Ver mais no Instagram
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span
                className="h-px w-full bg-gold/60 transition-opacity duration-300 group-hover:opacity-70"
                aria-hidden="true"
              />
            </a>
          )}
        </div>

        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-2 lg:grid-cols-3">
          {posts.map(({ image, category, title }, i) => (
            <article
              key={title}
              style={revealStyle(shown, 200 + i * 120)}
              className="group flex w-[84%] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-fendi/30 bg-offwhite shadow-[0_10px_30px_-26px_rgba(47,49,50,0.35)] transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_18px_38px_-24px_rgba(47,49,50,0.32)] sm:w-auto"
            >
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt=""
                  width={800}
                  height={560}
                  loading="lazy"
                  className="aspect-[16/10] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] sm:h-40 sm:aspect-auto"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-gold">
                  {category}
                </p>
                <h3 className="mt-3 font-serif text-[1.2rem] font-light leading-[1.3] text-graphite sm:text-[1.28rem]">
                  {title}
                </h3>
                <span
                  className="mt-auto inline-flex items-center gap-2 pt-5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-taupe"
                >
                  Ler reflexão
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
