"use client";

import Image from "next/image";
import { useState } from "react";

const whatsappLink =
  "https://wa.me/5551994383663?text=Olá! Vim pelo site e gostaria de agendar um horário.";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Localização", href: "#localizacao" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#ede6e3] bg-white/65 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6">

        {/* Marca */}
        <a
          href="#topo"
          className="group flex items-center gap-3 transition-all duration-300"
        >
          <Image
            src="/galeria/tati-logo.png"
            alt="Logo Tati Silva Nail Designer"
            width={48}
            height={48}
            className="h-11 w-11 rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            priority
          />

          <div className="flex flex-col leading-none">
            <span className="font-serif text-[21px] tracking-[0.015em] text-[#433838]">
              Tati Silva
            </span>

            <span className="mt-1 text-[11px] tracking-[0.18em] text-[#8a7472]">
              NAIL DESIGNER
            </span>
          </div>
        </a>


        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                text-[15px]
                font-medium
                tracking-[0.01em]
                text-[#5c4e4e]
                transition-all
                duration-300
                hover:text-[#a9807d]
              "
            >
              {link.label}
            </a>
          ))}


          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-xl
              border border-[#c8a6a0]
              bg-[#cda5a3]
              px-5
              py-3
              text-sm
              font-semibold
              tracking-[0.03em]
              text-white
              shadow-[0_12px_30px_rgba(205,165,163,0.28)]
              transition-all
              duration-300
              hover:-translate-y-px
              hover:bg-[#c49a98]
              hover:shadow-xl
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#cda5a3]
            "
          >
            Agendar
          </a>
        </nav>


        {/* Mobile button */}
        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="
            inline-flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-[#e4d8d4]
            bg-white
            text-[#4a3d3d]
            transition-all
            duration-300
            hover:bg-[#f7f2ef]
            md:hidden
          "
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


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-[#efe7e3] bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-5">

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="
                  border-b
                  border-[#f3ece9]
                  py-4
                  text-sm
                  font-medium
                  text-[#5c4e4e]
                  transition-all
                  duration-300
                  hover:text-[#a9807d]
                "
              >
                {link.label}
              </a>
            ))}


            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-5
                rounded-xl
                border border-[#c8a6a0]
                bg-[#cda5a3]
                px-5
                py-3
                text-center
                text-sm
                font-semibold
                tracking-[0.03em]
                text-white
                shadow-[0_12px_30px_rgba(205,165,163,0.25)]
                transition-all
                duration-300
                hover:bg-[#c49a98]
              "
            >
              Agendar no WhatsApp
            </a>

          </nav>
        </div>
      )}

    </header>
  );
}