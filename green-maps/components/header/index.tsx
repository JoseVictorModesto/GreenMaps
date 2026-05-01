import style from './header.module.css'

type Types = {
    title: string
}

const Header = (props: Types) => {
    return(
        <div className={style.header}>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Header