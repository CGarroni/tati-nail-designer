import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Sobre from "@/components/About";
import Servicos from "@/components/Services";
import Galeria from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Localizacao from "@/components/Localizacion";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Tati Silva Nail Designer",
  url: "https://tatinaildesigner.vercel.app/",
  description:
    "Blindagem, esmaltação em gel, alongamento e manutenção de unhas com atendimento individual em Canudos, Novo Hamburgo, RS.",
  image: "https://tatinaildesigner.vercel.app/galeria/hero-capa.png",
  telephone: "+5551994383663",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Adolfo Lutz, 860",
    addressLocality: "Novo Hamburgo",
    addressRegion: "RS",
    postalCode: "93548-000",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "City",
    name: "Novo Hamburgo",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "17:00",
    },
  ],
  sameAs: [
  "https://www.instagram.com/tatisilvanaildesigner/",
],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Header />

      <main>
        <Hero />
        <Highlights />
        <Sobre />
        <Servicos />
        <Galeria />
        <Testimonials />
        <FinalCTA />
        <Localizacao />
      </main>

      <Footer />
      <WhatsappButton />
    </>
  );
}