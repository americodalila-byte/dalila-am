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
    <section id="compromisso" ref={ref} className="bg-offwhite px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div style={revealStyle(shown)}>
          <h2 className="font-serif text-[2.1rem] font-light uppercase tracking-[0.05em] text-graphite sm:text-[2.6rem] lg:text-[3rem]">
            Compromisso profissional
          </h2>
          <div className="mt-6 h-px w-14 bg-gold" aria-hidden="true" />
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:mt-14 lg:grid-cols-6 lg:gap-y-0">
          {pillars.map(({ Icon, label }, i) => (
            <li
              key={label}
              className="flex flex-col items-center px-4 text-center lg:border-l lg:border-fendi/25 lg:first:border-l-0"
              style={revealStyle(shown, 200 + i * 90)}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ivory/60">
                <Icon className="h-6 w-6 text-sage" strokeWidth={1} />
              </span>
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
