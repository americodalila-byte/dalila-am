import * as Dialog from "@radix-ui/react-dialog";
import type { ReactNode } from "react";
import { ArrowRight, X } from "lucide-react";
import { useReveal, revealStyle } from "@/hooks/use-reveal";
import { INSTAGRAM_URL } from "@/lib/contact";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";
import img1 from "@/assets/reflexao-1.jpg";
import img2 from "@/assets/reflexao-2.jpg";
import img3 from "@/assets/reflexao-3.jpg";

const posts = [
  {
    image: img1,
    category: "Comunicação",
    title: "No amor, você joga tênis ou frescobol?",
    event: "open_reflexao_comunicacao" as AnalyticsEvent,
  },
  {
    image: img2,
    category: "Relacionamentos",
    title: "A vida acontece nas relações.",
    event: "open_reflexao_relacionamentos" as AnalyticsEvent,
  },
  {
    image: img3,
    category: "Autoconhecimento",
    title: "Quem sou eu quando todos ao meu redor esperam algo de mim?",
    event: "open_reflexao_autoconhecimento" as AnalyticsEvent,
  },
];

function ReflectionBody({ event }: { event: AnalyticsEvent }) {
  if (event === "open_reflexao_comunicacao") {
    return (
      <>
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
        <ReflectionEmphasis>
          É possível ganhar uma discussão e, ainda assim, perder um pouco da conexão.
        </ReflectionEmphasis>
        <p>Na terapia, o objetivo não é descobrir quem está certo ou errado. É compreender o que acontece entre vocês, reconhecer os ciclos que se repetem e construir novas formas de conversar e se relacionar.</p>
        <ReflectionEmphasis>
          Porque uma relação não precisa de um vencedor.<br />
          Precisa de duas pessoas que consigam voltar a jogar do mesmo lado.
        </ReflectionEmphasis>
      </>
    );
  }

  if (event === "open_reflexao_relacionamentos") {
    return (
      <>
        <p>A vida acontece nas relações.</p>
        <p>Desde que nascemos, aprendemos sobre nós mesmos na relação com o outro. Na família, nas amizades, no amor, no trabalho e em tantos encontros que atravessam a nossa história.</p>
        <p>Somos seres relacionais.</p>
        <p>E, por isso, muitas das questões que vivemos não podem ser compreendidas olhando apenas para o indivíduo. Elas também passam pela forma como nos comunicamos, pelos vínculos que construímos, pelos limites que estabelecemos, pelas histórias que carregamos e pela maneira como aprendemos a nos relacionar.</p>
        <p>A Terapia Sistêmica amplia esse olhar.</p>
        <p>Em vez de perguntar apenas “o que há de errado comigo?”, ela nos convida a outras perguntas:</p>
        <p>
          O que acontece comigo quando estou em relação?<br />
          E o que acontece entre nós quando nos relacionamos?
        </p>
        <p>Porque uma relação não é feita apenas de duas pessoas. Existe também aquilo que se constrói entre elas: a forma de conversar, de se aproximar, de se afastar, de reagir, de cuidar, de colocar limites e de lidar com as diferenças.</p>
        <p>E compreender esse “entre nós” pode transformar a maneira como enxergamos nossas relações e também a nós mesmos.</p>
        <p>Olhar para as relações é também olhar para si.</p>
        <p>Quando compreendemos melhor como nos relacionamos, abrimos espaço para escolhas mais conscientes e para relações mais saudáveis, possíveis e significativas.</p>
        <p>
          Dalila Américo<br />
          Psicóloga e Terapeuta Familiar Sistêmica
        </p>
      </>
    );
  }

  return (
    <>
      <p>Nós crescemos dentro de uma teia de relacionamentos. Família, histórias, valores, expectativas, afetos e experiências vão participando da construção de quem somos.</p>
      <p>Aprendemos com o outro. Somos influenciados pelo meio em que vivemos.</p>
      <p>E, muitas vezes, sem perceber, carregamos formas de pensar, sentir e agir que começaram muito antes de nós.</p>
      <p>Mas crescer também envolve descobrir:</p>
      <p>Quem sou eu no meio de tudo isso?</p>
      <p>Como construir minha própria identidade sem precisar rejeitar a minha história?</p>
      <p>Como sustentar minhas escolhas quando elas são diferentes das escolhas das pessoas que amo?</p>
      <p>Como continuar pertencendo sem precisar me anular para caber?</p>
      <p>Autoconhecimento também passa por esse caminho: reconhecer o que nos constituiu e, ao mesmo tempo, desenvolver a capacidade de ser quem somos na presença do outro.</p>
      <p>Não se trata de viver sem ser influenciado pelas relações, nem de se afastar de todos para encontrar a própria identidade.</p>
      <p>
        Trata-se de aprender a estar conectado sem se perder.<br />
        A discordar sem precisar romper.<br />
        A pertencer sem deixar de ser você.
      </p>
      <p>Talvez uma das perguntas mais importantes do autoconhecimento seja:</p>
      <p>Quanto de quem eu sou consigo sustentar quando estou diante de quem pensa, sente ou espera algo diferente de mim?</p>
    </>
  );
}

function ReflectionEmphasis({ children }: { children: ReactNode }) {
  return (
    <p className="border-l border-gold/65 pl-4 font-serif text-[1.2rem] leading-[1.45] text-graphite sm:text-[1.3rem]">
      {children}
    </p>
  );
}

function ReflectionDialog({
  category,
  title,
  event,
}: {
  category: string;
  title: string;
  event: AnalyticsEvent;
}) {
  return (
    <Dialog.Root onOpenChange={(open) => open && trackEvent(event)}>
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
              {category}
            </p>
            <Dialog.Title className="balanced-title mt-3 max-w-[31rem] pr-8 font-serif text-[1.75rem] font-light leading-[1.16] text-graphite sm:text-[2.1rem]">
              {title}
            </Dialog.Title>
            <div className="mt-5 h-px w-12 bg-gold" aria-hidden="true" />
            <Dialog.Description className="sr-only">
              {event === "open_reflexao_comunicacao"
                ? "Reflexão sobre comunicação nos relacionamentos."
                : `Reflexão sobre ${category.toLocaleLowerCase("pt-BR")}.`}
            </Dialog.Description>

            <div className="mt-6 space-y-4 text-[0.9rem] leading-[1.75] text-taupe sm:mt-7 sm:text-[0.9375rem] sm:leading-[1.8]">
              <ReflectionBody event={event} />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

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
          {posts.map(({ image, category, title, event }, i) => (
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
                <ReflectionDialog category={category} title={title} event={event} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
