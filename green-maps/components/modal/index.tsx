import Image from 'next/image'
import style from './modal.module.css'
import Link from 'next/link'

type Types = {
    img: string,
    local: string,
    cidade: string,
    endereco: string,
    tipoDescarte: string,
    localizacao: string,
    fechar: () => void,
}

const Modal = (props: Types) => {
    
    return(
        <dialog open className={style.modal}>
            <Image src={props.img} alt='' width={300} height={300}></Image>
            <div>
                <h1><strong>Nome do Local:</strong> {props.local}</h1>
                <h1><strong>Cidade:</strong> {props.cidade}</h1>
                <h1><strong>Endereço:</strong> {props.endereco}</h1>
                <h1><strong>Descarte:</strong> {props.tipoDescarte}</h1>
            </div>
            <form method="dialog">
                <Link href={props.localizacao} target="_blank">Ver no mapa</Link>
                <button type='button' onClick={props.fechar}>Fechar</button>
            </form>
        </dialog>
    )
}

export default Modal