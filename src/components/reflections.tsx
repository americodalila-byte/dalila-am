import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, X } from "lucide-react";
import { useReveal, revealStyle } from "@/hooks/use-reveal";
import { INSTAGRAM_URL } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";
import img1 from "@/assets/reflexao-1.jpg";
import img2 from "@/assets/reflexao-2.jpg";
import img3 from "@/assets/reflexao-3.jpg";

const posts = [
  {
    image: img1,
    category: "Comunicação",
    title: "No amor, você joga tênis ou frescobol?",
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

  const handleReflectionOpenChange = (open: boolean) => {
    if (open) trackEvent("open_reflexao_comunicacao");
  };

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
              onClick={() => trackEvent("click_instagram", { location: "reflexoes" })}
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
                {i === 0 ? (
                  <Dialog.Root onOpenChange={handleReflectionOpenChange}>
                    <Dialog.Trigger asChild>
                      <button
                        type="button"
                        className="mt-auto inline-flex min-h-11 items-center gap-2 self-start pt-5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-taupe focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                      >
                        Ler reflexão
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </Dialog.Trigger>

                    <Dialog.Portal>
                      <Dialog.Overlay className="fixed inset-0 z-[80] bg-graphite/35 backdrop-blur-[3px] data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out data-[state=open]:fade-in" />
                      <Dialog.Content className="fixed left-1/2 top-1/2 z-[81] flex max-h-[88dvh] w-[calc(100%-2rem)] max-w-[42rem] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-xl border border-fendi/45 bg-offwhite shadow-[0_24px_70px_-28px_rgba(47,49,50,0.5)] focus:outline-none sm:w-[calc(100%-4rem)]">
                        <div className="overflow-y-auto px-6 py-7 sm:px-10 sm:py-9 lg:px-12 lg:py-11">
                          <Dialog.Close asChild>
                            <button
                              type="button"
                              aria-label="Fechar reflexão"
                              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-taupe transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:right-6 sm:top-6"
                            >
                              <X className="h-4.5 w-4.5" strokeWidth={1.25} aria-hidden="true" />
                            </button>
                          </Dialog.Close>

                          <p className="pr-11 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-gold">
                            Comunicação
                          </p>
                          <Dialog.Title className="balanced-title mt-3 max-w-[31rem] pr-8 font-serif text-[1.75rem] font-light leading-[1.16] text-graphite sm:text-[2.1rem]">
                            No amor, você joga tênis ou frescobol?
                          </Dialog.Title>
                          <div className="mt-5 h-px w-12 bg-gold" aria-hidden="true" />
                          <Dialog.Description className="sr-only">
                            Reflexão sobre comunicação nos relacionamentos.
                          </Dialog.Description>

                          <div className="mt-6 space-y-4 text-[0.9rem] leading-[1.75] text-taupe sm:mt-7 sm:text-[0.9375rem] sm:leading-[1.8]">
                            <p>Rubem Alves usou a metáfora do tênis e do frescobol para falar sobre relacionamentos.</p>
                            <p>
                              No tênis, jogamos para que o outro não consiga devolver.<br />
                              Um ganha. O outro perde.
                            </p>
                            <p>
                              No frescobol, a lógica é diferente: a bola precisa continuar no ar.<br />
                              Se um não consegue jogar, os dois perdem.
                            </p>
                            <p>E quantas vezes, sem perceber, transformamos nossos relacionamentos em uma partida de tênis?</p>
                            <p>
                              As conversas viram disputas.<br />
                              Um acusa, o outro se defende.<br />
                              Um cobra, o outro se afasta.<br />
                              E aquilo que começou como uma tentativa de ser ouvido termina em ainda mais distância.
                            </p>
                            <p className="border-l border-gold/65 pl-4 font-serif text-[1.2rem] leading-[1.45] text-graphite sm:text-[1.3rem]">
                              É possível ganhar uma discussão e, ainda assim, perder um pouco da conexão.
                            </p>
                            <p>Na terapia, o objetivo não é descobrir quem está certo ou errado. É compreender o que acontece entre vocês, reconhecer os ciclos que se repetem e construir novas formas de conversar e se relacionar.</p>
                            <p className="border-l border-gold/65 pl-4 font-serif text-[1.2rem] leading-[1.45] text-graphite sm:text-[1.3rem]">
                              Porque uma relação não precisa de um vencedor.<br />
                              Precisa de duas pessoas que consigam voltar a jogar do mesmo lado.
                            </p>
                          </div>
                        </div>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
                ) : (
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-taupe">
                    Ler reflexão
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
