import { CalendarDays, User, Sprout, ArrowRight } from "lucide-react";
import { useReveal, revealStyle } from "@/hooks/use-reveal";
import { whatsappLink, WA_MESSAGES } from "@/lib/contact";

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
    text: "Fale comigo pelo WhatsApp para tirar suas dúvidas e verificar a disponibilidade de horários.",
  },
  {
    n: "02",
    Icon: CalendarDays,
    title: "Escolha o formato",
    text: "O atendimento pode ser presencial, em Uberlândia, ou on-line, de onde você estiver.",
  },
  {
    n: "03",
    Icon: User,
    title: "Primeiro encontro",
    text: "Um momento para conhecer você, compreender o que o trouxe até aqui e conversarmos sobre o que espera da terapia.",
  },
  {
    n: "04",
    Icon: Sprout,
    title: "Seguimos o processo",
    text: "A partir dos primeiros encontros, construímos juntos um caminho terapêutico de acordo com suas necessidades e objetivos.",
  },
];

export function HowItWorks() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section id="como-funciona" ref={ref} className="bg-offwhite px-4 py-11 sm:px-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div style={revealStyle(shown)}>
          <h2 className="balanced-title font-serif text-[1.52rem] font-light uppercase leading-[1.22] tracking-normal text-graphite sm:text-[2rem] lg:text-[2.35rem]">
            Como funciona o atendimento
          </h2>
          <div className="mt-4 h-px w-12 bg-gold sm:mt-5 sm:w-14" aria-hidden="true" />
        </div>

        <ol className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-10 lg:mt-12 lg:grid-cols-4 lg:gap-8">
          {steps.map(({ n, Icon, title, text }, i) => (
            <li
              key={n}
              className="relative grid grid-cols-[4.25rem_minmax(0,1fr)] grid-rows-[auto_auto_auto] gap-x-4 rounded-lg border border-fendi/20 px-4 py-5 text-left sm:grid-cols-none sm:grid-rows-[auto_auto_1fr_auto] sm:justify-items-center sm:rounded-none sm:border-0 sm:px-0 sm:py-0 sm:text-center"
              style={revealStyle(shown, 200 + i * 120)}
            >
              <div className="row-span-3 flex flex-col items-center gap-2.5 sm:row-span-1 sm:flex-row sm:gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/60 font-serif text-[0.9rem] text-gold sm:h-11 sm:w-11 sm:text-[1rem]">
                  {n}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory/60 sm:h-14 sm:w-14">
                  <Icon className="h-5 w-5 text-taupe sm:h-6 sm:w-6" strokeWidth={1.05} />
                </span>
              </div>

              {i < steps.length - 1 && (
                <span
                  className="pointer-events-none absolute left-[calc(50%+5rem)] right-[-3rem] top-[26px] hidden items-center lg:flex"
                  aria-hidden="true"
                >
                  <span className="h-px flex-1 bg-fendi/50" />
                  <span className="h-[5px] w-[5px] rounded-full bg-fendi" />
                  <span className="h-px flex-1 bg-fendi/50" />
                </span>
              )}

              <h3 className="font-serif text-[1.2rem] font-light leading-[1.2] text-graphite sm:mt-6 sm:flex sm:min-h-[3.4rem] sm:items-start sm:justify-center sm:text-[1.4rem]">
                {title}
              </h3>
              <p className="mt-2 text-[0.86rem] leading-[1.65] text-taupe sm:max-w-xs sm:text-[0.9rem] sm:leading-[1.7]">{text}</p>
              <div className="mt-4 h-px w-9 bg-gold/70 sm:mt-5 sm:w-10" aria-hidden="true" />
            </li>
          ))}
        </ol>

        <div className="mt-9 flex justify-center sm:mt-11" style={revealStyle(shown, 720)}>
          <a
            href={whatsappLink(WA_MESSAGES.primeiroAtendimento)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-[52px] w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-[16px] bg-graphite px-4 text-[0.68rem] font-medium uppercase tracking-[0.09em] text-offwhite transition-all duration-300 hover:-translate-y-0.5 hover:bg-graphite/90 focus-visible:outline-gold sm:h-[54px] sm:w-auto sm:gap-3 sm:rounded-[18px] sm:px-8 sm:text-[0.7rem] sm:tracking-[0.14em]"
          >
            Agendar primeiro atendimento
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
