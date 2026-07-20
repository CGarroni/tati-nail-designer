"use client";

import { useState } from "react";

const whatsappLink =
  "https://wa.me/5551994383663?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20ou%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Tati.";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Localização", href: "#localizacao" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a
          href="#topo"
          className="font-serif text-xl font-normal text-[#4a3d3d] transition hover:text-[#a9807d]"
        >
          Tati Silva Nail Designer
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#5c4e4e] transition hover:text-[#a9807d]"
            >
              {link.label}
            </a>
          ))}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-[#b78f8c] bg-[#cda5a3] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset] transition hover:border-[#ab817e] hover:bg-[#c49a98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cda5a3]"
          >
            Agendar
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#e4d8d4] bg-white text-[#4a3d3d] transition hover:bg-[#faf6f4] md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#efe7e3] bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#f3ece9] py-3 text-sm font-medium text-[#5c4e4e] transition hover:text-[#a9807d]"
              >
                {link.label}
              </a>
            ))}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-md border border-[#b78f8c] bg-[#cda5a3] px-4 py-3 text-center text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset] transition hover:border-[#ab817e] hover:bg-[#c49a98]"
            >
              Agendar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}