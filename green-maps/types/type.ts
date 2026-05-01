export type LocalType = {
    id: number
    img: string
    local: string
    cidade: string
    endereco: string
    tipoDescarte: string
    localizacao: string
}

export type CardType = {
    img: string,
    local: string,
    cidade: string,
}

export type HeaderTypes = {
    title: string
}

export type ModalTypes = {
    img: string,
    local: string,
    cidade: string,
    endereco: string,
    tipoDescarte: string,
    localizacao: string,
    fechar: () => void,
}