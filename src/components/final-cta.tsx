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
      id="agendar"
      ref={ref}
      className="relative overflow-hidden border-t border-fendi/25 px-5 py-11 sm:px-8 lg:py-12"
      style={{ backgroundColor: "color-mix(in oklab, var(--color-ivory) 55%, var(--color-offwhite))" }}
    >
      <Sprig className="-left-8 top-2 h-28 w-44 -scale-x-100 sm:h-32 sm:w-52" />
      <Sprig className="bottom-0 right-0 h-28 w-44 sm:h-32 sm:w-52" />

      <div className="relative mx-auto max-w-[46rem] text-center" style={revealStyle(shown)}>
        <div className="mx-auto h-px w-12 bg-gold" aria-hidden="true" />
        <h2 className="mx-auto mt-5 max-w-[32rem] font-serif text-[1.72rem] font-light leading-[1.2] text-graphite sm:text-[2.2rem] lg:text-[2.65rem]">
          Cuidar das suas relações também pode começar por compreender a sua própria história.
        </h2>
        <p
          className="mx-auto mt-4 max-w-[33rem] text-[0.95rem] leading-[1.7] text-taupe"
          style={revealStyle(shown, 140)}
        >
          Se você deseja conhecer melhor o processo de psicoterapia e verificar possibilidades de
          atendimento, entre em contato.
        </p>

        <div
          className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          style={revealStyle(shown, 240)}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 whitespace-nowrap h-[52px] rounded-[16px] bg-graphite px-7 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-offwhite transition-all duration-300 hover:-translate-y-0.5 hover:bg-graphite/90"
          >
            Agendar consulta
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 whitespace-nowrap h-[52px] rounded-[16px] border border-graphite/25 px-7 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-graphite transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
          >
            <WhatsappIcon className="h-4.5 w-4.5" />
            Conversar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
