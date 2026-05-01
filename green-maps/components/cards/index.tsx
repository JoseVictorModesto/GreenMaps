import Image from 'next/image'
import style from './cards.module.css'
import { CardType } from '@/types/type'

const Card = (props: CardType) => {
    return(
        <button className={style.card}>
            <Image src={props.img} alt='' width={70} height={70}></Image>
            <div>
                <h1>{props.local}</h1>
                <h2>{props.cidade}</h2>
            </div>
        </button>  
        
    )
}

export default Card