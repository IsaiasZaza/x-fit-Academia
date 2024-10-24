import Image from "next/image";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Diferenciais from "@/components/Diferenciais";
import Planos from "@/components/Planos";
import Localizacao from "@/components/Localizacao";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <div id="sobre">
        <Diferenciais />
      </div>
      <div id="planos">
        <Planos />
      </div>
      <div id="localizacao">
        <Localizacao />
      </div>
      <div id="contato">
        <Footer />
      </div>
    </>
  );
}
