const instagramLink = "https://www.instagram.com/tatisilvanaildesigner/";
const whatsappLink =
  "https://wa.me/5551994383663?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20ou%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Tati.";

const navLinks = [
  { label: "Início", href: "#topo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Localização", href: "#localizacao" },
];

export default function Footer() {
  return (
    <footer className="px-4 pb-12 pt-6">
      <div className="mx-auto max-w-7xl rounded-3xl border border-[#f0eae6] bg-white px-8 py-10 shadow-xs md:px-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-normal text-[#a9807d]">
              Tati Silva Nail Designer
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-[#6b5a5a]">
              Atendimento com hora marcada em Novo Hamburgo, com foco em cuidado, delicadeza e acabamento elegante.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#a9807d]">
              Navegação
            </h3>

            <nav className="flex flex-col gap-3 text-sm text-[#5c4e4e]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-[#a9807d]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#a9807d]">
              Contato & Local
            </h3>

            <div className="flex flex-col gap-3 text-sm text-[#5c4e4e]">
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#a9807d]"
              >
                Instagram
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#a9807d]"
              >
                WhatsApp
              </a>

              <span className="text-[#8a7472]">R. Adolfo Lutz, 860 - Canudos, Novo Hamburgo - RS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}