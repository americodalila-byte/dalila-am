import { CalendarDays, User, Sprout } from "lucide-react";
import { useReveal, revealStyle } from "@/hooks/use-reveal";

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" />
      <path
        d="M8.9 8.6c.2-.4.4-.4.6-.4h.4c.2 0 .4 0 .5.4l.6 1.3c.1.2 0 .3-.1.4l-.3.4c-.1.2-.2.3-.1.4.3.6 1.1 1.5 2.1 2 .2.1.3.1.4-.1l.4-.4c.1-.2.3-.2.4-.1l1.2.6c.2.1.3.2.3.4 0 .3-.2.8-.5 1-.3.2-.8.4-1.3.3-1.4-.2-2.8-1-3.8-2.3-.7-.9-1.1-1.8-1.1-2.5 0-.5.1-1 .2-1.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

const steps = [
  {
    n: "01",
    Icon: WhatsappIcon,
    title: "Entre em contato",
    text: "Fale pelo WhatsApp para tirar suas dúvidas e verificar a disponibilidade de horários.",
  },
  {
    n: "02",
    Icon: CalendarDays,
    title: "Modalidade e horário",
    text: "Escolha entre atendimento presencial ou on-line e verifique as opções de horários disponíveis.",
  },
  {
    n: "03",
    Icon: User,
    title: "Primeira sessão",
    text: "Um primeiro encontro para compreender sua história, sua demanda e o que você busca neste momento.",
  },
  {
    n: "04",
    Icon: Sprout,
    title: "Acompanhamento psicológico",
    text: "A continuidade do atendimento é construída de acordo com as necessidades do processo terapêutico.",
  },
];

export function HowItWorks() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section id="atendimento" ref={ref} className="bg-offwhite px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div style={revealStyle(shown)}>
          <h2 className="font-serif text-[2.1rem] font-light uppercase tracking-[0.05em] text-graphite sm:text-[2.6rem] lg:text-[3.1rem]">
            Como funciona o atendimento
          </h2>
          <div className="mt-6 h-px w-14 bg-gold" aria-hidden="true" />
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-8">
          {steps.map(({ n, Icon, title, text }, i) => (
            <li
              key={n}
              className="relative flex flex-col items-center text-center"
              style={revealStyle(shown, 200 + i * 120)}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 font-serif text-[1rem] text-gold">
                  {n}
                </span>
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ivory/60">
                  <Icon className="h-7 w-7 text-taupe" strokeWidth={1} />
                </span>
              </div>

              {i < steps.length - 1 && (
                <span
                  className="pointer-events-none absolute left-[calc(50%+5.5rem)] right-[-4rem] top-8 hidden items-center lg:flex"
                  aria-hidden="true"
                >
                  <span className="h-px flex-1 bg-fendi/50" />
                  <span className="h-[5px] w-[5px] rounded-full bg-fendi" />
                  <span className="h-px flex-1 bg-fendi/50" />
                </span>
              )}

              <h3 className="mt-7 font-serif text-[1.35rem] font-light leading-[1.2] text-graphite sm:text-[1.5rem]">
                {title}
              </h3>
              <p className="mt-3 max-w-[17rem] text-[0.9375rem] leading-[1.7] text-taupe">{text}</p>
              <div className="mt-6 h-px w-10 bg-gold/70" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
