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
  { Icon: Users, label: "Dificuldades nos\nrelacionamentos" },
  { Icon: MessageCircle, label: "Conflitos\nrecorrentes" },
  { Icon: ScribbleIcon, label: "Problemas de\ncomunicação" },
  { Icon: Home, label: "Questões\nfamiliares" },
  { Icon: Heart, label: "Dificuldade em\ncompreender emoções" },
  { Icon: Leaf, label: "Processos\nde mudança" },
  { Icon: Target, label: "Autoconhecimento\ne desenvolvimento" },
];

export function Moments() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section id="momentos" ref={ref} className="bg-offwhite px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-5xl text-center" style={revealStyle(shown)}>
          <BotanicalMark />
          <h2 className="mt-6 font-serif text-[2rem] font-light uppercase leading-[1.18] tracking-[0.015em] text-graphite sm:text-[2.4rem] lg:text-[2.6rem]">
            Em que momentos a
            <br className="hidden sm:block" /> psicoterapia pode fazer sentido?
          </h2>
          <div className="mx-auto mt-7 h-px w-14 bg-gold" aria-hidden="true" />
          <p className="mx-auto mt-7 max-w-[38rem] text-[1.0625rem] leading-[1.75] text-taupe">
            A vida nos apresenta desafios que podem afetar nossos relacionamentos, emoções e
            escolhas. Buscar apoio psicológico pode ser um movimento de cuidado e compreensão.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-y-12 sm:grid-cols-4 lg:mt-20 lg:grid-cols-7 lg:gap-y-0">
          {items.map(({ Icon, label }, i) => (
            <li
              key={label}
              className="flex flex-col items-center px-4 text-center lg:border-l lg:border-fendi/25 lg:first:border-l-0"
              style={revealStyle(shown, 220 + i * 90)}
            >
              <Icon className="h-9 w-9 text-sage" strokeWidth={1} />
              <p className="mt-5 whitespace-pre-line text-[0.9rem] leading-[1.6] text-graphite">
                {label}
              </p>
              <div className="mt-5 h-px w-10 bg-gold/70" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
