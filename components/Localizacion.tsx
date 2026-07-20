const whatsappLink =
  "https://wa.me/5551994383663?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos%20da%20Tati."
const googleMapsLink =
  "https://www.google.com/maps/search/?api=1&query=R.+Adolfo+Lutz,+860+-+Canudos,+Novo+Hamburgo+-+RS";

const wazeLink =
  "https://waze.com/ul?q=R.%20Adolfo%20Lutz%2C%20860%20-%20Canudos%2C%20Novo%20Hamburgo%20-%20RS&navigate=yes";

const horarios = [
  "Segunda-feira: 08:00–20:00",
  "Terça-feira: 08:00–20:00",
  "Quarta-feira: 08:00–20:00",
  "Quinta-feira: 08:00–20:00",
  "Sexta-feira: 08:00–20:00",
  "Sábado: 09:00–17:00",
  "Domingo: Fechado",
];

export default function Localizacao() {
  return (
    <section id="localizacao" className="px-4 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        <div className="rounded-4xl border border-[#e9e3e0] bg-white p-8 shadow-sm">
          <span className="inline-flex rounded-md bg-[#ead7d5] px-4 py-2 text-sm text-[#4a3d3d]">
            Localização
          </span>

          <h2 className="mt-5 font-serif text-3xl font-normal leading-tight text-[#4a3d3d] md:text-4xl">
            Atendimento em Novo Hamburgo com conforto e praticidade.
          </h2>

          <p className="mt-4 text-base leading-7 text-[#6b5a5a]">
            R. Adolfo Lutz, 860 - Canudos, Novo Hamburgo - RS
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-[#b78f8c] bg-[#cda5a3] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset] transition hover:border-[#ab817e] hover:bg-[#c49a98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cda5a3]"
            >
              Agendar no WhatsApp
            </a>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-[#cdbab2] bg-[#f4e8e5] px-6 py-3 text-center text-sm font-semibold text-[#5c4e4e] shadow-[0_0_0_1px_rgba(255,255,255,0.35)_inset] transition hover:border-[#c1aba2] hover:bg-[#efdfdb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cdbab2]"
              >
                Abrir no Google Maps
              </a>

              <a
                href={wazeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-[#cdbab2] bg-[#f4e8e5] px-6 py-3 text-center text-sm font-semibold text-[#5c4e4e] shadow-[0_0_0_1px_rgba(255,255,255,0.35)_inset] transition hover:border-[#c1aba2] hover:bg-[#efdfdb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cdbab2]"
              >
                Abrir no Waze
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-4xl border border-[#e9e3e0] bg-white p-8 shadow-sm">
          <span className="inline-flex rounded-md bg-[#f3ecea] px-4 py-2 text-sm text-[#4a3d3d]">
            Horário de atendimento
          </span>

          <ul className="mt-6 space-y-3">
            {horarios.map((horario) => (
              <li
                key={horario}
                className="border-b border-[#f1e9e7] pb-3 text-sm text-[#6b5a5a] md:text-base"
              >
                {horario}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}