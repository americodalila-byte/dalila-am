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
      id="areas"
      ref={ref}
      className="px-5 pt-9 pb-12 sm:px-8 lg:pt-10 lg:pb-16"
      style={{ backgroundColor: "color-mix(in oklab, var(--color-ivory) 62%, var(--color-offwhite))" }}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center" style={revealStyle(shown)}>
          <BotanicalMark />
          <h2 className="balanced-title mt-5 font-serif text-[1.7rem] font-light uppercase leading-[1.2] tracking-normal text-graphite sm:text-[2rem] lg:text-[2.35rem]">
            O que podemos trabalhar
            <br className="hidden sm:block" /> na terapia?
          </h2>
          <div className="mx-auto mt-5 h-px w-14 bg-gold" aria-hidden="true" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-[16px]">
          {cards.map(({ Icon, title, text }, i) => (
            <article
              key={title}
              style={revealStyle(shown, 200 + i * 90)}
              className="group grid h-full grid-rows-[auto_auto_auto_1fr] rounded-xl border border-fendi/35 bg-offwhite p-5 shadow-[0_1px_2px_rgba(47,49,50,0.03)] transition-all duration-300 hover:-translate-y-[2px] hover:border-fendi/60 hover:shadow-[0_14px_30px_-18px_rgba(47,49,50,0.25)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory/70">
                <Icon
                  className="h-5 w-5 text-taupe transition-colors duration-300 group-hover:text-gold"
                  strokeWidth={1.15}
                />
              </div>

              <h3 className="mt-4 min-h-[3.2rem] font-serif text-[1.35rem] font-light leading-[1.15] text-graphite">
                {title}
              </h3>

              <div className="mt-1 h-px w-9 bg-gold/70" aria-hidden="true" />

              <p className="mt-4 text-[0.9rem] leading-[1.65] text-taupe">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
