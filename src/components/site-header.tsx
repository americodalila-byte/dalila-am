import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
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
          ? "border-b border-fendi/25 bg-offwhite/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:py-6">
        <a href="#top" className="min-w-0 focus-visible:outline-gold" aria-label="Dalila Américo — início">
          <img
            src={logo.url}
            alt="Dalila Américo"
            width={200}
            height={68}
            className="h-11 w-auto lg:h-14"
          />
        </a>

        <nav className="hidden justify-center lg:flex" aria-label="Principal">
          <ul className="flex items-center gap-10">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-graphite/80 transition-colors hover:text-gold focus-visible:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-end">
          <a
            href="#atendimento"
            className="group inline-flex h-11 shrink-0 items-center gap-3 rounded-[16px] bg-graphite px-5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-offwhite transition-all duration-300 hover:-translate-y-0.5 hover:bg-graphite/90 sm:h-12 sm:px-7 sm:text-[0.72rem]"
          >
            Agendar consulta
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </header>
  );
}
