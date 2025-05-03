import s from "./Footer.module.scss";
import flogo from "../../assets/svg/flogo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className={s.footer}>
                <div className={s.container}>
                    <div className={s.logo}>
                        <img src={flogo} alt="" />
                    </div>
                    <nav className={s.nav}>
                        <ul className={s.ul}>
                            <li className={s.active}>
                                <Link to="/">О нас</Link>
                            </li>
                            <li>
                                <Link to="/catalog">Каталог</Link>
                            </li>
                            <li>
                                <Link to="/basket">Корзина</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </>
    )
}