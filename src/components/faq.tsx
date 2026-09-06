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
          className="flex min-h-14 w-full items-start justify-between gap-3 py-4.5 text-left focus-visible:outline-gold sm:gap-6 sm:py-5"
        >
          <span className="font-serif text-[1.08rem] font-light leading-[1.4] text-graphite sm:text-[1.3rem] sm:leading-[1.35]">
            {q}
          </span>
          <span className="relative mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/70 text-gold">
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
           <p className="max-w-[34rem] pb-5 pr-10 text-[0.9rem] leading-[1.75] text-taupe sm:pb-6 sm:pr-0 sm:text-[0.9375rem] sm:leading-[1.85]">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section id="faq" ref={ref} className="bg-offwhite px-4 py-11 sm:px-8 lg:py-14">
      <div className="mx-auto max-w-[1440px]">
        <div style={revealStyle(shown)}>
          <h2 className="balanced-title font-serif text-[1.52rem] font-light uppercase leading-[1.22] tracking-normal text-graphite sm:text-[2rem] lg:text-[2.35rem]">
            Perguntas frequentes
          </h2>
          <div className="mt-4 h-px w-12 bg-gold sm:mt-5 sm:w-14" aria-hidden="true" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-16 sm:mt-8 lg:mt-10 lg:grid-cols-2">
          {faqs.map((item, i) => (
            <FaqItem key={item.q} {...item} shown={shown} delay={160 + i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}
