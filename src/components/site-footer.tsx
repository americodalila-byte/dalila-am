import { Instagram, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-dalila.png.asset.json";
import { WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE, EMAIL, LOCATION } from "@/lib/contact";

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

const linkClass =
  "inline-flex items-center gap-3 text-[0.9rem] text-offwhite/75 transition-colors duration-[250ms] hover:text-gold hover:underline hover:underline-offset-4 focus-visible:outline-gold";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-gold/40 px-5 py-14 sm:px-8 lg:py-16"
      style={{ backgroundColor: "oklch(0.245 0.004 150)" }}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 md:grid-cols-3">
        <div>
          <img
            src={logo.url}
            alt="Dalila Américo"
            width={200}
            height={68}
            loading="lazy"
            className="h-12 w-auto brightness-0 invert opacity-90"
          />
          <p className="mt-6 font-serif text-[1.35rem] font-light text-offwhite">Dalila Américo</p>
          <p className="mt-1 text-[0.9rem] text-offwhite/70">Psicóloga</p>
          <p className="mt-1 text-[0.8rem] tracking-[0.12em] text-gold">CRP 04/48200</p>
        </div>

        <nav aria-label="Contato">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-gold">Contato</p>
          <ul className="mt-6 space-y-4">
            {INSTAGRAM_URL && (
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  <Instagram className="h-4 w-4" strokeWidth={1.2} />
                  {INSTAGRAM_HANDLE ?? "Instagram"}
                </a>
              </li>
            )}
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <WhatsappIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </li>
            {EMAIL && (
              <li>
                <a href={`mailto:${EMAIL}`} className={linkClass}>
                  <Mail className="h-4 w-4" strokeWidth={1.2} />
                  {EMAIL}
                </a>
              </li>
            )}
            {LOCATION && (
              <li className="inline-flex items-center gap-3 text-[0.9rem] text-offwhite/75">
                <MapPin className="h-4 w-4" strokeWidth={1.2} />
                {LOCATION}
              </li>
            )}
          </ul>
        </nav>

        <nav aria-label="Informações legais">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-gold">Legal</p>
          <ul className="mt-6 space-y-4">
            <li>
              <a href="#" className={linkClass}>
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="#" className={linkClass}>
                LGPD
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1440px] flex-col gap-3 border-t border-offwhite/12 pt-8 text-[0.78rem] text-offwhite/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Dalila Américo. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por <span className="text-gold">Societates</span>
        </p>
      </div>
    </footer>
  );
}
