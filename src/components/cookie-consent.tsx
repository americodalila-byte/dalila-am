import { useEffect, useState } from "react";
import {
  GA4_ID,
  GTM_ID,
  denyConsent,
  getStoredConsent,
  grantConsent,
  initAnalytics,
} from "@/lib/analytics";

/**
 * Aviso discreto de consentimento para medição de audiência.
 * Só aparece quando existe uma ferramenta de medição configurada e o
 * visitante ainda não escolheu. Nenhum dado é coletado antes do aceite.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    initAnalytics();
    if ((GA4_ID || GTM_ID) && getStoredConsent() === null) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Preferências de medição de audiência"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-[34rem] rounded-[16px] border border-fendi/40 bg-offwhite/95 p-4 shadow-[0_18px_40px_-24px_rgba(47,49,50,0.45)] backdrop-blur-md sm:inset-x-auto sm:right-6 sm:bottom-6"
    >
      <p className="text-[0.82rem] leading-[1.7] text-taupe">
        Utilizamos apenas medições anônimas de navegação para entender o uso do site. Nenhuma
        informação pessoal ou sobre atendimento é coletada.
      </p>
      <div className="mt-3.5 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={() => {
            grantConsent();
            setVisible(false);
          }}
          className="inline-flex min-h-11 flex-1 items-center justify-center rounded-[12px] bg-graphite px-4 text-[0.66rem] font-medium uppercase tracking-[0.12em] text-offwhite transition-colors hover:bg-graphite/90 focus-visible:outline-gold"
        >
          Aceitar
        </button>
        <button
          type="button"
          onClick={() => {
            denyConsent();
            setVisible(false);
          }}
          className="inline-flex min-h-11 flex-1 items-center justify-center rounded-[12px] border border-graphite/25 px-4 text-[0.66rem] font-medium uppercase tracking-[0.12em] text-graphite transition-colors hover:border-gold hover:text-gold focus-visible:outline-gold"
        >
          Recusar
        </button>
      </div>
    </div>
  );
}
