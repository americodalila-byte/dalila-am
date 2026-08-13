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
    <section id="top" className="relative overflow-hidden bg-offwhite">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 88% 40%, var(--color-ivory) 0%, var(--color-offwhite) 62%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-end gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[55fr_45fr] lg:gap-10 lg:pb-0 lg:pt-40">
        <div className="max-w-[36rem] pb-4 lg:pb-28">
          <p
            className="rise text-[0.7rem] font-medium uppercase tracking-[0.32em] text-gold"
            style={{ animationDelay: "60ms" }}
          >
            Psicóloga • CRP 04/48200
          </p>

          <h1
            className="rise mt-6 font-serif text-[2.6rem] font-light leading-[1.02] tracking-[-0.01em] text-graphite sm:text-[3.4rem] lg:text-[4.35rem]"
            style={{ animationDelay: "160ms" }}
          >
            Relações mais saudáveis transformam vidas e histórias.
          </h1>

          <div
            className="rise mt-8 h-px w-16 bg-gold"
            style={{ animationDelay: "260ms" }}
            aria-hidden="true"
          />

          <p
            className="rise mt-7 max-w-[30rem] text-[1.0625rem] leading-[1.75] text-taupe"
            style={{ animationDelay: "320ms" }}
          >
            A psicoterapia é um espaço de acolhimento, escuta e compreensão para que você possa
            se conhecer melhor, fortalecer vínculos e construir relações mais conscientes e
            saudáveis.
          </p>

          <div
            className="rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            style={{ animationDelay: "420ms" }}
          >
            <a
              href="#atendimento"
              className="group inline-flex h-[54px] items-center justify-center gap-3 rounded-[18px] bg-graphite px-8 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-offwhite transition-all duration-300 hover:-translate-y-0.5 hover:bg-graphite/90"
            >
              Agendar consulta
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="https://wa.me/5541000000000"
              className="inline-flex h-[54px] items-center justify-center gap-3 rounded-[18px] border border-gold/60 px-8 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-graphite transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-ivory/60"
            >
              <WhatsappIcon className="h-5 w-5 text-gold" />
              Conversar pelo WhatsApp
            </a>
          </div>
        </div>

        <div
          className="rise relative flex justify-center lg:justify-end"
          style={{ animationDelay: "220ms" }}
        >
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
            className="relative h-[26rem] w-auto object-contain object-bottom sm:h-[32rem] lg:h-[41rem]"
            style={{ maskImage: "linear-gradient(180deg, #000 88%, transparent 100%)" }}
          />
        </div>
      </div>

      <svg
        className="relative -mt-6 h-16 w-full text-gold lg:-mt-10"
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
