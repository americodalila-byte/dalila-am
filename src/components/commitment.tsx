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
    <section id="compromisso-profissional" ref={ref} className="bg-offwhite px-4 py-11 sm:px-8 sm:pt-11 sm:pb-12 lg:pt-12 lg:pb-16">
      <div className="mx-auto max-w-[1440px]">
        <div style={revealStyle(shown)}>
          <h2 className="balanced-title font-serif text-[1.52rem] font-light uppercase leading-[1.22] tracking-normal text-graphite sm:text-[2rem] lg:text-[2.35rem]">
            Compromisso profissional
          </h2>
          <div className="mt-4 h-px w-12 bg-gold sm:mt-5 sm:w-14" aria-hidden="true" />
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-y-3 sm:mt-9 sm:grid-cols-3 sm:gap-y-9 lg:mt-11 lg:grid-cols-6 lg:gap-y-0">
          {pillars.map(({ Icon, label, text }, i) => (
            <li
              key={label}
              className="grid grid-cols-[3rem_minmax(0,1fr)] grid-rows-[auto_auto] items-center gap-x-4 rounded-lg border border-fendi/20 px-4 py-4 text-left sm:grid-cols-none sm:grid-rows-[auto_auto_1fr_auto] sm:justify-items-center sm:gap-x-0 sm:rounded-none sm:border-0 sm:px-4 sm:py-0 sm:text-center lg:border-l lg:border-fendi/25 lg:first:border-l-0"
              style={revealStyle(shown, 200 + i * 90)}
            >
              <span className="row-span-2 flex h-12 w-12 items-center justify-center rounded-full bg-ivory/60 p-3 sm:row-span-1 sm:h-13 sm:w-13">
                <Icon className="h-6 w-6 text-taupe" strokeWidth={1.05} />
              </span>
              <p className="text-[0.9rem] font-medium leading-[1.4] text-graphite sm:mt-3.5 sm:leading-[1.45]">
                {label}
              </p>
              <p className="mt-1 text-[0.82rem] leading-[1.55] text-taupe sm:mt-2 sm:text-[0.78rem]">{text}</p>
              <div className="mt-4 hidden h-px w-10 bg-gold/70 sm:block" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
