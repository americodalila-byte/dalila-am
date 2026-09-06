import { Users, Home, MessagesSquare, Heart, User, Sun } from "lucide-react";
import { BotanicalMark } from "@/components/botanical-mark";
import { useReveal, revealStyle } from "@/hooks/use-reveal";

const cards = [
  {
    Icon: Users,
    title: "Relacionamentos",
    text: "Dificuldades nos vínculos e na forma de se relacionar.",
  },
  {
    Icon: Home,
    title: "Família",
    text: "Dinâmicas familiares, diferentes papéis e desafios ao longo da vida.",
  },
  {
    Icon: MessagesSquare,
    title: "Comunicação",
    text: "Construção de diálogos mais claros, conscientes e respeitosos.",
  },
  {
    Icon: Heart,
    title: "Emoções",
    text: "Reconhecimento, compreensão e expressão do que você sente.",
  },
  {
    Icon: User,
    title: "Autoconhecimento",
    text: "Um olhar para sua história, escolhas e modo de se relacionar.",
  },
  {
    Icon: Sun,
    title: "Transições de Vida",
    text: "Acolhimento diante de perdas, mudanças, decisões e novos ciclos.",
  },
];

export function Areas() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section
      id="atuacao"
      ref={ref}
      className="px-4 py-11 sm:px-8 sm:pt-9 sm:pb-12 lg:pt-10 lg:pb-16"
      style={{ backgroundColor: "color-mix(in oklab, var(--color-ivory) 62%, var(--color-offwhite))" }}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center" style={revealStyle(shown)}>
          <BotanicalMark />
          <h2 className="balanced-title mt-4 font-serif text-[1.52rem] font-light uppercase leading-[1.22] tracking-normal text-graphite sm:mt-5 sm:text-[2rem] lg:text-[2.35rem]">
            O que podemos trabalhar
            <br className="hidden sm:block" /> na terapia?
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-gold sm:mt-5 sm:w-14" aria-hidden="true" />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3.5 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-6 lg:gap-[16px]">
          {cards.map(({ Icon, title, text }, i) => (
            <article
              key={title}
              style={revealStyle(shown, 200 + i * 90)}
              className="group grid h-full grid-cols-[2.75rem_minmax(0,1fr)] grid-rows-[auto_auto] gap-x-4 rounded-xl border border-fendi/35 bg-offwhite p-5 shadow-[0_1px_2px_rgba(47,49,50,0.03)] transition-all duration-300 hover:-translate-y-[2px] hover:border-fendi/60 hover:shadow-[0_14px_30px_-18px_rgba(47,49,50,0.25)] sm:grid-cols-none sm:grid-rows-[auto_auto_auto_1fr] sm:gap-x-0"
            >
              <div className="row-span-2 flex h-11 w-11 items-center justify-center rounded-full bg-ivory/70 sm:row-span-1">
                <Icon
                  className="h-5 w-5 text-taupe transition-colors duration-300 group-hover:text-gold"
                  strokeWidth={1.15}
                />
              </div>

              <h3 className="font-serif text-[1.25rem] font-light leading-[1.2] text-graphite sm:mt-4 sm:min-h-[3.2rem] sm:text-[1.35rem] sm:leading-[1.15]">
                {title}
              </h3>

              <div className="mt-2 h-px w-9 bg-gold/70 sm:mt-1" aria-hidden="true" />

              <p className="col-span-2 mt-4 text-[0.88rem] leading-[1.65] text-taupe sm:col-span-1 sm:text-[0.9rem]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
