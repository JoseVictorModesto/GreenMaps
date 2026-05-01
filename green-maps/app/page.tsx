import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="containerHome">
      <Header title="Bem vindo"></Header>
      <div className="divHome">
        <Image src={'/logo_green_maps.png'} width={500} height={500} alt="Logo APP" priority></Image>
        <h1>Conectando você a um futuro mais limpo.</h1>
        <Link href={'/locais'}>Ver Mais...</Link>
      </div>
      <footer>
        <h1>Um projeto desenvolvido por alunos do IFTO Campus Colinas Do Tocantins</h1>
      </footer>
    </section>
  );
}
