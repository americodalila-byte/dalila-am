import { ShieldCheck, MessageCircle, Heart, Sprout, GraduationCap, User } from "lucide-react";
import { useReveal, revealStyle } from "@/hooks/use-reveal";

const pillars = [
  { Icon: ShieldCheck, label: "Ética e sigilo\nprofissional" },
  { Icon: MessageCircle, label: "Escuta\nqualificada" },
  { Icon: Heart, label: "Atendimento\nhumanizado" },
  { Icon: Sprout, label: "Compromisso com\nseu processo" },
  { Icon: GraduationCap, label: "Formação e\natualização contínua" },
  { Icon: User, label: "Respeito à sua\nindividualidade" },
];

export function Commitment() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section id="compromisso" ref={ref} className="bg-offwhite px-5 pt-11 pb-12 sm:px-8 lg:pt-12 lg:pb-16">
      <div className="mx-auto max-w-[1440px]">
        <div style={revealStyle(shown)}>
          <h2 className="font-serif text-[1.9rem] font-light uppercase tracking-[0.05em] text-graphite sm:text-[2.3rem] lg:text-[2.7rem]">
            Compromisso profissional
          </h2>
          <div className="mt-5 h-px w-14 bg-gold" aria-hidden="true" />
        </div>

        <ul className="mt-9 grid grid-cols-2 gap-y-9 sm:grid-cols-3 lg:mt-11 lg:grid-cols-6 lg:gap-y-0">
          {pillars.map(({ Icon, label }, i) => (
            <li
              key={label}
              className="grid grid-rows-[auto_1fr_auto] justify-items-center px-4 text-center lg:border-l lg:border-fendi/25 lg:first:border-l-0"
              style={revealStyle(shown, 200 + i * 90)}
            >
              <span className="flex h-13 w-13 items-center justify-center rounded-full bg-ivory/60 p-3">
                <Icon className="h-6 w-6 text-taupe" strokeWidth={1.05} />
              </span>
              <p className="mt-3.5 whitespace-pre-line text-[0.9rem] leading-[1.6] text-graphite">
                {label}
              </p>
              <div className="mt-4 h-px w-10 bg-gold/70" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
