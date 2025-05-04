import s from "./Footer.module.scss";
import flogo from "../../assets/svg/flogo.svg";
import { useLocation, Link } from "react-router-dom";

export default function Footer() {
    const path = useLocation();
    

    return (
        <>
            <footer className={s.footer}>
                <div className={s.container}>
                    <div className={s.logo}>
                        <img src={flogo} alt="" />
                    </div>
                    <nav className={s.nav}>
                        <ul className={s.ul}>
                            <li className={path.pathname == "/" ? `${s.active}` : ""}>
                                <Link to="/">О нас</Link>
                            </li>
                            <li className={path.pathname.slice(0, 8) == "/catalog" ? `${s.active}` : ""}>
                                <Link to="/catalog">Каталог</Link>
                            </li>
                            <li className={path.pathname.slice(0, 7) == "/basket" ? `${s.active}` : ""}>
                                <Link to="/basket">Корзина</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </>
    )
}