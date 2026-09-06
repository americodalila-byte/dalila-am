import { ArrowRight } from "lucide-react";
import dalila from "@/assets/dalila.png.asset.json";
import { whatsappLink, WA_MESSAGES } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="1" />
      <path
        d="M8.6 8.2c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .6.4l.7 1.5c.1.2 0 .4-.1.5l-.4.5c-.1.2-.2.3-.1.5.3.6 1.2 1.7 2.4 2.2.2.1.4.1.5-.1l.4-.5c.2-.2.3-.2.5-.1l1.4.7c.2.1.3.3.3.4 0 .3-.2.9-.5 1.1-.3.3-.9.5-1.4.4-1.6-.2-3.2-1.2-4.3-2.6-.8-1-1.3-2-1.3-2.9 0-.6.1-1.1.2-1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex flex-col overflow-hidden bg-offwhite lg:min-h-[calc(100svh-210px)]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 88% 40%, var(--color-ivory) 0%, var(--color-offwhite) 62%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 grid-cols-1 flex-col items-start gap-7 px-4 pb-7 pt-[5.75rem] sm:gap-8 sm:px-8 sm:pb-8 sm:pt-24 lg:grid lg:grid-cols-[60fr_40fr] lg:gap-10 lg:pb-0 lg:pt-[104px]">
        <div className="flex max-w-[46rem] flex-col justify-start lg:pb-6">
          <p className="rise text-[0.66rem] font-medium uppercase tracking-[0.25em] text-gold sm:text-[0.7rem] sm:tracking-[0.32em]" style={{ animationDelay: "60ms" }}>
            Psicóloga • CRP 04/48200
          </p>

          <h1
            className="rise balanced-title mt-5 max-w-[37.5rem] font-serif text-[1.8rem] font-light leading-[1.12] tracking-normal text-graphite sm:mt-[28px] sm:text-[2.35rem] lg:text-[3.55rem] lg:leading-[1.08]"
            style={{
              animationDelay: "160ms",
            }}
          >
            Algumas histórias se repetem até que consigamos compreendê-las.
          </h1>

          <div className="rise mt-[18px] h-px w-14 bg-gold sm:mt-[20px] sm:w-16" style={{ animationDelay: "260ms" }} aria-hidden="true" />

          <p
            className="rise mt-5 max-w-[30rem] text-[0.97rem] leading-[1.75] text-taupe sm:mt-[22px] sm:text-[1.0625rem] sm:leading-[1.7]"
            style={{ animationDelay: "320ms" }}
          >
            Na terapia, olhamos para você, sua história e suas relações para compreender padrões
            que se repetem, conflitos que machucam e vínculos que precisam encontrar novas formas
            de existir.
          </p>
          <p
            className="rise mt-3.5 max-w-[30rem] text-[0.97rem] leading-[1.75] text-taupe sm:mt-4 sm:text-[1.0625rem] sm:leading-[1.7]"
            style={{ animationDelay: "380ms" }}
          >
            Com um olhar sistêmico e acolhedor, acompanho indivíduos, casais e famílias na
            compreensão de suas histórias, no fortalecimento de seus vínculos e na construção de
            relações mais conscientes e saudáveis.
          </p>

          <div
            className="rise mt-7 flex w-full flex-col gap-3 sm:mt-[32px] sm:w-auto sm:flex-row sm:items-center sm:gap-4"
            style={{ animationDelay: "420ms" }}
          >
            <a
              href={whatsappLink(WA_MESSAGES.agendar)}
              onClick={() => trackEvent("click_agendar_consulta", { location: "hero" })}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-[52px] w-full items-center justify-center gap-3 whitespace-nowrap rounded-[16px] bg-graphite px-5 text-[0.68rem] font-medium uppercase tracking-[0.11em] text-offwhite transition-all duration-300 hover:-translate-y-0.5 hover:bg-graphite/90 focus-visible:outline-gold sm:h-[54px] sm:w-[245px] sm:rounded-[18px] sm:px-8 sm:text-[0.7rem] sm:tracking-[0.14em]"
            >
              Agendar consulta
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappLink(WA_MESSAGES.duvidas)}
              onClick={() => trackEvent("click_whatsapp", { location: "hero" })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[52px] w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-[16px] border border-gold/60 px-5 text-[0.68rem] font-medium uppercase tracking-[0.1em] text-graphite transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-ivory/60 focus-visible:outline-gold sm:h-[54px] sm:w-[310px] sm:gap-3 sm:rounded-[18px] sm:px-8 sm:text-[0.7rem] sm:tracking-[0.14em]"
            >
              <WhatsappIcon className="h-5 w-5 text-gold" />
              Conversar pelo WhatsApp
            </a>

          </div>
        </div>

        <div className="rise relative flex w-full justify-center pt-1 sm:pt-0 lg:-mt-1 lg:justify-end" style={{ animationDelay: "220ms" }}>
          <div
            className="relative aspect-[4/5] w-full max-w-[22rem] overflow-hidden rounded-[18px] border border-fendi/[0.06] bg-ivory shadow-[0_18px_50px_rgba(47,49,50,0.06)] sm:max-w-[23rem] lg:mb-16 lg:w-[86%] lg:max-w-[28rem] lg:rounded-[22px]"
          >
            <img
              src={dalila.url}
              alt="Dalila Américo, psicóloga"
              width={768}
              height={1376}
              className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
            />
          </div>
        </div>

      </div>

      <svg
        className="relative -mt-2 h-10 w-full shrink-0 text-gold"
        viewBox="0 0 1440 60"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 44C160 44 200 12 340 12s180 32 340 32 220-32 380-32 220 22 380 22"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.55"
        />
        <circle cx="340" cy="12" r="4" fill="currentColor" opacity="0.7" />
      </svg>
    </section>
  );
}
