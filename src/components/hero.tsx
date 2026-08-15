import { ArrowRight } from "lucide-react";
import dalila from "@/assets/dalila.png.asset.json";

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
      id="top"
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

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 grid-cols-1 flex-col items-stretch gap-8 px-5 pb-8 pt-24 sm:px-8 lg:grid lg:grid-cols-[56fr_44fr] lg:gap-10 lg:pb-0 lg:pt-[104px]">
        <div className="flex max-w-[46rem] flex-col justify-center lg:pb-6">
          <p className="rise text-[0.7rem] font-medium uppercase tracking-[0.32em] text-gold" style={{ animationDelay: "60ms" }}>
            Psicóloga • CRP 04/48200
          </p>

          <h1
            className="rise mt-[28px] max-w-[37.5rem] font-serif font-light tracking-[-0.01em] text-graphite"
            style={{
              animationDelay: "160ms",
              fontSize: "clamp(2.3rem, 4.5vw, 4.2rem)",
              lineHeight: 1.01,
            }}
          >
            Relações mais saudáveis transformam vidas e histórias.
          </h1>

          <div className="rise mt-[20px] h-px w-16 bg-gold" style={{ animationDelay: "260ms" }} aria-hidden="true" />

          <p
            className="rise mt-[22px] max-w-[30rem] text-[1.0625rem] leading-[1.7] text-taupe"
            style={{ animationDelay: "320ms" }}
          >
            A psicoterapia é um espaço de acolhimento, escuta e compreensão para que você possa
            se conhecer melhor, fortalecer vínculos e construir relações mais conscientes e
            saudáveis.
          </p>

          <div
            className="rise mt-[32px] flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            style={{ animationDelay: "420ms" }}
          >
            <a
              href="#agendar"
              className="group inline-flex h-[54px] items-center justify-center gap-3 whitespace-nowrap rounded-[18px] bg-graphite px-8 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-offwhite transition-all duration-300 hover:-translate-y-0.5 hover:bg-graphite/90"
            >
              Agendar consulta
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="https://wa.me/5541000000000"
              className="inline-flex h-[54px] items-center justify-center gap-3 whitespace-nowrap rounded-[18px] border border-gold/60 px-8 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-graphite transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-ivory/60"
            >
              <WhatsappIcon className="h-5 w-5 text-gold" />
              Conversar pelo WhatsApp
            </a>

          </div>
        </div>

        <div className="rise relative -mt-4 flex items-start justify-center lg:-mt-8 lg:justify-end" style={{ animationDelay: "220ms" }}>
          <div
            className="pointer-events-none absolute bottom-0 h-[70%] w-[92%] rounded-t-[999px]"
            style={{
              background:
                "linear-gradient(180deg, var(--color-ivory) 0%, var(--color-wood)/0 100%)",
              opacity: 0.5,
            }}
            aria-hidden="true"
          />
          <img
            src={dalila.url}
            alt="Dalila Américo, psicóloga"
            width={768}
            height={1344}
            className="relative h-[22rem] w-full max-w-[26rem] object-contain object-bottom sm:h-[26rem] lg:h-full lg:max-h-[calc(100svh-180px)] lg:min-h-[30rem] lg:w-full lg:max-w-none lg:object-cover lg:object-[center_22%]"
            style={{
              maskImage:
                "linear-gradient(180deg, transparent 0%, #000 4%, #000 92%, transparent 100%), linear-gradient(90deg, transparent 0%, #000 10%)",
              maskComposite: "intersect",
            }}
          />
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
