/**
 * Mensuração do site (GA4 / Google Tag Manager).
 *
 * Configuração: defina as variáveis de ambiente abaixo. Enquanto elas não
 * existirem, nenhum script é carregado — a integração fica preparada e inerte.
 *
 *   VITE_GA4_MEASUREMENT_ID   -> G-XXXXXXXXXX  (GA4 próprio da Dalila)
 *   VITE_GTM_ID               -> GTM-XXXXXXX   (opcional; se definido, o GA4
 *                                              deve ser gerenciado dentro do GTM
 *                                              e o gtag.js NÃO é carregado aqui)
 *   VITE_GOOGLE_ADS_ID        -> AW-XXXXXXXXX  (opcional, futuro Google Ads)
 *
 * Política de privacidade: só enviamos nomes de eventos de navegação e de
 * intenção de contato. Nunca enviamos texto digitado, dados pessoais, motivo
 * da terapia, telefone, e-mail ou conteúdo de mensagens.
 */

/** GA4 é administrado dentro do GTM — nenhum gtag.js direto é carregado aqui. */
export const GA4_ID =
  (import.meta.env['VITE_GA4_MEASUREMENT_ID'] as string | undefined) || "G-CDZ28K6VKF";
export const GTM_ID = (import.meta.env['VITE_GTM_ID'] as string | undefined) || "GTM-MMD6Q9BZ";
export const GOOGLE_ADS_ID = (import.meta.env['VITE_GOOGLE_ADS_ID'] as string | undefined) || "";

export const CONSENT_STORAGE_KEY = "da-consent-analytics";

/** Eventos permitidos — navegação e conversão. Sem parâmetros sensíveis. */
export type AnalyticsEvent =
  | "page_view"
  | "click_agendar_consulta"
  | "click_agendar_primeiro_atendimento"
  | "click_agendar_sessao"
  | "click_whatsapp"
  | "click_instagram"
  | "click_localizacao";

/** Eventos que devem ser importados como conversão no Google Ads. */
export const CONVERSION_EVENTS: AnalyticsEvent[] = [
  "click_agendar_consulta",
  "click_agendar_primeiro_atendimento",
  "click_agendar_sessao",
  "click_whatsapp",
];

type Params = { location?: string };

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function ensureGtag() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
  }
}

export function getStoredConsent(): "granted" | "denied" | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

let loaded = false;

function injectScripts() {
  if (loaded || typeof document === "undefined") return;
  if (!GA4_ID && !GTM_ID) return;
  loaded = true;

  if (GTM_ID) {
    // GTM como gerenciador principal: nada de gtag.js aqui, para não duplicar tags.
    // Proteção contra instalação duplicada do container.
    if (document.querySelector(`script[src*="gtm.js?id=${GTM_ID}"]`)) return;
    window.dataLayer!.push({ "gtm.start": Date.now(), event: "gtm.js" });
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(s);
    return;
  }

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(s);
  window.gtag!("js", new Date());
  window.gtag!("config", GA4_ID, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    send_page_view: true,
  });
  if (GOOGLE_ADS_ID) window.gtag!("config", GOOGLE_ADS_ID);
}

/** Chamado uma vez na inicialização do app (client-side). */
export function initAnalytics() {
  if (typeof window === "undefined") return;
  ensureGtag();

  // Consent Mode v2 — tudo negado por padrão, política conservadora.
  window.gtag!("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    wait_for_update: 500,
  });

  if (getStoredConsent() === "granted") grantConsent();
}

export function grantConsent() {
  if (typeof window === "undefined") return;
  ensureGtag();
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, "granted");
  } catch {
    /* storage indisponível */
  }
  window.gtag!("consent", "update", { analytics_storage: "granted" });
  injectScripts();
}

export function denyConsent() {
  if (typeof window === "undefined") return;
  ensureGtag();
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, "denied");
  } catch {
    /* storage indisponível */
  }
  window.gtag!("consent", "update", { analytics_storage: "denied" });
}

/**
 * Registra um evento de navegação/conversão.
 * `location` identifica apenas a seção do site (ex.: "hero"), nunca conteúdo do usuário.
 */
export function trackEvent(event: AnalyticsEvent, params: Params = {}) {
  if (typeof window === "undefined") return;
  ensureGtag();
  if (GTM_ID) {
    window.dataLayer!.push({ event, ...params });
    return;
  }
  window.gtag!("event", event, params);
}
