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
      className="px-5 py-12 sm:px-8 lg:py-14"
      style={{ backgroundColor: "color-mix(in oklab, var(--color-ivory) 45%, var(--color-offwhite))" }}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-14">
        <div style={revealStyle(shown)}>
          <h2 className="font-serif text-[1.95rem] font-light uppercase leading-[1.12] tracking-[0.05em] text-graphite sm:text-[2.25rem] lg:text-[1.95rem] xl:text-[2.25rem]">
            Reflexões sobre
            <br className="hidden lg:block" /> relacionamentos
          </h2>
          <div className="mt-5 h-px w-14 bg-gold" aria-hidden="true" />

          <p className="mt-6 max-w-[26rem] text-[0.9375rem] leading-[1.8] text-taupe">
            Conteúdos sobre relacionamentos, vínculos, comunicação, emoções e autoconhecimento
            para ampliar reflexões sobre a vida e as relações.
          </p>

          {INSTAGRAM_URL && (
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex flex-col items-start gap-1.5 focus-visible:outline-gold"
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

        <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {posts.map(({ image, category, title }, i) => (
            <article
              key={title}
              style={revealStyle(shown, 200 + i * 120)}
              className="group flex w-[78%] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-fendi/30 bg-offwhite shadow-[0_10px_30px_-26px_rgba(47,49,50,0.35)] transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_18px_38px_-24px_rgba(47,49,50,0.32)] sm:w-auto"
            >
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt=""
                  width={800}
                  height={560}
                  loading="lazy"
                  className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-gold">
                  {category}
                </p>
                <h3 className="mt-3 font-serif text-[1.28rem] font-light leading-[1.3] text-graphite">
                  {title}
                </h3>
                <a
                  href={INSTAGRAM_URL ?? "#reflexoes"}
                  {...(INSTAGRAM_URL ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="mt-auto inline-flex items-center gap-2 pt-5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-taupe transition-colors duration-300 hover:text-gold focus-visible:outline-gold"
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
