import { Users, MessageCircle, Home, Heart, Leaf, Target } from "lucide-react";
import { BotanicalMark } from "@/components/botanical-mark";
import { useReveal, revealStyle } from "@/hooks/use-reveal";

function ScribbleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1" />
      <path
        d="M6.4 13.6c1.6-4 5-6 8-4.6 2.2 1 2.4 3.8.4 5.2-1.8 1.3-4.2.4-4.4-1.6-.2-1.8 1.8-3.2 3.8-2.6 2.4.7 3.4 3.4 2.2 5.6"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

const items = [
  { Icon: Users, title: "Relacionamentos", text: "Dificuldades nos vínculos e na forma de se relacionar." },
  { Icon: MessageCircle, title: "Conflitos recorrentes", text: "Situações e padrões que parecem sempre se repetir." },
  { Icon: ScribbleIcon, title: "Comunicação", text: "Dificuldade em falar, escutar ou se sentir compreendido." },
  { Icon: Home, title: "Família", text: "Conflitos, vínculos e desafios nas relações familiares." },
  { Icon: Heart, title: "Emoções", text: "Dificuldade em compreender, reconhecer ou expressar o que sente." },
  { Icon: Leaf, title: "Mudanças de vida", text: "Perdas, escolhas, transições e novas fases." },
  { Icon: Target, title: "Autoconhecimento", text: "Compreender sua história, suas escolhas e seus padrões." },
];

export function Moments() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section id="quando-a-psicoterapia-faz-sentido" ref={ref} className="bg-offwhite px-4 py-11 sm:px-8 sm:py-10 lg:pt-12 lg:pb-14">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-5xl text-center" style={revealStyle(shown)}>
          <BotanicalMark />
          <h2 className="balanced-title mt-4 font-serif text-[1.52rem] font-light uppercase leading-[1.22] tracking-normal text-graphite sm:mt-5 sm:text-[2rem] lg:text-[2.35rem]">
            Quando a psicoterapia
            <br className="hidden sm:block" /> pode fazer sentido?
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-gold sm:mt-5 sm:w-14" aria-hidden="true" />
          <p className="mx-auto mt-5 max-w-[38rem] text-[0.95rem] leading-[1.75] text-taupe sm:text-[1rem]">
            Às vezes percebemos que algo não vai bem, mas nem sempre conseguimos compreender
            sozinhos o que está acontecendo. A psicoterapia pode ajudar a olhar para sua história,
            suas relações e os padrões que se repetem, ampliando a compreensão e abrindo espaço
            para novas possibilidades.
          </p>
        </div>

        <ul className="mt-9 grid grid-cols-1 gap-y-3 sm:mt-10 sm:grid-cols-4 sm:gap-y-9 lg:mt-12 lg:grid-cols-7 lg:gap-y-0">
          {items.map(({ Icon, title, text }, i) => (
            <li
              key={title}
              className="grid grid-cols-[2.75rem_minmax(0,1fr)] grid-rows-[auto_auto] items-center gap-x-4 rounded-lg border border-fendi/20 px-4 py-4 text-left sm:grid-cols-none sm:grid-rows-[auto_auto_1fr_auto] sm:justify-items-center sm:gap-x-0 sm:rounded-none sm:border-0 sm:px-4 sm:py-0 sm:text-center lg:border-l lg:border-fendi/25 lg:first:border-l-0"
              style={revealStyle(shown, 220 + i * 90)}
            >
              <Icon className="row-span-2 h-8 w-8 text-taupe sm:row-span-1 sm:h-9 sm:w-9" strokeWidth={1.05} />
              <p className="text-[0.9rem] font-medium leading-[1.4] text-graphite sm:mt-5 sm:leading-[1.45]">{title}</p>
              <p className="mt-1 text-[0.82rem] leading-[1.55] text-taupe sm:mt-2 sm:text-[0.78rem]">{text}</p>
              <div className="mt-5 hidden h-px w-10 bg-gold/70 sm:block" aria-hidden="true" />
            </li>
          ))}
        </ul>

        <p
          className="mx-auto mt-9 max-w-[34rem] text-center font-serif text-[1.15rem] font-light italic leading-[1.5] text-graphite sm:mt-10 sm:text-[1.25rem] lg:mt-12"
          style={revealStyle(shown, 900)}
        >
          Você não precisa esperar chegar ao limite para buscar ajuda.
        </p>
      </div>
    </section>
  );
}
