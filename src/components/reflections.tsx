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
      className="px-5 py-24 sm:px-8 lg:py-28"
      style={{ backgroundColor: "color-mix(in oklab, var(--color-ivory) 45%, var(--color-offwhite))" }}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,2.15fr)] lg:gap-16">
        <div style={revealStyle(shown)}>
          <p className="text-[0.75rem] tracking-[0.14em] text-gold">07</p>
          <h2 className="mt-4 font-serif text-[2.1rem] font-light uppercase leading-[1.12] tracking-[0.05em] text-graphite sm:text-[2.4rem] lg:text-[2.75rem]">
            Reflexões sobre
            <br className="hidden lg:block" /> relacionamentos
          </h2>
          <div className="mt-6 h-px w-14 bg-gold" aria-hidden="true" />

          <p className="mt-8 max-w-[26rem] text-[0.9375rem] leading-[1.85] text-taupe">
            Conteúdos sobre relacionamentos, vínculos, comunicação, emoções e autoconhecimento
            para ampliar reflexões sobre a vida e as relações.
          </p>

          {INSTAGRAM_URL && (
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex flex-col gap-2 focus-visible:outline-gold"
            >
              <span className="inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-gold transition-colors duration-300 group-hover:text-taupe">
                Ver mais no Instagram
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span
                className="h-px w-28 bg-gold/60 transition-all duration-300 group-hover:w-36"
                aria-hidden="true"
              />
            </a>
          )}
        </div>

        <div className="-mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {posts.map(({ image, category, title }, i) => (
            <article
              key={title}
              style={revealStyle(shown, 200 + i * 120)}
              className="group flex w-[78%] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-fendi/30 bg-offwhite shadow-[0_10px_30px_-26px_rgba(47,49,50,0.35)] transition-all duration-500 hover:-translate-y-[3px] hover:shadow-[0_18px_38px_-24px_rgba(47,49,50,0.32)] sm:w-auto"
            >
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt=""
                  width={800}
                  height={560}
                  loading="lazy"
                  className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-gold">
                  {category}
                </p>
                <h3 className="mt-4 font-serif text-[1.35rem] font-light leading-[1.3] text-graphite">
                  {title}
                </h3>
                <a
                  href={INSTAGRAM_URL ?? "#reflexoes"}
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-taupe transition-colors duration-300 hover:text-gold"
                >
                  Ler reflexão
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
