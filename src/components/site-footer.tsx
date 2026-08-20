import { Instagram, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-dalila.png.asset.json";
import { WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE, EMAIL } from "@/lib/contact";

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

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#areas" },
  { label: "Abordagem", href: "#terapia-sistemica" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "FAQ", href: "#faq" },
];

const linkClass =
  "inline-flex items-center gap-2.5 text-[0.85rem] text-taupe transition-colors duration-[250ms] hover:text-gold hover:underline hover:underline-offset-4 focus-visible:outline-gold";

const headingClass = "text-[0.66rem] font-medium uppercase tracking-[0.2em] text-graphite";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/50 bg-offwhite px-5 py-8 sm:px-8 lg:py-9">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.2fr_1.2fr] lg:items-start lg:gap-12">
        <div>
          <img src={logo.url} alt="Dalila Américo" width={200} height={68} loading="lazy" className="h-11 w-auto" />
        </div>

        <nav aria-label="Navegação">
          <p className={headingClass}>Navegação</p>
          <ul className="mt-3.5 space-y-2">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Contato">
          <p className={headingClass}>Contato</p>
          <ul className="mt-3.5 space-y-2">
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
          </ul>
          <p className="mt-3 max-w-[17rem] text-[0.78rem] leading-[1.65] text-taupe/90">
            Acompanhe conteúdos e entre em contato para agendamentos e dúvidas.
          </p>
        </nav>

        <div>
          <p className={headingClass}>Localização</p>
          <p className="mt-3.5 flex gap-2.5 text-[0.85rem] leading-[1.65] text-taupe">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.2} />
            <span>
              R. Bernardo Cupertino, 704
              <br />
              Martins, Uberlândia - MG
            </span>
          </p>
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-[1440px] flex-col gap-2 border-t border-fendi/30 pt-4 text-[0.76rem] text-taupe sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Dalila Américo. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por{" "}
          <span className="font-bold text-gold">Societates</span>
        </p>
      </div>
    </footer>
  );
}
