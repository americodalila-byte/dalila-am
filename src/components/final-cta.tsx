import { ArrowRight } from "lucide-react";
import { useReveal, revealStyle } from "@/hooks/use-reveal";
import { WHATSAPP_URL } from "@/lib/contact";

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.5c.3 1.4.9 2.6 1.8 3.6.9 1 2 1.7 3.2 2.1l1-1.3 1.8.8c-.2 1.1-1 1.7-2.2 1.6-1.9-.2-3.6-1.1-4.9-2.5-1.3-1.4-2.1-3.1-2.2-4.9C7.4 6.8 8 6.2 9 6l.7 1.9-.7.6Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BotanicalCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 160"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none absolute text-gold/25 ${className}`}
    >
      <path d="M10 150C60 150 120 120 170 40" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
      <path
        d="M170 40c-9 .6-15 3.6-19 9 6.5 1.6 13-1 19-9Zm0 0c-2.5-8.5-1-14.8 4-19.6 3.5 5.8 3 12.3-4 19.6Zm0 0c7-1.5 12.5-.5 17 3.5-5 4-11 4.3-17-3.5ZM122 87c-7-2-12.5-1.2-17 2.5 4.8 3.8 10.5 4 17-2.5ZM74 118c-7-2-12.5-1.2-17 2.5 4.8 3.8 10.5 4 17-2.5Z"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FinalCta() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section
      id="agendar"
      ref={ref}
      className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-24"
      style={{ backgroundColor: "oklch(0.245 0.004 150)" }}
    >
      <BotanicalCorner className="-left-10 top-4 h-40 w-52 -scale-x-100 opacity-70 sm:h-48 sm:w-64" />
      <BotanicalCorner className="bottom-0 right-0 h-48 w-64 sm:h-60 sm:w-80" />

      <div className="relative mx-auto max-w-[52rem] text-center" style={revealStyle(shown)}>
        <div className="mx-auto h-px w-14 bg-gold" aria-hidden="true" />
        <h2 className="mt-8 font-serif text-[2.2rem] font-light leading-[1.18] text-offwhite sm:text-[3rem] lg:text-[3.4rem]">
          Cuidar das suas relações também pode começar por compreender a sua própria história.
        </h2>
        <p
          className="mx-auto mt-8 max-w-[38rem] text-[0.9375rem] leading-[1.85] text-offwhite/80"
          style={revealStyle(shown, 160)}
        >
          Se você deseja conhecer melhor o processo de psicoterapia e verificar possibilidades de
          atendimento, entre em contato.
        </p>

        <div
          className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center"
          style={revealStyle(shown, 280)}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-[16px] bg-gold px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-graphite transition-all duration-300 hover:-translate-y-0.5 hover:bg-wood"
          >
            Agendar consulta
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-[16px] border border-offwhite/35 px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-offwhite transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
          >
            <WhatsappIcon className="h-5 w-5" />
            Conversar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
