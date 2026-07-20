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
    <footer className="px-4 pb-8 pt-4">
      <div className="mx-auto max-w-7xl rounded-4xl border border-[#e9e3e0] bg-white px-6 py-8 shadow-sm md:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div className="space-y-3">
            <h2 className="font-serif text-[1.75rem] font-normal text-[#4a3d3d]">
              Tati Silva Nail Designer
            </h2>

            <p className="max-w-md text-sm leading-6 text-[#6b5a5a] md:text-base">
              Atendimento com hora marcada em Novo Hamburgo, com foco em cuidado, delicadeza e acabamento elegante.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8a7472]">
              Navegação
            </h3>

            <nav className="flex flex-col gap-3 text-sm text-[#5c4e4e] md:text-base">
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

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8a7472]">
              Contato
            </h3>

            <div className="flex flex-col gap-3 text-sm text-[#5c4e4e] md:text-base">
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

              <span>R. Adolfo Lutz, 860 - Canudos, Novo Hamburgo - RS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}