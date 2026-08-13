import { useId, useState } from "react";
import { useReveal, revealStyle } from "@/hooks/use-reveal";

const faqs = [
  {
    q: "Como funciona a psicoterapia?",
    a: "A psicoterapia é um processo realizado por meio de encontros com a profissional, em um espaço de escuta, acolhimento e reflexão, respeitando as necessidades e particularidades de cada pessoa.",
  },
  {
    q: "Quanto tempo dura uma sessão?",
    a: "A duração das sessões será informada no momento do contato e pode variar de acordo com a modalidade de atendimento.",
  },
  {
    q: "O atendimento é presencial ou on-line?",
    a: "Dalila oferece as modalidades de atendimento disponíveis conforme apresentado nesta página. Entre em contato para verificar horários e formato adequado.",
  },
  {
    q: "Como faço para agendar?",
    a: "Você pode entrar em contato pelo WhatsApp através dos botões disponíveis na página. Após o contato, serão verificadas as possibilidades de horário.",
  },
  {
    q: "Como funciona a primeira sessão?",
    a: "A primeira sessão é um momento inicial de acolhimento e compreensão da demanda, permitindo que profissional e paciente iniciem o processo terapêutico de forma cuidadosa.",
  },
  {
    q: "Como é realizado o pagamento?",
    a: "As informações sobre valores, formas e condições de pagamento são apresentadas diretamente durante o contato para agendamento.",
  },
];

function FaqItem({
  q,
  a,
  delay,
  shown,
}: {
  q: string;
  a: string;
  delay: number;
  shown: boolean;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="border-b border-fendi/30" style={revealStyle(shown, delay)}>
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="flex w-full items-start justify-between gap-6 py-6 text-left focus-visible:outline-gold"
        >
          <span className="font-serif text-[1.2rem] font-light leading-[1.35] text-graphite sm:text-[1.3rem]">
            {q}
          </span>
          <span className="relative mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/70 text-gold">
            <span className="block h-px w-3 bg-current" aria-hidden="true" />
            <span
              className={`absolute block h-px w-3 bg-current transition-transform duration-300 ${open ? "rotate-0" : "rotate-90"}`}
              aria-hidden="true"
            />
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={`grid transition-all duration-500 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[34rem] pb-7 text-[0.9375rem] leading-[1.85] text-taupe">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section id="faq" ref={ref} className="bg-offwhite px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div style={revealStyle(shown)}>
          <p className="text-[0.75rem] tracking-[0.14em] text-gold">08</p>
          <h2 className="mt-4 font-serif text-[2.1rem] font-light uppercase tracking-[0.05em] text-graphite sm:text-[2.4rem] lg:text-[2.75rem]">
            Perguntas frequentes
          </h2>
          <div className="mt-6 h-px w-14 bg-gold" aria-hidden="true" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-16 lg:mt-16 lg:grid-cols-2">
          {faqs.map((item, i) => (
            <FaqItem key={item.q} {...item} shown={shown} delay={160 + i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}
