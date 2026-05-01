import ListaLocais from '@/components/listaLocais';
import style from './locais.module.css'
import Header from "@/components/header";

export default function Locais() {
  return (
    <section className={style.container}>
      <Header title="Green Maps"></Header>
      <ListaLocais></ListaLocais>
    </section>
  );
}
