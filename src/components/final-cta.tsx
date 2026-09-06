import { ArrowRight } from "lucide-react";
import { useReveal, revealStyle } from "@/hooks/use-reveal";
import { whatsappLink, WA_MESSAGES } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

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

function Sprig({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none absolute text-gold/20 ${className}`}
    >
      <path d="M10 110C60 110 130 88 190 20" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
      <path
        d="M190 20c-8 .6-13.5 3.2-17 8 5.8 1.4 11.6-.9 17-8Zm0 0c-2.2-7.6-.9-13.2 3.6-17.5 3.1 5.2 2.7 11-3.6 17.5ZM128 61c-6.3-1.8-11.2-1-15.2 2.2 4.3 3.4 9.4 3.6 15.2-2.2ZM72 84c-6.3-1.8-11.2-1-15.2 2.2 4.3 3.4 9.4 3.6 15.2-2.2Z"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FinalCta() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section
      id="contato"
      ref={ref}
      className="relative overflow-hidden border-t border-fendi/25 px-4 py-11 sm:px-8 lg:py-12"
      style={{ backgroundColor: "color-mix(in oklab, var(--color-ivory) 55%, var(--color-offwhite))" }}
    >
      <Sprig className="-left-8 top-2 h-28 w-44 -scale-x-100 sm:h-32 sm:w-52" />
      <Sprig className="bottom-0 right-0 h-28 w-44 sm:h-32 sm:w-52" />

      <div className="relative mx-auto max-w-[46rem] text-center" style={revealStyle(shown)}>
        <div className="mx-auto h-px w-12 bg-gold" aria-hidden="true" />
        <h2 className="balanced-title mx-auto mt-4 max-w-[32rem] font-serif text-[1.4rem] font-light leading-[1.3] text-graphite sm:mt-5 sm:text-[2rem] sm:leading-[1.25] lg:text-[2.4rem]">
          Cuidar das suas relações também pode começar por compreender a sua própria história.
        </h2>
        <p
          className="mx-auto mt-4 max-w-[33rem] text-[0.9rem] leading-[1.75] text-taupe sm:text-[0.95rem] sm:leading-[1.7]"
          style={revealStyle(shown, 140)}
        >
          Se você deseja conhecer melhor o processo de psicoterapia e verificar possibilidades de
          atendimento, entre em contato.
        </p>

        <div
          className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-6 sm:flex-row sm:items-center"
          style={revealStyle(shown, 240)}
        >
          <a
            href={whatsappLink(WA_MESSAGES.agendar)}
            onClick={() => trackEvent("click_agendar_consulta", { location: "cta_final" })}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-[52px] items-center justify-center gap-3 whitespace-nowrap rounded-[16px] bg-graphite px-5 text-[0.68rem] font-medium uppercase tracking-[0.1em] text-offwhite transition-all duration-300 hover:-translate-y-0.5 hover:bg-graphite/90 focus-visible:outline-gold sm:px-7 sm:tracking-[0.16em]"
          >
            Agendar consulta
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href={whatsappLink(WA_MESSAGES.processo)}
            onClick={() => trackEvent("click_whatsapp", { location: "cta_final" })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[52px] items-center justify-center gap-2.5 whitespace-nowrap rounded-[16px] border border-graphite/25 px-5 text-[0.68rem] font-medium uppercase tracking-[0.09em] text-graphite transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold focus-visible:outline-gold sm:gap-3 sm:px-7 sm:tracking-[0.16em]"
          >
            <WhatsappIcon className="h-4.5 w-4.5" />
            Conversar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
