import style from './header.module.css';
import { HeaderTypes } from '@/types/type';

const Header = (props: HeaderTypes) => {
    return(
        <div className={style.header}>
            <h1>{props.title}</h1>
        </div>
    )
};

export default Header;