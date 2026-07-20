import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Sobre from "@/components/About";
import Servicos from "@/components/Services";
import Galeria from "@/components/Gallery";
import Localizacao from "@/components/Localizacion";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Sobre />
        <Servicos />
        <Galeria />
        <Localizacao />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}