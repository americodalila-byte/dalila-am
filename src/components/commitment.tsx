import { ShieldCheck, MessageCircle, Network, User, Sprout, GraduationCap } from "lucide-react";
import { useReveal, revealStyle } from "@/hooks/use-reveal";

const pillars = [
  {
    Icon: ShieldCheck,
    label: "Ética e sigilo",
    text: "Responsabilidade e cuidado com tudo o que é compartilhado.",
  },
  {
    Icon: MessageCircle,
    label: "Escuta cuidadosa",
    text: "Atenção, respeito e acolhimento sem julgamentos.",
  },
  {
    Icon: Network,
    label: "Olhar sistêmico",
    text: "Um olhar que considera você, sua história e os contextos que a atravessam.",
  },
  {
    Icon: User,
    label: "Respeito à singularidade",
    text: "Cada pessoa, casal ou família é acolhido em sua particularidade.",
  },
  {
    Icon: Sprout,
    label: "Construção conjunta",
    text: "O caminho terapêutico é construído com você, respeitando seu tempo e suas necessidades.",
  },
  {
    Icon: GraduationCap,
    label: "Formação contínua",
    text: "Estudo e atualização constantes para uma prática ética e responsável.",
  },
];

export function Commitment() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section id="compromisso" ref={ref} className="bg-offwhite px-5 pt-11 pb-12 sm:px-8 lg:pt-12 lg:pb-16">
      <div className="mx-auto max-w-[1440px]">
        <div style={revealStyle(shown)}>
          <h2 className="balanced-title font-serif text-[1.7rem] font-light uppercase leading-[1.2] tracking-normal text-graphite sm:text-[2rem] lg:text-[2.35rem]">
            Compromisso profissional
          </h2>
          <div className="mt-5 h-px w-14 bg-gold" aria-hidden="true" />
        </div>

        <ul className="mt-9 grid grid-cols-2 gap-y-9 sm:grid-cols-3 lg:mt-11 lg:grid-cols-6 lg:gap-y-0">
          {pillars.map(({ Icon, label, text }, i) => (
            <li
              key={label}
              className="grid grid-rows-[auto_auto_1fr_auto] justify-items-center px-4 text-center lg:border-l lg:border-fendi/25 lg:first:border-l-0"
              style={revealStyle(shown, 200 + i * 90)}
            >
              <span className="flex h-13 w-13 items-center justify-center rounded-full bg-ivory/60 p-3">
                <Icon className="h-6 w-6 text-taupe" strokeWidth={1.05} />
              </span>
              <p className="mt-3.5 text-[0.9rem] font-medium leading-[1.45] text-graphite">
                {label}
              </p>
              <p className="mt-2 text-[0.78rem] leading-[1.55] text-taupe">{text}</p>
              <div className="mt-4 h-px w-10 bg-gold/70" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
