import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { whatsappLink, WA_MESSAGES } from "@/lib/contact";
import logo from "@/assets/logo-dalila.png.asset.json";

const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Abordagem", href: "#abordagem" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-fendi/20 bg-offwhite/[0.92] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-2.5 px-4 py-2.5 sm:gap-4 sm:px-8 sm:py-3 lg:grid-cols-[1fr_auto_1fr] lg:py-4">
        <a href="#inicio" className="min-w-0 focus-visible:outline-gold" aria-label="Dalila Américo — início">
          <img
            src={logo.url}
            alt="Dalila Américo"
            width={200}
            height={68}
            className="h-9 w-auto sm:h-10 lg:h-[46px]"
          />
        </a>


        <nav className="hidden justify-center lg:flex" aria-label="Principal">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-graphite/80 transition-colors hover:text-gold focus-visible:text-gold focus-visible:outline-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-end">
          <a
            href={whatsappLink(WA_MESSAGES.agendar)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-11 shrink-0 items-center gap-2 rounded-[14px] bg-graphite px-4 text-[0.64rem] font-medium uppercase tracking-[0.11em] text-offwhite transition-all duration-300 hover:-translate-y-0.5 hover:bg-graphite/90 focus-visible:outline-gold sm:gap-3 sm:rounded-[16px] sm:px-7 sm:text-[0.72rem] sm:tracking-[0.16em]"
          >
            Agendar consulta
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </header>
  );
}
