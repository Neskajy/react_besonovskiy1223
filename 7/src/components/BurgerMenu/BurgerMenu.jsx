import { isActiveContextBurger } from "../../context.js";
import s from "./BurgerMenu.module.scss";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

export default function BurgerMenu() {
    const { isActiveBurger } = useContext(isActiveContextBurger);

    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(count + 1);
    }

    return (
        <>
            <section className={`${s.BurgerMenu} ${isActiveBurger ? s.active : ""}`}>
                <div className={s.container}>
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
            </section>
        </>
    ) 
}