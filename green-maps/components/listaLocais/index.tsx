'use client'

import { useState } from 'react'
import Card from '../cards'
import Modal from '../modal'
import style from './listaLocais.module.css'
import { LocalType } from '@/types/type'

const locais = [
    {
        id: 1,
        img: '/ENERGISA-605x.jpg',
        local: 'Energisa TO',
        cidade: 'Colinas do Tocantins',
        endereco: 'Avenida Bernado Sayão 1023',
        tipoDescarte: 'Lixo Eletrônico',
        localizacao: 'https://www.google.com/maps/dir/?api=1&destination=-8.051737, -48.485852'
    },

    {
        id: 2,
        img: '/milanga.jpg',
        local: 'Milanga Celulares',
        cidade: 'Colinas do Tocantins',
        endereco: 'Avenida Bernado Sayão 1023',
        tipoDescarte: 'Lixo Eletrônico',
        localizacao: 'https://www.google.com/maps/dir/?api=1&destination=-8.052167, -48.476514'
    },

    {
        id: 3,
        img: '/sao_judas.jpg',
        local: 'Supermercado São Judas Tadeu',
        cidade: 'Colinas do Tocantins',
        endereco: 'Avenida Bernado Sayão 1023',
        tipoDescarte: 'Lixo Eletrônico',
        localizacao: 'https://www.google.com/maps/dir/?api=1&destination=-8.058253, -48.476620'
    },
]


const ListaLocais = () => {
    const [modal, setModal] = useState(false);
    const [modalItem, setModalItem] = useState<LocalType | null>(null);

    const abrirModal = (item: LocalType) => { setModalItem(item), setModal(true) }
    const fecharModal = () => { setModal(false) }

    return(
        <div className={style.container}>
            <h1 className={style.titulo}>Centros de descarte de lixo eletrônico</h1>
            {locais?.map((item) => (
                <div onClick={() => abrirModal(item)} key={item.id}>
                    <Card
                        img={item.img}
                        local={item.local}
                        cidade={item.cidade}
                    ></Card>
                </div>
            ))}

            {modal && modalItem ? 
                <Modal
                    cidade={modalItem.cidade}
                    endereco={modalItem.endereco}
                    img={modalItem.img}
                    local={modalItem.local}
                    localizacao={modalItem.localizacao}
                    tipoDescarte={modalItem.tipoDescarte}
                    fechar={fecharModal}
                ></Modal>
            : null}
        </div>
    )
}

export default ListaLocais